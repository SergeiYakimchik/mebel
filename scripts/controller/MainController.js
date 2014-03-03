define(['appModule'], function(Shop)
{
	Shop.lazy.controller('MainController', 
	[
	 	'$scope',
	 	'CurrencyService',

	 	function($scope, CurrencyService){
	 		
	 		CurrencyService.get(function(response) {
	 			$scope.currency = response;
			});
	 		
	 		
	 	}
	]);
});