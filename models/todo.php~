<?php

include 'connection.php';

class TodoModel
{	
	var $conn = null;

	function __construct()
	{
		$this->conn = new Connection;
	}
    
    function read($user_id)
    {
    	$sql = 'SELECT task FROM Todo WHERE user_id = ' . $user_id;
    	$retval = mysql_query( $sql, $this->conn->conn );
    	
    	if(! $retval ) {
    		die('Could not get data: ' . mysql_error());
    	}
    	
    	$display_string = "<table>";
    	while($row = mysql_fetch_array($retval))
    	{
    		$display_string .= "<tr>";
    		$display_string .= "<td>" . $row[0] . "</td>";
    		$display_string .= "</tr>";
    	}
    	
    	$display_string .= "</table>";
    	
    	return $display_string;
    	
    }
    
    function insert($user_id, $text)
    {
    	$sql = 'INSERT INTO `Todo`(`task`, `user_id`) VALUES ('. $text.','.$user_id.');';
    	$retval = mysql_query( $sql, $this->conn );
    	
    	if(! $retval ) {
    		die('Could not get data: ' . mysql_error());
    	}
    }
    
    function delete($user_id, $text)
    {
    	$sql = 'DELETE FROM Todo WHERE tesk='. $text.' AND user_id'. $user_id . ';';
    	$retval = mysql_query( $sql, $this->conn );
    	
    	if(! $retval ) {
    		die('Could not get data: ' . mysql_error());
    	}
    }
    
    function update($user_id, $text_old, $text_new)
    {
    	$this->delete($user_id, $text_old);
    	$this->insert($user_id, $text_new);	
    }
    
}
?>