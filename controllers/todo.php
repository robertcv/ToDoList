<?php
class Todo
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
	}
	
    
    function disconnect()
    {	
    	mysql_close($this->conn);
    	$this->conn = null;
    }
    
    function get_query($user_id)
    {
    	mysql_select_db($this->dbName);
    	$sql = 'SELECT task FROM Todo WHERE user_id = ' . $user_id;
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