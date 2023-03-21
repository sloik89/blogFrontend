import { useState } from "react";
import { Navbar } from "./components";
import { Home } from "./pages";
import { WritePost, Settings, Login, Register, SinglePostPage } from "./pages/";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  const user = false;
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/write" element={user ? <WritePost /> : <Register />} />
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
