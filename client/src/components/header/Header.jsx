import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext.js";
export default function Header(){
    return(
        <header>
        <nav className="nav-bar">
          <img src="images/logo.png" alt="" />
          <h1 className="">PediatricianPlus</h1>
  
          <a href="/">Home</a>
          <a href="about.html">About</a>
          <a href="blog.html">Blog</a>
          <a href="create.html">Create Post</a>
  
          <div className="side-menu">
            <a href="login.html">Login</a>
            <a href="register.html">Register</a>
            <a href="logout">Logout</a>
          </div>
        </nav>
      </header>
    )
}

