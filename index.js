// ============== NODE MODULES ===============

const inquirer = require('inquirer');
const fs = require('fs');

// =============== IMPORT GENERATE HTML =================

const generateMarkdown = require('./src/generateTemplate.js');

// =============  PROMPT ARRAY  ==============

const prompts = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description explaining the what, why, and how of your project: '
  },
  {
    type: 'input',
    name: 'link',
    message: 'Please include a relevant link here: '
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the steps required to install your project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions for use: '
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'Please include Contribution Guidelines: '
  },
  {
    type: 'input',
    name: 'test',
    message: 'Please provide examples on how to run tests on your application here: '
  },
  {
    type: 'input',
    name: 'gitHub',
    message: 'Please enter the link to your GitHub profile: '
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your Email: '
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license are you using?',
    choices: ["MIT", "APACHE 2.0", "WTFPL", "None"]
  }

];



// ================= INQUIRER ===================

inquirer

  .prompt(prompts)

  .then((response) => {

    writeToFile(response);

  });

// ================ WRITE TO FILE FUNCTION ============ 

function writeToFile(response) {

  fs.writeFile('README.md', generateMarkdown(response), (err) => {
    err
      ? console.log(err)
      : console.log("Success!")
  })
};