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
    projects="#projects"
    moreinfo="#more-info"
    ctt="#ctt"
    />
    <Hero>
      <Card id="home"
        name="ADRIEL MIÑO"
        desc="~EN CONSTRUCCIÓN~ ... 
        Soy creativo y minimalista. Intento crear soluciones si no las puedo encontrar. Me gustan las artes en general, pero mis favoritas son la música y la programación.
        Bienvenidos a mi portfolio!"
        imgUrl={profImg}
      >
        <Grid items={MyDevLang} />
      </Card>
    </Hero>

    <Scaffold id="projects" title="PROYECTOS">
      <Grid items={Projects} />
    </Scaffold>

    <Scaffold id="contact" title="CONTACTO">
      <Grid items={Social} />
    </Scaffold>
  </React.StrictMode>
);
