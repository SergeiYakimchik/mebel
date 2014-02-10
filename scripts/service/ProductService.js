define(['appModule'], function(Shop)
{
	Shop.lazy.service('ProductService', 
	[
	 	'$http',
	 	
	 	function($http){
	 	
	 		var getProducts = function() {
	 			return $http({
	 			    url: 'products.json',
	 			    method: 'GET',
	 			    header : {'Content-Type' : 'application/json; charset=UTF-8'}
	 			});
			};
			
	 		return {
	 			getProducts : function() {
	 				return getProducts();
	 			}
	 		};		
	 	}
	]);
});