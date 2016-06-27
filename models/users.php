<?php

include_once 'connection.php';

class UserModel
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
	
    function getUserId($user_name, $user_pass)
    {
    	$user_pass = sha1($user_pass);
    	
    	$sql = 'SELECT id FROM Users WHERE username=\''.$user_name.'\' AND password=\''.$user_pass.'\'';
    	$retval = mysql_query( $sql, $this->conn->conn );
    	
    	$this->errorCheck($retval);
    	
    	$row = mysql_fetch_assoc($retval);
    	
    	return $row['id'];
    	
    }
    
    function newUser($user_name, $user_pass)
    {
    	$user_pass_hash = sha1($user_pass);
    	
    	$sql = 'SELECT COUNT(*) FROM Users WHERE username=\''.$user_name.'\'';
    	
    	$retval = mysql_query( $sql, $this->conn->conn );
    	
    	$this->errorCheck($retval);
    	
    	$id = mysql_fetch_assoc($retval);
    	
    	if($id['COUNT(*)'] !=0)
    		return null;
    	
    	$sql = 'INSERT INTO Users( username, password) VALUES (\''.$user_name.'\',\''.$user_pass_hash.'\');';
    	$retval = mysql_query( $sql, $this->conn->conn );
    	
    	$this->errorCheck($retval);
    	
    	return $this->getUserId($user_name, $user_pass);
    	
    }
    
}
?>