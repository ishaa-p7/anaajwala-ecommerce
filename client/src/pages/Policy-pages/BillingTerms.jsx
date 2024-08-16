import React from "react";

function BillingTerms() {
    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="max-w-4xl bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    Business Terms and Conditions
                </h1>
                <div className="space-y-4 text-gray-700">
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Serviceable Locations
                        </h2>
                        <p>
                            - Indore only. The delivery may be delayed due to
                            unforeseeable circumstances.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Order Delivery
                        </h2>
                        <p>
                            - Orders delivered within 2 days. If ordered before
                            6 pm, the order will be delivered the next day.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Free Delivery
                        </h2>
                        <p>
                            - Free delivery is available for orders above Rs.
                            300 after considering all applicable discounts and
                            coupon codes.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Coupon Code Validity
                        </h2>
                        <p>- Coupon Code is valid till 31/12/2024.</p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Discount Application
                        </h2>
                        <p>
                            - Discounts will be applied to cart value. Taxes or
                            delivery charges are not subject to discounts.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Offer Policy
                        </h2>
                        <p>
                            - Discounts cannot be clubbed with any other
                            offer/scheme.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl font-semibold text-gray-800">
                            Refund Policy
                        </h2>
                        <p>
                            - If any product related to an offer is returned,
                            the refund will equal the amount you paid for the
                            product subject to applicable refund policies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BillingTerms;
