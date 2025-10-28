<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Str;
use Ramsey\Uuid\Uuid;

class AuthController extends Controller
{
    public function Register(Request $request)
    {

        $validator =  Validator::make($request->all() ,
            [
                'firstname' => ['required', 'string' ,'min:4'],
                'lastname' => ['required', 'string','min:4'],
                'gender' => ['required' , 'string'],
                'email' => ['required', 'string' , 'email' , 'unique:users'],
                'password' => ['required', 'string',  'min:6']
            ]
        );

        $birthday = $request->input('byear').'-'.$request->input('bmonth').'-'.$request->input('bday');

         

        if($validator->fails()){
           return response()->json($validator->errors());
        }

        $userid = AuthController::UserId();

        while (User::where('userid',$userid)->exists()) {
            $userid = AuthController::UserId();
        }
        

        User::create([
            'userid' =>$userid,
            'firstname' => $request->input('firstname'),
            'lastname' => $request->input('lastname'),
            'gender' => $request->input('gender'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
            'birthday' => $birthday

        ]);

        return  response()->json($request->all(), 200);

    }

    public function UserId(){
      $id="";
      $nombre = rand(1,16);
      for ($i=0; $i < $nombre; $i++) {
        $id.= rand(0,10);
      }
      return $id;
    }

    public function Login(Request $request){
       $validator = Validator::make($request->all(),
            [
                'email' => ['required','string' , 'email'],
                'password' => ['required' , 'string' , 'min:6']
            ]
        );

        if($validator->fails()){
            return response()->json(['errors'=>$validator->errors()]);
        }

        if(Auth::attempt(['email'=>$request->input('email') , 'password'=>$request->input('password')])){
            $user = User::where('email' , $request->input('email'))->first();
            $tokens = $user->createToken('token')->plainTextToken;

            return response()->json([
                'status' => 'succes',
                'data' => $user,
                'token' => $tokens
            ]);

        }else{
           return response()->json(['errors'=>"mauvais identifiant"]);
        }
    }

    public function Logout(){
        auth()->user()->tokens()->delete();

        return response()->json([
            'status' => true,
            'message' => 'deconnexion effectue avec success !!'
        ]);

    }

    public function forgot_password(Request $request){
        $request->validate(['email' => 'required|email']);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        return $status === Password::ResetLinkSent
            ? response()->json(['status' => __($status)])
            : response()->json(['email' => __($status)]);
    }

    public function reset_password(Request $request) {

        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function (User $user, string $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));

                $user->save();

                event(new PasswordReset($user));
            }
        );

        return $status === Password::PasswordReset
            ? response()->json('status', __($status))
            : response()->json(['email' => [__($status)]]);
    }




}
