import { Home } from "../component/home/Home";
import { Route, Routes } from "react-router-dom";
import { Login } from "../component/login/Login";
import { Signup } from "../component/register/Signup";
import { AddSong } from "../component/addSong/AddSong";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchartists } from "../redux/artistData/action";
import { fetchSongs } from "../redux/songsData/action";

export const AllRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongs("rating")); // fetching songs by rating
    dispatch(fetchartists("rating")); // fetching artists by rating
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-song" element={<AddSong />} />
      </Routes>
    </>
  );
};
