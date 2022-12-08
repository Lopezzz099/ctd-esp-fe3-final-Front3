
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Components/Card";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [dentista, setDentista] = useState(JSON.parse(localStorage.getItem('dentistFav')))
  const getData = () => {
    return JSON.parse(localStorage.getItem('dentistFav'))
  }
  useEffect(() => {
    setDentista(getData())
  }, [])
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {dentista.map(odontologo => <Card name = {odontologo.name} username = {odontologo.username} id = {odontologo.id} objeto = {'xButton'}/>)}
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
