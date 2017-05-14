var formApp = (function () {
	var validator={},
			formSubmit={};

	formSubmit.init = function(obj){
		if(obj && obj.hasOwnProperty('selector')) {
			var form = document.getElementById(obj.selector);
			form.addEventListener('submit',function(event){
				event.preventDefault();
				var passing = true,
						data = {};
				// Iterate through the form elements and test the validation of each element. A form with hidden fields would need a way to filter out those elements
				Object.keys(form.elements).forEach(function(fieldId){
					// Make sure the field name and ID are the same
					fieldName = form.elements[fieldId].id;
					// Only grab the items with a key that is a number
					if (Number.isInteger(parseInt(fieldId)) && fieldName !== 'formSubmit') {
						var fieldValue = form.elements[fieldName].value.trim();
						// Store the field value in a data object
						data[fieldName] = fieldValue;
						// validator.validate function returns true or false. If the value is false, calls methods to update the UI
						passing &= validator.validate(fieldName, fieldValue);
					}
				})
				// Submit form if all validation passes
				if (passing) {
					formSubmit.submit(data,form);
				}
			})
		}
	}

	formSubmit.submit = function(data, form){
		// Submit form, hide form container, go to thank you page.
		console.log("submit form data with AJAX", data);
		form.parentElement.style.display = "none";
		document.getElementById('thank-you-message').style.display = "block";
	}

	validator.validate = function(selector, value){
		if (selector === 'phoneNumber') {
			validator.phoneValidate(selector, value);
		}
		if (value !== '') {
			return true;
		}else{
			validator.invalidInput(selector);
			return false;
		}
	}

	validator.phoneValidate = function(selector, value){
		// Return Status object with a string of the number and punctuation as props.
		// For example, '818-234-8765' would return:
		// {
		// 	numbers:8182348765,
		// 	punctuation:'--'
		// }
		var numberSplit = value.trim().split('').reduce(function(result, character){
			if (isNaN(parseInt(character))) {
				result.punctuation = result.punctuation + character;
			}else{
				result.numbers = result.numbers + character;
			}
			return result;
		},{numbers:'',punctuation:''});

		if (numberSplit.numbers.length === 10 && 
				numberSplit.punctuation === '' ||
				numberSplit.punctuation === '--' ||
				numberSplit.punctuation === '() -'){
			return true;
		}else{
			validator.invalidInput(selector, 'invalid phone number');
			return false;
		}
	}

	// adds invalid class to input parent element (div.form-row)
	validator.invalidInput = function(selector, message){
		element = document.getElementById(selector);
		element.parentElement.classList.add('invalid');
		validator.clearInvalidListener(element);

		if (message) {
			validator.invalidMessage(element,message);
		}
	}

	// Clears invalid class on click of input
	validator.clearInvalidListener = function(element){
		function clear(){
			this.parentElement.classList.remove('invalid');
		}
		element.addEventListener("click", clear.bind(element));
	}

	// Update the field when it is invalid with a message appended to the input label
	validator.invalidMessage = function(element, message){
		var label = element.previousElementSibling,
				labelText = label.innerHTML;
		fullMessage = labelText + ' - ' + message;
		// Only add the message if it's not being displayed already
		if (labelText.indexOf(message) === -1) {
			element.previousElementSibling.innerHTML = fullMessage;
			validator.clearInvalidMessageListener(element,label,labelText);
		}
	}

	// Clears invalid class on click of input
	validator.clearInvalidMessageListener = function(element,label,labelText){
		function clear(){
			label.innerHTML = labelText;
		}
		element.addEventListener("click", clear.bind(element));
	}

	return {
		init: formSubmit.init
	}

 }());

// Init App with form ID selector
(function() {
   formApp.init({selector:'survey-form'});
})();