define(['appModule'], function(Shop)
{
	Shop.lazy.controller('IndexController', 
	[
	 	'l10n',
	 	'$scope',

	 	function(l10n, $scope){
	 		
	 		l10n.init();
	 		
	 	}
	]);
});