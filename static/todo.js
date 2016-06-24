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
      		var cell2 = row.insertCell(1);
      		cell1.innerHTML = json[i].task;
      		cell2.innerHTML = "<img src='img/edit-button.png' width='38' height='38'>  <img src='img/delete-button.png' width='42' height='42'>";
      	}
    }
    });
}

function newTask(user_id){
	var task = document.getElementById("task").value;
	
	if (task==""){
		alert("Najprej vstavi besedilo!");
	} else {
		task = task.replace(/č/g, "c");
		task = task.replace(/Č/g, "C");
		task = task.replace(/š/g, "s");
		task = task.replace(/Š/g, "S");
		task = task.replace(/ž/g, "z");
		task = task.replace(/Ž/g, "Z");
		
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
}

$(document).ready(function(){

	$( "#logOut" ).click(function() {
		console.log("tukaj :)");
		$.ajax({
		type: "GET",
		url: "controllers/todo.php",
		data: "action=logOut",
		success: function (){
			location.reload();
		}
		});
	});
	
	$("#getUserId").click(function(){
		var usr = $("#usr").val();
		var pwd = $("#pwd").val();
		
		if (usr=="")
			alert("Nisi vnesel uporabniškega imena!");
		else if (pwd=="")
			alert("Nisi vnesel gesla!");
		else {
			$.ajax({
			type: "GET",
			url: "controllers/todo.php",
			data: "action=getUserId&user_name="+usr+"&user_pass="+pwd,
			dataType: 'json',
			success: function (json) {
				if(json.user_id == "null"){
					$("#usr").text("");
					$("#pwd").text("");
					alert("Napačno uporabniško ime ali geslo!");
				} else {
					location.reload(); 
				}
			}
			});
		}
	});
	
	$("#newUser").click(function(){
		var usr = $("#usr").text();
		var pwd = $("#pwd").text();
		
		if (usr=="")
			alert("Nisi vnesel uporabniškega imena!");
		else if (pwd=="")
			alert("Nisi vnesel gesla!");
		else {
			$.ajax({
			type: "GET",
			url: "controllers/todo.php",
			data: "action=newUser&user_name="+usr+"&user_pass="+pwd,
			dataType: 'json',
			success: function (json) {
				if(json.user_id == "null"){
					$("#usr").text("");
					$("#pwd").text("");
					alert("Uporabniško ime je zasedeno!");
				} else {
					location.reload(); 
				}
			}
			});
		}
	});

});