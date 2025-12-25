<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Like;
use App\Models\Post;
use App\Models\Share;
use App\Models\User;
use App\Notifications\SocialNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Facades\Validator;
use Intervention\Image\Laravel\Facades\Image;
use App\Http\Controllers\UserController;


class PostController extends Controller
{

    public function index()
    {
        $posts = Post::join("users" , "posts.userid" , '=',"users.userid")
            ->select("posts.*" ,"users.lastname" , "users.firstname" , "users.profile_picture" , "users.gender" )
            ->orderBy("posts.id","desc")
            ->get()
        ;
        $result = [];
        
        foreach ($posts as $post) {
            $post->likes = Like::select("postid" ,"userid" , "content" , "type")->where('postid' , $post->postid)->get();
            $post->comments = Comment::join("users" , "comments.userid" , '=' , 'users.userid')->select('comments.commentid','comments.postid','comments.userid','comments.comment','comments.created_at',"users.lastname" , "users.firstname" , "users.profile_picture" , "users.gender")->where('postid' , $post->postid)->orderby("comments.id" ,"desc")->get();
            $post->post = json_decode($post->post);
            $post->files = json_decode($post->files);
            $post->share = Share::where("postid" , $post->postid)->get()->count();
            $result[] = $post;
        }

        return  response()->json($result , 200);
        
    }

    public  function Store(Request $request)
    {
      
       $is_cover_picture = 0;
       $is_profile_picture = 0;
       $post = "";
       $type="";
       $file="";
       $uploadeFiles = [];

        if($request->has('post') || $request->hasFile('files') || $request->has("is_url")){

            if($request->hasFile('files')){
                $type = "file";
                
                $validator = Validator::make($request->all(), [
                    'files.*' => 'required|file|mimes:jpg,jpeg,png,pdf,doc,docx|max:2048', // Exemple de validation
                ]);

                if ($validator->fails()) {
                    return response()->json(['errors' => $validator->errors()], 422);
                }

                if($request->hasAny(['is_cover_page' , 'is_profile_picture'])){
                    if($request->has('is_cover_page')){
                        $is_cover_picture = $request->input('is_cover_page');
                    }else{
                        $is_profile_picture = $request->input('is_profile_picture');
                    }
                }

                if(is_array($request->file('files'))){
                    foreach ($request->file('files') as $file) {
                        $path = $this->getFileName($file , $request->input('userid'));
                        $uploadeFiles[] = $path;
                    }    
                }else {
                    $file = $request->file('files');
                    $path = $this->getFileName($file , $request->input('userid'));
                    $uploadeFiles[] = $path;
                } 
            }

            if($request->has("is_url") && $request->input("is_url") == true ){
                
                if($request->hasAny(['is_cover_page' , 'is_profile_picture'])){
                    if($request->has('is_cover_page')){
                        $is_cover_picture = $request->input('is_cover_page');
                    }else{
                        $is_profile_picture = $request->input('is_profile_picture');
                    }
                }

                $path = $request->input("path");
                $oldpath = substr($request->input("path"),30);
                $extension = pathinfo($oldpath, PATHINFO_EXTENSION);
                $newfilename = "pictures/".$request->input('userid')."//".Uuid::uuid4();
                $newpath = $newfilename.".".$extension ;

                if(Storage::disk("public")->exists($oldpath)){
                    if(Storage::disk("public")->copy($oldpath , $newpath)){
                        $uploadeFiles[] = $newpath;
                    }else {
                        return response()->json(["message" => "file not found"]);
                    }

                }
            }


            if($request->has('postBackground')){
                if($request->filled('post')){
                    $post =  json_encode([$request->input("post") , $request->input("postBackground")])        ;
                }
            }else {
                if($request->filled('post')){
                    $post = json_encode([$request->input("post")]);
                }
            }

            

            Post::create([
                'postid' => Uuid::uuid4(),
                'userid'=> $request->input('userid'),
                'post' => $post,
                'files' => json_encode($uploadeFiles),
                'type'=> $type,
                'is_profile_picture' => $is_profile_picture,
                'is_cover_picture' => $is_cover_picture
            ]);

            return response()->json($request->all());
       }
    }

