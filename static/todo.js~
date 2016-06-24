var user_id = 1;

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

function getTask(){
	console.log("tukaj sem");
	$.ajax({
    type: "GET",
    url: "controllers/todo.php",
    data: "action=getTask&user_id="+user_id,
    dataType: 'json',
    success: function (json) {
      	var table = document.getElementById("taskTable");
      	for(var i = 0; i < json.length; i++){	
      		var row = table.insertRow(0);
      		var cell1 = row.insertCell(0);
      		//var cell2 = row.insertCell(1);
      		cell1.innerHTML = json[i].task;
      	}
    }
    });
}

function newTask(){
	var task = document.getElementById("task").value;
	$.ajax({
    type: "GET",
    url: "controllers/todo.php",
    data: "action=newTask&user_id="+user_id+"&text="+task
    });
}



