function jsonServerResponse() {
	
    $.ajax({
    type: "GET",
    url: "controllers/todo.php",
    data: "action=getTask&user_id=1",
    dataType: 'json',
    success: function (json) {
      	console.log(typeof json);
    }
    });
}
