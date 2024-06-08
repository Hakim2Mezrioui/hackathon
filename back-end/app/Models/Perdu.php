<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Perdu extends Model
{
    use HasFactory;

    protected $fillable = [
        "dateDePerdre",
        "ville",
        "dateDeNaissance",
        "description",
        "image1",
        "image2",
        "image3",
        "cin",
        "phone",
        "user_id",
        "fullName",
    ];

    function user()
    {
        $this->belongsTo(User::class);
    }
}
