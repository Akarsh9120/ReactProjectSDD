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
      background-image: url('tenant.jpg');
      background-repeat: no-repeat;
      background-size: cover;
    }

    header {
      background-color: #333;
      color: #fff;
      padding: 16px;
      text-align: center;
      font-size: 25px;
      font-style: italic;
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
      font-size: 25px;
      width: 200px;
      height: 100%;
      background-color: #333;
      position: fixed;
      top: 0;
      left: 0;
      overflow-y: auto;
      padding-top: 20px;
      transition: margin-left 0.3s;
    }

    nav.show {
      margin-left: 0;
    }

    nav a {
      display: block;
      text-decoration: none;
      color: white;
      background-color: #333;
      height: 90px;
      padding-top: 69px;
      padding-left: 20px;
      border: 1px solid;
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

    #idmain {
      margin-top: 70%;
    }

    #seen {
      background-color: #e68181;
    }

    button {
      padding: 20px;
      background-color: darkgreen;
      color: white;
      font-size: 25px;
      margin-left: 43%;
    }

    button:hover {
      background-color: green;
    }

    h2 {
      text-align: center;
      font-size: 33px;
    }

    table {
      width: calc(50% - 20px);
      margin: 10px;
      border-collapse: collapse;
      font-family: Arial, sans-serif;
    }

    th, td {
      padding: 35px;
      padding-left: 42%;
      text-align: left;
      font-size: 25px;
      color: brown;
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
    <a id="idmain" href="tenanthome.php">Home</a>
    <a href="maintenancepage.php">Maintenance</a>
    <a id="seen" href="">Account</a>
    <a href="raisemaintenance.html">Raiserequest</a>
    <a href="http://localhost:3001/">Logout</a>
  </nav>

  <main>
    <div id="accountDetailsBox" style="width: 100%; margin-top: 20px;">
      <h2>Account Details</h2>
      <?php
      $db = mysqli_connect("127.0.0.1", "root", "", "rrhousing");
      session_start();

      if (isset($_SESSION['user_id'])) {
        $user_id = $_SESSION['user_id'];
        $query = "SELECT fname, lname, roomno, contact,emailid FROM tenant,tenantreg WHERE tenant.tenantid = tenantreg.tenantid AND tenantreg.username = '$user_id'";
        $result = mysqli_query($db, $query);

        echo "<table style='width:100%; border-collapse: collapse; margin-top: 10px;'>";

        while ($row = mysqli_fetch_assoc($result)) {
          $fname = $row["fname"];
          $lname = $row["lname"];
          $roomno = $row["roomno"];
          $contactno = $row["contact"];
          $emailid = $row["emailid"];

          echo "<tr><td>";
          echo "<strong>First Name:</strong> $fname<br><br>";
          echo "<strong>Last Name:</strong> $lname<br><br>";
          echo "<strong>Room No:</strong> $roomno<br><br>";
          echo "<strong>Contact No:</strong> $contactno<br><br>";
          echo "<strong>Email ID:</strong> $emailid";
          echo "</td></tr>";
        }

        echo "</table>";
      } else {
        echo "Invalid user ID";
      }
      ?>
    </div>
  </main>

  <script>
    function toggleNav() {
      var nav = document.getElementById("myNav");
      nav.classList.toggle("show");
    }
  </script>
</body>

</html>
