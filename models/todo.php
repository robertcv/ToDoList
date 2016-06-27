<?php

include_once 'connection.php';

class TodoModel
{	
	var $conn = null;

	function __construct()
	{	
		//establishing connection to db
		$this->conn = new Connection();
	}
    
	function errorCheck($retval)
	{	
		if(! $retval ) 
		{
    		die('Could not get data: ' . mysql_error());
    	}
	}
	
    function read($user_id)
    {	
    	//returns array of id an tasks from user with user_id
    	$sql = 'SELECT id, task FROM Todo WHERE user_id = \'' . $user_id.'\';';
    	$retval = mysql_query( $sql, $this->conn->conn );
    	
    	$this->errorCheck($retval);
    	
    	$array = array();
    	while($row =mysql_fetch_assoc($retval))
    	{
    		$array[] = $row;
    	}
    	return $array;
    	
    }
    
    function insert($user_id, $text)
    {	
    	//inserts new tesk from user_id
    	$sql = 'INSERT INTO Todo(task, user_id) VALUES (\''. $text.'\',\''.$user_id.'\');';
    	$retval = mysql_query( $sql, $this->conn->conn );
    	
    	$this->errorCheck($retval);
    }
    
    function delete($task_id)
    {
    	//deletes task from user_id
    	$sql = 'DELETE FROM Todo WHERE id=\''. $task_id . '\';';
    	$retval = mysql_query( $sql, $this->conn->conn );
    	
    	$this->errorCheck($retval);
    }
    
    function update($text, $task_id)
    {	
    	//updates task with task_id to new text
    	$sql = 'UPDATE Todo SET task=\''.$text.'\' WHERE id=\''.$task_id.'\';';
    	$retval = mysql_query( $sql, $this->conn->conn );
    	
    	$this->errorCheck($retval);
    }
    
}
?>