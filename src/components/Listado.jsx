import { useHistory } from "react-router-dom";
import { useEffect } from "react";

function Listado() {
  const history = useHistory();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token === null) {
      history.push("/");
    }
  }, []);

  return <h2>Soy un listado</h2>;
}

export default Listado;
