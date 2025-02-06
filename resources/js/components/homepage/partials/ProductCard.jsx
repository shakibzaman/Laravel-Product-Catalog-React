import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="p-4">
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <div className="price-button-container">
                    <span className="price">${product.price}</span>
                    <Link
                        to={`/view-product/${product.id}`}
                        className="add-to-cart"
                    >
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
}
