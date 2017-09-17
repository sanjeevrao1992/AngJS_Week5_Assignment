(function () {

angular.module('public').controller('submitController', submitController);

submitController.$inject = ['savedData'];
function submitController(savedData) {
	console.log("iinside submit contrroller");
	var submitCtrl = this;
	submitCtrl.savedData = savedData;
	console.log(submitCtrl.savedData);

	
}
	
})();