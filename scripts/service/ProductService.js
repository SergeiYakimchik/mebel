define(['appModule'], function(Shop)
{
	Shop.lazy.service('ProductService', 
	[
	 	'$http',
	 	
	 	function($http){
	 	
	 		var getProducts = function(url) {
	 			
	 			if (angular.isUndefined(url)) {
	 				url = 'products.json'
	 			}
	 			
	 			return $http({
	 			    url: url,
	 			    method: 'GET',
	 			    header : {'Content-Type' : 'application/json; charset=UTF-8'}
	 			});
			};
			
	 		return {
	 			getProducts : function(url) {
	 				return getProducts(url);
	 			}
	 		};		
	 	}
	]);
});