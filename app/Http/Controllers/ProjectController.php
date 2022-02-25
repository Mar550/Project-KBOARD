<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\Task;
use GuzzleHttp\Handler\Proxy;
use Illuminate\Support\Facades\Session;


class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function addproject(Request $req){ 
        $project = new Project;
        $project ->nameproject=$req->input('nameprojet');
        $project ->description=$req->input('description');
        $project ->image=$req->file('image');
        $project ->date_begin=$req->input('datebegin');
        $project ->date_ending=$req->input('dateending');
        $project->save();
        return $project;
    }


    public function listprojects()
    {
        return Project::all();
    }

    public function delete($id)
    {
        $result= Project::where('id',$id)->delete();
        if($result)
        {
            return ["result"=>"Project has been deleted"];
        }
        else {
            return ["result"=>"Project does not exist "];
        }
    }

    public function getProject($id){
        return Project::find($id);
    }

    public function index()
    {
        $projects = Project::withCount('tasks')->orderBy('projects.created_at','desc')->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            'nameproject' => 'require|string',
            'description' => 'required|string',
        ],[
        'nameproject.required' => 'The name of the project is required',
        'description.required' => 'Asmall description of the project is required',
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
        $task = Task::find($id)->tasks;
        $project = Project::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $project = Project::find($id);
        $projectWithTasks = $project->tasks;
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
        $project = Project::find($id);
        $project->nameproject = $request->nameproject;
        $project->description = $request->nameproject;
        $project->save();
        Session::put('update', 'item updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $project = Project::find($id);
        if ($project != null) {
            $project->delete();
        }
    }



    

}
