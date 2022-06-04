import { Home } from "../component/home/Home";
import { Route, Routes } from "react-router-dom";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
