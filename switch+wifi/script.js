angular.module('switchDemo', ['ngMaterial'])
.controller('SwitchDemoCtrl', function($scope,$mdDialog){
	$scope.settings = [
	  { name: 'Wi-Fi', extraScreen: 'Wi-fi menu', icon: 'device:network-wifi', enabled: true},
	  { name: 'Bluetooth', extraScreen: 'Bluetooth menu', icon: 'device:bluetooth', enabled: false},	  	  
	];
	$scope.test = function(setting){
	   return setting.enabled;
	}
	$scope.showConfirm = function(ev,setting){
		//confirmation only during off to on state
		if(setting.enabled==false){
			// Appending dialog to document.body to cover sidenav in docs app
			var confirm = $mdDialog.confirm(ev)
			    .title('Are you sure you want to change it?')
			    .textContent('Changing the setting might be Risky')
			    .ariaLabel('Change Option')
			    .targetEvent(ev)
			    .ok('Yes')
			    .cancel('No');
			$mdDialog.show(confirm).then(function(){
				//compliment value on confirmation
			setting.enabled=!setting.enabled;
			}, function(){
					//do nothing
			});
		}
		else{
			setting.enabled=false;
		}
	};
});