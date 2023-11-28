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
      overflow-x: hidden; /* Hide horizontal scrollbar for the entire page */
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

    nav {
      font-size: 25px;
      width: 200px;
      height:100%;
      background-color: #7e7979;
      position: fixed;
      top: 0;
      left: 0;
      overflow-y: auto; /* Add vertical scrollbar to the navigation bar */
      padding-top: 20px;
      transition: margin-left 0.3s; /* Add a smooth transition effect */
    }

    nav a {
      display: block;
      text-decoration: none;
      color:white;
      background-color: #333;
      height:90px;
      padding-top: 30px;
      padding-left: 20px;
    }
    nav a:hover {
      background-color: #e68181;
    }

    main {
      margin-left: 220px; /* Adjust this value based on your navigation width */
      padding: 20px;
      overflow-y: auto; /* Add vertical scrollbar to the main content area */
      display: flex; /* Use flexbox for layout */
      flex-wrap: wrap; /* Allow wrapping for smaller screens */
    }

    table {
      width: calc(50% - 20px); /* Set the width of each table to 50% of the container */
      margin: 10px; /* Add margin between tables */
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
    #myid{
      width:50%;
      margin:auto;
      background-color:aquamarine;
      border:2px solid black;
      margin-top: 20px;
    }
    #myid,tr,th,td{
      border:2px solid black;
    }
    label{
            font-size: 30px;
            font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
            padding: 10px;
            margin:5px;
            font-weight: bold;
        }
        input{
            font-size: 25px;
            margin:5px;
            padding:5px;
        }
        
        #submit{
               border: 2px solid black;
                font-size: 30px;
                width:150px;
                background-color: rgb(106, 103, 104);
                margin-left: 37%;
                margin-top:5%;
            }
        #submit:hover{
                background-color: rgb(160, 74, 78);
            }
            #myid6{
                color:green;
                font-size: 50px;
            }
    
    
  </style>
</head>

<body>

  <header>
    <h1>RR HOUSING SERVICES</h1>
  </header>

  <nav id="myNav">
    <p id="myid5">Admin Section</p>
    <a href="Adminhome.html">Home</a>
	  <a href="tenantdetails.php" >Tenant Details</a>
    <a href="maintenance.php" >Maintenance</a>
    <a href="update.php">Update Status</a>

    <!-- Add more navigation links as needed -->
  </nav>
  <form method="post" action="update.php">
        <table id="myid">
            
            <tr>
                <td><label>Room NO</label></td>
                <td><input type="text" id="input1" name="roomno"></input></td>
            </tr>
            <tr>
                <td><label>Status</label></td>
                <td><input type="text" id="input2" name="status"></input></td>
            </tr>
            
            <tr><td colspan="2"><input type="submit" id="submit" value="update"></input></td></tr>
        </table>
    
 </form>
 <?php
  $db=mysqli_connect("127.0.0.1", "root","", "rrhousing");
  $enterredroomno=isset($_POST["roomno"]) ? (int)$_POST["roomno"] : 0;
  $enterredstatus= isset($_POST["status"]) ? mysqli_real_escape_string($db, $_POST["status"]) : '';
  $query=" update maintenancereqs set status='$enterredstatus' where roomno=$enterredroomno";
  $result = mysqli_query($db,$query);
 


?>
</body>


</html>
