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
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->string('msgid')->unique();
            $table->bigInteger("sender");
            $table->bigInteger('reciever');
            $table->text("message")->nullable();
            $table->text("file")->nullable();
            $table->integer("is_read")->default(0);
            $table->integer("is_reply")->nullable();
            $table->integer("reply_to")->nullable();
            $table->integer("deleted_sender")->default(0);
            $table->integer("deleted_receiver")->default(0);
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('messages');
    }
};
