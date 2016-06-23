<h2>Tvoj todo seznma:</h2>
<div class="table-striped" onload="getTask();">
	<table class="table" id="taskTable"></table>
</div> 
<br>
<form class="form-inline" role="form">
	<label for="task">Nova naloga: </label>
    <input type="task" class="form-control" id="task">
    <button type="button" class="btn btn-primary" onclick="newTask()">Dodaj</button>
</form>