
const generateManager = function (Manager) {
    return`<div class="card border-success mb-3" style="max-width: 18rem;">
    <h2 class="card-title">Kamel Tabeche</h2>
    <h3 class="card-title">Manager</h3>
    <div class="card-body text-success">
        <ul class="list-group">
          
            <li class="list-group-item">ID:</li>
            <li class="list-group-item">Email: <a href="email to:crocplage@hotmail.com">crocplage@hotmail.com</a></li>
            <li class="list-group-item">Office number: 713</li>
          </ul>
    </div>
</div>`
}

const generateEngineer = function (Engineer) {
return`<div class="card border-success mb-3" style="max-width: 18rem;">
<h2 class="card-title"></h2>
<h3 class="card-title">Engineer</h3>
<div class="card-body text-success">
    <ul class="list-group">
      
        <li class="list-group-item">ID: {{id}}</li>
        <li class="list-group-item">Email: <a href="email to:crocplage@hotmail.com">crocplage@hotmail.com</a></li>
        <li class="list-group-item">Github:<a href="https://github.com/crocplage" target="_blank">crocplage</a></li>
      </ul>
</div>
</div>`
}
generateIntern = function (Intern) {
    return `<div class="card1 border-success mb-3" style="max-width: 18rem;">
    <h2 class="card-title">Kamel Tabeche</h2>
    <h3 class="card-title">Intern</h3>
    <div class="card-body text-success">
        <ul class="list-group">
          
            <li class="list-group-item">ID: 04</li>
            <li class="list-group-item">Email: <a href="email to:crocplage@hotmail.com">crocplage@hotmail.com</a></li>
            <li class="list-group-item">${school}</li>
          </ul>
    </div>
</div>`

}
generateHTML = (data) => {

    // array for cards 
    employeeCards  = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }

    // joining strings 
    const employeeCards = pageArray.join('')

    // return to generated page
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}
generateHTML = (data) => {

    // array for cards 
    pageArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
        
    }

    // joining strings 
    const employeeCards = pageArray.join('')

    // return to generated page
    const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

}

// generate html page 
const generateTeamPage = function (employeeCards) {   
  return`

<!DOCTYPE html>
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
                ${employeeCards}
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team col-12 d-flex justify-content-center">
            </div>`
}

module.exports = generateHTML;

