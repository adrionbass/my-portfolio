import React from "react";
import ReactDOM from "react-dom/client";
import Hero from "./components/Hero";
import "./index.css";
import Card from "./components/Card";
import Grid from "./components/Grid";
import profImg from "./assets/yo-cuadrado.jpg";
import MyDevLang from "./utils/MyDevLang";
import Social from "./utils/Social";
import Scaffold from "./components/Scaffold";
import Projects from "./utils/projects/Projects";
import Navbar from "./components/Navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Navbar title="ADRIEL"
    home="#"
    link2="#projects"
    link3="#more-info"
    link4="#ctt"
    lastBtn="#https://drive.google.com/file/d/1Yn6DRmrvu1zjo-cM-NAfAYm7yyAcLFBV/view?usp=sharing"
    />
    <Hero>
      <Card id="home"
        name="ADRIEL MIÑO"
        desc="~EN CONSTRUCCIÓN~ ... 
        Me gusta todo lo que tenga que ver con lo creativo, por ejemplo, las artes en general. Pero mis favoritas son la música y la programación.
        Bienvenidos a mi portfolio!"
        imgUrl={profImg}
      >
        <Grid items={MyDevLang} />
      </Card>
    </Hero>

    <Scaffold id="projects" title="PROYECTOS">
      <Grid items={Projects} />
    </Scaffold>

    <Scaffold id="more-info" title="MAS SOBRE MI">


     <p>Asi es, dije que considero a la programación como un arte, y puedo demostrarlo. Agregar imágenes.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    </Scaffold>

    <Scaffold id="ctt" title="CONTACTO">
      <Grid items={Social} />
    </Scaffold>
  </React.StrictMode>
);
