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
			
			$scope.init();
			
	 		$scope.buildImgSource = function(id) {
	 			if (angular.isUndefined(id)) {
	 				return;
	 			} else {
	 				return 'img/products/' + $scope.type + '/' + id + '.jpg';
	 			}
			};
	 		
	 		
	 	}
	]);
});