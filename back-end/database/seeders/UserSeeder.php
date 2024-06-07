<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i = 0; $i < 30; $i++) {
            User::create([
                "fullName" => fake()->name(),
                "email" => fake()->email(),
                "password" => fake()->password(),
                "dateOfBirth" => fake()->date(),
            ]);
        }
    }
}
