import { Home } from "../component/home/Home";
import { Route, Routes } from "react-router-dom";
import { Login } from "../component/login/Login";
import { Signup } from "../component/register/Signup";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};
