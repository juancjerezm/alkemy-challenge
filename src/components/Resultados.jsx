import { Redirect, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "@sweetalert/with-react";

function Resultados() {
  let token = sessionStorage.getItem("token");
  let query = new URLSearchParams(window.location.search);
  let keyword = query.get("keyWord");
  console.log(keyword);
  const [moviResults, setMovieResults] = useState([]);

  //   https://api.themoviedb.org/3/search/movie?api_key=32311e6f3fda844baff01df6360d0df1&language=es-ES&query=spider

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/search/movie?api_key=32311e6f3fda844baff01df6360d0df1&language=es-ES&query=${keyword}`;
    axios
      .get(endPoint)
      .then((res) => {
        const apiResults = res.data.results;
        if (apiResults.length === 0) {
          swal(<h2>Tu busqueda no arroja resultados</h2>);
        }
        setMovieResults(apiResults);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [keyword]);
  console.log(moviResults);

  return (
    <>
      {!token && <Redirect to="/" />}
      {moviResults.length === 0 && <h3>No existen resultado</h3>}
      <div className="row">
        {moviResults.map((movie, idx) => {
          return (
            <div className="col-4" key={idx}>
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

export default Resultados;
