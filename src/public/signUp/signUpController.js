(function (){
'use strict';

angular.module('common')
.controller('signUpController', signUpController);

signUpController.$inject = [];
function signUpController() {
	var signUpCtrl = this;
	console.log("Inside the submit form controller!");

	signUpCtrl.submitForm = function () {
		console.log("Inside the submit form!");
	};
}

})();