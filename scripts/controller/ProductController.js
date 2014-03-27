define(['appModule'], function(Shop)
{
	Shop.lazy.controller('ProductController', 
	[
	 	'$routeParams',
	 	'$scope',
	 	'OrderService',
	 	'ProductService',

	 	function($routeParams, $scope, OrderService, ProductService){
	 		
	 		$scope.request = {};
	 		$scope.product = {};
	 		$scope.products = [];
	 		$scope.seeAlsoProducts = [];
	 		
	 		$scope.init = function() {
	 			
	 			var url;
	 			
	 			$scope.type = $routeParams.type;
	 			$scope.id = $routeParams.id;
	 			
	 			if (!angular.isUndefined($scope.type)) {
	 				url = 'products/'+$scope.type+'.json'
					ProductService.getProducts(url).success(function(response) {
	 					$scope.products = response.products;
		 				$scope.seeAlsoProducts = $scope.products.getRandom(3);
		 				$scope.product = searchById($routeParams.id);
						if ($scope.product) {
							$('.product-description').html($scope.product.description);
						}
					});
	 			}
	 			
			};
			
			$scope.init();
	 		
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
				OrderService.send($scope.request);
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