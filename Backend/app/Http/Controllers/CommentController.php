<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\User;
use App\Notifications\SocialNotification;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Ramsey\Uuid\Uuid;
use stdClass;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all() , ['comment' => 'required']);
        $user = PostController::getUserByPost($request->input("postid"));
        
        if($validator->fails()){
            return response()->json($validator->errors());
        }

        $new = Comment::create([
            'commentid' => Uuid::uuid4(),
            'postid'=> $request->input("postid"),
            'userid' => $request->input('userid'),
            'comment' => $request->input("comment"),
        ]);

        $comment = new stdClass();

       

        $actor_name = UserController::getOneUser($request->input('userid'));
        $comment_notification = [
            "postid"=>$request->input("postid"),
            "actor_id"=> $request->input('userid'),
            'actor_name' => $actor_name->lastname ." ". $actor_name->firstname,
            'comment_id'=> $new->commentid,
            'message' => " a commente votre publication"
        ];
        
        if($new){
            $comment->commentid = $new->commentid;
            $comment->postid = $new->postid;
            $comment->userid = $new->userid;
            $comment->comment = $new->comment;
            $user_comment = User::select("lastname" , "firstname" , "gender" , "profile_picture")->where("userid" , $new->userid)->get();
            $comment->firstname = $user_comment[0]->firstname;
            $comment->lastname = $user_comment[0]->lastname;
            $comment->gender = $user_comment[0]->gender;
            $comment->profile_picture = $user_comment[0]->profile_picture;
            if($user->userid !== $request->input('userid')){
                $user->notify(new SocialNotification('comment' , $comment_notification));
            }
        }

        return response()->json($comment);


    }

    /**
     * Display the specified resource.
     */
    public function show(Comment $comment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request,   string $id)
    {
        $validator = Validator::make($request->all() , ['comment' => 'required']);

        if($validator->fails()){
            return response()->json($validator->errors());
        }

        $updatecomment = Comment::where('commentid' , $id)
        ->update(['comment' => $request->input("comment") ]);

        return response()->json($updatecomment);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comment $comment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $deletecomment = Comment::where('commentid' , $id)->delete();
        return response()->json($deletecomment);
    }
}
