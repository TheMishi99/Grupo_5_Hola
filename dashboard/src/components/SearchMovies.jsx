import React, { useEffect, useRef, useState } from "react";
import "../assets/css/SearchMovies.css";

function SearchMovies() {
  const [movies, setMovies] = useState({
    Response: "false",
    Search: [],
    totalResults: "0",
  });
  const inputKeyword = useRef();
  const [keyword, setKeyword] = useState("doctor");
  // Credenciales de API
  const apiKey = "9289bb3b";
  const [page, setPage] = useState(1);

  const getMovies = async () => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${keyword}&page=${page}`
      );
      const data = await response.json();

      setMovies(
        data ? data : { Response: "true", Search: [], totalResults: "0" }
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, [apiKey, keyword, page]);

  let searchMovie = (e) => {
    e.preventDefault();
    if (inputKeyword.current.value !== "") {
      setPage(1);
      setKeyword(inputKeyword.current.value);
    }
  };

  return (
    <div className="container-fluid">
      {apiKey !== "" ? (
        <>
          <div className="row my-4">
            <div className="col-12 col-md-6">
              {/* Buscador */}
              <form method="GET" onSubmit={(event) => searchMovie(event)}>
                <div className="form-group">
                  <label htmlFor="">Buscar por título:</label>
                  <input
                    type="text"
                    className="form-control"
                    ref={inputKeyword}
                  />
                </div>
                <button className="btn btn-info" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2>Películas para la palabra: {keyword}</h2>
            </div>
            <div className="page-buttons">
              <button
                onClick={() => {
                  setPage(page === 1 ? page : page - 1);
                }}
              >
                Anterior
              </button>
              <button
                onClick={() => {
                  setPage(
                    parseInt(movies.totalResults) <= 10 &&
                      page === parseInt(parseInt(movies.totalResults) / 10) + 1
                      ? page
                      : page + 1
                  );
                }}
              >
                Siguiente
              </button>
            </div>
            {/* Listado de películas */}
            {movies.Search.length > 0 &&
              movies.Search.map((movie, i) => {
                return (
                  <div className="col-sm-6 col-md-3 my-4" key={i}>
                    <div className="card shadow mb-4">
                      <div className="card-header py-3">
                        <h5 className="m-0 font-weight-bold text-gray-800">
                          {movie.Title}
                        </h5>
                      </div>
                      <div className="card-body">
                        <div className="text-center">
                          <img
                            className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                            src={movie.Poster}
                            alt={movie.Title}
                            style={{
                              width: "90%",
                              height: "400px",
                              objectFit: "cover",
                            }}
                          />
                        </div>
                        <p>{movie.Year}</p>
                      </div>
                    </div>
                    <div></div>
                  </div>
                );
              })}
            <div className="page-buttons">
              <button
                onClick={() => {
                  setPage(page === 1 ? page : page - 1);
                }}
              >
                Anterior
              </button>
              <button
                onClick={() => {
                  setPage(
                    parseInt(movies.totalResults) <= 10 &&
                      page === parseInt(parseInt(movies.totalResults) / 10) + 1
                      ? page
                      : page + 1
                  );
                }}
              >
                Siguiente
              </button>
            </div>
          </div>
          {movies.Search.length === 0 && (
            <div className="alert alert-warning text-center">
              No se encontraron películas
            </div>
          )}
        </>
      ) : (
        <div className="alert alert-danger text-center my-4 fs-2">
          Eyyyy... ¿PUSISTE TU APIKEY?
        </div>
      )}
    </div>
  );
}

export default SearchMovies;
