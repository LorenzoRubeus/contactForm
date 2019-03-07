function errorAlert(error, cause) {
	setTimeout(function() { 
		swal(`Error on your ${cause}!`,
		`${error}`,
		"error")
	}, 500);
}

function successAlert() {
	setTimeout(function() {
		swal("Successful!",
			"We will read your question and will send you an email as soon as possible. You will be redirected in 2 seconds.",
			"success")
	}, 500);
	setTimeout(function() {
		location.reload();	
	}, 2600);
}