    public function edit(Request $request,   string $id){
        $post = Post::join("users" , "posts.userid" , '=',"users.userid")
            ->select("posts.*" ,"users.lastname" , "users.firstname" , "users.profile_picture" , "users.gender")
            ->where("postid" , $id)
            ->get()
        ;

        if ($post) {

            $post[0]->post = json_decode($post[0]->post);
            $post[0]->files = json_decode($post[0]->files);
            
            return response()->json($post);
        }
       
    }

    public function update(Request $request , string $id){

       $is_cover_picture = 0;
       $is_profile_picture = 0;
       $post = "";
       $type="";
       $file="";
       $uploadeFiles = [];
        
   
       if($request->has('post') || $request->hasFile('files')){
            if($request->hasFile('files')){
                $posts = Post::select("files")->where("postid", $id)->first();
                $posts = json_decode($posts->files);
                $uploadeFiles = $posts;
                
                // $validator = Validator::make($request->all(), [
                //     'files.*' => 'required|file|mimes:jpg,jpeg,png,pdf,doc,docx|max:2048', // Exemple de validation
                // ]);


                // if ($validator->fails()) {
                //     return response()->json(['errors' => $validator->errors()], 422);
                // }

                if($request->hasAny(['is_cover_page' , 'is_profile_file'])){
                    if($request->has('is_cover_page')){
                        $is_cover_picture = $request->input('is_cover_page');
                    }else{
                        $is_profile_picture = $request->input('is_cover_page');
                    }
                }
                
                foreach ($request->file('files') as $file) {
                    $Fullfilename = $file->getClientOriginalName();
                    $filename = pathinfo($Fullfilename , PATHINFO_FILENAME);
                    $extension = $file->getClientOriginalExtension();

                    $filename = $filename.'_'. time() .'.' . $extension;
                    $path  = $file->storeAs("pictures/".$request->input('userid')."/" , $filename , "public");
                    
                    $uploadeFiles[] = $path;
                  
                } 

            }else{
                $images = Post::select("files")->where("postid", $id)->first();
                $images = json_decode($images->files);
                $uploadeFiles = $images;

            }

            
            if($request->has('postBackground')){
                if($request->filled('post')){
                    $post =  json_encode([$request->input("post") , $request->input("postBackground")])        ;
                }
            }else {
                if($request->filled('post')){
                    $post = json_encode([$request->input("post")]);
                }
            }

            POST::where('postid' , $id)
            ->update([
                'post' => $post,
                'files' => json_encode($uploadeFiles),
                'type'=> $type,
                'is_profile_picture' => $is_profile_picture,
                'is_cover_picture' => $is_cover_picture
            ]);
            
            $result = Post::where('postid' , $id)->first();
            $result->post = json_decode($result->post);
            $result->files = json_decode($result->files);

            // $post[0]->post = json_decode($post[0]->post);
            // $post[0]->files = json_decode($post[0]->files);

            return response()->json( $result);
       }
    }

    public function destroy(string $id){
        $post = Post::select("files")->where("postid", $id)->first();
        $files = json_decode($post->files);
        
        if(count($files) > 0){
            foreach($files as $file){
                if(Storage::disk("public")->exists($file)){
                    // $cropFile = "crop_".$file;
                    // if()
                    Storage::disk("public")->delete( $file );
                }
            }
        }
        
        $delete = Post::where('postid' , $id)->delete();
        Share::where("postid" , $id)->delete();
        return response()->json(['status'=>$delete]);
    }

