<h2>Prijava:</h2>
<br>
<form role="form">	
	<div class="form-group">
	  	<label for="usr">Uporabniško ime:</label>
	  	<input type="text" class="form-control" id="usr" placeholder="Vnesi uporabniško ime">
	</div>
	<div class="form-group">
		<label for="pwd">Geslo:</label>
		<input type="password" class="form-control" id="pwd" placeholder="Vnesi geslo">
	</div>
	<button type="button" class="btn btn-primary" onclick="checkUser()" >Sign in</button>
	<button type="button" class="btn btn-default" onclick="newUser()">Register</button>
</form>