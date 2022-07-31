import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login/Login";
import RequireAuth from "./components/Login/RequireAuth/RequireAuth";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          {/* <Route
            exact
            path="/"
            element={
              <RequireAuth>
                <Home></Home>
              </RequireAuth>
            }
          />
          <Route
            exact
            path="/home"
            element={
              <RequireAuth>
                <Home></Home>
              </RequireAuth>
            }
          /> */}
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route exact path="/" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
