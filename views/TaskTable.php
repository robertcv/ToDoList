<h2>Tvoj todo seznma:</h2>
<div class="table-striped">
	<script type="text/javascript"> getTask(<?php echo $_SESSION['user_id']; ?>); </script>
	<table class="table" id="taskTable"></table>
</div> 
<form class="form-inline" role="form">
	<h3>Dodaj nalogo:</h3>
    <input type="task" class="form-control" id="task">
    <button type="button" class="btn btn-primary" onclick="newTask(<?php echo $_SESSION['user_id']; ?>)">Dodaj</button>
</form>
<button type="button" class="btn btn-primary" onclick="logOut();">Odjava</button>