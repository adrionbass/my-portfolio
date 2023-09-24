/* TECHS */
import ReactIcon from "./lang-icons/react.svg";
import JavaScriptIcon from "./lang-icons/js.svg";
import CSSicon from "./lang-icons/css3-alt.svg";
import HTMLicon from "./lang-icons/html5.svg";

/* PROJECT IMG */
import palmers from "./palmers.jpg";
import portfolio from "./portfolio.jpg";
import movieCatalag from "./moviecatalog.jpg";
import tourAdventure from "./tour.jpg";
import ttt from "./tictactoe.jpg";
import imgBrowser from "./imagebrowser.jpg";
import compdCalc from "./compoundintcal.jpg";
import catFilter from "./categoriesfilter.jpg";
import calculeitor from "./calculator.jpg";

/* REPO-DEPLOY ICONS (not used)*/
//import gitHub from "../../assets/github-logo2.png"
//import webDeploy from "../../assets/deploy.png"


const Projects = [
  {
    name: "Palmers of Punk-rock",
    description: "Website responsive oficial de la banda Palmers of Punk-Rock con galería de imágenes que se carga de manera aleatoria cada vez que se actualiza la página. Basado en mi portfolio. #React #Vite #Styled-components",
    technologies: [
      {
        img_path: ReactIcon,
      },
      {
        img_path: CSSicon,
      },
      {
        img_path: HTMLicon,
      },
    ],
    img_path: palmers,
    url: "https://adrionbass.github.io/react-palmers/",
    repo: "https://github.com/adrionbass/react-palmers/",
    id: "00proj",
  },
  {
    name: "My portfolio",
    description: "Mi propio portfolio, es, sin dudas mi proyecto mas completo, ya que no utilicé ningún template. Utilicé React con Vite, y Styled-components al igual que en otros trabajos. La filosofía de componente 'scaffold' que tomé de Flutter, en todo el sitio, como contenedor genérico para estructurar secciones generales o interiores. #React #Vite #Styled-components",
    technologies: [
      {
        img_path: ReactIcon,
      },
      {
        img_path: CSSicon,
      },
      {
        img_path: HTMLicon,
      },
    ],
    img_path: portfolio,
    url: "https://adrionbass.github.io/my-portfolio/",
    repo: "https://github.com/adrionbass/my-portfolio/",
    id: "00bproj",
  },
  {
    name: "Movies catalog",
    description: "Catálogo de películas. API: https://api.themoviedb.org - #Hooks #Form #CssGrid #CssModule",
    technologies: [
      {
        img_path: ReactIcon,
      },
      {
        img_path: CSSicon,
      },
      {
        img_path: HTMLicon,
      },
    ],
    img_path: movieCatalag,
    url: "https://adrionbass.github.io/movies-react/",
    repo: "https://github.com/adrionbass/movies-react/",
    id: "01proj",
  },
  {
    name: "Tour & Adventures site",
    description: "Website responsive estándar de viajes y turismo, con botón Scroll Up y Hamb-menu.",
    technologies: [
      {
        img_path: JavaScriptIcon,
      },
      {
        img_path: CSSicon,
      },
      {
        img_path: HTMLicon,
      },
    ],
    img_path: tourAdventure,
    url: "https://adrionbass.github.io/responsive-web-HTML-CSS/",
    repo: "https://github.com/adrionbass/responsive-web-HTML-CSS/",
    id: "02proj",
  },
  {
    name: "Tic Tac Toe",
    description: "Ta Te Ti o Tic Tac Toe clásico con puntaje, reinicio de partida y/o de turno, y animaciones CSS #animation #keyframes",
    technologies: [
      {
        img_path: ReactIcon,
      },
      {
        img_path: CSSicon,
      },
      {
        img_path: HTMLicon,
      },
    ],
    img_path: ttt,
    url: "https://adrionbass.github.io/react-tictactoe/",
    repo: "https://github.com/adrionbass/react-tictactoe/",
    id: "03proj",
  },
  {
    name: "Image browser",
    description: "Buscador de imágenes responsive que usa la api de unsplash.com, y muestra los resultados organizados con CSS grid-column-start y grid-row-start",
    technologies: [
      {
        img_path: ReactIcon,
      },
      {
        img_path: CSSicon,
      },
      {
        img_path: HTMLicon,
      },
    ],
    img_path: imgBrowser,
    url: "https://adrionbass.github.io/react-imagebrowser/",
    repo: "https://github.com/adrionbass/react-imagebrowser/",
    id: "04proj",
  },
  /* {
    name: "Compound interest calculator",
    description:
      "#REACT #Yup #Formik #Hooks #StyledComponents - Calculates the balance of an amount of money accumulated during a certain period (years), considering the initial and monthly deposit, and the interest rate. It includes field validations, by requirement, by maximum and minimum, and by format with Yup, Formik. Styles: styled.",
    technologies: [
      {
        img_path: ReactIcon,
      },
      {
        img_path: CSSicon,
      },
      {
        img_path: JavaScriptIcon,
      },
      {
        img_path: HTMLicon,
      },
    ],
    img_path: compdCalc,
    url: "https://adrionbass.github.io/react-comp-int-calculator/",
    repo: "https://github.com/adrionbass/react-comp-int-calculator/",
    id: "05proj",
  },
  {
    name: "Categories filter",
    description:
      "Ejemplo de sitio con filtro de búsqueda por categoría.",
    technologies: [
      {
        img_path: ReactIcon,
      },
      {
        img_path: CSSicon,
      },
      {
        img_path: JavaScriptIcon,
      },
      {
        img_path: HTMLicon,
      },
    ],
    img_path: catFilter,
    url: "https://adrionbass.github.io/react-categoriesfilter/",
    repo: "https://github.com/adrionbass/react-categoriesfilter/",
    id: "06proj",
  },

  {
    name: "Calculator",
    description:
      "#REACT #StateManagement #ClassComponent #FunctionalComponents #Css #Flexbox",
    technologies: [
      {
        img_path: ReactIcon,
      },
      {
        img_path: CSSicon,
      },
      {
        img_path: JavaScriptIcon,
      },
      {
        img_path: HTMLicon,
      },
    ],
    img_path: calculeitor,
    url: "https://adrionbass.github.io/react-calculator/",
    repo: "https://github.com/adrionbass/react-calculator/",
    id: "07proj",
  }, */
];

export default Projects;
