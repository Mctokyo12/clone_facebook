<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    protected $fillable = [
        'msgid',
        'sender',
        'receiver',
        'message',
        'file',
        'is_read',
        'is_reply',
        'reply_to',
        'deleted_sender',
        'deleted_receiver'

    ];
}
