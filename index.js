// ============== NODE MODULES ===============

const inquirer = require('inquirer');
const fs = require('fs');

// =============== IMPORT GENERATE HTML TEMPLATE =================

const generateMyTeam = require('./src/generateMyTeam');

// ======== LIBRARY MODUELS ============

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

// =============  PROMPT ARRAYS  ==============

const initialPrompts = [

  {
    type: "input",
    name: "name",
    message: "What is your name?"
  },
  {
    type: 'list',
    name: 'role',
    message: 'What is your role?',
    choices: ["Manager", "Engineer", "Intern"]
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
    message: "What univeristy did / do you attend?"
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

  // IF user would not like to add another team member and create the team

  if (!addTeamMember) {

    writeToFile(teamMembers);

  }

};

createTeam();

// ================ WRITE TO FILE FUNCTION ============ 

function writeToFile(teamMembers) {

  console.log("team", teamMembers)

  fs.writeFile('index.html', generateMyTeam(teamMembers), (err) => {
    err
      ? console.log(err)
      : console.log("Success!")

  })
};