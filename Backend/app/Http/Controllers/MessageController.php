<?php

namespace App\Http\Controllers;

use App\Events\MessageEvent;
use App\Models\Message;
use App\Models\User;
use Illuminate\Database\Query\Builder;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
class MessageController extends Controller
{
    public   function index(Request $request)
    {
        $sender = $request->input("sender");
        $receiver = $request->input("receiver");
        $AllMessage = [];
        $messages = Message::where("sender" , $sender)->where("receiver" , $receiver)->where('deleted_sender' , 0)
            ->orWhere(function (\Illuminate\Database\Eloquent\Builder $query) use($sender , $receiver){
                $query->where("sender" , $receiver)
                ->where("receiver" , $sender)->where('deleted_receiver' , 0);
            })->get();
        
        foreach ($messages as $item) {
            $item->file = json_decode($item->file) ;
            $AllMessage[] = $item; 
        }
        
        return response()->json($messages);
        
        
       

    }

    public function Store(Request $request) 
    {   

        $message = "";
        $uploadeFiles = [];
        $reply = null;
        $reply_to = null;

        if($request->has('message') || $request->hasFile('files')){

            if($request->hasFile('files')){
                
            
                $validator = Validator::make($request->all(), [
                    'files.*' => 'required|file|mimes:jpg,jpeg,png,pdf,doc,docx|max:2048', // Exemple de validation
                ]);

                if ($validator->fails()) {
                    return response()->json(['errors' => $validator->errors()], 422);
                }

                if(is_array($request->file('files'))){
                    foreach ($request->file('files') as $file) {
                        $path = PostController::getFileName($file , $request->input('sender'));
                        $uploadeFiles[] = $path;
                    }    
                }else {
                    $file = $request->file('files');
                    $path = PostController::getFileName($file , $request->input('sender'));
                    $uploadeFiles[] = $path;
                } 
            }

            if($request->filled('message')){
                $message = $request->input("message");
            }

            if ($request->has('reply') and $request->filled('reply')) {
                $reply= $request->input('reply');
            }

            if ($request->has('reply_to') and $request->filled('reply_to')) {
                $reply_to = $request->input('reply_to');
            }



            $newMessage =  $newMessage =  Message::create([
                'msgid'=>  Uuid::uuid4(),
                'sender' => $request->input("sender"),
                'receiver' =>$request->input("receiver"),
                'message' => $message,
                'file' => json_encode($uploadeFiles),
                'is_reply'=>$reply,
                'reply_to'=>$reply_to
            ]);    

            // event();
            // MessageEvent::dispatch($newMessage);
            broadcast(new MessageEvent($newMessage));
         
            return response()->json($newMessage);
       }

       






    }

    public  function EditMessage(Request $request , string $msgid) 
    {
        $result =  Message::where('msgid' , $msgid)
        ->update([
            'message' => $request->input('content')
        ]);

        return response()->json(["status" => $result]);


    }

    public   function ReadMessage( int $id, string $msgid) 
    {
        $result = Message::where("msgid" , $msgid)->where('receiver' , $id) ->update([
            'is_read'=>1
        ]);

        return response()->json(['status'=>$result]);
    }

    public  function DeleteMessageSender(Request $request , string $msgid) 
    {
       $msg = Message::where("msgid", $msgid)->first();
        $deleted = $request->input("deleted");
        

        if ($deleted == 2) {
            $files = json_decode($msg->file);
            if(count($files) > 0){
               foreach($files as $file){
                    if(Storage::disk("public")->exists($file)){
                        Storage::disk("public")->delete( $file );
                    }
                }
            }
            $result=  Message::where('msgid' , $msgid)->delete();

            return response()->json(['status'=>$result]);
        }else {
            if ($msg->sender == $request->input('id')) {
                $result =  Message::where('msgid' , $msgid)
                ->update([
                    'deleted_sender' => $deleted
                ]);

                return response()->json(["status" => $result]);
            }else {
                $result =  Message::where('msgid' , $msgid)
                ->update([
                    'deleted_receiver' => $deleted
                ]);

                return response()->json(["status" => $result]);
            }

        }

    }





}
