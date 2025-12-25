<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Route;


Route::post('/register', [AuthController::class , 'register']);
Route::post('/login', [AuthController::class , 'login']);

Route::get('/profile' ,[AuthController::class , 'Profile'])->middleware("auth:sanctum");
Route::get('/logout' ,[AuthController::class , 'Logout'])->middleware("auth:sanctum");

route::post('/forgot-password' , [AuthController::class , 'forgot_password']);
route::post('/reset-password' , [AuthController::class , 'reset_password'])->middleware('guest')->name('password.reset');

// les routes pour les postes
Route::get("/post" , [PostController::class , 'index']);
Route::post('/post' , [PostController::class , 'store']);
Route::get('/post/{id}' , [PostController::class , 'edit']);
Route::post('/post/update/{id}' , [PostController::class , 'update']);
Route::delete("/post/delete/{id}" , [PostController::class , 'destroy']);
Route::post('/post/share',[PostController::class,'Shared']);
Route::get("/post/like" , [PostController::class , 'getLikes']);
Route::post("/post/like/{id}" , [PostController::class , 'likePost']);
Route::post("/post/comment" , [CommentController::class , 'store']);
Route::put("/post/comment/{id}" , [CommentController::class , 'edit']);
Route::delete("/post/comment/delete/{id}" , [CommentController::class , 'destroy']);


// les utilisateurs
Route::get("/user/{id}" ,[UserController::class , 'getUser']);
Route::get("/alluser/{id}" , [UserController::class , 'getAllUser']);
Route::post('/user/update-profile/{id}', [UserController::class ,'UpdateProfile']);
Route::post("/user/{id}/picture" , [UserController::class , 'GetUserPicture']);

// demandes d'amis
Route::get("/get-sender/{id}",[UserController::class, "getSender"]);
Route::get("/friends/",[UserController::class, "friends"]);
Route::post("/get-friend/{id}",[UserController::class, "getFriend"]);
Route::post("/addFriend",[UserController::class, "send_request_follower"]);
Route::put("/accept-request",[UserController::class, "confirme_request_follower"]);
Route::put("/cancel-request",[UserController::class,  "cancel_request"]);
Route::put("/delete-request" , [UserController::class , "delete_request"]);

// les notificatiso
Route::get("/notification/{id}" , [NotificationController::class , 'GetNotification']);
Route::get("/unread-notification/{id}" , [NotificationController::class , 'GetUnreadNotification']);
Route::post("/notification/{id}/read",[NotificationController::class , 'ReadNotification']);

// la messageries


Route::post("/message" , [MessageController::class , 'index']);

Route::post("/new-message" , [MessageController::class , 'Store']);
Route::put('/message/edit/{msgid}' , [MessageController::class , 'EditMessage']);
route::put("/message/deleted-sender/{msgid}" , [MessageController::class , 'DeleteMessageSender']);

