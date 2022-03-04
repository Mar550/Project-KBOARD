<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Auth;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register',[UserController::class,'register']);
Route::post('login',[UserController::class,'login']);
Route::post('create',[ProjectController::class,'create']);
Route::get('listprojects',[ProjectController::class,'listprojects']);
Route::get('project/{id}',[ProjectController::class,'getProject']);
Route::get('project/{id}/edit',[ProjectController::class,'edit']);
Route::put('project/{id}/update',[ProjectController::class,'update']);
Route::delete('delete/{id}',[ProjectController::class,'delete']);


 
Route::post('addtask',[TaskController::class,'addtask']);
Route::get('listtasks',[TaskController::class,'listtasks']);
Route::delete('deletetask/{id}',[TaskController::class,'delete']);
Route::get('task/{id}',[TaskController::class,'edit']); 


/*
Route::get('project/{id}/board',[BoardController::class,'show']);

Route::post('project/{id}/board/create',[BoardController::class,'create']);
Route::get('project/{id}/board/show',[BoardController::class,'show']);
Route::delete('project/{id}/board/delete/{id}',[BoardController::class,'edit']);
Route::get('project/{id}/board/edit/{id}',[BoardController::class,'edit']);

*/

