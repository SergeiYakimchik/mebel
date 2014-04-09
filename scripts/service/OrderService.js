define(['appModule'], function(Shop)
{
	Shop.lazy.service('OrderService', 
	[
	 	'$http',
	 	'AlertService',
	 	
	 	function($http, alert){
	 	
	 		var send = function(request) {
	 			
	 			var data = {
	 					'entry.950753593':	request.userName,
	 		 			'entry.1237375226':	request.phone,
	 		 			'entry.1993392690':	request.address,
	 		 			'entry.1840903819':	'http://sergeiyakimchik.github.io/mebel/#/product/' + request.type + '/' + request.product.id,
	 		 			'entry.1918440201':	request.comment 
	 			}
	 			
	 			$.ajax({
                    url: "https://docs.google.com/forms/d/1vayHOhVD1XqQ_BScR9PtmeU-s920hXQaTNx1KeM3U_U/formResponse",
                    data: data,
                    type: "POST",
                    dataType: 'xml',
                    statusCode: {
                        200: function() {
                           
                        }
                    }
                });
	 			
	 			alert.show('Спасибо! Ваш заказ принят.');
                $('#buyModal').modal('hide');
	 			
			};
			
	 		return {
	 			send : function(request) {
	 				return send(request);
	 			}
	 		};		
	 	}
	]);
});