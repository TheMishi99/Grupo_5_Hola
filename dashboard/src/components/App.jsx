import React from "react";
import SideBar from "./SideBar";
import ContentWrapper from "./ContentWrapper";
import GenresInDb from "./GenresInDb";
import LastMovieInDb from "./LastMovieInDb";
import ContentRowMovies from "./ContentRowMovies";
import NotFound from "./NotFound";
import { Route, Routes } from "react-router-dom";
import SearchMovies from "./SearchMovies";

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        {/*<!-- End Microdesafio 2 -->*/}
        <Routes>
          <Route path="/" element={<ContentWrapper />} />
          <Route path="/GenresInDb" element={<GenresInDb />} />
          <Route path="/LastMovieInDb" element={<LastMovieInDb />} />
          <Route path="/SearchMovies" element={<SearchMovies />} />
          <Route
            path="/ContentRowMovies"
            element={
              <div className="container-fluid">
                <ContentRowMovies />
              </div>
            }
          />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
