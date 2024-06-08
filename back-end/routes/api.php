<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\PerduController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post("/login", [AuthController::class, "login"]);
Route::post("/register", [AuthController::class, "register"]);
Route::get("/users", [UserController::class, "users"]);


Route::middleware('auth:sanctum')->group(function () {    
});

Route::get("/roles", [RoleController::class, "roles"]);
Route::get("/role", [RoleController::class, "role"]);
Route::post("/addRole", [RoleController::class, "addRole"]);
Route::post("/editRole/{id}", [RoleController::class, "editRole"]);
Route::post("/updateRole/{id}", [RoleController::class, "updateRole"]);
Route::post("/deleteRole/{id}", [RoleController::class, "deleteRole"]);

Route::post("/addPerdu", [PerduController::class, "addPerdu"]);
Route::get("/perdus", [PerduController::class, "perdus"]);
Route::get("/perdu/{id}", [PerduController::class, "perdu"]);
Route::get("/editPerdu/{id}", [PerduController::class, "editPerdu"]);
Route::post("/updatePerdu", [PerduController::class, "updatePerdu"]);
Route::post("/deletePerdu/{id}", [PerduController::class, "deletePerdu"]);

Route::post("/find", [UserController::class, "find"]);

