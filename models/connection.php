<?php
class Connection
{	
	//declare database connection variables
	var $dbName = 'ToDo';
	var $dbHost = 'localhost';
	var $dbUser = 'root';
	var $dbUserPass = 'root';
	
	var $conn = null;
	
	function __construct()
	{
		//connecting to db
		$this->conn = mysql_connect($this->dbHost, $this->dbUser, $this->dbUserPass);
        
		if(! $this->conn ) 
        {
        	die('Could not connect: ' . mysql_error());
        }
        
        mysql_select_db($this->dbName);
	}
	
    function disconnect()
    {	
    	//disconnecting from db	
    	mysql_close($this->conn);
    	$this->conn = null;
    }
    
}
?>