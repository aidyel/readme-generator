// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    message: "What is the name of your project?",
    type: "input",
    name: "title"
},
{
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project (Required)'
},
{
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions (Required)'
},
{
    type: 'input',
    name: 'usage',
    message: 'How does this application works (Required)'
},
{
    message: "What license did you use for this project?",
    type: "checkbox",
    choices: ["Apache", 'Apache 2.0', "MIT", "Mozilla public 2.0"],
    name: "license"
},
{
    type: 'input',
    name: 'contribution',
    message: 'Who were the contributors to this project?'
},
{
    type: 'input',
    name: 'test',
    message: 'What is the test process for this project?'
},
{
    type: 'input',
    name: 'github',
    message: 'Enter yor GitHub Username (Required)'
},
{
    type: 'input',
    name: 'email',
    message: 'Enter Your Email address (Required)'
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFileSync(fileName, data);

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse) =>{
        writeToFile("Readme.md", markdown(inquirerResponse))
        console.log("Making ReadMe");
    })
    .catch ((err) => {
        console.log(err);
    })
 }

// Function call to initialize app
init();



