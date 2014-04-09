define(['appModule'], function(Shop)
{
	Shop.lazy.controller('FeedbackController', 
	[
	 	'$scope',
	 	'FeedbackService',

	 	function($scope, FeedbackService){
	 		
	 		$scope.request = {};
	 		
	 		$scope.subjects = [	{id: 1, name: 'Вопрос', value: 'Вопрос'},
	 		                   	{id: 2, name: 'Жалоба', value: 'Жалоба'},
	 		                   	{id: 3, name: 'Благодарность', value: 'Благодарность'} ];
	 		
	 		$scope.sendFeedback = function() {
	 			FeedbackService.send($scope.request);
			}
	 		
	 	}
	]);
});