define(['appModule'], function(Shop)
{
	Shop.lazy.service('CurrencyService', 
	[
	 	'$http',
	 	'$rootScope',
	 	
	 	function($http, $rootScope){
			
			var get = function(callback) {
				
				
				if (!$rootScope.currency) {
					$http.defaults.useXDomain = true;
					
					$http({
		 			    url: 'http://wm.shadurin.com/select.php',
		 			    method: 'GET'
		 			}).success(function(response) {
		 				$rootScope.currency = response.БеларусБанк;
		 				callback(response.БеларусБанк);
					});
				}
				
			};
	 		
	 		return {
	 			get : function(callback) {
	 				return get(callback);
	 			}
	 		};		
	 	}
	]);
});