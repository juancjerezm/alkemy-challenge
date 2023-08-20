//Libraries
import { Switch, Route } from "react-router-dom";

//Components
import Login from "./components/Login";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Detalle from "./components/Detalle";

//Styles
import "./css/bootstrap.min.css";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 ">
      <Header />
      <div className="container mt-3">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/listado" component={Listado} />
          <Route path="/detalle" component={Detalle} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
