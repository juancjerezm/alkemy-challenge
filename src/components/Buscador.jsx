import { useHistory } from "react-router-dom";
import swal from "@sweetalert/with-react";

function Buscador() {
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    const keyword = e.target.keyword.value.trim();
    if (keyword.length === 0) {
      swal(<h2>Debes escribir una palabra clave</h2>);
    } else if (keyword.length < 4) {
      swal(<h2>Debes escribir mas de 4 caracteres</h2>);
    } else {
      e.target.keyword.value = "";
      history.push(`/resultados?keyWord=${keyword}`);
    }
  };

  return (
    <form className="d-flex align-items-center" onSubmit={submitHandler}>
      <label className="form-label mb-0 mx-2">
        <input
          type="text"
          name="keyword"
          placeholder="Buscar..."
          className="form-control  rounded-3"
        />
      </label>

      <button type="submit" className="btn btn-success ">
        Buscar
      </button>
    </form>
  );
}

export default Buscador;
