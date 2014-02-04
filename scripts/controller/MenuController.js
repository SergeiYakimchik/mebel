define(['appModule'], function(Shop)
{
	Shop.lazy.controller('MenuController', 
	[
	 	'l10n',

	 	function(l10n){
	 		
	 		l10n.init();

	 	}
	]);
});