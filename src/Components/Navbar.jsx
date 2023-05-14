import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextGlobal } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, setDarkTheme, setLightTheme } =
  useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;
  const changeTheme = () => {
    if (isDarkMode) setLightTheme();
    else setDarkTheme();
  };
  return (
    <nav className={`nav ${ isDarkMode ? "dark" : "light" }`}>
      <p className='logo'><span className='D'>D</span>H Odonto</p>
      <div className='rutas'>
      <Link to={"/"}>
        Home
      </Link>
      <Link to={"/contact"}>
        Contact
      </Link>
      <Link to={"/favs"}>
        Favs
      </Link>
      
      {/*boton de cambiar tema*/}
      <div className="toggleWrapper">
        <input type="checkbox" className="dn" id="dn"></input>
        <label htmlFor="dn" className="toggle"onClick={changeTheme}>
        <span className="toggle__handler">
            <span className="crater crater--1"></span>
            <span className="crater crater--2"></span>
            <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
        </label>
      </div>
      </div>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    </nav>
  )
}

export default Navbar