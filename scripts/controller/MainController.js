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
	 			var price;
	 			if ($scope.currency) {
	 				price = value * $scope.currency.USD_BUY
	 			}
				return price;
			};
	 		
			$scope.buildSmallImg = function(id) {
	 			if (angular.isUndefined(id)) {
	 				return;
	 			} else {
	 				return 'img/products/small/' + $scope.type + '/' + id + '.jpg';
	 			}

			};
			
			$scope.buildLargeImg = function(id) {
				if (angular.isUndefined(id)) {
	 				return;
	 			} else {
	 				return 'img/products/large/' + $scope.type + '/' + id + '.jpg';
	 			}
			};
	 		
	 	}
	]);
});