import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../../redux/songsData/action";
import "./Home.css";

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSongs());
  }, []);

  const songs = useSelector((state) => state.songs.songsData);

  function handleRating(song, rating) {
    console.log(song, rating);
  }

  return (
    <section className="home">
      <div className="home__container">
        <div className="topSongs_container">
          <div className=" table-top">
            <h2 className="table-top__title">Top 10 Songs</h2>
            <button className="addSongBtn">+ Add Song</button>
          </div>
          <table className="topSongs_table">
            <thead>
              <tr>
                <th>Artwork</th>
                <th>Song</th>
                <th>Date Of Release</th>
                <th>Artist</th>
                <th>Rating</th>
                <th>Rate</th>
              </tr>
            </thead>
            <tbody>
              {songs.map((song) => (
                <tr key={song._id}>
                  <td>
                    <img
                      src={song.cover}
                      alt="artwork"
                      className="topSongs_table__img"
                    />
                  </td>
                  <td>{song.name}</td>
                  <td>{song.dor}</td>
                  <td>
                    {song.artists.map((artist) => (
                      <p key={artist}>{artist}</p>
                    ))}
                  </td>
                  <td>{song.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
