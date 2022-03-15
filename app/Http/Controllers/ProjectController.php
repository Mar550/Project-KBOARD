<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\Task;
use GuzzleHttp\Handler\Proxy;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Illuminate\Session\Store;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function create(Request $req){ 
        $project = new Project;
        $project ->nameproject=$req->input('nameprojet');
        $project ->description=$req->input('description');
        $project ->image=$req->input('image');
        $project ->date_begin=$req->input('begin');
        $project ->date_ending=$req->input('end');
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

    public function getProject($id)
    {
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
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
   
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
        if($project)
        {
            return response()->json([
                'status'=>200,
                'project'=>$project,
            ]);
        }
        else 
        {
            return response()->json([
                'status'=>404,
                'message'=>'No Product Found',
            ]);
                
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    
  

    public function update(Request $req, $id)
    {
        $project = Project::find($id);
        $project->nameproject = $req->input('nameprojet');
        $project->description = $req->input('description');
        $project->image = $req->input('image');
        $project->date_begin = $req->input('begin');
        $project->date_ending = $req->input('end');
        $project->update();

        return response()->json([
            'status'=> 200,
            'message'=>'Updated Successfully',
        ]);
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
