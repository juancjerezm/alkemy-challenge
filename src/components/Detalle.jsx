import React from "react";
import { useParams } from "react-router-dom";

function Detalle() {
  const {id} = useParams();
  console.log(id);

  return <div>detalle</div>;
}

export default Detalle;
