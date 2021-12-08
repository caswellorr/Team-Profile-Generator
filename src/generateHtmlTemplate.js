// ============ GENERATE HTML TEMPLATE FUNCTION ================

// create html for teamMembers
const generateTeam = teamMembers => {

  // create html for manager
  const generateManager = manager => {

    return `
    
    <div class="card-pond">
    <section class="card">
      <article class="card-header">
        <h2>${manager.getName()}</h2>
        <h3><i class=""></i>${manager.getRole()}</h3>
      </article>
      <article class="card-body">
        <ul class="card-list">
          <li class="card-list-item">ID: ${manager.getId()}</li>
          <li class="card-list-item">Email: <a href="${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="card-list-item">Office Number: ${manager.getOfficeNumber()} </li>
        </ul>
      </article>
    </section>
  </div>
  
  `
  };

  // create html for engineer
  const generateEngineer = engineer => {

    return `
    
    <div class="card-pond">
    <section class="card">
      <article class="card-header">
        <h2>${engineer.getName()}</h2>
        <h3><i class=""></i>${engineer.getRole()}</h3>
      </article>
      <article class="card-body">
        <ul class="card-list">
          <li class="card-list-item">ID: ${engineer.getId()}</li>
          <li class="card-list-item">Email: <a href="${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="card-list-item">GitHub: ${engineer.getGitHub()}</li>
        </ul>
      </article>
    </section>
  </div>
  
  `
  };

  // create html for intern
  const generateIntern = intern => {

    return `
    <div class="card-pond">
    <section class="card">
      <article class="card-header">
        <h2>${intern.getName()}</h2>
        <h3><i class=""></i>${intern.getRole()}</h3>
      </article>
      <article class="card-body">
        <ul class="card-list">
          <li class="card-list-item">ID: ${intern.getId()}</li>
          <li class="card-list-item">Email: <a href="${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="card-list-item">School: ${intern.getSchool()}</li>
        </ul>
      </article>
    </section>
  </div>

  `
  };


  const html = [];

  html.push(teamMembers
    .filter(teamMember => teamMember.getRole() === "Manager")
    .map(manager => generateManager(manager))

  );
  html.push(teamMembers
    .filter(teamMember => teamMember.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
    .join(" ")

  );
  html.push(teamMembers
    .filter(teamMember => teamMember.getRole() === "Intern")
    .map(intern => generateIntern(intern))
    .join(" ")

  );

}



// create html for team profile
module.exports = teamMembers => {

  return `

  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profiles</title>
  
    <!-- Stylesheet -->
    <link rel="stylesheet" href="../dist/style.css">
  
  </head>
  
  <body>
  
    <!-- =========== HEADER ============ -->
  
    <header>
      <h1>My Team</h1>
    </header>
  
    <!-- ============ CARD ============ -->
  
    <main>
  
          ${generateTeam(teamMembers)}
  
    </main>
  
  </body>
  
  </html>
  
  `


}

