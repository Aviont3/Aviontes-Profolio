// projectData.js (or any name you prefer)
import JavaScript from '../assets/Tech-icons/JavaScript.svg'
import CSS3 from '../assets/Tech-icons/CSS3.svg';
import Clash from '../assets/ProjectSS/Screenshot 2025-05-24 at 11.43.35 PM.png';

const projects = [
  {
    name: "Clash of Comics",
    techStack: [
      { name: "css", icon: CSS3 },
      { name: "Javascript", icon: JavaScript },
    ],
    screenshot: Clash,
    description: "A personal portfolio site showcasing my full-stack projects, built with React for the front end and hosted on Netlify. Includes interactive components and smooth navigation."
  },
  // Add more projects below as needed
];

export default projects;
