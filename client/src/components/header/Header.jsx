import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext.js";

export default function Header() {
  const { isAuthenticated, username } = useContext(AuthContext);

  return (
    <header>
      <nav className='nav-bar'>
        <img src='images/logo.png' alt='' />
        <Link to='/'>
          <h1 className=''>PediatricianPlus</h1>
        </Link>

        <a href='/'>Home</a>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
        {isAuthenticated && (
          <>
            <Link to='/create-post'>Create Post</Link>
            <div className='side-menu'>
              <span>Welcome,Dr. {username}</span>
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
