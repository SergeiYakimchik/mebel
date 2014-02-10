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
	 		
	 		ProductService.getProducts().success(function(response) {
	 			getProductById(response)
	 			console.log($scope.product);
			});
	 		
	 		
	 		var getProductById = function(response) {
	 			angular.forEach(response.products, function(item){
	 				if (item.id == $routeParams.id){
	 					$scope.product = item;
	 				}
				});
			};
	 		
	 	}
	]);
});