import React from "react";
import CartItem from "./components/CartItem";
import Summary from "./components/Summary";
import CustomerDetail from "./components/CustomerDetail";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../features/cart/CartSlice";
import { format } from "date-fns";
import CheckOut from "./components/CheckOut";

function CartPage() {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    console.log(cart);

    // const [products, setProducts] = useState([]);//this will have array of products
    // const [error, setError] = useState(null);
    // const [loading, setLoading] = useState([]);

    // useEffect(() => {
    //   getProducts();
    // }, []);

    // const getProducts = async () => {
    //   try {
    //     setLoading((prev) => true);
    //     const { data } = await axios.get("/api/product/products");
    //     setProducts(data);
    //   } catch (error) {
    //     if (error.response && error.response.data) {
    //       setError(error.response.data.message);
    //     } else {
    //       setError(error.message);
    //     }
    //   } finally {
    //     setLoading((prev) => false);
    //   }
    // };

    // if (loading) {
    //   return (
    //     <div className="h-screen flex items-center justify-center">
    //       <h1 className="text-5xl my-auto text-center font-semibold">Loading...</h1>
    //     </div>
    //   )
    // }

    return (
        <>
            {/* component */}
            <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
                <div className="flex justify-start item-start space-y-2 flex-col">
                    <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                        Cart
                    </h1>
                    <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
                        {format(Date.now(), "d MMMM yyyy ',' h:mm a")}
                    </p>
                </div>
                <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                        <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                            <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">
                                Customer’s Cart
                            </p>

                            {cart &&
                                cart.length > 0 &&
                                cart.map((item) => (
                                    <>
                                        <CartItem item={item} />
                                    </>
                                ))}
                        </div>
                        <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                            <Summary cart={cart} />
                            <CheckOut />
                        </div>
                    </div>
                    <CustomerDetail />
                </div>
            </div>
        </>
    );
}

export default CartPage;
