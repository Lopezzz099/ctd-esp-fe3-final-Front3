import React, { useContext } from "react";
import { useState } from "react";
import { ContextGlobal } from "./utils/global.context";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombreCompleto, cambiarNombreCompleto] = useState({campo: '', valido: null});
  const [email, cambiarEmail] = useState({campo: '', valido: null});
  const [formularioValido, cambiarFormularioValido] = useState(null);
  const { theme } = useContext(ContextGlobal);
  
  const isDarkMode = theme === "dark" || false;
  const onChange = (e) =>{
    cambiarNombreCompleto({...nombreCompleto, campo: e.target.value})
  }
  const onChange2 = (e) =>{
    cambiarEmail({...email, campo: e.target.value})
  }
  const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  }
  const validacion = () =>{
    if(expresiones.nombre.test(nombreCompleto.campo)){
      cambiarNombreCompleto({...nombreCompleto, valido: 'true'})
    } else {
      cambiarNombreCompleto({...nombreCompleto, valido: 'false'})

    }
  }
  const validacion2 = () =>{
    if(expresiones.correo.test(email.campo)){
      cambiarEmail({...email, valido: 'true'})
    } else {
      cambiarEmail({...email, valido: 'false'})
    }
  }
  const onSubmit = (e) =>{
    e.preventDefault();
    if(email.valido === 'true' && nombreCompleto.valido === 'true'){
      cambiarFormularioValido(true)
      let validacionTrue = document.getElementById("validacionVerdadera");
      let validacionFalse = document.getElementById("validacionFalsa");
      validacionFalse.innerHTML = "";
      validacionTrue.innerHTML = "<p>Gracias " + nombreCompleto.campo + ", te contactaremos cuanto antes via mail. </p>";
    } else {
      cambiarFormularioValido(false)
      let validacionFalse = document.getElementById("validacionFalsa");
      validacionFalse.innerHTML = "<p>Por favor verifique su informacion nuevamente</p>";
      let validacionTrue = document.getElementById("validacionVerdadera");
      validacionTrue.innerHTML = "";
    }
  }
  
  return (
    <div >
      <form onSubmit={onSubmit}>
          <label htmlFor="nombreApellido"></label>
          <input 
            type="text" 
            id="nombreApellido" 
            placeholder="Full name" 
            value={nombreCompleto.campo} 
            onChange={onChange}
            onKeyUp={validacion}
            onBlur={validacion}
          />
          <label htmlFor="email"></label>
          <input 
            type="text" 
            id="email" 
            placeholder="Email" 
            value={email.campo} 
            onChange={onChange2}
            onKeyUp={validacion2}
            onBlur={validacion2}
          />
          <button type="submit" >Submit</button>
      </form>
      <div id="validacionFalsa"></div>
      <div id="validacionVerdadera"></div>
    </div>
  );
};

export default Form;
