import { Home } from "../component/home/Home";
import { Route, Routes } from "react-router-dom";
import { Login } from "../component/login/Login";
import { Signup } from "../component/register/Signup";
import { AddSong } from "../component/addSong/AddSong";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchartists } from "../redux/artistData/action";
import { fetchSongs } from "../redux/songsData/action";
import { PrivateRoute } from "./PrivateRoute";
import { userToken } from "../redux/userData/action";
import Songs from "../component/songs/Songs";

export const AllRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSongs()); // fetching songs
    dispatch(fetchartists()); // fetching artists
    return () => {};
  }, []);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(userToken());
    }
    return () => {};
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/add-song"
          element={
            <PrivateRoute>
              <AddSong />
            </PrivateRoute>
          }
        />
        <Route path="/songs" element={<Songs />} />
      </Routes>
    </>
  );
};
