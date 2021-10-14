//create the main html
const generatePage = (...Employees)=>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
</head>
<body>
    <main>
        <div id="team-list">
            ${(Employees.map(person => addTeammate(person))).join(' ')}
        </div>
    </main>
</body>
<script src="./script.js"></script>
</html>
`
;



//create the teammember in the HTML
function addTeammate(person){ 
   
   if (person.getRole()=='Manager'){
     
      return (`<div class = 'card'>
      <div class= 'card-header'>
         <h3>${person.name}</h3>
         <i><h3>${person.getRole()}</h3>
      </div>
      <div class='card-info'>
         <p>${person.id}</p>
         <p>${person.email}</p>
         <p>${person.officeNum}</p>
      </div>
   </div>`)
   }
   
   if (person.getRole()=='Engineer'){
      return `<div class = 'card'>
      <div class= 'card-header'>
         <h3>${person.name}</h3>
         <i><h3>${person.getRole()}</h3>
      </div>
      <div class='card-info'>
         <p>${person.id}</p>
         <p>${person.email}</p>
         <p>${person.github}</p>
      </div>
   </div>`
   }

   if (person.getRole()=='Intern'){
      return `<div class = 'card'>
      <div class= 'card-header'>
         <h3>${person.name}</h3>
         <i><h3>${person.getRole()}</h3>
      </div>
      <div class='card-info'>
         <p>${person.id}</p>
         <p>${person.email}</p>
         <p>${person.school}</p>
      </div>
   </div>`
   }
   else return `<p>getrole() not working</p>`
}
module.exports={generatePage, addTeammate};