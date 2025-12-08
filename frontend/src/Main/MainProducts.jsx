import React from "react";
import { useState } from "react";

function MainProducts() {
    const [category, SetCategory] = useState("all");

    const products = [
        { id: 1, title: "Cake 1", category: "cakes", image: "/Pictures/cake.png" },
        { id: 2, title: "Bread", category: "baking" },
        { id: 3, title: "Coffee", category: "coffee" },
        { id: 4, title: "Pizza", category: "pizza" }
    ];

    const filtererProducts = category === "all" ? products : products.filter(p => p.category === category)


    return (
        <div>
            <div className="products">
                <h1>Products</h1>
            </div>

            <div>
                
                <button onClick={() => SetCategory("cakes")}>Cakes</button>
                <button onClick={() => SetCategory("baking")}>Baking</button>
                <button onClick={() => SetCategory("coffee")}>Coffee</button>
                <button onClick={() => SetCategory("pizza")}>Pizza</button>
             </div>

            <div>
                {filtererProducts.map(product => (

                    <div key={product.id}>
                        {product.title}
                        {product.image}
                        </div >

                ))}
            </div>
            
        </div>
            )

}
            export default MainProducts;