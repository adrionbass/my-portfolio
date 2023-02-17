/* TECHS */
import ReactIcon from "./lang-icons/react.svg";
import JavaScriptIcon from "./lang-icons/js.svg";
import CSSicon from "./lang-icons/css3-alt.svg";
import HTMLicon from "./lang-icons/html5.svg";

/* PROJECT IMG */
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
    name: "Movies catalog",
    description: "#REACT #Responsive #Hooks #API #CSS-Grid",
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
    description: "#CSS #HTML #JAVASCRIPT #Responsive",
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
    description: "#REACT #HOOKS #CssKeyframeAnimations #JAVASCRIPT",
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
    description: "#REACT #Responsive #Hooks #API #CSS-Grid",
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
  {
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
      "#REACT #HOOKS #JAVASCRIPT #CSS - Small project that filters categories with conditionals and useState hooks",
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
  },
];

export default Projects;
