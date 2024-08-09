import React, { useState } from "react";
import { promoCodes } from "../../../utils/promoCodes";
import CheckOut from "./CheckOut";

/**
 *
 * @param {[]} cart
 * @returns
 */
function Summary({ cart }) {
    console.log(cart);

    const [promo, setPromo] = useState("ARIN420");

    const totalPrice = cart.reduce((accumulator, item) => {
        return (accumulator += Number(item.product.price[item.type]) * Number(item.quantity));
    }, 0);

    let finalPrice = totalPrice;
    let discount = 0;
    if (promoCodes.includes(promo)) {
        finalPrice = totalPrice * 0.9;
        discount = totalPrice - finalPrice;
    }

    return (
        <>
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                    Summary
                </h3>
                <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                    <div className="flex justify-between w-full">
                        <p className="text-base dark:text-white leading-4 text-gray-800">
                            Subtotal
                        </p>
                        <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                            ₹{totalPrice}
                        </p>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <p className="text-base dark:text-white leading-4 text-gray-800">
                            PROMO{" "}
                            {/* <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800"> */}
                            {/* {promo} */}
                            <input
                                type="text"
                                value={promo}
                                onChange={(e) => setPromo(e.target.value)}
                                className="w-32 h-6 max-w-md py-2 text-sm rounded-full border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                            />
                            {/* </span> */}
                        </p>
                        <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                            -₹{discount} (10%)
                        </p>
                    </div>
                    <div className="flex justify-between items-center w-full">
                        <p className="text-base dark:text-white leading-4 text-gray-800">
                            Shipping
                        </p>
                        <p className="text-base dark:text-gray-300 leading-4 text-gray-600">
                            ₹{0}
                        </p>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">
                        Total
                    </p>
                    <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
                        ₹{finalPrice}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Summary;
