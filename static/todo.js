$(document).ready(function(){
		
	$( "#taskTable" ).ready(function(){
		$.ajax({
		type: "GET",
		url: "controllers/todo.php",
		data: "action=getTask",
		dataType: 'json',
		success: function (json) {
			for(var i = 0; i < json.length; i++){
				var result = "<td class='task' valign='middle'>" + json[i].task + "</td>";
				result += "<td valign='middle'><img class='editbt' src='img/edit-button.png' width='38' height='38'></td>";
				result += "<td valign='middle'><img class='btnDelete' src='img/delete-button.png' width='42' height='42'></td>";
				$('#taskTable').append( '<tr>' + result + '</tr>' );
			}
		}
		});
	});
	
	$( "#taskTable" ).on('click', ".btnDelete", function(){
		var task = $(this).closest("tr").children(".task").text();
		$.ajax({
		type: "GET",
		url: "controllers/todo.php",
		data: "action=delateTask&text=" + task,
		success: function () {
			location.reload();
		}
		});
	});
	
	$( "#newTask" ).click(function(){
		var task = $("#task").val();
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
			data: "action=newTask&text="+task,
			success: function () {
				location.reload();
				}
			});
		}
	});

	$( "#logOut" ).click(function() {
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