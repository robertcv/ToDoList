<!DOCTYPE html>
<head>
    <meta charset="utf-8">
    <script src="js/jquery-2.0.0.js"></script>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <script src="js/bootstrap.min.js"></script>
    <script src="static/todo.js" type="text/javascript" ></script> 
</head>
 
<body>
    <div class="container" >
    	<?php
    	session_start();
    	if(isset($_SESSION['user_id']) && is_numeric($_SESSION['user_id']))
    	{
    		include 'views/TaskTable.php';
    	}
    	else
    	{
    		include 'views/UserForm.php';
    	}
    	?>  
    </div>
  </body>
</html>