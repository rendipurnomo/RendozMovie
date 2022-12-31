<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The Shawshank',
                'slug' => 'the-shawshank',
                'category' => 'drama',
                'video_url' => 'https://www.youtube.com/watch?v=aXvRQ_jceos',
                'thumbnail' => 'https://placeimg.com/640/480/people',
                'rating' => 4.7,
                'is_featured' => 0,
            ],
            [
                'name' => 'The Shawshank 2',
                'slug' => 'the-shawshank-2',
                'category' => 'drama',
                'video_url' => 'https://www.youtube.com/watch?v=IqXJkiJOOkY',
                'thumbnail' => 'https://placeimg.com/640/480/tech',
                'rating' => 4.8,
                'is_featured' => 0,
            ],
            [
                'name' => 'Dead Squad',
                'slug' => 'dead-squad',
                'category' => 'music',
                'video_url' => 'https://www.youtube.com/watch?v=AyYtuePAB1A',
                'thumbnail' => 'https://placeimg.com/640/480/tech',
                'rating' => 4.9,
                'is_featured' => 1,
            ],
        ];
        Movie::insert($movies);
    }
}
