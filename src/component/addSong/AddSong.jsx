import "./AddSong.css";
import { GrClose } from "react-icons/gr";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNewSong } from "../../redux/songsData/action";
import { postNewArtist } from "../../redux/artistData/action";
import { useNavigate } from "react-router-dom";

export const AddSong = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const artists = useSelector((state) => state.artists.artistsData);
  const [isVisible, setIsVisible] = useState(false);
  const [artist, setArtist] = useState([]);
  const [selectedArtist, setSelectedArtist] = useState([]);
  const [formData, setFormData] = useState({});
  const [artistFormData, setArtistFormData] = useState({});

  useEffect(() => {
    setArtist(artists);
    return () => {};
  }, [artists]);

  useEffect(() => {
    setFormData({
      ...formData,
      artists: selectedArtist,
    });

    return () => {};
  }, [selectedArtist]);

  function searchArtist(e) {
    const search = e.target.value;
    const filteredArtists = artists.filter((artist) =>
      artist.name.toLowerCase().includes(search.toLowerCase())
    );
    setArtist(filteredArtists);
  }

  function handleArtistSelect(e) {
    const { name, checked } = e.target;
    if (checked) {
      setSelectedArtist([...selectedArtist, name]);
    } else {
      setSelectedArtist(selectedArtist.filter((artist) => artist !== name));
    }
  }

  function handleForm(e) {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  }

  function handleArtistForm(e) {
    const { id, value } = e.target;
    setArtistFormData({ ...artistFormData, [id]: value });
  }

  function submitNewSong(e) {
    e.preventDefault();
    dispatch(postNewSong(formData));
    e.target.reset();
    navigate("/");
  }

  function submitNewArtist(e) {
    e.preventDefault();
    dispatch(postNewArtist(artistFormData));
    e.target.reset();
    setIsVisible(false);
  }

  return (
    <section className="addsong">
      <div className="addsong_container">
        <h1 className="addsong_title">Add a new Song</h1>
        <form className="addsong_form" onSubmit={submitNewSong}>
          <div className="addsong_form_section">
            <label className="addsong_label" htmlFor="song-name">
              Song Name
            </label>
            <input
              className="addsong_input"
              type="text"
              id="name"
              placeholder="Enter song name"
              onChange={handleForm}
              required
            />
          </div>
          <div className="addsong_form_section">
            <label className="addsong_label" htmlFor="song-dor">
              Date Released
            </label>
            <input
              className="addsong_input"
              type="date"
              id="dor"
              placeholder="dd/mm/yyyy"
              onChange={handleForm}
              required
            />
          </div>
          <div className="addsong_form_section">
            <label className="addsong_label" htmlFor="song-artwork">
              Cover Image
            </label>
            <input
              className="addsong_input"
              type="url"
              id="cover"
              placeholder="Enter image url"
              onChange={handleForm}
              required
            />
          </div>
          <div className="addsong_form_section_artist">
            <label className="addsong_label" htmlFor="song-artists">
              Artists
            </label>
            <div className="addsong_form_section__artistdiv">
              <input
                className="addsong_input"
                type="text"
                id="artists"
                placeholder="Search Artists"
                onChange={searchArtist}
              />
              <div className="artist_section_results">
                {artist.map((artist, i) => (
                  <div className="artist_section_select" key={i}>
                    <p>{artist.name}</p>
                    <input
                      className="artist_section_checkbox"
                      type="checkbox"
                      name={artist._id}
                      id={artist._id}
                      onClick={handleArtistSelect}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="addsong_form_bottom_section">
            <div className="addsong_form_buttons_section">
              <input
                type="button"
                value="Cancel"
                className="addsong_form_cancelbtn"
                onClick={() => navigate("/")}
              />
              <input type="submit" className="addsong_form_submitbtn" />
            </div>
            <p
              className="addsong_form_add_artist"
              onClick={() => {
                setIsVisible(true);
              }}
            >
              + Add Artist
            </p>
          </div>
        </form>
      </div>
      <div className={isVisible ? "addartist" : "addartist display-none"}>
        <div className="addartist_innerdiv">
          <div className="addartist_container">
            <div className="addartist_topdiv">
              <h1 className="addartist_title">Add a new Artist</h1>
              <GrClose
                className="addartist_closebtn"
                onClick={() => {
                  setIsVisible(false);
                }}
              />
            </div>
            <form className="addartist_form" onSubmit={submitNewArtist}>
              <div className="addartist_form_section">
                <label className="addartist_label" htmlFor="artist-name">
                  Artist Name
                </label>
                <input
                  className="addartist_input"
                  type="text"
                  id="name"
                  placeholder="Enter artist name"
                  onChange={handleArtistForm}
                  required
                />
              </div>
              <div className="addartist_form_section">
                <label className="addartist_label" htmlFor="artist-dob">
                  Date of Birth
                </label>
                <input
                  className="addartist_input"
                  type="date"
                  id="dob"
                  placeholder="dd/mm/yyyy"
                  onChange={handleArtistForm}
                  required
                />
              </div>
              <div className="addartist_form_section">
                <label className="addartist_label" htmlFor="artist-Bio">
                  Bio
                </label>
                <textarea
                  className="addartist_input"
                  type="text"
                  id="bio"
                  placeholder="Enter artist bio"
                  onChange={handleArtistForm}
                  required
                />
              </div>
              <div className="addartist_bottomdiv">
                <input
                  type="button"
                  value="Cancel"
                  className="addartist_cancelbtn"
                  onClick={() => {
                    setIsVisible(false);
                  }}
                />
                <input type="submit" className="addartist_submitbtn" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
