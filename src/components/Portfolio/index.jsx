import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'hangmanGame',
      description: '(Collaborative) A webpage that lets the user play a game of hangman with a randomly generated word',
      link: "https://callen996.github.io/hangman-game/",
      repo: "https://github.com/ethanfrog/hangman-game"
    },
    {
      name: 'realFakeStore',
      description: '(Collaborative) A simulacrum of an online storefront with a wide range of products',
      link: "https://boiling-harbor-15362-4fdcf0c8906a.herokuapp.com/",
      repo: "https://github.com/ethanfrog/Fake-store"
    },
    {
      name: 'blockbuster2024',
      description: '(Collaborative) A Blockbuster-esque site that allows users to search for movies and books and save them for future reference',
      link: "https://blockbuster2024.onrender.com",
      repo: "https://github.com/ethanfrog/Blockbuster2024"
    },
    {
      name: 'passwordGenerator',
      description: 'A random password generator that accepts parameters such as length and character inclusion',
      link: "https://ethanfrog.github.io/password-generator/",
      repo: "https://github.com/ethanfrog/password-generator"
    },
    {
      name: 'bootcampQuiz',
      description: 'A timed quiz that tests the user on coding boot camp topics',
      link: "https://ethanfrog.github.io/bootcamp-quiz/",
      repo: "https://github.com/ethanfrog/bootcamp-quiz"
    },
    {
      name: 'dailyPlanner',
      description: 'A work planner that changes visually to reflect the current time of day',
      link: "https://ethanfrog.github.io/daily-planner/",
      repo: "https://github.com/ethanfrog/daily-planner"
    },
    {
      name: 'forecastFinder',
      description: 'A tool for getting current and 5-day city forecasts. Saves the cities that have already been searched',
      link: "https://ethanfrog.github.io/city-forecast-page/",
      repo: "https://github.com/ethanfrog/city-forecast-page"
    },
    {
      name: 'textEditor',
      description: 'A text editor that meets the criteria for a progressive web app',
      link: "https://pwa-text-editor-z23z.onrender.com/",
      repo: "https://github.com/ethanfrog/pwa-text-editor"
    },
    {
      name: 'databaseManager',
      description: '(Not Deployed) A command-line application that allows the user to manage an SQL database',
      link: "https://github.com/ethanfrog/command-line-db-manager",
      repo: "https://github.com/ethanfrog/command-line-db-manager"
    },
    {
      name: 'logoGenerator',
      description: '(Not Deployed) A program that creates an SVG logo based on user input',
      link: "https://github.com/ethanfrog/logo-generator",
      repo: "https://github.com/ethanfrog/logo-generator"
    },
    {
      name: 'commerceBackend',
      description: '(Not Deployed) An e-commerce app that uses Sequelize to handle back-end requests',
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
