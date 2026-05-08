import { Hexagon, Terminal } from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit, FaGithub } from "react-icons/fa";
import { IoBagSharp } from "react-icons/io5";
import { SiTailwindcss, SiTypescript, SiJest } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";


const skill = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },

  {category: "Backend",
    items:[
      {name:"Node.js", icon:Hexagon}
    ]
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: FaGit },
      { name: "GitHub", icon: FaGithub },

      { name: "VS Code", icon:VscVscode },
      { name: "Jest", icon: SiJest },

    ],
  },

];

export default skills;
