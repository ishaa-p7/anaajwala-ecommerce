import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
    const [products, setProducts] = useState([]); //this will have array of products
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            setLoading((prev) => true);
            const { data } = await axios.get("/api/product/products");
            setProducts(data);
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message);
            } else {
                setError(error.message);
            }
        } finally {
            setLoading((prev) => false);
        }
    };

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center">
                <h1 className="text-5xl my-auto text-center font-semibold">
                    Loading...
                </h1>
            </div>
        );
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4 text-center">Products</h1>

            {error && <p className="text-red-500">Error: {error}</p>}

            {!loading && !error && (
                <ul className="space-y-4 p-10">
                    {products.map((product) => (
                        <li
                            key={product._id}
                            className="p-4 border rounded shadow cursor-pointer hover:bg-slate-100" 
                            onClick={()=>navigate(`/product/${product._id}`)}
                        >
                            <h2 className="text-xl font-semibold">
                                {product.name}
                            </h2>
                            <p>{product.description}</p>
                            {/* <p className="font-bold mt-2">
                                ${product.price["gold"]}
                            </p> */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Products;
