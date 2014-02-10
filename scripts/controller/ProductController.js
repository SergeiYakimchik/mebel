define(['appModule'], function(Shop)
{
	Shop.lazy.controller('ProductController', 
	[
	 	'l10n',
	 	'$routeParams',
	 	'$scope',
	 	'ProductService',

	 	function(l10n, $routeParams, $scope, ProductService){
	 		
	 		l10n.init();
	 		
	 		$scope.product = {};
	 		$scope.products = [];
	 		$scope.seeAlsoProduct = [];
	 		$scope.id = $routeParams.id;
	 		
	 		ProductService.getProducts().success(function(response) {
	 			$scope.products = response.products;
	 			$scope.product = searchById($scope.id);
			});
	 		
	 		var searchById = function(id) {
	 			var product = {};
	 			angular.forEach($scope.products, function(item){
	 				if (item.id == id){
	 					product = item;
	 				}
				});
	 			return product;
			};
	 		
	 	}
	]);
});