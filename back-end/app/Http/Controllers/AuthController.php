<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'fullName' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            "dateOfBirth" => "required",
        ]);

        $user = User::create([
            'fullName' => $request->fullName,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            "dateOfBirth" => $request->dateOfBirth,
            'role_id' => $request->role_id,
        ]);

        // $token = Auth::login($user);
        $token = $user->createToken('token')->plainTextToken;
        $cookie = cookie('jwt', $token, 5);

        return response()->json([
            'status' => 'success',
            'message' => 'User created successfully',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ])->withCookie($cookie);

        // $this->sendEmail("mezrioui.hakim@gmial.com", "hakim", "user registred", "<p>hello world</p>");

    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['Information incorrect.'],
            ]);
        }

        $token = $user->createToken($request->email)->plainTextToken;

        $cookie = cookie('jwt', $token, 10);

        return response()->json(
            [
                'status' => 'success',
                'user' => $user,
                'authorisation' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ]
        )->withCookie($cookie);
    }
}