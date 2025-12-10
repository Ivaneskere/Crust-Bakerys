import { useReducer } from "react";

function MainProducts() {
    const initialState = { category: "all" };

    function reducer(state, action) {
        switch (action.type) {
            case "setCategory":
                return { ...state, category: action.payload };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const { category } = state;

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
                
                <button onClick={() => dispatch({ type: "setCategory", payload: "cakes" })}>Cakes</button>
                <button onClick={() => dispatch({ type: "setCategory", payload: "baking" })}>Baking</button>
                <button onClick={() => dispatch({ type: "setCategory", payload: "coffee" })}>Coffee</button>
                <button onClick={() => dispatch({ type: "setCategory", payload: "pizza" })}>Pizza</button>
             </div>

            <div>
                {filtererProducts.map(product => (

                    <div key={product.id} className="product-item">
                        <h3>{product.title}</h3>
                        {product.image && (
                            <img src={product.image} alt={product.title} />
                        )}
                    </div>

                ))}
            </div>
            
        </div>
            )

}

export default MainProducts;