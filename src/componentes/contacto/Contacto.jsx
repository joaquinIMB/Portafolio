import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contacto.css"

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mt3s22k",
        "template_pegihce",
        form.current,
        "oM6TrKzIKxxiLE5pS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contenedor-formulario_contacto" id="contacto">
      <form className="formulario_contacto" ref={form} onSubmit={sendEmail}>
        <label className="label_contacto">Nombre:</label>
        <input className="input_contacto" type="text" name="user_name" required/>
        <label className="label_contacto">Email:</label>
        <input className="input_contacto" type="email" name="user_email" required/>
        <label className="label_contacto">Mensaje:</label>
        <textarea className="mensaje_contacto" name="message" required/>
        <button className="boton_contacto" type="submit" value="Send"><span>Enviar</span></button>
      </form>
    </div>
  );
};

export default Contacto;
