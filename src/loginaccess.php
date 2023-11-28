<?php
session_start();
$db=mysqli_connect("127.0.0.1", "root","", "rrhousing");



$enteredid = $_POST['id'];
$enteredpassword= $_POST['password'];

$query="select * from admin";
$result = mysqli_query($db,$query);

$queryTenant = "SELECT * FROM tenantreg";
$resultTenant = mysqli_query($db, $queryTenant);
$authenticated = false;

while ($row = mysqli_fetch_assoc($result)) {
   
    if ($enteredid == $row['adminid'] && $enteredpassword == $row['password']) {
        $authenticated = true;
        $login="admin";
        break; 
    }
}
if (!$authenticated) {
    while ($row = mysqli_fetch_assoc($resultTenant)) {
        /
        if ($enteredid == $row['username'] && $enteredpassword == $row['password']) {
            $authenticated = true;
            $login="tenant";
            break; 
        }
    }
}

if ($authenticated) {
    if($login=="admin"){
        include("Adminhome.html");
    }else{
        $_SESSION['user_id'] = $enteredid;
        header("Location: http://localhost/sddpro/src/tenanthome.php");
        exit();
  
       


    }
} else {
    print '<p id="myid3"> Invalid Input, Please provide correct details!!!</p>';
}
?>
<html>
     
    <style>
        #myid3{
            font-size: 30px;
            background-color: red;
            text-align: center;
            width:50%;
            padding: 10px;
            margin-left: 25%;
            margin-top: 25%;   
        }
    
    </style>
<body>
</body>
</html>

