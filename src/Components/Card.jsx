import React from "react";
import { Link } from "react-router-dom";


const Card = ({ name, username, id }) => {

  const addFav = (agregado)=>{
    const favouriteDentist = localStorage.getItem('dentistFav')
    if(favouriteDentist){
      let favoritesParsed = JSON.parse(favouriteDentist)
      const filteredDentist = favoritesParsed.filter(item => item.id !== agregado.id)
      const doesExist = filteredDentist.length !== favoritesParsed.length;

      doesExist ? favoritesParsed = filteredDentist : favoritesParsed.push(agregado)
      localStorage.setItem('dentistFav', JSON.stringify(favoritesParsed))
      console.log(favoritesParsed)
    } else {
        localStorage.setItem('dentistFav', JSON.stringify([agregado]))
    }
  }
  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <img src="/images/doctor.jpg" alt="odontologo" class="odontologo"/>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        <Link to={"/dentist/" + id}>{name}</Link>
        <p>{username}</p>
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={() => addFav({ name, username, id })} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
