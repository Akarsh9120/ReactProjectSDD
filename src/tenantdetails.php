<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RR HOUSING SERVICES</title>
  <style>
    body {
      margin: 0;
      font-family: Arial, sans-serif;
      overflow-x: hidden;
      background-image: url('./tenant.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
    }

    header {
      background-color: #333;
      color: #fff;
      padding: 16px;
      text-align: center;
      font-size: 25px;
      font-style: italic;
    }

    nav {
      font-size: 25px;
      width: 200px;
      height: 100%;
      background-color: #7e7979;
      position: fixed;
      top: 0;
      left: 0;
      overflow-y: auto;
      padding-top: 20px;
      transition: margin-left 0.3s;
    }

    nav a {
      display: block;
      text-decoration: none;
      color: white;
      background-color: #333;
      height: 90px;
      padding-top: 30px;
      padding-left: 20px;
    }

    nav a:hover {
      background-color: #e68181;
    }

    main {
      margin-left: 220px;
      padding: 20px;
      overflow-y: auto;
      display: flex;
      flex-wrap: wrap;
    }

    table {
      width: calc(50% - 20px);
      margin: 10px;
      border-collapse: collapse;
    }

    table,
    th,
    td {
      border: 1px solid #ddd;
    }

    th,
    td {
      padding: 15px;
      text-align: left;
    }

    p {
      font-size: 30px;
      color: white;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      padding-left: 45px;
    }

    #myid {
      width: 50%;
      margin: auto;
      background-color: aquamarine;
      border: 2px solid black;
      margin-top: 20px;
    }

    #myid,
    tr,
    th,
    td {
      border: 2px solid black;
    }

    #myid2 {
      background-color: lightslategray;
    }

    #myid5 {
      margin-left: 15px;
      padding: 5px;
      font-size: 30px;
      text-align: center;
      color: white;
    }

    /* New styles for the hamburger menu */
    .hamburger-menu {
      display: none;
      cursor: pointer;
      padding: 16px;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 1;
      background-color: #333;
      color: #fff;
    }

    .hamburger-menu:hover {
      background-color: #555;
    }

    /* Media query for small screens */
    @media only screen and (max-width: 600px) {
      nav {
        display: none;
      }

      .hamburger-menu {
        display: block;
      }

      main {
        margin-left: 0;
      }

      nav a {
        display: block;
        text-decoration: none;
        color: white;
        background-color: #333;
        padding-top: 15px;
        padding-left: 20px;
      }

      nav.show {
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #7e7979;
        overflow-y: auto;
      }
    }
  </style>
</head>

<body>

  <div class="hamburger-menu" onclick="toggleNav()">☰ Menu</div>

  <header>
    <h1>RR HOUSING SERVICES</h1>
  </header>

  <nav id="myNav">
    <p id="myid5">Admin Section</p>
    <a href="Adminhome.html">Home</a>
    <a href="tenantdetails.php">Tenant Details</a>
    <a href="maintenance.php">Maintenance</a>
    <a href="update.php">Update Status</a>
  </nav>

  <?php
  $db = mysqli_connect("127.0.0.1", "root", "", "rrhousing");
  $query = "select * from tenant";
  $result = mysqli_query($db, $query);
  $num_rows = mysqli_num_rows($result);
  echo "<table id='myid'>";
  echo "<tr id='myid2'><th>Room No</th><th>First Name</th><th>Last Name</th><th>Email ID</th><th>Contact</th><th>Meal Plan</th></tr>";
  for ($i = 0; $i < $num_rows; $i++) {
    $row = mysqli_fetch_assoc($result);
    $roomno = $row["roomno"];
    $fname = $row["fname"];
    $lname = $row["lname"];
    $email = $row["emailid"];
    $contact = $row["contact"];
    $meal = $row["mealplan"];
    echo "<tr><td>$roomno</td><td>$fname</td><td>$lname</td><td>$email</td><td>$contact</td><td>$meal</td></tr>";
  }
  ?>

  <script>
    function toggleNav() {
      var nav = document.getElementById("myNav");
      nav.classList.toggle("show");
    }
  </script>
</body>

</html>
