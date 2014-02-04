define(['appModule'], function(RMT)
{
	RMT.lazy.controller('MenuController', 
	[
	 	'$scope',
	 	'l10n',
	 	'$location',

	 	function($scope, l10n, $location){
	 		
	 		l10n.init();
	 		
	 		$scope.init = function() {
	 			$scope.currentEmpl = JSON.parse(localStorage.getItem('currentUser'));
			};
	 		
	 		$scope.changeLocal = function(local) {
	 			l10n.changeLocal(local);
	 			$scope.$parent.changeLanguage();
	 		};
	 		
	 		$scope.logout = function(){
	 			localStorage.removeItem("accessToken");
	 			localStorage.removeItem("currentUser");
	 			$location.path('/login');
	 		};	
	 		
	 		$scope.profileURL = function(){
	 			$location.path('/profile');
	 		};	
	 		
	 		$scope.vacationURL = function(){
	 			$location.path('/vacation');
	 		};	
	 		
	 		$scope.init();
	 	}
	]);
});