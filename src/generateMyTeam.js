

// ============ GENERATE HTML TEMPLATE FUNCTION ================

const generateTeamCards = teamMembers => {


  const generateManagerCard = manager => {

    return `
    
    <section class="card">
      <article class="card-header">
        <h2>${manager.getName()}</h2>
        <h3><i class="fa-solid fa-mug-hot"></i>${manager.getRole()}</h3>
      </article>
      <article class="card-body">
        <ul class="card-list">
          <li class="card-list-item">ID: ${manager.getId()}</li>
          <li class="card-list-item">Email: <a href="${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="card-list-item">Office Number: ${manager.getOfficeNumber()} </li>
        </ul>
      </article>
    </section>
  
  `
  };


  const generateEngineerCard = engineer => {

    return `
    
    <section class="card">
      <article class="card-header">
        <h2>${engineer.getName()}</h2>
        <h3><i class="fa-solid fa-glasses"></i>${engineer.getRole()}</h3>
      </article>
      <article class="card-body">
        <ul class="card-list">
          <li class="card-list-item">ID: ${engineer.getId()}</li>
          <li class="card-list-item">Email: <a href="${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="card-list-item">GitHub: ${engineer.getGitHub()}</li>
        </ul>
      </article>
    </section>

  `
  };


  const generateInternCard = intern => {

    return `
  
    <section class="card">
      <article class="card-header">
        <h2>${intern.getName()}</h2>
        <h3><i class="fa-solid fa-user-graduate"></i>${intern.getRole()}</h3>
      </article>
      <article class="card-body">
        <ul class="card-list">
          <li class="card-list-item">ID: ${intern.getId()}</li>
          <li class="card-list-item">Email: <a href="${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="card-list-item">School: ${intern.getSchool()}</li>
        </ul>
      </article>
    </section>
 
  `
  };

  const employeeCards = [];

  employeeCards.push(teamMembers
    .filter(teamMember => teamMember.getRole() === "Manager")
    .map(manager => generateManagerCard(manager))
    .join("")

  );

  employeeCards.push(teamMembers
    .filter(teamMember => teamMember.getRole() === "Engineer")
    .map(engineer => generateEngineerCard(engineer))
    .join(" ")

  );

  employeeCards.push(teamMembers
    .filter(teamMember => teamMember.getRole() === "Intern")
    .map(intern => generateInternCard(intern))
    .join(" ")

  );

  return employeeCards.join("");

}


const generateMyTeamHtml = teamMembers => {

  return `

  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Profiles</title>

  <!-- Font Awesome -->
  <script src="https://use.fontawesome.com/731caf872c.js"></script>

  <!-- Stylesheet -->
  <link rel="stylesheet" href="../client/style.css">

</head>

<body>

  <!-- =========== HEADER ============ -->

  <header>
    <h1>My Team</h1>
  </header>

  <!-- ============ CARD ============ -->

  <main>

    <div class="card-pond">
      ${generateTeamCards(teamMembers)}
    </div>


  </main>

</body>

</html>
  
  `

}

module.exports = generateMyTeamHtml;