// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const {generatePage, addTeammate} = require('./src/script');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employees=[];



const managerQuestions = [
    {
        type:'input',
        name:'managerName',
        message:`What is the team manager's name?`,
    },
    {
        type:'input',
        name:'managerId',
        message:`What is the team manager's id?`,
    },
    {
        type:'input',
        name:'managerEmail',
        message:`What is the team manager's email?`,
    },
    {
        type:'input',
        name:'managerOffice',
        message:`What is the team manager's office number?`,
    }
]

const addMember={
        type:'list',
        name:'memberType',
        message:`Please select the type of teammate to add:`,
        choices:['Engineer','Intern', `I don't want to add anymore teammates`],
        loop:true,
}

const engineerQuestions=[
    {
        type:'input',
        name:'engineerName',
        message:`What is the engineer's name?`,
    },
    {
        type:'input',
        name:'engineerId',
        message:`What is the engineer's id?`,
    },
    {
        type:'input',
        name:'engineerEmail',
        message:`What is the engineer's email?`,
    },
    {
        type:'input',
        name:'engineerGit',
        message:`What is the engineer's GitHub username?`,
    },
]

const internQuestions=[
    {
        type:'input',
        name:'internName',
        message:`What is the intern's name?`,
    },
    {
        type:'input',
        name:'internId',
        message:`What is the intern's id?`,
    },
    {
        type:'input',
        name:'internEmail',
        message:`What is the intern's email?`,
    },
    {
        type:'input',
        name:'internSchool',
        message:`What school does the intern go to?`,
    },
]

const newMem=()=>{
    inquirer.prompt(addMember)
    .then((data)=>{
        if(data.memberType=='Engineer'){
            inquirer.prompt([...engineerQuestions])
            .then((data2)=>{
                let teamEngineer = new Engineer(`${data2.engineerName}`,`${data2.engineerId}`,`${data2.engineerEmail}`,`${data2.engineerGit}`);
                Employees.push(teamEngineer);
                //console.log(Employees);
                newMem();
            })
            
        }
        else if(data.memberType=='Intern'){
            inquirer.prompt([...internQuestions])
            .then((data2)=>{
                let teamIntern = new Intern(`${data2.internName}`,`${data2.internId}`,`${data2.internEmail}`,`${data2.internSchool}`);
                Employees.push(teamIntern);
                //console.log(Employees);
                newMem();
            }) 
        }
        else{ 
            //console.log(Employees);
            //no more members to add, generate HTML and write to file
            
            const htmlContent= generatePage(...Employees);
            fs.writeFile('./dist/index.html', htmlContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html'));

        }
    })
}


function init(){
    console.log('Build your team')
    inquirer.prompt([...managerQuestions])
    .then((data)=>{
        let teamManager = new Manager(`${data.managerName}`,`${data.managerId}`,`${data.managerEmail}`, `${data.managerOffice}`);
        Employees.push(teamManager);
        //console.log(Employees);
        newMem();
    });
}
init();

