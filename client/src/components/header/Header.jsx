import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext.js";

export default function Header() {
  const {isAuthenticated, email } = useContext(AuthContext);
 
  return (
    <header>
      <nav className='nav-bar'>
        <img src='images/logo.png' alt='' />
        <Link to='/'>
          <h1 className=''>PediatricianPlus</h1>
        </Link>

        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/posts'>Blog</Link>
        {isAuthenticated && (
          <>
            <Link to='/create-post'>Create Post</Link>
            <div className='side-menu'>
              <span>Welcome, {email}</span>
              <Link to='/logout'>Logout</Link>
            </div>
          </>
        )}

        {!isAuthenticated && (
          <div className='side-menu'>
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
          </div>
        )}
      </nav>
    </header>
  );
}
