<html>
<head>
<style>
        #myid1{
            font-size: 30px;
            background-color: green;
            text-align: center;
            width:50%;
            padding: 10px;
            margin-left: 25%;
            margin-top: 25%;   
        }
    
    </style>
</head>
<body>
    


<?php
// session_start();

$db=mysqli_connect("127.0.0.1", "root","", "rrhousing");





if (isset($_POST["request"])) {
    $request = $_POST["request"];
} else {
    // $mealplan = "";
    $request = "";
}
$roomno = $_POST['roomno'];
$details = $_POST['details'];
$status = "opened";

$username = $_POST['username'];

$query= "insert into maintenancereqs(requesttype,roomno,status,details, username) values('$request',$roomno,'$status','$details','$username')";
$result = mysqli_query($db,$query);
echo $result;
if($result){
    print '<p id="myid1">Your maintenance request is raised, Thank You!!!</p>';   
}

?>

   
   

</body>
</html>



