define(['appModule'], function(Shop)
{
	Shop.lazy.controller('CatalogController', 
	[
	 	'l10n',
	 	'$scope',
	 	'ProductService',

	 	function(l10n, $scope, ProductService){
	 		
	 		l10n.init();
	 		
	 		ProductService.getProducts().success(function(data) {
	 			$scope.products = data.products;
			});
	 		
	 	}
	]);
});