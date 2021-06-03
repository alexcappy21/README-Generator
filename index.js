const fs = require("fs")

const inquirer = require('inquirer')
inquirer
const userLicence = ['ISC','CC','MIT','GNU','None']
const startReadme = "Welcome to the Professional Readme Generator.<br>Let's build a perfect Readme file for your projects using the information you provide"

console.log(startReadme)

const userInput =()=>
  inquirer.prompt([
    {
        type:'input',
        name:'title',
        message:'Whats the title of your project',

    },

    {
        type:'input',
        name:'description',
        message:'Please enter a brief description of your project',

    },

    {
        type:'input',
        name:'installation',
        message:'Please the installation instructions',

    },

    {
        type:'input',
        name:'usage',
        message:'Enter a brief description of the usage of this project',

    },

    {
        type:'input',
        name:'contribution',
        message:'Please confirm if you are open to contributions and what would be the guidelines to follow',

    },

    {
        type:'input',
        name:'tests',
        message:'Describe the instructions for running tests',

    },

    {
        type:'list',
        name:'licence',
        message:'Please select from the choices listed below the licence of your project',
        choices:userLicence,

    },

    {
        type:'input',
        name:'githubUser',
        message:'Please provide your GitHub Username',

    },

    {
        type:'input',
        name:'email',
        message:'Please provide your email address:',

    },
    
    
])

const buildReadme = function(answers) {
return `# ${answers.title}
![license](https://img.shields.io/badge/License-${answers.licence}-green.svg "License Badge")

## Description
${answers.description}

## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage) 
- [Contributing](#Contributing)
- [License](#License)
- [Test](#Test)
- [Questions](#Questions)

##  Installation
${answers.installation}

##  Usage
${answers.usage}

##  Contributing
${answers.contribution}

##  License
${answers.licence}

## Test
${answers.tests}

## Questions
Please feel free to reach me with additional questions: ${answers.email}
GitHub profile: ${answers.githubUser}
`;};

userInput()
.then((answers) =>{
    const readme = buildReadme(answers);
    fs.writeFileSync('generatedREADME.md', readme);
})
.catch(() => console.error(err))