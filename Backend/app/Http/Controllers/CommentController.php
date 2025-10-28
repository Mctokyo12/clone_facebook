<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\User;
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
        
        if($new){
            $comment->commentid = $new->commentid;
            $comment->postid = $new->postid;
            $comment->userid = $new->userid;
            $comment->comment = $new->comment;
            $user = User::select("lastname" , "firstname" , "gender" , "profile_picture")->where("userid" , $new->userid)->get();
            $comment->firstname = $user[0]->firstname;
            $comment->lastname = $user[0]->lastname;
            $comment->gender = $user[0]->gender;
            $comment->profile_picture = $user[0]->profile_picture;
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
