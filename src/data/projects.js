import portfolioImg from "../assets/images/portfolio.png";
import todoImg from "../assets/images/Todo.png";



const projects = [
  {
    title: "Personal Portfolio",
    description:
      "Modern responsive portfolio website built with React and Tailwind CSS featuring reusable components, smooth interactions, and clean UI design.",
    image: portfolioImg,
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Mankelvo/personal-portfolio",
    live: "#",
    featured: true,
  },

  {
    title: "React Tailwind Todo App",
    description:
      "Responsive task management application with dynamic state handling, filtering, and localStorage persistence built using React and Tailwind CSS.",
    image: todoImg,
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Mankelvo/react-tailwind-todo-app",
    live: "https://react-tailwind-todo-app.vercel.app/",
  },

  {
    title: "Shopping Cart App",
    description:
      "E-commerce shopping cart application with product filtering, quantity management, and persistent cart functionality using Fake Store API.",
    image: "/images/cart.png",
    tech: ["React", "JavaScript", "CSS", "Fake Store API"],
    github: "https://github.com/Mankelvo/Cat.git",
    live: "#",
  },
];

export default projects;