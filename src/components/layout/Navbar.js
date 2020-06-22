import React from "react";
import SignInLinks from "./SignInLinks";
import { BrowserRouter,Link } from "react-router-dom";


const Navbar = ()=>{
return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <Link to="/">Logout</Link>
 <SignInLinks/>
</nav>
)
}

export default Navbar;