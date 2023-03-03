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
import Slider from "./components/Slider";
import MoreAboutMe from "./utils/More";
import Navbar from "./components/Navbar";
import GenericContainer from "./components/GenericContainer";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar
      title="ADRIEL"
      home="#"
      link2="#projects"
      link3="#more-info"
      link4="#ctt"
      lastBtn="https://drive.google.com/file/d/1Yn6DRmrvu1zjo-cM-NAfAYm7yyAcLFBV/view?usp=sharing"
    />
    <Hero>
      <Card id="home" name="ADRIEL MIÑO">
        <img src={profImg} alt="profImg" className="img-perf" />

        <Scaffold
          title="ADRIEL MIÑO"
          subtitle="Front-end dev"
          info={
            <p>
              Si algo requiere del uso de creatividad, seguramente me gusta, por
              ejemplo, las artes, o la programación. Bienvenidos a mi portfolio.
            </p>
          }
        >
          <Grid items={MyDevLang} />
        </Scaffold>
      </Card>
    </Hero>

    <Scaffold id="projects" title="PROYECTOS">
      <Grid items={Projects} />
    </Scaffold>

    <Scaffold id="more-info" title="+SOBRE MI">
      <GenericContainer>
        <Slider items={MoreAboutMe} />
      </GenericContainer>
    </Scaffold>

    <Scaffold id="ctt" title="CONTACTO">
      <Grid items={Social} />
    </Scaffold>
  </React.StrictMode>
);
