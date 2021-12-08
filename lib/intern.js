
const Employee = require ("../lib/employee");

class Intern extends Employee {

  constructor(name, id, email, school) {

    super(name, id, email);

    this.school = school;

    
  };

  getRole() {

    return "Intern";

  };

  getSchool() {

    this.school;

  };

};

module.exports = Intern