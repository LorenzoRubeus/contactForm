$(document).ready(function() {
	$("#btn_submitForm").click(function() {
		$("#formContact").submit();
	});
});

$(document).ready(function() {
	$("#btn_contact").click(function() {
		showContactForm();
	});
	
	$("#img_close_div_contact").click(function() {
		closeContactForm();
	})
})

$("#formContact").on('submit', function(e) {
	e.preventDefault();
	if(checkName()) {
		if(checkEmail()) {
			if(checkPhone()) {
				successAlert();
			}
		}
	}
});


