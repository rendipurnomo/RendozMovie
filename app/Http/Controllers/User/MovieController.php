<?php

namespace App\Http\Controllers\User;

use App\Models\Movie;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MovieController extends Controller
{
    public function show(Movie $movie)
    {
        return inertia('Movie/show', ['movie' => $movie]);
    }
}
