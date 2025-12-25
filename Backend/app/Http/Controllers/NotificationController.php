<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use stdClass;

class NotificationController extends Controller
{
    
    public   function GetNotification(int $id) 
    {
        $Allnotifications = [];
        $notificationItem = [];
        $user = User::where('userid' , $id)->first();
        $notifications = $user->notifications;
        
        foreach ($notifications as $notification) {
            $notificationItem['actor_id'] = $notification->data['actor_id'];
            $notificationItem['actor_name'] = $notification->data['actor_name'];
            $notificationItem['message'] = $notification->data['message'];
            $notificationItem['type_notification'] = $notification->data['type_notification'];
            $notificationItem['postid'] =  !isset($notification->data['postid']) ? "" : $notification->data['postid'];
            $notificationItem['id'] = $notification->id;
            $notificationItem['created_at'] = $notification->created_at;

            $notificationItem['read_at'] = $notification->read_at;

            array_push($Allnotifications , $notificationItem);
        }

        
            
        return response()->json($Allnotifications);

    }

    public   function GetUnreadNotification(int $id) 
    {
        $Allnotifications = [];
        $notificationItem = [];
        $user = User::where('userid' , $id)->first();
        $unreadNotifications = $user->unreadNotifications;

        foreach ($unreadNotifications as $notification) {
            $notificationItem['actor_id'] = $notification->data['actor_id'];
            $notificationItem['actor_name'] = $notification->data['actor_name'];
            $notificationItem['message'] = $notification->data['message'];
            $notificationItem['type_notification'] = $notification->data['type_notification'];
            $notificationItem['postid'] =  !isset($notification->data['postid']) ? "" : $notification->data['postid'];
            $notificationItem['id'] = $notification->id;
            $notificationItem['created_at'] = $notification->created_at;
            $notificationItem['read_at'] = $notification->read_at;

            array_push($Allnotifications , $notificationItem);
           
        }
        return response()->json($Allnotifications);

    }

    public  function ReadNotification(string $id , Request $request)
    {   $userid = $request->input('userid');
        $user = User::where('userid' , $userid)->first();
        $user->notifications()->find($id)->markAsRead();
        return response()->json(["status"=>1]);

    }
    
}
