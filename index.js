const fs = require("fs");
const inquirer = require("inquirer");

//todo set a require generate html file

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
const questions = [
  {
    type: "chec",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message:
      "Provide a short description explaining the what, why, and how of your project.?",
    name: "description",
  },
  // {
  //   type: "checkbox",
  //   message: "Select which contents you would like in your Table of Contents",
  //   choices: [
  //     "[Installation](#Installation)",
  //     "[Usage](#usage)",
  //     "[Credits](#Credits)",
  //     "[License](#License)",
  //   ],
  //   name: "tableOfContents",
  // },
  {
    type: "input",
    message: "What are the steps required to install your project?",
    name: "installation",
  },
  {
    type: "input",
    message: "Provide instructions and examples for use of application.",
    name: "usage",
  },
  {
    type: "input",
    message: "Please give credit to any resources you have used?",
    name: "credits",
  },
  {
    type: "list",
    message: "Please select a license type to include.",
    choices: [
      "MIT License",
      "Apache 2.0 License",
      "Boost Software License 1.0",
    ],
    name: "license",
  },
  {
    type: "input",
    message:
      "If you want others to contribute, please explain how they could do so.",
    name: "contribute",
  },
  {
    type: "input",
    message: "List any tests you have done on your application?",
    name: "test",
  },
  {
    type: "input",
    message:
      "How would you like others to contact you with questions? Email, GitHub, etc...",
    name: "questions",
  },
  {
    type: "input",
    message: "Please enter your email.",
    name: "email",
  },
  {
    type: "input",
    message: "Please enter your github.",
    name: "github",
  },
];
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
