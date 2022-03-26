// Created a function that returns a license badge based on which license is passed inconst 


inquirer = require("inquirer");

function renderLicenseBadge(license) {
    console.log(license);
    if (license === "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === "Apache 2.0") {
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else if (license === "Mozilla Public License 2.0") {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else { return "" };
  }
// Created a function that returns the license link// If there is no license, return an empty stringfunction 

function renderLicenseLink(license) {
    if (license !== undefined) {
      return `- [License](#license)`;
    } else { return "" };
  }


  function renderLicenseSection(license) {
    if (license !== undefined) {
      return `## License
      This application is rendered under ${license}`;
    } else { return "" };
  }



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   content = `

  # ${data.title}
  [![npm](https://badge.fury.io/js/inquirer.svg)](http://badge.fury.io/js/inquirer)
${renderLicenseBadge(data.license)}


## Description:
${data.description}


  # Table of Content
  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  ${renderLicenseLink(data.license)}
  - [Contribution](#Contribution)
  - [Test](#Test)
  - [Github](#Username)
  - [Profile](#Profile)
  
 
  ## Username:
    ${data.github}
  
  
    
  ## Installation:
    ${data.installation}

     
  ## Usage:
    ${data.usage}


  ## Contribution:
     ${data.contribution}

    
  ## Test:
    ${data.test}
  

  ## Email:
    ${data.email}
  


  ## Licenses:
   ${renderLicenseSection(data.license)}
  `
  return content;
  }




module.exports = generateMarkdown;
