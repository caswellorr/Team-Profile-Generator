// ============ GENERATE HTML TEMPLATE FUNCTION ================

function generateHtmlTemplate({name, id, email, office, github, school}) {

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

  <main class="card-pond">

    <div class="card">
      <section class="card-header">
        <h2><b>${name}</b></h2>
        <p class="card-position">${role}</p>
      </section>
      <section class="card-body">
        <article class="card-items">
          <p class="card-item-1 card-text">ID: ${id}</p>
          <p class="card-item-2 card-text">Email: ${email} </p>
          <p class="card-item-3 card-text">Office/GitHub/School</p>
        </article>
      </section>
    </div>

  </main>

</body>

</html>
  
  
  `


};

module.exports = generateHtmlTemplate