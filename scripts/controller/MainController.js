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
	 		
	 		$scope.getPrice = function(value) {
				return value * $scope.currency.USD_BUY;
			};
	 		
	 		
	 	}
	]);
});