    public function likePost(Request $request , string $id) {

       $types = ["angry" , "haha" , "like" , "sad" , "love" ,"wow"];
       $actor_name = UserController::getOneUser($request->input('userid'));

        $like_notification = [
            "postid"=>$id,
            "actor_id"=> $request->input('userid'),
            'actor_name' => $actor_name->lastname ." ". $actor_name->firstname,
            'message' => " a like votre publication"
        ];

       $user = $this->getUserByPost($id);

       if(in_array($request->type , $types)){
            $like =  Like::where("postid" , $id)
            ->where("userid" ,$request->input('userid'))->exists();

            if($like){
                
                $likes = Like::where("postid" , $id) ->where("userid" ,$request->input('userid'))->get();
                // return response()->json(['message'=>$likes]);die;

                if(strlen($likes[0]->type) > 0){
                    if($request->type == $likes[0]->type){
                        Like::where("postid" , $id)->where("userid" ,$request->input('userid'))->delete();
                        return response()->json(['message'=>"vous avez deja like"]);
                    }else{
                        Like::where("postid", $id)->where("userid", $request->input("userid"))
                        ->update([
                            'type' => $request->input("type"),
                        ]);

                        if ($user->userid !== $request->input('userid')) {
                            $user->notify(new SocialNotification('like' , $like_notification));
                        }
                        

                    }
                }else{
                    Like::where("postid" , "=" , $id , 'and' ,'userid' , "=" , $request->input("userid"))
                    ->update([
                        'type'=> $request->input("type"),
                    ]);

                    if ($user->userid !== $request->input('userid')) {
                        $user->notify(new SocialNotification('like' , $like_notification));
                    }

                }

            }else{
                Like::create([
                    'postid' => $id,
                    'userid' => $request->input("userid"),
                    'type' => $request->input('type'),
                    'content' => $request->input('content') 
                ]);

                if ($user->userid !== $request->input('userid')) {
                    $user->notify(new SocialNotification('like' , $like_notification));
                }
            }
       }
       
       $result = Like::where("postid" , $id)->where("userid" ,$request->input('userid'))->get();

        return response()->json($result);

    }

    public static function getFileName($file , $id , $width =  null , $height = null ,  $x = null , $y=null){

        $Fullfilename = $file->getClientOriginalName();
        $filename = pathinfo($Fullfilename , PATHINFO_FILENAME);
        $extension = $file->getClientOriginalExtension();

        $filename = Uuid::uuid4() .'.' . $extension;
        $path  = $file->storeAs("pictures/".$id."/" , $filename , "public");
        if(Storage::disk("public")->exists($path)){
            $newfile = Storage::disk("public")->get($path);
        }
        Image::read($newfile)->resize(1500 ,1500)->save(public_path("storage/".$path));
        
        return $path;
                        
    }

    public  static function getUserByPost(string $postid): User 
    {
        $post =  Post::where('postid' , $postid)->get()->first();
        $user = User::where('userid', $post->userid)->first();
        return $user;
    }

    public  function Shared(Request $request) 
    {
        $postid = $request->input("postid");
        $userid = $request->input("userid");
        $share_tye = $request->input('share_type');
        $result = Share::create([
            "postid"=>$postid,
            "userid" =>$userid,
            "share_tye" => $share_tye
        ]);

        if ($result) {
            if ($share_tye == "post") {
                $post = Post::where("postid",$postid)->first();
                $content = null;
                if ($request->filled("content")) {
                    $content = json_encode([$request->input("content")]);
                }

                $newpost =  Post::create([
                    'postid' => Uuid::uuid4(),
                    'userid'=> $userid,
                    'post' => $content,
                    'type'=> $post->type,
                    "is_shared"=>1,
                    "post_share_id"=>$postid
                ]);

                $user = User::where('userid' , $post->userid)->first();
                if($user->userid !== $userid){
                    $actor_name = UserController::getOneUser($userid);
                    $share_notification = [
                        'postid' => $postid,
                        'actor_id'=> $userid,
                        'actor_name' => $actor_name->lastname ." ". $actor_name->firstname,
                        'message' => " a partage votre publication"
                    ];

                    $user->notify(new SocialNotification("share", $share_notification));
                }
            
                return response()->json($newpost);
            }
                

            
        }


    }

}
