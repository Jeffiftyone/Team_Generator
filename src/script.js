//create the main html
const generatePage = (...Employees)=>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="container">
      <div class="title text-center">
      <h1>Team Assembled Successfully!</h1>
      <p>Here are the individuals on your team roster.</p>
      </div>
        <div class="row">
            ${(Employees.map(person => addTeammate(person))).join(' ')}
            </div> 
    </main>
</body>
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
</html>
`
;



//create the teammember in the HTML
function addTeammate(person){ 
   
   if (person.getRole()=='Manager'){
     
      return (`<div class="col-md-4">
      <div class = 'card text-center'>
      <div class= 'card-title bg-primary text-light'>
         <h3>${person.name}</h3>
         <div class="role"><i class="fas fa-tasks"></i><h3>${person.getRole()}</h3></div>
      </div>
      <div class='card-text'>
         <p>id: ${person.id}</p>
         <p>email: ${person.email}</p>
         <p>office number: ${person.officeNum}</p>
      </div>
   </div>
   </div>`)
   }
   
   if (person.getRole()=='Engineer'){
      return `<div class="col-md-4">
      <div class = 'card text-center'>
      <div class= 'card-title bg-primary text-light'>
         <h3>${person.name}</h3>
         <div class="role"><i class="fas fa-cogs"></i><h3>${person.getRole()}</h3></div>
      </div>
      <div class='card-text'>
         <p>id: ${person.id}</p>
         <p>email: ${person.email}</p>
         <p>github: ${person.github}</p>
      </div>
   </div>
   </div>`
   }

   if (person.getRole()=='Intern'){
      return `<div class="col-md-4">
      <div class = 'card text-center'>
      <div class= 'card-title bg-primary text-light'>
         <h3>${person.name}</h3>
         <div class="role"><i class="fas fa-user"></i><h3>${person.getRole()}</h3></div>
      </div>
      <div class='card-text'>
         <p>id: ${person.id}</p>
         <p>email: ${person.email}</p>
         <p>school: ${person.school}</p>
      </div>
   </div>
   </div>`
   }
   else return `<p>getrole() not working</p>`
}
module.exports={generatePage, addTeammate};