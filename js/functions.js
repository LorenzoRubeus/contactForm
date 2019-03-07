var pictures = document.getElementsByClassName("img_slider");
var index = 0;
var keepSlide;
slide();


function checkName() {
	let name = $("#txt_name").val();
	
	if(name.length < 2) {
		let error = "Name must have at least two characters.";
		errorAlert(error, "name");
		return false;
	} else {
		if(/[0-9-!$%^*()_+|~=`{}\[\]:";'<>?,.\/]/.test(name)) {
			let error = "Name cannot have special symbols and numbers in it.";
			errorAlert(error, "name");
			return false;
		}
	}
	
	return true;
}

function checkPhone() {
	let phone = $("#txt_phone").val();
	
	if(phone.length < 9 && phone) {
		let error = "Phone number must have at least 9 characters.";
		errorAlert(error, "phone number");
		return false;
	} else {
		if(/[a-zA-Z-!$%^*()_+|~=`{}\[\]:";'<>?,.\/]/.test(phone)) {
			let error = "Phone cannot have special symbols and letters in it.";
			errorAlert(error, "phone number");
			return false;
		}
	}
	
	return true;
}

function checkEmail() {
	let email = $("#txt_email").val();
	let domainEmail;
	if(/[@]/.test(email)) {
		domainEmail = email.split("@");
	} else {
		let error = "You have to type a valid email address.";
		errorAlert(error, "email");
		return false;
	}
	
	if(domainEmail[1].split(".").length !== 2) {
		let error = "Try to check the domain of your email.";
		errorAlert(error, "email");
		return false;
	} else {
		if(domainEmail[0].length < 1) {
			let error = "Email address must have at least 1 character.";
			errorAlert(error, "email");
			return false;
		} else {
			if(/[-!$%^*()_+|~=`{}\[\]:";'<>?,\/]/.test(email)) {
				let error = "Email address cannot have special symbols in it.";
				errorAlert(error, "email");
				return false;
			}
		}	
	}
	return true;
}

function showContactForm() {
	$("#div_btnContact").css("display", "none");
	$("#contactForm").css("display", "block");
	$("#contactForm").fadeTo(500, 1, function(){});
}

function closeContactForm() {
	$("#contactForm").fadeTo(500, 0, function(){
		$("#div_btnContact").css("display", "block");
		$("#contactForm").css("display", "none");
	});
}

function slide(){
	if(keepSlide != "stop"){
		if(index > 0){
			$(".img_slider").eq(index-1).fadeOut(800), function(){
				$(".img_slider").eq(index-1).css("height", "0");
			}
		}
		$(".img_slider").eq(index).css("height", "100%");
		$(".img_slider").eq(index).fadeTo(2000, 1);
		if(index == pictures.length-1){
			$(".img_slider").eq(index).fadeOut(800, function(){
				$(".img_slider").eq(index).css("height", "0");
			});
			index = 0;
		}else{
			index++;
		}
		setTimeout(slide, 2800);
	}else{
		return;
	}
}