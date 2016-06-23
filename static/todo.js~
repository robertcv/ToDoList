function ajaxFunction(){
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
			ajaxResponse = ajaxRequest.responseText;
		}
	}
	
	ajaxRequest.open("GET",'controllers/todo.php', true);
    ajaxRequest.send();
    
    document.getElementById('result').innerHTML = ajaxResponse;
	
}