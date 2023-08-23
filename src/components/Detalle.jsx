import { Redirect } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function Detalle() {
  const token = sessionStorage.getItem("token");
  let query = new URLSearchParams(window.location.search);
  let id = query.get("id");
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    const endPoint = `https://api.themoviedb.org/3/movie/${id}?api_key=32311e6f3fda844baff01df6360d0df1&language=es-ES`;

    axios
      .get(endPoint)
      .then((res) => {
        const apiData = res.data;
        setMovieDetail(apiData);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  // console.log(movieDetail.id);

  return (
    <>
      {!token && <Redirect to="/" />}
      {!movieDetail && <p>Cargando...</p>}
      {movieDetail && (
        <>
          <h2> Titulo: {movieDetail.title}</h2>
          <div className="row">
            <div className="col-4">
              <img
                className="img-fluid"
                src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
                alt="..."
              />
            </div>
            <div className="col-8">
              <h5>Fecha de estreno : {movieDetail.release_date}</h5>
              <h5>Reseña</h5>
              <p>{movieDetail.overview}</p>
              <h5>Rating : {movieDetail.vote_average}</h5>
              <h5>Géneros</h5>

              <ul>
                {movieDetail.genres.map((genre) => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Detalle;
