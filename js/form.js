const inputs = document.querySelectorAll(".form-input")
const divs = document.querySelectorAll(".form-div")
const submit = document.querySelector(".form-submit")

let statusList = {
	name: false,
	email: false,
	message: false
}

for(i=0 ; i<inputs.length ; i++){
	inputs[i].addEventListener("blur", validateElement);
}

function validateElement(element) {
	let statusElement = element.target.name;

	// clear previus validation
	element.target.parentElement.classList.remove("form-div-valid", "form-div-invalid")

	// validate if it has any content
	if (element.target.checkValidity()) {
		element.target.parentElement.classList.add("form-div-valid")
		statusList[statusElement] = true;
	} else {
		element.target.parentElement.classList.add("form-div-invalid")
		statusList[statusElement] = false;
	}

	// call and update the submit button status
	updateSubmit();
}

function updateSubmit() {
	// checks if all status are true and update submit button
	if(statusList.name && statusList.email && statusList.message) {
		submit.classList.add("form-submit-valid");
		submit.disabled=false;
	} else {
		submit.classList.remove("form-submit-valid");
		submit.disabled=true;
	}
}