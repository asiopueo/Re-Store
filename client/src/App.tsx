import { useEffect, useState } from "react";
import type { Product } from "./product";

function App() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://localhost:5001/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    const addProduct = () => {
        setProducts(prevState => [...prevState, {name: 'product' + (prevState.length + 1), price: ((prevState.length + 1)*100)}])
    }

    return (
        <>
            <h1 style={{color: 'red'}}>Re-store</h1>
            <ul>
                { products.map((item, index) => (
                    <li key={index}>{item.name} - {item.price}</li>
                ))}
            </ul>
            <button onClick={addProduct}>Add product</button>
        </>
    )
}

export default App
