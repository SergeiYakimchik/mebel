define(['appModule'], function(Shop)
{
	Shop.lazy.service('ProductService', 
	[
	 	'$http',
	 	
	 	function($http){
	 	
	 		var getProducts = function() {
	 			return $http({
	 			    url: 'products.json',
	 			    method: 'GET'
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