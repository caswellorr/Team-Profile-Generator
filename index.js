// ============== NODE MODULES ===============

const inquirer = require('inquirer');
const fs = require('fs');

// =============== IMPORT GENERATE HTML =================

// const generateHtmlTemplate = require('./src/generateHtmlTemplate.js');

// ======== LIBRARY MODUELS ============

// const Manager = require("./library/manager");
// const Engineer = require("./library/engineer");
// const Intern = require("./library/intern");

// =============  PROMPT ARRAYS  ==============

const initialPrompts = [

  {
    type: "input",
    name: "name",
    message: "What is your name?"
  },
  {
    type: "input",
    name: "id",
    message: "What is your ID number?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?"
  },
  {
    type: 'list',
    name: 'role',
    message: 'What is your role?',
    choices: ["Manager", "Engineer", "Intern"]
  },

]

const managerPrompt = [
  {
    type: "input",
    name: "officeNumber",
    message: "What is your office number?",
  },
]

const engineerPrompt = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
  },
]

const internPrompt = [
  {
    type: "input",
    name: "school",
    message: "What school do you attend?"
  },
]

const addMemberPrompt = [
  {
    type: "confirm",
    name: "addMember",
    message: "Would you like to add another team member?",
  },
]

// ============= INQUIRER ==============

const createTeam = async (response) => {

  const teamMembers = [];
  let addTeamMember = true;

  while (addTeamMember) {

    const { name, id, email, role } = await inquirer

      .prompt(initialPrompts)

    // IF manager is selected:
    if (role === "Manager") {

      const { officeNumber } = await inquirer
        .prompt(managerPrompt)

      const newManager = new Manager(

        name,
        id,
        email,
        officeNumber,

      )

      teamMembers.push(newManager)
    }

    // IF Engineer is selected: 
    else if (role === "Engineer") {

      const { github } = await inquirer
        .prompt(engineerPrompt)

      const newEngineer = new Engineer(

        name,
        id,
        email,
        github,

      )

      teamMembers.push(newEngineer)
    }

    // IF Intern is selected: 
    else {

      const { school } = await inquirer
        .prompt(internPrompt)

      const newIntern = new Intern(

        name,
        id,
        email,
        school,

      )

      teamMembers.push(newIntern)
    }

    // If user would like to add another team member:

    const { addMember } = await inquirer
      .prompt(addMemberPrompt)

    addTeamMember = addMember;

  }



  // else {

  //     await inquirer

  //     .then((response) => {
  //       writeToFile(response);

  //     })
  // }

};

createTeam();

// ================ WRITE TO FILE FUNCTION ============ 

function writeToFile(response) {

  console.log("team", teamMembers)

  fs.writeFile('index.html', generateHtmlTemplate(teamMembers), (err) => {
    err
      ? console.log(err)
      : console.log("Success!")
  })
};