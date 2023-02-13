const inquirer = require('inquirer');
const fs = require("fs");
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');


const employeeQuestions = [
 
  {
    type: "input",
    name: "name",
    message: "Enter the employee's name: "
  },
 
  {
    type: "input",
    name: "id",
    message: "Enter the employee's ID: "
  },
  {
    type: "input",
    name: "email",
    message: "Enter the Employee's email: "
  },
  {
    type: "list",
    name: "role",
    message: "Select the employee's role: ",
    choices: ["Manager", "Engineer", "Intern"]
  }

]

let employees = [];

const addEmployee = async () => {
  const answers = await inquirer.prompt(employeeQuestions);
  let employee;
  
  if (answers.role === "Manager") {
    
    const officeNumberAnswer = await inquirer.prompt([
      
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?"
      }
      
    ]);

    employee = new Manager(
      answers.name,
      answers.id,
      answers.email,
      officeNumberAnswer.officeNumber
    );
   
   
  } else if (answers.role === "Engineer") {
    
    const githubAnswer = await inquirer.prompt([
      {
        
      }

    ]);


    employee = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      githubAnswer.github
    );
    
  } else if (answers.role === "Intern") {
    const schoolAnswer = await inquirer.prompt([
      {
        type: "input",
        name: "school",
        message: "What is the intern's school?"
      }
    ]);
    employee = new Intern(
      answers.name,
      answers.id,
      answers.email,
      schoolAnswer.school
    );
    
  } else {
    employee = new Employee(answers.name, answers.id, answers.email);
  }
  employees.push(employee);
  const addAnotherAnswer = await inquirer.prompt([
    {
      type: "confirm",
      name: "addAnother",
      message: "Would you like to add another employee?"
    }
  ]);

  if (addAnotherAnswer.addAnother) {
    addEmployee();
  } else {
    fs.writeFile("index1.html", JSON.stringify(employees), err => {
      if (err) {
        console.log(err);
      } else {
        console.log("Success!");
      }
    })
  }
}
const generateHTML = ({name, id, email, officeNumber, role, manager}) => {
  return 
  `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Team</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
     <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <div class="container-fluid">
          <div class="row">
              <div class="col-12 jumbotron mb-2 team">
                  <h1 class="text-center">My Team</h1>
              </div>
          </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="team col-12 d-flex justify-content-center">
              </div>
  
              <div class="card border-success mb-3" style="max-width: 18rem;">
                  <h2 class="card-title">Kamel Tabeche</h2>
                  <h3 class="card-title">Manager</h3>
                  <div class="card-body text-success">
                      <ul class="list-group">
                        
                          <li class="list-group-item">ID:</li>
                          <li class="list-group-item">Email: <a href="email to:crocplage@hotmail.com">crocplage@hotmail.com</a></li>
                          <li class="list-group-item">Office number: 713</li>
                        </ul>
                  </div>
              </div>
                  
                 
              <div class="card border-success mb-3" style="max-width: 18rem;">
                      <h2 class="card-title">coco</h2>
                      <h3 class="card-title">Engineer</h3>
                      <div class="card-body text-success">
                          <ul class="list-group">
                            
                              <li class="list-group-item">ID: 02</li>
                              <li class="list-group-item">Email: <a href="email to:crocplage@hotmail.com">crocplage@hotmail.com</a></li>
                              <li class="list-group-item">Github:<a href="https://github.com/crocplage" target="_blank">crocplage</a></li>
                            </ul>
                      </div>
              </div>
  
              <div class="card border-success mb-3" style="max-width: 18rem;">
                  <h2 class="card-title">Kamel Tabeche</h2>
                  <h3 class="card-title">Engineer</h3>
                  <div class="card-body text-success">
                      <ul class="list-group">
                        
                          <li class="list-group-item">ID: 82828</li>
                          <li class="list-group-item">Email: <a href="email to:">crocplage@hotmail.com</a></li>
                          <li class="list-group-item">Github:<a href="https://github.com/crocplage" target="_blank">crocplage</a></li>
                        </ul>
                  </div>
              </div>
  
                  <div class="card1 border-success mb-3" style="max-width: 18rem;">
                      <h2 class="card-title">Kamel Tabeche</h2>
                      <h3 class="card-title">Intern</h3>
                      <div class="card-body text-success">
                          <ul class="list-group">
                            
                              <li class="list-group-item">ID: 04</li>
                              <li class="list-group-item">Email: <a href="email to:crocplage@hotmail.com">crocplage@hotmail.com</a></li>
                              <li class="list-group-item">${school}</li>
                            </ul>
                      </div>
                  </div>
  
  
  </body>
  </html>`

  inquirer
  .prompt([
   
    {
      type: "input",
      name: "name",
      message: "Enter the employee's name: "
    },
   
    {
      type: "input",
      name: "id",
      message: "Enter the employee's ID: "
    },
    {
      type: "input",
      name: "email",
      message: "Enter the Employee's email: "
    },
    {
      type: "list",
      name: "role",
      message: "Select the employee's role: ",
      choices: ["Manager", "Engineer", "Intern"]
    }
    .then((answers) => {
      
      fs.writeFile('index1.html',generateHTML, (err) => 
      err ? console.log(err) : console.log('success')
      );
     
    })
  ])}  
  
addEmployee();
