function User(action){
	
	var usr = document.getElementById("usr").value;
	var pwd = document.getElementById("pwd").value;
	
	$.ajax({
    type: "GET",
    url: "controllers/todo.php",
    data: "action="+action+"&user_name="+usr+"&user_pass="+pwd,
    dataType: 'json',
    success: function (json) {
      	if(json.user_id == "null"){
      		document.getElementById("usr").value="";
      		document.getElementById("pwd").value="";
      		
      		if(action=="getUserId")
      			alert("Napačno uporabniško ime ali geslo!");
      		else
      			alert("Uporabniško ime je zasedeno!");
      	} else {
      		location.reload(); 
      	}
    }
    });
}

function getTask(user_id){
	$.ajax({
    type: "GET",
    url: "controllers/todo.php",
    data: "action=getTask&user_id="+user_id,
    dataType: 'json',
    success: function (json) {
      	var table = document.getElementById("taskTable");
      	table.innerHTML = "";
      	for(var i = 0; i < json.length; i++){	
      		var row = table.insertRow(0);
      		var cell1 = row.insertCell(0);
      		//var cell2 = row.insertCell(1);
      		cell1.innerHTML = json[i].task;
      	}
    }
    });
}

function newTask(user_id){
	var task = document.getElementById("task").value;
	$.ajax({
    type: "GET",
    url: "controllers/todo.php",
    data: "action=newTask&user_id="+user_id+"&text="+task,
    success: function () {
      	document.getElementById("task").value = "";
      	getTask(user_id);
      	}
    });
}

function logOut(){
	$.ajax({
    type: "GET",
    url: "controllers/todo.php",
    data: "action=logOut",
    success: function (){
    	location.reload(); 
    }
    });
}



