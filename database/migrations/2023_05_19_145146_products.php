<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->bigInteger('price');
            $table->string('image')->default('/img/default_product.png');
            $table->string('sku')->unique();
            $table->text('description')->nullable();
            $table->integer('category_id')->nullable();
            $table->integer('outlet_id');
            $table->integer('weight')->default(0);
            $table->string('weight_unit');
            $table->boolean('has_variant')->default(0);
            $table->integer('variant_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
