import React from "react";
import styled from "styled-components";
import logoInstagram from "./../assets/img/instagram.png";
import logoLinkedIn from "./../assets/img/linkedIn.png";
import logoCv from "./../assets/img/cv.png";

const RedesContacto = () => {
  return (
    <ListaDesordenada>
      <li>
        <Enlace
          href="https://www.instagram.com/joaquinexequiell/"
          target="_blank"
          rel="noreferrer"
        >
          <Logo src={logoInstagram} />
        </Enlace>
      </li>
      <li>
        <Enlace
          href="https://www.linkedin.com/in/joaquin-imbriago"
          target="_blank"
          rel="noreferrer"
        >
          <Logo src={logoLinkedIn} />
        </Enlace>
      </li>
      <li>
        <Enlace
          href="https://drive.google.com/file/d/1floNk0KLDWtbT4wul0L84_PwQOLj5BH3/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
        >
          <Logo src={logoCv} />
        </Enlace>
      </li>
    </ListaDesordenada>
  );
};

const Logo = styled.img`
  fill: #ffffff;
  width: 2.5rem;
  height: auto;
`;
const ListaDesordenada = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  gap: 1.2rem;
  width: 30%;
  align-content: center;
  text-align: center;
`;

const Enlace = styled.a`
  text-decoration: none;
`;
export default RedesContacto;
