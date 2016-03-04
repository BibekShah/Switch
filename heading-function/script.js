angular.module('switchDemo', ['ngMaterial'])
.controller('SwitchDemoCtrl', function($scope){
	$scope.test = function(idParent,template,controller){
		// $('#'+idParent).append("<b>Appended text thank you </b>");
		// $('#'+idParent).append("<b>you are wel come </b>");
		// $("#"+idParent).append($("<div>").load("dummy.html"));
		// alert(template);
		$("#"+idParent).append($("<div>").load(template));


	};
});