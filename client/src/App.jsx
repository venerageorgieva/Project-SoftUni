import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

// import * as authService from "./services/authService.js";
// import AuthContext from "./contexts/authContext.js";
import Path from "./paths.js";

import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Footer from "./components/footer/Footer.jsx";
import About from "./components/about/About.jsx";
import Blog from "./components/blog/Blog.jsx";
// import GameCreate from "./components/game-create/GameCreate.jsx";
// import Login from "./components/login/Login.jsx";
// import Logout from "./components/logout/Logout.jsx";
// import Register from "./components/register/Register.jsx";
// import GameDetails from "./components/game-details/GameDetails.jsx";
function App() {
  return (
    // <AuthContext.Provider value={values}>
    <>
      <Header />
      <Routes>
        <Route path={Path.Home} element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </>

    //  {/* </AuthContext.Provider> */}
  );
}

export default App;
