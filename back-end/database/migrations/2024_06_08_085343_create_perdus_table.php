<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('perdus', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string("fullName");
            $table->date("dateDePerdre");
            $table->string("ville");
            $table->date("dateDeNaissance");
            $table->string("description");
            $table->string("image1");
            $table->string("image2")->nullable();
            $table->string("image3")->nullable();
            $table->string("cin");
            $table->string("phone");
            $table->foreignId("user_id")->constrained();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('perdus');
    }
};
