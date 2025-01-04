// PROJECT IMAGES
import project1Image from "../assets/projects/project1_h.png";
import project2Image from "../assets/projects/project2_h.jpeg";
import project3Image from "../assets/projects/project3_h.png";
import project4Image from "../assets/projects/project4_h.png";
import project5Image from "../assets/projects/project5_h.png";

// MOCKUP IMAGES
import mockup1Image from "../assets/projects/mockup1.png";
import mockup2Image from "../assets/projects/mockup2.png";
import mockup3Image from "../assets/projects/mockup3.png";
import mockup4Image from "../assets/projects/mockup4.png";
import mockup5Image from "../assets/projects/mockup5.png";

const projectsData = {
  en: [
    {
      id: 1,
      name: "Ion Park",
      image: project1Image,
      liveDemoLink: "https://gemmaordax.github.io/ion_park/",
      githubLink: "https://github.com/gemmaordax/ion_park",
      mockup: mockup1Image,
      description:
        "This project is a visual development proposal for a web application called iPark. The website is in the development phase and is not yet finished, but it presents a basic and functional structure of the application.\nThe application includes several pages, some of which are hidden, such as the /payment route, which are still under development and not visible in the current version. These pages are intended for payment functionality, but are not yet implemented.",
      technologies: ["React", "CSS", "Slack"],
    },
    {
      id: 2,
      name: "Weather App",
      image: project2Image,
      liveDemoLink: "https://gemmaordax.github.io/weather_app/",
      githubLink: "https://github.com/gemmaordax/weather_app",
      mockup: mockup2Image,
      description:
        "This weather application allows users to check the current weather based on their location or by manually searching for a city. It uses the OpenWeatherMap API to fetch weather data and the Unsplash API to display a background image of the city.\nThe app includes features such as temperature, humidity, wind speed, and feels-like temperature. It also handles geolocation, displaying the weather for the user's current location by default.",
      technologies: ["React", "CSS"],
    },
    {
      id: 3,
      name: "Figma Parallax",
      image: project3Image,
      liveDemoLink:
        "https://www.figma.com/proto/g5uxtfAFhmuC1wjG3NzmIZ/Projects?page-id=0%3A1&node-id=2800-197&viewport=779%2C80%2C0.07&t=2xw7AL3OgnOQZ3dl-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2800%3A197",
      figmaLink:
        "https://www.figma.com/design/g5uxtfAFhmuC1wjG3NzmIZ/Projects?node-id=0-1&t=Gxxa0WdJihWBUHb1-1",
      mockup: mockup3Image,
      description:
        "This project is a practical exercise designed to apply basic tools of web design, frontend development, and databases. Its goal is to reinforce fundamental knowledge in programming and design.\nThe project consists of a platform where users must register to access the game. Once registered, they can participate in the interactive game, which combines logic and entertainment elements.\nIt is a simple yet complete example of how to develop a basic web application with dynamic and visual elements.",
      technologies: ["Figma"],
    },
    {
      id: 4,
      name: "Escape Room",
      image: project4Image,
      liveDemoLink: "https://gemmaordax.github.io/escape_room/",
      githubLink: "https://github.com/gemmaordax/escape_room",
      mockup: mockup4Image,
      description:
        "This project is a practical exercise designed to apply basic tools of web design, frontend development, and databases. Its goal is to reinforce fundamental knowledge in programming and design.\nThe project consists of a platform where users must register to access the game. Once registered, they can participate in the interactive game, which combines logic and entertainment elements.\nIt is a simple yet complete example of how to develop a basic web application with dynamic and visual elements.",
      technologies: ["JavaScript", "CSS", "Firebase", "Jira"],
    },
    {
      id: 5,
      name: "Mini Game",
      image: project5Image,
      liveDemoLink: "https://gemmaordax.github.io/mini_game/",
      githubLink: "https://github.com/gemmaordax/mini_game",
      mockup: mockup5Image,
      description:
        "This project is a practical exercise developed during my programming studies. The main objective is to implement a movement system for a character within a grid, using JavaScript, DOM, and events. Additionally, it includes extra features such as obstacle detection, coin collection, and portals.",
      technologies: ["JavaScript", "CSS"],
    },
  ],
  es: [
    {
      id: 1,
      name: "Ion Park",
      image: project1Image,
      liveDemoLink: "https://gemmaordax.github.io/ion_park/",
      githubLink: "https://github.com/gemmaordax/ion_park",
      mockup: mockup1Image,
      description:
        "Este proyecto es una propuesta de desarrollo visual para una aplicación web llamada iPark. El sitio web está en fase de desarrollo y aún no está terminado, pero presenta una estructura básica y funcional de la aplicación.\nLa aplicación incluye varias páginas, algunas de las cuales están ocultas, como la ruta /payment, que aún están en desarrollo y no son visibles en la versión actual. Estas páginas están destinadas a la funcionalidad de pagos, pero aún no están implementadas.",
      technologies: ["React", "CSS", "Slack"],
    },
    {
      id: 2,
      name: "App del Tiempo",
      image: project2Image,
      liveDemoLink: "https://gemmaordax.github.io/weather_app/",
      githubLink: "https://github.com/gemmaordax/weather_app",
      mockup: mockup2Image,
      description:
        "Esta aplicación del tiempo permite a los usuarios consultar el clima actual según su ubicación o buscando manualmente una ciudad. Utiliza la API de OpenWeatherMap para obtener datos del clima y la API de Unsplash para mostrar una imagen de fondo de la ciudad.\nLa aplicación incluye funciones como temperatura, humedad, velocidad del viento y sensación térmica. También gestiona la geolocalización, mostrando el clima de la ubicación actual del usuario por defecto.",
      technologies: ["React", "CSS"],
    },
    {
      id: 3,
      name: "Figma Parallax",
      image: project3Image,
      liveDemoLink:
        "https://www.figma.com/proto/g5uxtfAFhmuC1wjG3NzmIZ/Projects?page-id=0%3A1&node-id=2800-197&viewport=779%2C80%2C0.07&t=2xw7AL3OgnOQZ3dl-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2800%3A197",
      figmaLink:
        "https://www.figma.com/design/g5uxtfAFhmuC1wjG3NzmIZ/Projects?node-id=0-1&t=Gxxa0WdJihWBUHb1-1",
      mockup: mockup3Image,
      description:
        "Este proyecto es un ejercicio práctico diseñado para aplicar herramientas básicas de diseño web, desarrollo frontend y bases de datos. Su objetivo es reforzar conocimientos fundamentales en programación y diseño.\nEl proyecto consiste en una plataforma donde los usuarios deben registrarse para acceder al juego. Una vez registrados, pueden participar en el juego interactivo, que combina elementos de lógica y entretenimiento.\nEs un ejemplo simple pero completo de cómo desarrollar una aplicación web básica con elementos dinámicos y visuales.",
      technologies: ["Figma"],
    },
    {
      id: 4,
      name: "Escape Room",
      image: project4Image,
      liveDemoLink: "https://gemmaordax.github.io/escape_room/",
      githubLink: "https://github.com/gemmaordax/escape_room",
      mockup: mockup4Image,
      description:
        "Este proyecto es un ejercicio práctico diseñado para aplicar herramientas básicas de diseño web, desarrollo frontend y bases de datos. Su objetivo es reforzar conocimientos fundamentales en programación y diseño.\nEl proyecto consiste en una plataforma donde los usuarios deben registrarse para acceder al juego. Una vez registrados, pueden participar en el juego interactivo, que combina elementos de lógica y entretenimiento.\nEs un ejemplo simple pero completo de cómo desarrollar una aplicación web básica con elementos dinámicos y visuales.",
      technologies: ["JavaScript", "CSS", "Firebase", "Jira"],
    },
    {
      id: 5,
      name: "Mini Juego",
      image: project5Image,
      liveDemoLink: "https://gemmaordax.github.io/mini_game/",
      githubLink: "https://github.com/gemmaordax/mini_game",
      mockup: mockup5Image,
      description:
        "Este proyecto es un ejercicio práctico desarrollado durante mis estudios de programación. El objetivo principal es implementar un sistema de movimiento para un personaje dentro de una cuadrícula, usando JavaScript, DOM y eventos. Además, incluye funciones adicionales como detección de obstáculos, recolección de monedas y portales.",
      technologies: ["JavaScript", "CSS"],
    },
  ],
};

export default projectsData;
