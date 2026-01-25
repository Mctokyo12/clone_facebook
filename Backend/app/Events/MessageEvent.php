<?php

namespace App\Events;

use App\Models\Message;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class MessageEvent implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     */
    public function __construct(public Message $message)
    {
        //
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        $m = $this->message;
        // $ids = [$this->message->sender , $this->message->receiver];
        // sort($ids);
        
        return [
            new PrivateChannel('Chat.'. collect([$m->sender,$m->receiver])->sort()->implode('-')),
        ];
    }
    /**
     * Summary of broadcastWith
     * @return array<string , mixed>
     */
    public   function  broadcastWith() : array
    {
        return [
            'msgid' => $this->message->msgid,
            'sender'=>$this->message->sender,
            'receiver'=>$this->message->receiver,
            'message'=>$this->message->message,
            'file'=>json_decode($this->message->file),
            'is_read'=>$this->message->is_read,
            'is_reply'=>$this->message->is_reply,
            'reply_to'=>$this->message->reply_to,
            'deleted_sender'=>$this->message->deleted_sender,
            'deleted_receiver'=>$this->message->deleted_receiver
        ];
    }

    public function broadcastAs(): string
    {
        return "MessageEvent";
    }
}
