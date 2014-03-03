define(['appModule'], function(Shop)
{
	Shop.lazy.service('OrderService', 
	[
	 	'$http',
	 	
	 	function($http){
	 	
	 		var send = function(request) {
	 			
	 			var data = {
	 					'entry.950753593':	request.userName,
	 		 			'entry.1237375226':	request.phone,
	 		 			'entry.1993392690':	request.address,
	 		 			'entry.1840903819':	Shop.server + '#/product/' + request.product.id,
	 		 			'entry.1918440201':	request.comment
	 			}
	 			
	 			$http.defaults.useXDomain = true;
	 			
	 			return $http({
	 				method: 'POST',
	 			    url: 'https://docs.google.com/forms/d/1vayHOhVD1XqQ_BScR9PtmeU-s920hXQaTNx1KeM3U_U/formResponse?embedded=true',
	 			  	header:{
	 	                'Access-Control-Allow-Origin': '*',
	 	                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
	 	                'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With',
	 	                'X-Random-Shit':'123123123'
	 	            },
	 			    data: data
	 			});
			};
			
	 		return {
	 			send : function(request) {
	 				return send(request);
	 			}
	 		};		
	 	}
	]);
});