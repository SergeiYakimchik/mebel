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
	 			
	 			var url;
	 			
	 			if (angular.isUndefined($routeParams.type)) {
	 				url = 'products.json'
	 			} else {
	 				url = 'products/'+$routeParams.type+'.json'
	 			}
	 			
	 			console.log(url);
	 			ProductService.getProducts(url).success(function(data) {
		 			$scope.products = data.products;
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
	 				return 'img/products/' + $routeParams.type + '/' + id + '.jpg';
	 			}
			};
	 		
	 		
	 	}
	]);
});