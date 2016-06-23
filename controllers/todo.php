<?php
include_once '../models/todo.php';
include_once '../models/users.php';

$action = $_GET["action"];

if ($action == "getTask")
{
	$user_id = $_GET["user_id"];
	$user_id = mysql_real_escape_string($user_id);
	getTask($user_id);
}
elseif ($action == "getUser")
{
	$user_name = $_GET["user_name"];
	$user_pass = $_GET["user_pass"];
	$user_name = mysql_real_escape_string($user_name);
	$user_pass = mysql_real_escape_string($user_pass);
	getUser($user_name, $user_pass);
}

function getTask($user_id)
{
	$todoM = new TodoModel;
	$array = $todoM->read($user_id);
	header('Content-type: application/json');
	echo json_encode($array);
}

function getUser($user_name, $user_pass)
{
	$userM = new UserModel;
	$user_id = $userM->getUserId($user_name, $user_pass);
	
	if(is_numeric($user_id))
		$array = array('user_id' => $user_id);
	else
		$array = array('user_id' => 'null');
		
	
	header('Content-type: application/json');
	echo json_encode($array);
}


?>