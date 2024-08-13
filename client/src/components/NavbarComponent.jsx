import { Button, Navbar } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signoutUser } from "../features/user/userSlice.js";

export default function NavbarComponent() {
    const currentUser = useSelector((state) => state.user);
    const dispatch = useDispatch();

    return (
        <div className="">
            <Navbar fluid rounded>
                <Navbar.Brand>
                    {/* <img
          src="/react.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        /> */}
                    <Link to="/">
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            Anaajwala
                        </span>
                    </Link>
                </Navbar.Brand>

                <div className="flex md:order-2">
                    {currentUser.user ? (
                        <Link to="/user/profile">
                            <h4 className="text-xl font-medium mr-6 my-auto">
                                @{currentUser.user.username}
                            </h4>
                        </Link>
                    ) : (
                        <Link to="/login">
                            <Button className="bg-fuchsia-900">Login</Button>
                        </Link>
                    )}
                    {currentUser.user ? (
                        <>
                            <Button
                                className="bg-fuchsia-900"
                                onClick={() => dispatch(signoutUser())}
                            >
                                Logout
                            </Button>
                        </>
                    ) : null}

                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Navbar.Link>
                        <NavLink
                            className={
                                ({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 font-bold" // Active link styling
                                        : "text-gray-600" // Inactive link styling
                            }
                            to="/"
                        >
                            Home
                        </NavLink>
                    </Navbar.Link>
                    <Navbar.Link>
                        <NavLink
                            className={
                                ({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 font-bold" // Active link styling
                                        : "text-gray-600" // Inactive link styling
                            }
                            to="/products"
                        >
                            Products
                        </NavLink>
                    </Navbar.Link>
                    <Navbar.Link>
                        <NavLink
                            className={
                                ({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 font-bold" // Active link styling
                                        : "text-gray-600" // Inactive link styling
                            }
                            to="/about-us"
                        >
                            About Us
                        </NavLink>
                    </Navbar.Link>
                    <Navbar.Link>
                        {" "}
                        <NavLink
                            className={
                                ({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 font-bold" // Active link styling
                                        : "text-gray-600" // Inactive link styling
                            }
                            to="/user/cart"
                        >
                            Cart
                        </NavLink>
                    </Navbar.Link>
                    <Navbar.Link>
                        {" "}
                        <NavLink
                            className={
                                ({ isActive }) =>
                                    isActive
                                        ? "text-blue-600 font-bold" // Active link styling
                                        : "text-gray-600" // Inactive link styling
                            }
                            to="/user/orders"
                        >
                            Orders
                        </NavLink>
                    </Navbar.Link>
                    {/* <Navbar.Link><NavLink to="/admin">admin Panel</NavLink></Navbar.Link> */}
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
