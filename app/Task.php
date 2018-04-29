<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $table      = 'tasks';
    public $timestamps    = true;
    protected $primaryKey = 'id';
    protected $fillable   = ['name', 'description', 'is_default'];

    public static function syncTask($payload = null)
    {
        if (!isset($payload)) {
            throw new Exception('Payload is empty');
        }
        $task = null;
        if (isset($payload['id'])) {
            $task = Task::find($payload['id']);
        } else {
            $task = new Task;
        }

        if (isset($payload['name'])) {
            $task->name = $payload['name'];
        }

        if (isset($payload['status'])) {
            $task->description = $payload['status'];
        }

        if (isset($payload['description'])) {
            $task->description = $payload['description'];
        }
        if (!$task->save()) {
            App::abort(400, 'Some error occurred while saving the Tasks');
        }

        return $task->toArray();
    }
}
