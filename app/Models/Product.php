<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Product extends Model
{

    use HasApiTokens, HasFactory;
    protected $fillable = ['name', 'description', 'price', 'stock_quantity', 'image'];

    public function getImageAttribute($value)
    {
        return $value
            ? asset("storage/{$value}")
            : asset("storage/images/products/default.png");
    }
}
