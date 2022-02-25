<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tasks = Task::join('projects','tasks.project_id','=','projects.id')
        ->select('tasks.id','tasks.task_name','tasks.date_begin','tasks.date_ending','tasks.description')
        ->orderBy('tasks.created_at','desc')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function addtask(Request $req)
    {
        $task = new Task;
        $task -> task_name=$req->input('nametask');
        $task -> description=$req->input('description');
        $task -> date_begin=$req->input('starting');
        $task -> date_ending=$req->input('ending');
        $task -> save();
        return $task;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'task_name' => 'required|string:tasks',
            'description' => 'string:tasks',
            'date_begin' => 'required',
            'date_ending' => 'required',
        ],[
            'task_name.required' => 'The name of the task is required',
            'date_ending.required' => 'The deadline of the task is required',
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $task = Task::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $task = Task::find($id);
        $project = Project::all();

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $task = Task::find($id);

        $task->task_name = $request->task_name;
        $task->description = $request->description;
        $task->date_begin = $request->date_begin;
        $task->date_ending = $request->date_ending;

        $task->save();
        Session::put('update', 'Animal informations updated successfully !');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $task = Task::find($id);
        if ($task != null) {
            $task->delete();
        }
    }
}
