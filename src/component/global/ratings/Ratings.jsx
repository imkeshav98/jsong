import "./Rating.css";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rateSong } from "../../../redux/songsData/action";
import { useNavigate } from "react-router-dom";

export const Ratings = ({ songId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userStatus = useSelector((state) => state.user.isUserLoggedIn);
  const user = useSelector((state) => state.user.userData.user);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [data, setData] = useState({});

  useEffect(() => {
    if (userStatus && rating > 0) {
      setData({
        songId: songId,
        userId: user._id,
        rating: rating,
      });
    }
    return () => {};
  }, [rating]);

  useEffect(() => {
    if (userStatus && rating > 0) {
      dispatch(rateSong(data));
    }
    return () => {};
  }, [data]);

  function handleRating(e) {
    userStatus ? setRating(e) : navigate("/login");
  }

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleRating(ratingValue)}
            />
            <FaStar
              className="star"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
              color={ratingValue <= (hover || rating) ? "#5278c7" : "#b4c5e7"}
            />
          </label>
        );
      })}
    </div>
  );
};
