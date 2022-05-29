import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";

// common
import SideBar from "../components/SideBar/Sidebar";
import SearchBar from "../containers/SearchBar";
// general topics sidebar
import Home from "../pages/HomePage";
import Discover from "../pages/DiscoverPage";
import Radio from "../pages/RadioPage";
import ForYou from "../pages/ForYouPage";
// your library pages sidebar
import Albums from "../pages/AlbumsPage";
import Artists from "../pages/ArtistsPage";
import Songs from "../pages/SongsPage";
import Playlists from "../pages/PlaylistsPage";
// Single Pages
import SingleArtist from "../pages/SingleArtistPage";
import SingleAlbum from "../containers/SingleAlbum";
import SingleRadio from "../pages/SingleRadioPage";
import SingleGenre from "../pages/SingleGenre";
// Others
import Error from "../pages/Error";
import { store } from "../redux/store";
import FavoriteMobilePage from "../pages/FavoritesMobilePage";

import "./App.css";

function App() {

  return (
    <React.Fragment>
      <div className="App">
        <SideBar />
        <Provider store={store}>
          <SearchBar />
          <Routes>
            <Route exact="true" path="/" element={<Home />}></Route>
            <Route exact="true" path="/discover" element={<Discover />}></Route>
            <Route exact="true" path="/radio" element={<Radio />}></Route>
            <Route exact="true" path="/foryou" element={<ForYou />}></Route>

            <Route exact="true" path="/albums" element={<Albums />}></Route>
            <Route exact="true" path="/artists" element={<Artists />}></Route>
            <Route exact="true" path="/songs" element={<Songs />}></Route>
            <Route exact="true" path="/playlists" element={<Playlists />}></Route>

            <Route exact="true" path="/artist/:id" element={<SingleArtist />} />
            <Route exact="true" path="/album/:id" element={<SingleAlbum />} />
            <Route exact="true" path="/genre/:id" element={<SingleGenre />} />
            <Route exact="true" path="/radio/:id" element={<SingleRadio />} />

            <Route exact="true" path="/favorites" element={<FavoriteMobilePage />} />

            <Route element={<Error />} />
          </Routes>
        </Provider>
      </div>
    </React.Fragment>
  );
}

export default App;
