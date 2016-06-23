<?php

include_once 'connection.php';

class UserModel
{
	var $conn = null;

	function __construct()
	{
		$this->conn = new Connection;
	}
    
    function getUserId($user_name, $user_pass)
    {
    	$sql = 'SELECT id FROM Users WHERE username=\''.$user_name.'\' AND password=\''.$user_pass.'\'';
    	$retval = mysql_query( $sql, $this->conn->conn );
    	
    	if(! $retval ) {
    		die('Could not get data: ' . mysql_error());
    	}
    	
    	$row = mysql_fetch_assoc($retval);
    	
    	return $row['id'];
    	
    }
    
}
?>