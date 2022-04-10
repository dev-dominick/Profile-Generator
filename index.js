const fs = require("fs");
const inquirer = require("inquirer");

//todo set a require generate html file

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
const questions = [
  {
    type: "list",
    message: "Which employee profile type would you like to create?",
    choices: ["Engineer", "Intern", "Manager"],
    name: "employeeTitle",
  },
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your employee ID?",
    name: "iD",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "officeNumber",
    when: (answers) => {
      if (answers.employeeTitle === "Manager") {
        return true;
      }
    },
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "gitHub",
    when: (answers) => {
      if (answers.employeeTitle === "Engineer") {
        return true;
      }
    },
  },
  {
    type: "list",
    message: "What school are you attending?",
    name: "school",
    when: (answers) => {
      if (answers.employeeTitle === "Intern") {
        return true;
      }
    },
  },
];

function generateHTML(answers) {
  return `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Profile Generator</title>
  <link rel="stylesheet" href="/dist/style.css" />
  <!-- CSS only -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
</head>

<body>
  <nav class="my-navbar navbar navbar-dark bg-danger">
    <div class="container-fluid justify-content-center">
      <span class="navbar-brand mb-0 h1 header ">My Team</span>
    </div>
  </nav>


  <div class="card" style="width: 18rem;">
    <div class="card-body bg-primary">
      <h5 class="card-title text-light">${answers.name}</h5>
      <p class="card-text text-light">Position: ${answers.employeeTitle}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Office Number: ${answers.iD}</li>
      <li class="list-group-item">${answers.email}</li>
      <li class="list-group-item">${answers.officeNumber}, ${answers.gitHub}</li>
    </ul>
  </div>




</body>

</html>`;
};



function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
//fix whatever is making this make new html file
    fs.writeFileSync("index.html", generateHTML(answers), (err) => {
      if (err) {
        console.log(err);
        return;
      } else {
        console.log("Success!");
      }
    });
  });
}

init();


// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
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