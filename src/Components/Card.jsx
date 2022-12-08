import React, { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";




const Card = ({ name, username, id, objeto }) => {
  const [clase, setClase] = useState(objeto)
  const { theme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;
  const addFav = (agregado)=>{
    const favouriteDentist = localStorage.getItem('dentistFav')
    if(favouriteDentist){

      let favoritesParsed = JSON.parse(favouriteDentist)
      const filteredDentist = favoritesParsed.filter(item => item.id !== agregado.id)
      const doesExist = filteredDentist.length !== favoritesParsed.length;

      doesExist ? favoritesParsed = filteredDentist : favoritesParsed.push(agregado)
      doesExist ? setClase('favButton') : setClase('xButton') 
      localStorage.setItem('dentistFav', JSON.stringify(favoritesParsed))
      console.log(favoritesParsed)
      
    } else {
      localStorage.setItem('dentistFav', JSON.stringify([agregado]))
      console.log("2")
    }
  }
  return (
    <div className={`card ${isDarkMode ? "dark" : "light"}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="/images/doctor.jpg" alt="odontologo" class="odontologo"/>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={"/dentist/" + id}>{name}</Link>
        <p>{username}</p>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        
        <button onClick={() => addFav({ name, username, id })} className={clase}></button>
    </div>
  );
};

export default Card;
