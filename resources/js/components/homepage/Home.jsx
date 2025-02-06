import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiRequest from "../utils/apiRequest";
import ProductCard from "./partials/ProductCard";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const productList = async () => {
            const response = await apiRequest("/public-products", "GET", true);
            setProducts(response.data.data);
        };

        productList();
    }, []);
    console.log(products);
    return (
        <div>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <div className="flex justify-center items-center min-h-screen">
                <div className="container mx-auto p-4">
                    {message && (
                        <div
                            className={`text-center mb-4 ${
                                message.type === "error"
                                    ? "text-red-500"
                                    : "text-green-500"
                            }`}
                        >
                            {message.text}
                        </div>
                    )}

                    {products.length === 0 ? (
                        <p>No products available</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {products.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    product={product}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
