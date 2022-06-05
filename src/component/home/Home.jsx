import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchartists } from "../../redux/artistData/action";
import { fetchSongs } from "../../redux/songsData/action";
import { Ratings } from "../global/ratings/Ratings";
import "./Home.css";

export const Home = () => {
  const songs = useSelector((state) => state.songs.songsData);
  const artists = useSelector((state) => state.artists.artistsData);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSongs("rating")); // fetching songs by rating
    dispatch(fetchartists("rating")); // fetching artists by rating
  }, []);

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
                  <td>{<Ratings />}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="topArtists_container">
          <div className=" table-top">
            <h2 className="table-top__title">Top 10 Artist</h2>
          </div>
          <table className="topArtists_table">
            <thead>
              <tr>
                <th>Artists</th>
                <th>Date of Birth</th>
                <th>Avg. Rating</th>
                <th>Songs</th>
              </tr>
            </thead>
            <tbody>
              {artists.map((artist) => (
                <tr key={artist._id}>
                  <td>{artist.name}</td>
                  <td>{artist.dob}</td>
                  <td>{artist.avgRating}</td>
                  <td className="artist_table__songs">
                    {artist.songs.map((song) => (
                      <p key={song}>
                        {song}
                        {", "}
                      </p>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
