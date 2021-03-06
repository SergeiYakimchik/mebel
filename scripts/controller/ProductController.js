define(['appModule'], function(Shop)
{
	Shop.lazy.controller('ProductController', 
	[
	 	'$routeParams',
	 	'$scope',
	 	'$location',
	 	'OrderService',
	 	'ProductService',

	 	function($routeParams, $scope, $location, OrderService, ProductService){
	 		
	 		$scope.request = {};
	 		$scope.product = null;
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
						} else {
							$location.path('/index');
						}
					}).error(function() {
						$location.path('/index');
					});
	 			} 
	 			
			};
			
			$scope.init();
	 		
	 		var searchById = function(id) {
	 			var product = null;
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
			
			$scope.buy = function(item, type) {
				$scope.request.product = item;
				$scope.request.type = type;
			};
			
			$scope.sendRequest = function() {
				OrderService.send($scope.request);
			};
			
			$scope.disableBuyButton = function() {
				return (!angular.isUndefined($scope.request.name)&&!angular.isUndefined($scope.request.address))
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