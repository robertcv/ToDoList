function jsonServerResponse() {
    $.ajax({
    type: "GET",
    url: "controllers/todo.php",
    data: "action=getUser&user_name=robert&user_pass=geslo",
    dataType: 'json',
    success: function (json) {
      	console.log(json.user_id);
    }
    });
}




function ajax(){
	var ajaxRequest;
	var ajaxResponse;
	
	try{
		ajaxRequest = new XMLHttpRequest();
	}catch (e){
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		}catch (e) {
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}catch (e){
				alert("Your browser broke!");
				return false;
			}
		}
	}
	
	ajaxRequest.onreadystatechange = function(){
		if(ajaxRequest.readyState == 4){
			ajaxResponse = JSON.parse(ajaxRequest.responseText);
		}
	}
	
    //var queryString = "?action=getUser" + "&user_name=" + user_id;
	
	ajaxRequest.open("GET",'controllers/todo.php?action=getUser&user_name=obert&user_pass=geslo', true);
    ajaxRequest.send();
    
    
    console.log( ajaxResponse.user_id );
	
}