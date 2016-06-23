<?php
include_once '../models/todo.php';
include_once '../models/users.php';

class Todo{

	var $user_id;
	var $text;
	var $text_new;
	var $user_name;
	var $user_pass;
	var $userM;
	var $todoM;
	
	function __construct()
	{
		$this->userM = new UserModel();
		$this->todoM = new TodoModel();
		
		
		if(isset($_GET["user_id"]))
			$this->user_id = mysql_real_escape_string($_GET["user_id"]);
		
		if(isset($_GET["text"]))
			$this->text = mysql_real_escape_string($_GET["text"]);
		
		if(isset($_GET["text_new"]))
			$this->text_new = mysql_real_escape_string($_GET["text_new"]);
		
		if(isset($_GET["user_name"]))
			$this->user_name = mysql_real_escape_string($_GET["user_name"]);
		
		if(isset($_GET["user_pass"]))
			$this->user_pass = mysql_real_escape_string($_GET["user_pass"]);
	}
	
	function getTask()
	{
		$array = $this->todoM->read($this->user_id);
		header('Content-type: application/json');
		echo json_encode($array);
	}
	
	function newTask()
	{
		$this->todoM->insert($this->user_id, $this->text);
	}
	
	function delateTask()
	{
		$this->todoM->delete($this->user_id, $this->text);
	}
	
	function updateTask()
	{
		$this->todoM->update($this->user_id, $this->text, $this->text_new);
	}
	
	function getUserId()
	{
		$id = $this->userM->getUserId($this->user_name, $this->user_pass);
		
		if(is_numeric($id))
			$array = array('user_id' => $id);
		else
			$array = array('user_id' => 'null');
			
		header('Content-type: application/json');
		echo json_encode($array);
	}
	
	function newUser()
	{
		$id = $this->userM->newUser($this->user_name, $this->user_pass);
		
		if(is_numeric($id))
			$array = array('user_id' => $id);
		else
			$array = array('user_id' => 'null');
			
		header('Content-type: application/json');
		echo json_encode($array);
	}
	
}

$action = $_GET["action"];
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
}



?>