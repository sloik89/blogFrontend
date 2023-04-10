import { useState } from "react";
import { Navbar } from "./components";
import { Home } from "./pages";
import {
  WritePost,
  Settings,
  Login,
  Register,
  SinglePostPage,
  About,
  Contact,
} from "./pages/";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useGlobalContext } from "./context/context";

function App() {
  const { user } = useGlobalContext();
  console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/write" element={user ? <WritePost /> : <Login />} />
          <Route
            path="/settings"
            element={user ? <Settings /> : <Register />}
          />
          <Route path="/post/:postId" element={<SinglePostPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
