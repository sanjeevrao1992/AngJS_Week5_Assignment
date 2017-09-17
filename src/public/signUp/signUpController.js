(function (){
'use strict';

angular.module('public')
.controller('signUpController', signUpController);

signUpController.$inject = [];
function signUpController() {
	var signUpCtrl = this;
	console.log("Inside the submit form controller!");

}

})();