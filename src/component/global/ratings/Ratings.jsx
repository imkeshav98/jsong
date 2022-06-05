import "./Rating.css";
import { FaStar } from "react-icons/fa";
import { useEffect, useState } from "react";

export const Ratings = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    return () => {};
  }, [rating]);

  function handleRating(e) {
    setRating(e);
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
