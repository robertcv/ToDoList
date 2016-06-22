<?php

class UsersModel
{
	var $dbName = 'ToDo';
	var $dbHost = 'localhost';
	var $dbUser = 'root';
	var $dbUserPass = 'root';
	
	var $conn = null;
	
	function __construct(){
		$this->conn = mysql_connect($this->dbHost, $this->dbUser, $this->dbUserPass);
        
		if(! $this->conn ) 
        {
        	die('Could not connect: ' . mysql_error());
        }
        mysql_select_db($this->dbName);
	}
	
	function read($id)
	{
		$sql = 'SELECT * FROM Users WHERE id ='.$id;
    	$retval = mysql_query( $sql, $this->conn );
    	
    	if(! $retval ) {
    		die('Could not get data: ' . mysql_error());
    	}
    	while($row = mysql_fetch_array($retval, MYSQL_NUM)) {
    		echo "{$row[0]}  <br> ";
        }
	}
	
	function readAllUsers()
	{
		$sql = 'SELECT * FROM Users';
    	$retval = mysql_query( $sql, $this->conn );
    	
    	if(! $retval ) {
    		die('Could not get data: ' . mysql_error());
    	}
    	while($row = mysql_fetch_array($retval, MYSQL_NUM)) {
    		echo "{$row[0]}  <br> ";
        }
	}
	
}
?>