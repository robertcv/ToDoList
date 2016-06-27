$(document).ready(function(){
		
	$( "#taskTable" ).each(function(){
		//get tasks from database and generating html table
		$.ajax({
		type: "GET",
		url: "controllers/todo.php",
		data: "action=getTask",
		dataType: 'json',
		success: function (json) {
			for(var i = 0; i < json.length; i++){
				var result = "<td width='80%' id='task' valign='middle'>" + json[i].task + "<input type='hidden' name='task_id' value=" + json[i].id + "></td>";
				result += "<td width='10%' valign='middle' align='center'><img class='editBt' src='img/edit-button.png' width='38' height='38'></td>";
				result += "<td width='10%' valign='middle' align='center'><img class='deleteBt' src='img/delete-button.png' width='42' height='42'></td>";
				$('#taskTable').append( '<tr id="tr' + i + '">' + result + '</tr>' );
			}
		}
		});
	});
	
	$( "#taskTable" ).on('click', ".deleteBt", function(){
		if (confirm('Si prepričan, da želiš izbrisat nalogo?')) {
			var task_id = $(this).closest("tr").children("#task").find( 'input:hidden' ).val();
			$.ajax({
			type: "POST",
			url: "controllers/todo.php",
			data: "action=delateTask&task_id=" + task_id,
			success: function () {
				location.reload();
			}
			});
		}
	});
	
	var old_task_id = new Array();
	
	$( "#taskTable" ).on('click', ".editBt", function(){
		var tr = $(this).closest("tr");
		
		$(this).attr("src","img/save-button.png");
		$(this).attr("class","saveBt");
		
		var rowId = tr.attr("id").slice(2);
		old_task_id[rowId] = tr.children("#task").find( 'input:hidden' ).val();
		task_old = tr.children("#task").text();
		tr.children("#task").html('<input type="text" id="new_task" value="'+task_old+'"><input type="hidden" name="task_id" value=' + old_task_id[rowId] + '>');
			
	});
	
	$( "#taskTable" ).on('click', ".saveBt", function(){
		var tr = $(this).closest("tr");
		var rowId = tr.attr("id").slice(2);
		var task_new = tr.children("#task").children("#new_task").val();
		$.ajax({
		type: "POST",
		url: "controllers/todo.php",
		data: "action=updateTask&text=" + task_new + "&task_id=" + old_task_id[rowId],
		success: function () {
			tr.children("#task").html(task_new + "<input type='hidden' name='task_id' value=" + old_task_id[rowId] + "></td>");
			$(this).attr("src","img/edit-button.png");
			$(this).attr("class","editBt");
		}
		});
	});
	
	$( "#newTask" ).click(function(){
		var task = $("#newTaskInput").val();
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
			type: "POST",
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
		var user_name = $("#user_name").val();
		var user_pass = $("#user_pass").val();
		
		if (user_name=="")
			alert("Nisi vnesel uporabniškega imena!");
		else if (user_pass=="")
			alert("Nisi vnesel gesla!");
		else {
			$.ajax({
			type: "POST",
			url: "controllers/todo.php",
			data: "action=getUserId&user_name="+user_name+"&user_pass="+user_pass,
			dataType: 'json',
			success: function (json) {
				if(json.user_id == "null"){
					$("#user_name").text("");
					$("#user_pass").text("");
					alert("Napačno uporabniško ime ali geslo!");
				} else {
					location.reload(); 
				}
			}
			});
		}
	});
	
	$("#newUser").click(function(){
		var user_name = $("#user_name").val();
		var user_pass = $("#user_pass").val();
		
		if (user_name=="")
			alert("Nisi vnesel uporabniškega imena!");
		else if (user_pass=="")
			alert("Nisi vnesel gesla!");
		else {
			$.ajax({
			type: "POST",
			url: "controllers/todo.php",
			data: "action=newUser&user_name="+user_name+"&user_pass="+user_pass,
			dataType: 'json',
			success: function (json) {
				if(json.user_id == "null"){
					$("#user_name").text("");
					$("#user_pass").text("");
					alert("Uporabniško ime je zasedeno!");
				} else {
					location.reload(); 
				}
			}
			});
		}
	});

});