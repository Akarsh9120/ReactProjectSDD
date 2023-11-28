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
      table {
    width: 100%;
    margin: 20px 0;
    border-collapse: collapse;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 15px;
    text-align: left;
  }

  th {
    background-color: #e68181;
    color: white;
  }

  tr:hover {
    background-color: #f5f5f5;
  }
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
      position: relative;
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
      padding-top: 1px; 
      transition: width 0.3s;
    }

    nav.show {
      width: 200px;
    }

    nav a {
      display: block;
      text-decoration: none;
      color: white;
      background-color: #333;
      height: 90px;
      line-height: 90px; 
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
      width: 100%;
      margin: 20px 0;
      border-collapse: collapse;
    }

    th,
    td {
      border: 1px solid #ddd;
      padding: 15px;
      text-align: left;
    }

    th {
      background-color: #e68181;
      color: white;
    }

    tr:hover {
      background-color: #f5f5f5;
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
    <a id="seen" href="">Maintenance</a>
    <a href="account.php">Account</a>
    <a href="raisemaintenance.html">Raiserequest</a>
    <a href="http://localhost:3001/">Logout</a>
  </nav>

  <main>

    <div id="raiseRequestBox" style="width: 100%; margin-top: 20px;">
      <h2>Raise Maintenance Request</h2>
      <form action="http://localhost/sddpro/src/raisemaintenance.html" method="post">
        <button type="submit">Raise request</button>
      </form>
    </div>

    <div id="maintenanceRequestsBox" style="width: 100%; margin-top: 50px;">
      <h2>Maintenance Requests</h2>
      <?php
      $db = mysqli_connect("127.0.0.1", "root", "", "rrhousing");
      session_start();

      if (isset($_SESSION['user_id'])) {
        $user_id = $_SESSION['user_id'];
        $query = "SELECT * FROM maintenancereqs WHERE username = '$user_id'";
        $result = mysqli_query($db, $query);

        echo "<table style='width:100%; border-collapse: collapse; margin-top: 10px;'>";
        echo "<tr style='background-color: #e68181; color: white;'><th>Request ID</th><th>Description</th><th>Status</th></tr>";

        while ($row = mysqli_fetch_assoc($result)) {
          $request_id = $row["requestno"];
          $description = $row["details"];
          $status = $row["status"];

          echo "<tr><td>$request_id</td><td>$description</td><td>$status</td></tr>";
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