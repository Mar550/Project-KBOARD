<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $guarded=[];

    public function projects() 
    {
        return $this->hasMany(Task::class,'task_id');
    }

    public function board() 
    {
        return $this->hasOne(Board::class,'board_id');
    }

}
