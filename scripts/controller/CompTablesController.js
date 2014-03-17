define(['appModule'], function(Shop)
{
	Shop.lazy.controller('CompTablesController', 
	[
	 	'$scope',
	 	'ProductService',

	 	function($scope, ProductService){
	 		
	 		var url = 'products/compTables.json'
	 		
	 		ProductService.getProducts(url).success(function(data) {
	 			$scope.products = data.products;
			});
	 		
	 	}
	]);
});