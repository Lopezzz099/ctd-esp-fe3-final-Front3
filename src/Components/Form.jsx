import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
          <label htmlFor="nombreApellido"></label>
          <input type="text" id="nombreApellido" placeholder="Full name"/>
          <label htmlFor="email"></label>
          <input type="text" id="email" placeholder="Email"/>
          <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
