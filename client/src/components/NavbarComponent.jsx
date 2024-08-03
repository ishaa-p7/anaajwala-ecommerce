import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSelector , useDispatch } from "react-redux";
import {signoutUser} from '../features/user/userSlice.js'

export default function NavbarComponent() {

  const currentUser = useSelector(state => state.user)
  const dispatch = useDispatch()

  return (
    <div className="">
      <Navbar fluid rounded>
        <Navbar.Brand href="">
          {/* <img
          src="/react.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite React Logo"
        /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          {currentUser.user ? (<><h4 className="text-xl font-medium mr-6 my-auto">@{currentUser.user.username}</h4></>) : <Link to="/login"><Button>Login</Button></Link>}
          {currentUser.user ? (<><Button onClick={()=>dispatch(signoutUser())}>Logout</Button></>) : null}
          
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
