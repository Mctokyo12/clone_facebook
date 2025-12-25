<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Posts>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {   
        $post = fake()->paragraph();
        return [
            "postid"=>fake()->uuid(),
            "userid"=>650,
            "post"=>json_encode([$post]),
            "files"=>json_encode([fake()->imageUrl(640 , 480 , "nature") ]),
            "type"=> "file",
            "is_profile_picture"=>0,
            "is_cover_picture"=>0,
            "is_shared"=>0,

        ];
    }
}
