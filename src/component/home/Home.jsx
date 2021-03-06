import { useSelector } from "react-redux";
import { Ratings } from "../global/ratings/Ratings";
import "./Home.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const Home = () => {
  const songs = useSelector((state) => state.songs.songsData);
  const artists = useSelector((state) => state.artists.artistsData);

  const [sortedSongs, setSortedSongs] = useState([]);
  const [sortedArtists, setSortedArtists] = useState([]);

  useEffect(() => {
    const sortedSongs = [...songs].sort((a, b) => b.rating - a.rating);
    const sortedArtists = [...artists].sort(
      (a, b) => b.avgRating - a.avgRating
    );

    let start = 0;
    let songend = sortedSongs.length <= 10 ? sortedSongs.length : 10;
    let artistend = sortedArtists.length <= 10 ? sortedArtists.length : 10;

    let top10songs = sortedSongs.slice(start, songend);
    let top10artists = sortedArtists.slice(start, artistend);

    setSortedSongs(top10songs);
    setSortedArtists(top10artists);
  }, [songs, artists]);

  return (
    <section className="home">
      <div className="home__container">
        <div className="topSongs_container">
          <div className=" table-top">
            <h2 className="table-top__title">Top 10 Songs</h2>
            <div>
              <Link to="/add-song">
                <button>+ Add Song</button>
              </Link>
              <Link to="/songs">
                <button>All Songs</button>
              </Link>
            </div>
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
              {sortedSongs.map((song) => (
                <tr key={song._id}>
                  <td>
                    <a
                      href={`https://open.spotify.com/search/${song.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={song.cover}
                        alt="artwork"
                        className="topSongs_table__img"
                      />
                    </a>
                  </td>
                  <td>{song.name}</td>
                  <td>{song.dor}</td>
                  <td className="songs_table__artists">
                    {song.artists.map((artist) => (
                      <p key={artist._id}>
                        {artist.name}
                        {","}
                      </p>
                    ))}
                  </td>
                  <td>{song.rating}</td>
                  <td>{<Ratings songId={song._id} />}</td>
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
              {sortedArtists.map((artist) => (
                <tr key={artist._id}>
                  <td>{artist.name}</td>
                  <td>{artist.dob}</td>
                  <td>{artist.avgRating}</td>
                  <td className="artist_table__songs">
                    {artist.songs.length > 0
                      ? artist.songs.map((song) => (
                          <p key={song._id}>
                            {song.name}
                            {", "}
                          </p>
                        ))
                      : "No Songs"}
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
