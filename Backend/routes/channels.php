<?php

use App\Models\User;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Log;

Broadcast::channel('App.Models.User.{id}', function (User $user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('Chat.{userId1}-{userId2}', function (User $user, $userId1 , $userId2) {
    return (int) $user->id === (int) $userId1 || (int) $user->id === (int) $userId2 ;
});

// Broadcast::channel('Chat.{id}', function (User $user, $id) {
//     return (int) $user->id === (int) $id; 
// });