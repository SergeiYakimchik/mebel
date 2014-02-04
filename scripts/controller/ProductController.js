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
	 		
	 		$scope.id = $routeParams.id;
	 		
	 		ProductService.getProducts().success(function(data) {
	 			$scope.products = data.tables;
			});
	 		
	 	}
	]);
});