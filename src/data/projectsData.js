// PROJECT IMAGES
import project1Image from "../assets/projects/project1_h.png";
import project2Image from "../assets/projects/project2_h.jpeg";
import project3Image from "../assets/projects/project7_h.png";
import project4Image from "../assets/projects/project4_h.png";
import project5Image from "../assets/projects/project5_h.png";
import project6Image from "../assets/projects/project6_h.png";

// MOCKUP IMAGES
import mockup1Image from "../assets/projects/mockup1.png";
import mockup2Image from "../assets/projects/mockup2.png";
import mockup3Image from "../assets/projects/mockup7.png";
import mockup4Image from "../assets/projects/mockup4.png";
import mockup5Image from "../assets/projects/mockup5.png";
import mockup6Image from "../assets/projects/mockup6.png";

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
      technologies: ["React", "CSS", "Slack", "Figma"],
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
      name: "Figma Nike",
      image: project3Image,
      liveDemoLink:
        "https://www.figma.com/proto/g5uxtfAFhmuC1wjG3NzmIZ/Projects?node-id=2995-5481&t=Eroo4n8KyoGI0Xrm-1",
      liveDemoMobileLink:
        "https://www.figma.com/proto/g5uxtfAFhmuC1wjG3NzmIZ/Projects?node-id=3062-1846&t=Eroo4n8KyoGI0Xrm-1&starting-point-node-id=3062%3A1846",
      figmaLink:
        "https://www.figma.com/design/g5uxtfAFhmuC1wjG3NzmIZ/Projects?node-id=2995-4646",
      mockup: mockup3Image,
      description:
        "This Nike web prototype focuses on visual experience and user interaction, showcasing the brand's most iconic sneakers through smooth animations and engaging visual effects.\nThe mobile version adapts the immersive design to smaller screens, offering an equally dynamic and engaging experience.\nThis project highlights my ability to create digital prototypes that combine visual design, interactivity, and usability, delivering an impactful, user-centered experience.",
      technologies: ["Figma"],
    },
    {
      id: 4,
      name: "Figma Food",
      image: project6Image,
      liveDemoLink:
        "https://www.figma.com/proto/g5uxtfAFhmuC1wjG3NzmIZ/Projects?page-id=180%3A8&node-id=2896-2&viewport=-9%2C1017%2C0.33&t=0EiaVGCEjssSRUeD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2896%3A2",
      figmaLink:
        "https://www.figma.com/design/g5uxtfAFhmuC1wjG3NzmIZ/Projects?node-id=180-8",
      mockup: mockup6Image,
      description:
        "This project is an interactive experience designed in Figma, focused on manipulating object positions and rotations to create a dynamic and engaging environment.\nThe project features smooth transitions and synchronized animations that showcase Figma's interactive capabilities while maintaining a cohesive visual aesthetic. The rotations and movements of the elements generate ever-changing visual compositions.\nThis work exemplifies how I use design tools to create interactive interfaces, with a focus on usability and aesthetics, ideal for capturing the user’s attention and exploring new forms of visual storytelling.",
      technologies: ["Figma"],
    },
    {
      id: 5,
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
      id: 6,
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
      technologies: ["React", "CSS", "Slack", "Figma"],
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
      name: "Figma Nike",
      image: project3Image,
      liveDemoLink:
        "https://www.figma.com/proto/g5uxtfAFhmuC1wjG3NzmIZ/Projects?node-id=2995-5481&t=Eroo4n8KyoGI0Xrm-1",
      liveDemoMobileLink:
        "https://www.figma.com/proto/g5uxtfAFhmuC1wjG3NzmIZ/Projects?node-id=3062-1846&t=Eroo4n8KyoGI0Xrm-1&starting-point-node-id=3062%3A1846",
      figmaLink:
        "https://www.figma.com/design/g5uxtfAFhmuC1wjG3NzmIZ/Projects?node-id=2995-4646",
      mockup: mockup3Image,
      description:
        "Este prototipo de página web de Nike se centra en la experiencia visual y la interacción del usuario, presentando los modelos de zapatillas más icónicos a través de animaciones suaves y efectos visuales atractivos.\nLa versión móvil adapta el diseño inmersivo a pantallas más pequeñas para ofrecer una experiencia igualmente dinámica y atractiva.\nEste proyecto destaca mi habilidad para crear prototipos digitales que combinan diseño visual, interactividad y usabilidad, ofreciendo una experiencia impactante y centrada en el usuario.",
      technologies: ["Figma"],
    },
    {
      id: 4,
      name: "Figma Comida",
      image: project6Image,
      liveDemoLink:
        "https://www.figma.com/proto/g5uxtfAFhmuC1wjG3NzmIZ/Projects?page-id=180%3A8&node-id=2896-2&viewport=-9%2C1017%2C0.33&t=0EiaVGCEjssSRUeD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2896%3A2",
      figmaLink:
        "https://www.figma.com/design/g5uxtfAFhmuC1wjG3NzmIZ/Projects?node-id=180-8",
      mockup: mockup6Image,
      description:
        "Este proyecto es una experiencia interactiva diseñada en Figma, centrada en la manipulación de posiciones y rotaciones de objetos para crear un entorno dinámico y atractivo.\nEl proyecto incorpora transiciones fluidas y animaciones sincronizadas que destacan las capacidades interactivas de Figma, al mismo tiempo que mantiene una estética visual coherente. Las rotaciones y los desplazamientos de los elementos generan composiciones visuales en constante transformación.\nEste trabajo es un ejemplo de cómo utilizo las herramientas de diseño para crear interfaces interactivas, con un enfoque en la usabilidad y en la estética, ideales para mantener la atención del usuario y explorar nuevas formas de narrativa visual.",
      technologies: ["Figma"],
    },
    {
      id: 5,
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
      id: 6,
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
