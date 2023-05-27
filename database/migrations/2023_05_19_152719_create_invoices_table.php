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
        Schema::create('invoices', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_no')->unique();
            $table->integer('outlet_id');
            $table->integer('customer_id');
            $table->date('transaction_date');
            $table->date('expired_date');
            $table->bigInteger('discount_transaction')->default(0);
            $table->bigInteger('delivery_fee')->default(0);
            $table->bigInteger('total_price')->default(0);
            $table->text('note')->nullable();
            $table->string('status')->default('not_complete');
            $table->integer('cashier_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('invoices');
    }
};
