<?php

namespace App\Http\Controllers;

use App\Models\Friend;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Laravel\Facades\Image;
use Ramsey\Uuid\Uuid;
use stdClass;

class UserController extends Controller
{
    public function getUser(int $id){
        $user = User::where("userid",$id)->first();
        return response()->json($user);
    }

    public function UpdateProfile(Request $request,int $id){

        $profile = $request->input("profile_changed") == "cover" ? "cover_picture" : "profile_picture" ;

        $coverPicture = User::select("$profile")->where("userid" , $id)->get();
        
        if (!empty($coverPicture[0]->$profile)) {
            if(Storage::disk("public")->exists($coverPicture[0]->$profile)){
                $original =  explode("_" , $coverPicture[0]->$profile)[0];
                $originalfile = $original.".jpg";
                if (Storage::disk("public")->exists($originalfile)) {
                    Storage::disk("public")->delete($originalfile);
                }
                Storage::disk("public")->delete( $coverPicture[0]->$profile);
            }
        }

        if ($request->has("image_coordinate") && !empty($request->input("image_coordinate"))) {

            $image_coordinate = $request->input("image_coordinate"); 
            if (is_array($image_coordinate)) {
                        
                $width = (int) $image_coordinate['width'];
                $height = (int) $image_coordinate['height'];
                $x = (int) $image_coordinate['x'];
                $y = (int) $image_coordinate['y'];   
            }

        }

        $PostController = new PostController();
        $PostController->Store( $request);

        if($request->hasFile("files")){


            $validator = Validator::make($request->all(), [
                'files' => 'required|file|mimes:jpg,jpeg,png,pdf,doc,docx|max:2048', // Exemple de validation
            ]);

            if ($validator->fails()) {
                return response()->json(['errors' => $validator->errors()], 422);
            }

            
            

            $file = $request->file('files');

            $path = PostController::getFileName($file, $id);

            if (Storage::disk("public")->exists($path)) {
                $cropfilename = explode(".",$path);
                $cropPath = $cropfilename[0]."_crop".".".$cropfilename[1];

                $fileCrop = Storage::disk("public")->get($path);
                $cropImage = Image::read($fileCrop)->crop($width, $height, $x, $y);
                $cropImage->save(public_path("storage/".$cropPath));
            }


            
            $profileCover  = User::where("userid" , $id)->update([
                "$profile" => $cropPath
            ]);

            $result =  new stdClass();
            $result->path = $cropPath;
            $result->profile = $profile;

            return response()->json($result);

        }else if($request->has("is_url") && $request->input("is_url") == true ){
            
            $path = $request->input("path");
            $oldpath = substr($request->input("path"),30);
            $extension = pathinfo($oldpath, PATHINFO_EXTENSION);
            $newfilename = "pictures/".$id."//".Uuid::uuid4();
            $newpath = $newfilename.".".$extension ;

            if(Storage::disk("public")->exists($oldpath)){
                
                if(Storage::disk("public")->copy($oldpath , $newpath)){

                    $file = Storage::disk("public")->get($newpath);
                    $image = Image::read($file)->crop($width, $height, $x, $y);
                    $Cropfile = $newfilename."_crop".".". $extension;

                    $image->save(public_path("storage/".$Cropfile));

                    $profileCover  = User::where("userid" , $id)->update([
                        "$profile" => $Cropfile
                   ]);

                    $result =  new stdClass();
                    $result->path = $Cropfile;
                    $result->profile = $profile;
                
                    return response()->json($result);
                }else {
                    return response()->json(["message" => "file not found"]);
                }

            }

        
        }
        

    }
    public function GetUserPicture(Request $request, int $id){
        
        if (!$request->input("allPhotos")) {
            $files =  Post::select("files" , "is_profile_picture" , "is_cover_picture")->where("userid" , $id)->get();

            $picture = new stdClass();
            foreach ($files as $key) {
                if($key->is_profile_picture == 1){
                    foreach (json_decode($key->files) as $value) {
                        $picture->profile[] = $value;
                    }
                }else if($key->is_cover_picture == 1) {
                    foreach (json_decode($key->files) as $value) {
                        $picture->cover[] = $value;
                    }
                }else{
                    foreach (json_decode($key->files) as $value) {
                        $picture->post[] = $value;
                    }
                }
            }

            return response()->json($picture); 
        }else {
            $files =  Post::select("files")->where("userid" , $id)->get();

            $Files = [];
            $userFile = [];
            foreach ($files as $file) {
                $userFile[] = json_decode($file->files);
            }
            
            foreach ($userFile as $key) {
                foreach ($key as $value) {
                    $Files[] = $value; 
                }
            }

            return  response()->json($Files);
        }
    }

    public function send_request_follower(Request $request) 
    {
        $id = (int) $request->input("sender");
        $receiver = (int) $request->input("receiver"); 
        
       
        $instance = Friend::create([
            "sender"=>$id,
            "receiver"=>$receiver,
            "status"=> 1
        ]);

        return response()->json($instance);
    }

    public  function confirme_request_follower(Request $request) 
    {
        $status = 2;
        $sender = (int) $request->input("sender");
        $receiver = (int) $request->input("receiver");

        $result = Friend::where("sender" , $sender)->where("receiver" , $receiver)
        ->update([
            "status" => $status
        ]);

       return response()->json(["status"=>$result] ,200);
        

    }


    public function cancel_request(Request $request)
    {
        $status = 3;
        $sender = (int) $request->input("sender");
        $receiver = (int) $request->input("receiver");

        $result = Friend::where("sender" , $sender)->where("receiver" , $receiver)
        ->update([
            "status" => $status
        ]);

       return response()->json(["status"=>$result] ,200);
    }


    public function delete_request(Request $request)
    {
        $status = 4;
        $sender = (int) $request->input("sender");
        $receiver = (int) $request->input("receiver");

        $result = Friend::where("sender" , $sender)->where("receiver" , $receiver)
        ->update([
            "status" => $status
        ]);

       return response()->json(["status"=>$result] ,200);
    }


}
