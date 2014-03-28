define(['appModule'], function(app)
{
	app.lazy.directive('productDescription', 
	[
	 	function(){

	 		return {
	 			restrict:'E',
	 			scope: {
						 insert: "@"
					 },
				replace:true,
				template: '<div class="col-md-12 product-description"></div>',
	 			link: function(scope, element, attrs) {
	 				element.html(scope.insert);
	 			}
	 	    };

	 	}
	]);
});