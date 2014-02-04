define(['appModule'], function(Shop)
{
	Shop.lazy.controller('ProductController', 
	[
	 	'l10n',
	 	'$routeParams',
	 	'$scope',

	 	function(l10n, $routeParams, $scope){
	 		
	 		l10n.init();
	 		
	 		$scope.id = $routeParams.id;
	 		
	 	}
	]);
});