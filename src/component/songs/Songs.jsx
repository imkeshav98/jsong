import "./Songs.css";
import ".././home/Home.css";
import { useSelector } from "react-redux";
import { Ratings } from "../global/ratings/Ratings";
import { useEffect, useState } from "react";

function Songs() {
  const songdata = useSelector((state) => state.songs.songsData);
  const [songs, setSongs] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setSongs(songdata);
  }, [songdata]);

  useEffect(() => {
    const filteredSongs = songdata.filter(
      (song) =>
        song.name.toLowerCase().includes(query.toLowerCase()) ||
        song.artists.some((artist) =>
          artist.name.toLowerCase().includes(query.toLowerCase())
        )
    );
    setSongs(filteredSongs);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleSearch = (e) => {
    const search = e.target.value;
    setQuery(search);
  };

  return (
    <section className="songs">
      <div className="home__container">
        <div className="topSongs_container">
          <div className=" table-top">
            <h2 className="table-top__title">New Added Songs</h2>
            <input
              type="text"
              className="searchSongs"
              onChange={handleSearch}
              placeholder="Search song, artist"
            />
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
      </div>
    </section>
  );
}

export default Songs;
