define(['appModule'], function(Shop)
{
	Shop.lazy.controller('ProductController', 
	[
	 	'l10n',
	 	'$routeParams',
	 	'$scope',
	 	'OrderService',
	 	'ProductService',

	 	function(l10n, $routeParams, $scope, OrderService, ProductService){
	 		
	 		l10n.init();
	 		
	 		$scope.request = {};
	 		$scope.product = {};
	 		$scope.products = [];
	 		$scope.seeAlsoProducts = [];
	 		$scope.id = $routeParams.id;
	 		
	 		ProductService.getProducts().success(function(response) {
	 			$scope.products = response.products;
	 			$scope.seeAlsoProducts = $scope.products.getRandom(3);
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
			
			Array.prototype.getRandom= function(num, cut){
    			var A= cut ? this:this.slice(0);
    			A.sort(function(){
        			return .5-Math.random();
    			});
   			 	return A.splice(0, num);
			};
			
			$scope.buy = function(item) {
				$scope.request.product = item;
			};
			
			$scope.sendRequest = function() {
				OrderService.send($scope.request).success(function(response) {
					console.log(response);
				});
			};
	 		
	 	}
	]);
});