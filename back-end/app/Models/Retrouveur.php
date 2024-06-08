<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Retrouveur extends Model
{
    use HasFactory;

    function perdu()
    {
        $this->belongsToMany(Perdu::class);
    }
}
