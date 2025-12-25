<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('postid')->unique();
            $table->bigInteger('userid');
            $table->text('post')->nullable();
            $table->text('files')->nullable();
            $table->string("type")->nullable();
            $table->integer("is_profile_picture")->default(0);
            $table->integer("is_cover_picture")->default(0);
            $table->integer("is_shared")->default(0);
            $table->string("post_share_id")->nullable();
            $table->foreign('userid')->references('userid')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
