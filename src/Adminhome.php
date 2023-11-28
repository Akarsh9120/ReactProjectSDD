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
      background-image: url('./peakpx (5).jpg');
      background-color: #eb7777;
    }

    header {
      background-color: #333;
      color: #fff;
      padding: 38px;
      text-align: center;
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
      padding: 15px;
      text-decoration: none;
      color:white;
      background-color: #333;
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

    table, th, td {
      border: 1px solid #ddd;
    }

    th, td {
      padding: 15px;
      text-align: left;
    }
    p{
        font-size: 30px;
        color:white;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        padding-left: 45px;
    }
  </style>
</head>

<body>

  <header>
    <h1>RR HOUSING SERVICES</h1>
  </header>

  <nav id="myNav">
    <p>Admin Section</p>
	<a href="page.php" >Home</a>
    <a href="#">Tenant Details</a>
    <a href="#" onclick="myfunction2()">Payment</a>
    <a href="#" onclick="myfunction3()">Maintenance</a>

    
  </nav>
  


  

</body>


</html>


