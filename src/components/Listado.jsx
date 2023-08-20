import { Redirect, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";

function Listado() {
  let token = localStorage.getItem("token");

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const endPoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=32311e6f3fda844baff01df6360d0df1&language=es-ES&page=1";
    axios
      .get(endPoint)
      .then((res) => {
        const apiData = res.data;
        setMoviesList(apiData.results);
      })
      .catch((error) => {
        swal(<h2>Error Intenta mas tarde</h2>);
      });
  }, [setMoviesList]);

  console.log(moviesList);

  return (
    <>
      {!token && <Redirect to="/" />}
      <div className="row">
        {moviesList.map((movie, idx) => {
          return (
            <div className="col-3" key={idx}>
              <div className="card my-4" style={{ width: "18rem" }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {movie.title.substring(0, 30)}...
                  </h5>
                  <p className="card-text">
                    {movie.overview.substring(0, 100)}...
                  </p>
                  <Link
                    to={`/detalle?id=${movie.id}`}
                    className="btn btn-primary"
                  >
                    View Detail
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Listado;
