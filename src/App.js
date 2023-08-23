//Libraries
import { Switch, Route } from "react-router-dom";

//Components
import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalle from "./components/Detalle";
import Resultados from "./components/Resultados";

//Styles
import "./css/bootstrap.min.css";
import "./css/app.css";

//--------------------------------------------------------------------------

function App() {
  const favMovies = localStorage.getItem("favs");
  let tempMoviesinFavs;
  if (favMovies === null) {
    tempMoviesinFavs = [];
  } else {
    tempMoviesinFavs = JSON.parse(favMovies);
  }
  const addOrRemoveFavs = (e) => {
    const btn = e.currentTarget;
    const parent = btn.parentElement;
    const imgUrl = parent.querySelector("img").getAttribute("src");
    const title = parent.querySelector("h5").innerText;
    const overWiev = parent.querySelector("p").innerText;
    const movieData = { imgUrl, title, overWiev, id: btn.dataset.movieId };
    let movieIsInArray = tempMoviesinFavs.find((oneMovie) => {
      return oneMovie.id === movieData.id;
    });

    if (!movieIsInArray) {
      tempMoviesinFavs.push(movieData);
      localStorage.setItem("favs", JSON.stringify(tempMoviesinFavs));
      console.log("se agrego correctamente");
    } else {
      let moviesRest = tempMoviesinFavs.filter((oneMovie) => {
        return oneMovie.id !== movieData.id;
      });
      

      localStorage.setItem("favs", JSON.stringify(moviesRest));
      console.log("elimino");
    }
  };

  //------------------------------------------------------------------------------

  return (
    <div className="d-flex flex-column min-vh-100 ">
      <Header />
      <div className="container mt-3">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route
            path="/listado"
            render={(props) => (
              <Listado addOrRemoveFavs={addOrRemoveFavs} {...props} />
            )}
          />
          <Route path="/detalle" component={Detalle} />
          <Route path="/resultados" component={Resultados} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
