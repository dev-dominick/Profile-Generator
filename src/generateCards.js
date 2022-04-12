//manager card
//one big function, 
const cardManager = function (manager) {
  console.log({ manager });
  return `  <div class="card" style="width: 18rem;">
    <div class="card-body bg-primary">
      <h5 class="card-title text-light">${manager.name}</h5>
      <p class="card-text text-light">Manager</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.iD}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
      <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
  </div>`;
};

//engineer card
const cardEngineer = function (engineer) {
  console.log({ engineer });
  return `  <div class="card" style="width: 18rem;">
    <div class="card-body bg-primary">
      <h5 class="card-title text-light">${engineer.name}</h5>
      <p class="card-text text-light">Engineer</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.iD}</li>
      <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
      <li class="list-group-item">GitHub: <a href="${engineer.gitHub}">${engineer.gitHub}</a></li>
    </ul>
  </div>`;
};

//Intern card
const cardIntern = function (intern) {
  console.log({ intern });
  return `  <div class="card" style="width: 18rem;">
    <div class="card-body bg-primary">
      <h5 class="card-title text-light">${intern.name}</h5>
      <p class="card-text text-light">Engineer</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.iD}</li>
      <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
      <li class="list-group-item">School: ${intern.school}</li>
    </ul>
  </div>`;
};

//create function, switch statement for cardManager, cardIntern, cardEngineer

const teamBuilder = (employee) => {

  console.log({ employee });

  let teamCards = []; //all employee cards returned as a string

  if ((employee.employeeTitle == "Manager")) {
    var managerCard = cardManager(employee);
    teamCards.push(managerCard);
    console.log(cardManager);
  }
  if ((employee.employeeTitle == "Engineer")) {
    var engineerCard = cardEngineer(employee);
    teamCards.push(engineerCard);
    console.log(cardEngineer);
  }
  // cardArray.push(managerCard, engineerCard);

  // console.log(managerCard, engineerCard);

  // console.log(JSON.stringify(cardArray));
  console.log("this is team cards", teamCards);
  console.log("end");

  
 const buildTeam = generateHTML(teamCards);
 return buildTeam;
};

function generateHTML(data) {
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

${data}





</body>

</html>`;
}

module.exports = teamBuilder;
