<?php

namespace App\Http\Controllers;

use App\Models\Perdu;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    use ApiResponseTrait;
    function users()
    {
        $users = User::all();
        return response()->json([
            "data" => $users,
        ]);
    }

    function find(Request $request)
    {
        $user = User::where("email", $request->email);
        $perdu = Perdu::find($request->id_perdu);

        if (!$perdu) {
            return response()->json($this->apiResponse(null, "The Missing not found", 404));
        }

        $user->attach($perdu);
        return response()->json($this->apiResponse($perdu, "Thank you for your collaboration", 200));
    }
}
