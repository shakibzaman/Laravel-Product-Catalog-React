import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiRequest from "../utils/apiRequest";

export default function SingleProduct() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await apiRequest(
                    "/public-products/" + id,
                    "GET"
                );
                console.log("response for Product", response);
                setProduct(response.data.data);
            } catch (error) {
                console.error("Error fetching product", error);
            }
        };
        getProduct();
    }, [id]);

    if (!product) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Product Image Section */}
                    <div className="flex justify-center">
                        <img
                            src={product.image} // Assuming product has an image field
                            alt={product.name}
                            className="max-w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Product Details Section */}
                    <div className="flex flex-col justify-between">
                        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                            {product.name}
                        </h1>
                        <p className="text-lg text-gray-600 mb-6">
                            {product.description}
                        </p>

                        <div className="flex items-center mb-6">
                            <span className="text-2xl font-semibold text-gray-900 mr-4">
                                ${product.price}
                            </span>
                        </div>

                        {/* Add to Cart Section */}
                        <div className="flex items-center space-x-4 mb-8">
                            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300">
                                Add to Cart
                            </button>
                            <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow-lg hover:bg-gray-400 transition-all duration-300">
                                Buy Now
                            </button>
                        </div>

                        {/* Product Details (e.g., category, stock availability, etc.) */}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                Product Details
                            </h3>
                            <p className="text-gray-600">
                                <strong>Category:</strong>{" "}
                                {product.category ?? "N/A"}
                            </p>
                            <p className="text-gray-600">
                                <strong>Stock:</strong> {product.stock}{" "}
                                available
                            </p>
                            <p className="text-gray-600">
                                <strong>SKU:</strong> {product.sku ?? "N/A"}
                            </p>
                        </div>

                        {/* Product Reviews (Optional) */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                Customer Reviews
                            </h3>
                            <div className="flex space-x-2 mb-4">
                                {/* You can dynamically display the reviews if you have them */}
                                <span className="text-yellow-500">
                                    ⭐⭐⭐⭐⭐
                                </span>
                                <span className="text-sm text-gray-500">
                                    5/5
                                </span>
                            </div>
                            <p className="text-gray-600">
                                "This product is amazing! Highly recommend."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
