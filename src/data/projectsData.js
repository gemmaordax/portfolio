
//PROJECT IMAGES
import project1Image from "../assets/projects/project1_h.png";
import project2Image from "../assets/projects/project2_h.png";
import project3Image from "../assets/projects/project3_h.png";

//MOCKUP IMAGES
import mockup1Image from "../assets/projects/mockup1.png";
import mockup2Image from "../assets/projects/mockup2.png";
import mockup3Image from "../assets/projects/mockup3.png";


const projects = [
    {
      id: 1,
      name: "Ion Park",
      image: project1Image, 
      liveDemoLink: "https://gemmaordax.github.io/ion_park/", 
      githubLink: "https://github.com/gemmaordax/ion_park",
      mockup: mockup1Image,
      description: "This project is a visual development proposal for a web application called iPark. The website is in the development phase and is not yet finished, but it presents a basic and functional structure of the application.\nThe application includes several pages, some of which are hidden, such as the /payment route, which are still under development and not visible in the current version. These pages are intended for payment functionality, but are not yet implemented.",
    },
    {
      id: 2,
      name: "Escape Room",
      image: project2Image ,
      liveDemoLink: "https://gemmaordax.github.io/escape_room/", 
      githubLink: "https://github.com/gemmaordax/escape_room", 
      mockup: mockup2Image,
      description: "This project is a practical exercise designed to apply basic tools of web design, frontend development, and databases. Its goal is to reinforce fundamental knowledge in programming and design.\nThe project consists of a platform where users must register to access the game. Once registered, they can participate in the interactive game, which combines logic and entertainment elements.\nIt is a simple yet complete example of how to develop a basic web application with dynamic and visual elements.",
    },
    {
      id: 3,
      name: "Mini Game",
      image: project3Image , 
      liveDemoLink: "https://gemmaordax.github.io/mini_game/", 
      githubLink: "https://github.com/gemmaordax/mini_game", 
      mockup: mockup3Image,
      description: "This project is a practical exercise developed during my programming studies. The main objective is to implement a movement system for a character within a grid, using JavaScript, DOM, and events. Additionally, it includes extra features such as obstacle detection, coin collection, and portals.",
    },
    // Agrega más proyectos aquí
  ];
  
  export default projects;
  