<?php

namespace App\Http\Controllers\Public\Api;

use App\Helpers\ApiResponse;
use App\Http\Controllers\Controller;
use App\Models\Product;
use Exception;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        try {
            $products = Product::orderBy('id', 'DESC')->get();
            // Return a successful response
            $message = $products->isEmpty()
                ? 'No products found in the database.'
                : 'Products retrieved successfully.';
            return ApiResponse::success($message, $products);
        } catch (Exception $e) {
            return ApiResponse::error('Failed to retrieve products.', $e->getMessage());
        }
    }
    public function show(string $id)
    {
        try {
            $product = Product::findOrFail($id);
            return ApiResponse::success('Product retrieved successfully.', $product);
        } catch (Exception $e) {
            return ApiResponse::error('Failed to retrieve product.', $e->getMessage());
        }
    }
}
