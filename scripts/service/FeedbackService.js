define(['appModule'], function(Shop)
{
	Shop.lazy.service('FeedbackService', 
	[
	 	'$http',
	 	'AlertService',
	 	
	 	function($http, alert){
	 	
	 		var send = function(request) {
	 			
	 			/*
	 			entry.1830558964:name
	 			entry.523276402:email
	 			entry.1326376279:subject
	 			entry.672737099:message
				*/
	 			
	 			var data = {
	 					'entry.1830558964':	request.name,
	 		 			'entry.523276402':	request.email,
	 		 			'entry.1326376279':	request.subject,
	 		 			'entry.672737099':	request.message 
	 			}
	 			
	 			$.ajax({
                    url: "https://docs.google.com/forms/d/1hKJHscIzXLhV5K97F5Qqr-DUyL9uObi23iChrdCLUM0/formResponse",
                    data: data,
                    type: "POST",
                    dataType: 'xml'
                });
	 			
	 			alert.show('Спасибо! Ваш отзыв принят.');
	 			
			};
			
	 		return {
	 			send : function(request) {
	 				return send(request);
	 			}
	 		};		
	 	}
	]);
});