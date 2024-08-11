import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import {signoutUser} from '../features/user/userSlice.js'

export default function NavbarComponent() {

  const currentUser = useSelector(state => state.user)
  const dispatch = useDispatch()

  return (
    
    <div className="">
      <Navbar fluid rounded >
      
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
          {currentUser.user ? (<><h4 className="text-xl font-medium mr-6 my-auto">@{currentUser.user.username}</h4></>) : <Link to="/login"><Button className="bg-fuchsia-900">Login</Button></Link>}
          {currentUser.user ? (<><Button className="bg-fuchsia-900" onClick={()=>dispatch(signoutUser())}>Logout</Button></>) : null}
          
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link><Link to="/products">Products</Link></Navbar.Link>
          <Navbar.Link><Link to="/">No-where</Link></Navbar.Link>
          <Navbar.Link> <Link to="/user/cart">Cart</Link></Navbar.Link>
          <Navbar.Link> <Link to="/user/orders">Orders</Link></Navbar.Link>
          <Navbar.Link><Link to="/admin">admin Panel</Link></Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
