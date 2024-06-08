<?php

namespace Database\Seeders;

use App\Models\Perdu;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PerduSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 0; $i < 20; $i++) {
            Perdu::create([
                "fullName" => fake()->name(),
                "dateDePerdre" => fake()->date(),
                "ville" => fake()->city(),
                "dateDeNaissance" => fake()->date(),
                "description" => fake()->text(),
                "image1" => fake()->imageUrl(),
                "cin" => fake()->randomNumber(),
                "phone" => fake()->phoneNumber(),
                "user_id" => 2,
            ]);
        }
    }
}
