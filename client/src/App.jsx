import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import * as authService from "./services/authService.js";
import Path from "./paths.js";
import AuthContext from "./contexts/authContext.js";

import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import About from "./components/about/About.jsx";
import Blog from "./components/blog/Blog.jsx";
import CreatePost from "./components/create-post/CreatePost.jsx";
import Login from "./components/login/Login.jsx";
import Register from "./components/register/Register.jsx";
import Logout from "./components/logout/Logout.jsx";
import PostDetails from "./components/post-details/PostDetails.jsx";
import EditPost from "./components/edit-post/EditPost.jsx";

import AuthGuard from "./components/guards/AuthGuard.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(() => {
    localStorage.removeItem("accessToken");

    return {};
  });

  const loginSubmitHandler = async (values) => {
    const result = await authService.login(values.email, values.password);

    setAuth(result);
    localStorage.setItem("accessToken", result.accessToken);
    navigate(Path.Home);
  };

  const registerSubmitHandler = async (values) => {
    const result = await authService.register(values.email, values.password);

    setAuth(result);
    localStorage.setItem("accessToken", result.accessToken);

    navigate(Path.Home);
  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem("accessToken");
  };
  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    userId:auth._id,
    isAuthenticated: !!auth.accessToken,
  };
  return (
    <ErrorBoundary>
    <AuthContext.Provider value={values}>
      <>
        <Header />
        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/posts' element={<Blog />} />
          <Route path='/login' element={<Login />} />
          <Route path='/posts/:postId' element={<PostDetails />} />
          <Route path='/register' element={<Register />} />

          <Route element={<AuthGuard />}>
          <Route path='/create-post' element={<CreatePost />}/>
          <Route path={Path.PostEdit} element={<EditPost />} />
          <Route path={Path.Logout} element={<Logout />} />

          </Route>
        </Routes>
        <Footer />
      </>
    </AuthContext.Provider>
    </ErrorBoundary>
  );
}

export default App;
