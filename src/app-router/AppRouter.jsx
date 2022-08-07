import React, { useContext } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../contexts/AuthContext";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import Details from "../pages/Details";
import Login from "../pages/Login";
import NewBlog from "../pages/NewBlog";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import UpdateBlog from "../pages/UpdateBlog";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/details/:id" element={<PrivateRouter />}>
          <Route path="" element={<Details />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/newblog" element={<NewBlog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/updateblog/:id" element={<PrivateRouter />}>
          <Route path="" element={<UpdateBlog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
