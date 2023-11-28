<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RR HOUSING SERVICES</title>
  <style>
    body {
      margin: 0;
      font-family: 'Arial', sans-serif;
      overflow-x: hidden;
      background-image: url('./peakpx (5).jpg');
      background-repeat: no-repeat;
      background-size: cover;
    }

    header {
             
             color: #fff;
             padding: 16px;
             text-align: center;
             font-size: 25px;
             font-style: italic;
         }
 
         header h1 {
             background: linear-gradient(to right, #FFA500, #ff0000);
             -webkit-background-clip: text;
             color: transparent;
             font-family: Cursive, Lucida Handwriting;
             font-size: 4em;
         }
 

    .hamburger-btn {
      position: absolute;
      top: 16px;
      left: 16px;
      cursor: pointer;
      z-index: 2;
      display: flex;
      flex-direction: column;
    }

    .hamburger-btn div {
      width: 30px;
      height: 3px;
      background-color: #fff;
      margin: 6px 0;
      transition: 0.4s;
    }

    nav {
      font-size: 18px;
      width: 0;
      height: 100%;
      background-color: #333;
      position: fixed;
      top: 0;
      left: 0;
      overflow-y: auto;
      padding-top: 80px; 
      transition: width 0.3s;
    }

    nav.show {
      width: 200px;
    }

    nav a {
      display: block;
      text-decoration: none;
      color: #fff;
      background-color: #333;
      height: 50px;
      line-height: 50px;
      padding-left: 20px;
      border: 1px solid #555;
      transition: background-color 0.3s;
    }

    nav a:hover {
      background-color: #555;
    }

    main {
      margin-left: 0;
      padding: 20px;
      overflow-y: auto;
      display: flex;
      flex-wrap: wrap;
    }

    table {
      width: 100%;
      margin: 20px 0;
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

    #myid {
      width: 70%;
      margin: auto;
      background-color: #fff;
      border: 2px solid #ddd;
      margin-top: 20px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    #myid,
    tr,
    th,
    td {
      border: 1px solid #ddd;
    }

    #myid2 {
      background-color: #333;
      color: #fff;
    }

    #idmain {
      margin-top: 10px;
    }
  </style>
</head>

<body>

  <header>
    <div class="hamburger-btn" onclick="toggleNav()">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <h1>RR HOUSING SERVICES</h1>
  </header>

  <nav id="myNav">
    <a id="idmain" href="Adminhome.html">Home</a>
    <a href="maintenancepage.php">Maintenance</a>
    <a href="account.php">Account</a>
    <a href="raisemaintenance.html">Raise request</a>
    <a href="http://localhost:3001/">Logout</a>
  </nav>

  <?php
  session_start();
  $db = mysqli_connect("127.0.0.1", "root", "", "rrhousing");
  if (isset($_SESSION['user_id'])) {
    $user_id = $_SESSION['user_id'];
    $query = "SELECT t.roomno, fname, lname, mealplan FROM tenant t, tenantreg r WHERE t.tenantid=r.tenantid AND r.username = '$user_id'";
    $result = mysqli_query($db, $query);
    $num_rows = mysqli_num_rows($result);
    echo "<table id='myid'>";
    echo "<tr id='myid2'><th>Room No</th><th>First Name</th><th>Last Name</th><th>Mealplan</th></tr>";

    while ($row = mysqli_fetch_assoc($result)) {
      $roomno = $row["roomno"];
      $fname = $row["fname"];
      $lname = $row["lname"];
      $mealplan = $row["mealplan"];
      echo "<tr><td>$roomno</td><td>$fname</td><td>$lname</td><td>$mealplan</td></tr>";
    }

    echo "</table>";
  } else {
    echo "Invalid user ID";
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
