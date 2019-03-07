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

setInterval(function() {
	if(window.innerHeight < 355) {
		document.getElementById("img_logo").style.setProperty("display", "none", "important");
	} else {
		if(document.getElementById("contactForm").style.display == "none" && document.getElementById("img_logo").style.display == "none") {
			document.getElementById("img_logo").style.setProperty("display", "block", "important");
		}
	}
}, 100)

