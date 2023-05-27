<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class UserController extends Controller
{
    public function getUser() {
        $users = DB::table('users')->get();

        return Inertia::render()
    }
}
