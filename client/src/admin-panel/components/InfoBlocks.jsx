import React from "react";
import {
    FaUsers,
    FaBoxOpen,
    FaBoxes,
    FaCheckCircle,
    FaTimesCircle,
    FaClock,
} from "react-icons/fa";

function InfoBlocks({
    userCount,
    orderCount,
    productCount,
    deliveredOrders,
    cancelledOrders,
    pendingOrders,
    orders,
    users,
    products,
}) {
    return (
        <div className="p-8 bg-gray-100 mb-16 w-5/6 mx-auto rounded-lg">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-semibold mb-6">Admin Dashboard</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="p-6 bg-white rounded-lg shadow flex items-center">
                        <FaUsers className="text-4xl text-indigo-600 mr-4" />
                        <div>
                            <h2 className="text-xl font-medium">Total Users</h2>
                            <p className="text-3xl font-bold text-indigo-600">
                                {userCount}
                            </p>
                        </div>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow flex items-center">
                        <FaBoxOpen className="text-4xl text-blue-600 mr-4" />
                        <div>
                            <h2 className="text-xl font-medium">
                                Total Orders
                            </h2>
                            <p className="text-3xl font-bold text-blue-600">
                                {orderCount}
                            </p>
                        </div>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow flex items-center">
                        <FaBoxes className="text-4xl text-green-600 mr-4" />
                        <div>
                            <h2 className="text-xl font-medium">
                                Total Products
                            </h2>
                            <p className="text-3xl font-bold text-green-600">
                                {productCount}
                            </p>
                        </div>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow flex items-center">
                        <FaCheckCircle className="text-4xl text-green-600 mr-4" />
                        <div>
                            <h2 className="text-xl font-medium">
                                Delivered Orders
                            </h2>
                            <p className="text-3xl font-bold text-green-600">
                                {deliveredOrders}
                            </p>
                        </div>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow flex items-center">
                        <FaTimesCircle className="text-4xl text-red-600 mr-4" />
                        <div>
                            <h2 className="text-xl font-medium">
                                Cancelled Orders
                            </h2>
                            <p className="text-3xl font-bold text-red-600">
                                {cancelledOrders}
                            </p>
                        </div>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow flex items-center">
                        <FaClock className="text-4xl text-yellow-600 mr-4" />
                        <div>
                            <h2 className="text-xl font-medium">
                                Pending Orders
                            </h2>
                            <p className="text-3xl font-bold text-yellow-600">
                                {pendingOrders}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoBlocks;
