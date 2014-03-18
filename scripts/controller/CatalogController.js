define(['appModule'], function(Shop)
{
	Shop.lazy.controller('CatalogController', 
	[
	 	'$routeParams',
	 	'$scope',
	 	'$location',
	 	'ProductService',

	 	function($routeParams, $scope, $location, ProductService){
	 		
	 		$scope.init = function() {
	 			
	 			$scope.type = $routeParams.type;
	 			
	 			var url;
	 			
	 			if (angular.isUndefined($scope.type)) {
	 				url = 'products.json'
	 			} else {
	 				url = 'products/'+$scope.type+'.json'
	 			}
	 			
	 			ProductService.getProducts(url).success(function(response) {
		 			$scope.products = response.products;
				}).error(function() {
					console.log('error');
					//$location.path('/catalog');
				});
	 			
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
			
			$scope.init();
			
	 		
	 	}
	]);
});