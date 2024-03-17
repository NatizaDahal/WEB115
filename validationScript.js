// JavaScript code for form validation
	// Prevent form from submitting

      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form

        // Invalid input: display error message

let myForm = document.getElementById("myForm");
myForm.addEventListener('submit', function(e){
    e.preventDefault();
});

myForm.addEventListener('change', function(e){
  let myInputField = document.getElementById("inputField");
  let myInputVal = document.getElementById("showVal");
  let regex = /^[a-zA-Z0-9]*$/;
  if (regex.test(myInputField.value) && myInputField.value != ""){
    myInputVal.value = "The input value is alphanumeric!!!";
  } else if(!regex.test(myInputField.value) && myInputField.value != ""){
    myInputVal.value = "The input value is not alphanumeric!!!";
    e.preventDefault();
  } else {
    myInputVal.value = "";
    e.preventDefault();
  }
});