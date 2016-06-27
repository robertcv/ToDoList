<?php
include_once '../models/todo.php';
include_once '../models/users.php';

class Todo{

	var $text;
	var $task_id;
	var $user_name;
	var $user_pass;
	var $userM;
	var $todoM;
	
	function __construct()
	{
		$this->userM = new UserModel();
		$this->todoM = new TodoModel();
		
		if(isset($_POST["text"]))
			$this->text = mysql_real_escape_string($_POST["text"]);
		
		if(isset($_POST["task_id"]))
			$this->task_id = mysql_real_escape_string($_POST["task_id"]);
		
		if(isset($_POST["user_name"]))
			$this->user_name = mysql_real_escape_string($_POST["user_name"]);
		
		if(isset($_POST["user_pass"]))
			$this->user_pass = mysql_real_escape_string($_POST["user_pass"]);
	}
	
	function getTask()
	{
		$array = $this->todoM->read($_SESSION['user_id']);
		header('Content-type: application/json');
		echo json_encode($array);
	}
	
	function newTask()
	{
		$this->todoM->insert($_SESSION['user_id'], $this->text);
	}
	
	function delateTask()
	{
		$this->todoM->delete($this->task_id);
	}
	
	function updateTask()
	{
		$this->todoM->update($this->text, $this->task_id);
	}
	
	function getUserId()
	{
		$id = $this->userM->getUserId($this->user_name, $this->user_pass);
		
		if(is_numeric($id))
		{
			$array = array('user_id' => $id);
			$_SESSION['user_id'] = $id;
		}
		else
			$array = array('user_id' => 'null');
			
		header('Content-type: application/json');
		echo json_encode($array);
	}
	
	function newUser()
	{
		$id = $this->userM->newUser($this->user_name, $this->user_pass);
		
		if(is_numeric($id))
		{
			$array = array('user_id' => $id);
			$_SESSION['user_id'] = $id;
		}
		else
			$array = array('user_id' => 'null');
			
		header('Content-type: application/json');
		echo json_encode($array);
	}
	
	function logOut()
	{	
		session_destroy();
	}
	
}

session_start();
//finding what action to execute
if(isset($_GET["action"]))
	$action = $_GET["action"];
else
	$action = $_POST["action"];

$todo = new Todo();

switch ($action) {
case "getTask":
	$todo->getTask();
	break;
case "newTask":
	$todo->newTask();
	break;
case "delateTask":
	$todo->delateTask();
	break;
case "updateTask":
	$todo->updateTask();
	break;
case "getUserId":
	$todo->getUserId();
	break;
case "newUser":
	$todo->newUser();
	break;
case "logOut":
	$todo->logOut();
	break;
}



?>