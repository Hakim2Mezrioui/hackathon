<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ApiResponseTrait;
use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    use ApiResponseTrait;
    public function roles()
    {
        $roles = Role::all();
        return response()->json($this->apiResponse($roles, "There is the roles", 200));
    }
    public function addRole(Request $request)
    {
        // $request->validate(
        //     [
        //         "name" => "required"
        //     ]
        // );

        $role = Role::create($request->all());
        return response()->json($this->apiResponse($role, "The role added with succesffully", 200));

    }
    public function editRole($id)
    {
        $role = Role::find($id);

        if (!$role) {
            return response()->json($this->apiResponse($role, "The role not found", 404));
        }

        return response()->json($this->apiResponse($role, "The role was finded", 200));
    }
    public function updateRole(Request $request, $id)
    {
        $role = Role::find($id);

        if (!$role) {
            return response()->json($this->apiResponse($role, "The role was updated"));
        }

        $role->update($request->all());
        return response()->json($this->apiResponse($role, "The role was updated", 200));
    }
    public function deleteRole($id)
    {
        $role = Role::find($id);

        if (!$role) {
            return response()->json($this->apiResponse($role, "The role not found", 404));
        }

        $role->delete();
        return response()->json($this->apiResponse($role, "The role was deleted", 200));
    }
}
