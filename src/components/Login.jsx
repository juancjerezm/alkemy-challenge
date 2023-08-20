import axios from "axios";
import swAlert from "@sweetalert/with-react";
import { useHistory, Redirect } from "react-router-dom";

function Login() {
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (email === "" || password === "") {
      swAlert(<h2>Los campos no pueden estar vacios</h2>);
      return;
    }

    if (email !== "" && !regexEmail.test(email)) {
      swAlert(<h2>Debes escribir una direccion de correo válida</h2>);
      return;
    }

    if (email !== "challenge@alkemy.org" || password !== "react") {
      swAlert(<h2>Credenciales inválidas</h2>);
      return;
    }

    axios
      .post("http://challenge-react.alkemy.org/", {
        email,
        password,
      })
      .then((res) => {
        swAlert(
          "Perfecto, ingresaste correctamente",
          "dale click para acontinuar",
          "success"
        );
        console.log(res.data);
        const tokenRecibido = res.data.token;
        localStorage.setItem("token", tokenRecibido);
        history.push("/listado");
      });
  };

  let token = localStorage.getItem("token");

  return (
    <>
      {token && <Redirect to="/listado" />}
      <div>
        <div className="mb-3 container mt-3">
          <h2>Formulario Login</h2>
          <form onSubmit={submitHandler}>
            <label className="form-label ">
              <span>Correo Electronico</span>
              <br />
              <input
                type="text"
                name="email"
                placeholder="name@example.com"
                className="form-control  rounded-3"
              />
            </label>
            <br />
            <label f className="form-label">
              <span>Contraseña</span> <br />
              <input
                type="password"
                name="password"
                className="form-control"
                aria-describedby="passwordHelpBlock"
              />
            </label>
            <br />
            <button type="submit" className="btn btn-success">
              Ingresar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
