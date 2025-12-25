<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        
        User::factory()->create([
            'userid' => 650,
            'firstname' => fake()->firstName(),
            'lastname' => fake()->lastName(),
            'gender' => "male",
            'email' => fake()->unique()->safeEmail(),    
            'password' => bcrypt("pass123."),
            'birthday' =>fake()->date(),
            "is_online"=>0,
            'profile_picture'=>fake()->imageUrl(640,480,'personne'),
            'cover_piture'=>fake()->imageUrl(820,312,'photo de couverture'),
            'remember_token' => Str::random(10),
        ]);
        Post::factory(6)->create();
    }
}
