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
	 			
//	 			return $http({
//	 				type: 'POST',
//	 				url: 'https://docs.google.com/forms/d/1vayHOhVD1XqQ_BScR9PtmeU-s920hXQaTNx1KeM3U_U/formResponse?embedded=true',
//	 				headers:{
//	 					'Content-Type': 'application/x-www-form-urlencoded',
//	 					'Access-Control-Allow-Origin': '*',
//	 					'Access-Control-Allow-Methods': 'GET, POST'
//	 				},
//	 				data: data,
//	 				cache: false
//	 			});
	 			$.ajax({ //my ajax request
	 		        url: "docs.google.com/forms/d/1vayHOhVD1XqQ_BScR9PtmeU-s920hXQaTNx1KeM3U_U/formResponse?embedded=true",
	 		        type: "POST",
	 		        cache: false,
	 		        crossDomain: true,
	 		        data: data,
	 				headers:{
	 					'Access-Control-Allow-Origin': '*',
	 					'Access-Control-Allow-Methods': '*',
	 					'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
 					},
	 				success: function(response) {
						console.log(response);
					}
	 			
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