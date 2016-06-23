var user_id;

function checkUser(){
	var usr = document.getElementById("usr").value;
	var pwd = document.getElementById("pwd").value;
	
	$.ajax({
    type: "GET",
    url: "controllers/todo.php",
    data: "action=getUserId&user_name="+usr+"&user_pass="+pwd,
    dataType: 'json',
    success: function (json) {
      	if(json.user_id == "null"){
      		alert("Napačno uporabniško ime ali geslo!");
      		document.getElementById("usr").value="";
      		document.getElementById("pwd").value="";
      	} else {
      		user_id = json.user_id;
      		console.log(user_id);
      	}
    }
    });
}

function newUser(){
	var usr = document.getElementById("usr").value;
	var pwd = document.getElementById("pwd").value;
	
	$.ajax({
    type: "GET",
    url: "controllers/todo.php",
    data: "action=newUser&user_name="+usr+"&user_pass="+pwd,
    dataType: 'json',
    success: function (json) {
      	if(json.user_id == "null"){
      		alert("Uporabniško ime je zasedeno!");
      		document.getElementById("usr").value="";
      		document.getElementById("pwd").value="";
      	} else {
      		user_id = json.user_id;
      		console.log(user_id);
      	}
    }
    });
}



