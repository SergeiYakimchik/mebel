define(['appModule'], function(app)
{
	app.lazy.directive('productDescription', 
	[
	 	function(){

	 		return {
	 			restrict:'E',
	 			scope: {
						 insert: "@",
						 classes: "@"
					 },
				replace:true,
				template: '<div class="{{classes}}"></div>',
	 			link: function(scope, element, attrs) {
	 				element.html(scope.insert);
	 			}
	 	    };

	 	}
	]);
});