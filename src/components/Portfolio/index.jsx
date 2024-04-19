import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'hangmanGame',
      description: 'MERN Stack',
      link: "https://callen996.github.io/hangman-game/",
      repo: "https://github.com/ethanfrog/hangman-game"
    },
    {
      name: 'realFakeStore',
      description: 'MERN Stack',
      link: "https://boiling-harbor-15362-4fdcf0c8906a.herokuapp.com/",
      repo: "https://github.com/ethanfrog/Fake-store"
    },
    {
      name: 'blockbuster2024',
      description: 'HTML/CSS',
      link: "https://blockbuster2024.onrender.com",
      repo: "https://github.com/ethanfrog/Blockbuster2024"
    },
    {
      name: 'passwordGenerator',
      description: 'Node/IoT',
      link: "https://ethanfrog.github.io/password-generator/",
      repo: "https://github.com/ethanfrog/password-generator"
    },
    {
      name: 'bootcampQuiz',
      description: 'React/JavaScript/CSS',
      link: "https://ethanfrog.github.io/bootcamp-quiz/",
      repo: "https://github.com/ethanfrog/bootcamp-quiz"
    },
    {
      name: 'dailyPlanner',
      description: 'React/JavaScript/CSS',
      link: "https://ethanfrog.github.io/daily-planner/",
      repo: "https://github.com/ethanfrog/daily-planner"
    },
    {
      name: 'forecastFinder',
      description: 'React/JavaScript/CSS',
      link: "https://ethanfrog.github.io/city-forecast-page/",
      repo: "https://github.com/ethanfrog/city-forecast-page"
    },
    {
      name: 'textEditor',
      description: 'React/JavaScript/CSS',
      link: "https://pwa-text-editor-z23z.onrender.com/",
      repo: "https://github.com/ethanfrog/pwa-text-editor"
    },
    {
      name: 'databaseManager',
      description: 'React/JavaScript/CSS',
      link: "https://github.com/ethanfrog/command-line-db-manager",
      repo: "https://github.com/ethanfrog/command-line-db-manager"
    },
    {
      name: 'logoGenerator',
      description: 'React/JavaScript/CSS',
      link: "https://github.com/ethanfrog/logo-generator",
      repo: "https://github.com/ethanfrog/logo-generator"
    },
    {
      name: 'commerceBackend',
      description: 'React/JavaScript/CSS',
      link: "https://github.com/ethanfrog/e-commerce-back-end",
      repo: "https://github.com/ethanfrog/e-commerce-back-end"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
