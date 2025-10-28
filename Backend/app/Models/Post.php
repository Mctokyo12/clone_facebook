<?php

namespace App\Models;



use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


class Post extends Model
{

    use HasFactory;

    protected $fillable = [
        'postid',
        'userid',
        'post',
        'files',
        'type',
        'is_profile_picture',
        'is_cover_picture',
    ];
}
