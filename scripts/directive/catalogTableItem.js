define(['appModule'], function(app)
{
	app.lazy.directive('catalogTableItem', 
	[
	 	function(){

	 		return {
	 			restrict:'E',
	 			scope: {
	 					id: "@",
						type: "@",
						title: "@",
						src: "@"
					 },
				replace:true,
				template: 
					'<div><a href="#/product/{{type}}/{{id}}" class="img-thumbnail catalog-thumbnail">'+
  						'<img class="catalog-img hidden-item" ng-src="{{src}}">'+
  						'<span class="loader catalog-loader"><span class="lb-cancel"></span></span>'+
					'</a>'+
					'<h5><a class="product-link" href="#/product/{{type}}/{{id}}"> {{title}} </a></h5></div>',
	 			link: function(scope, element, attrs) {
	 				
	 				var img = element.children().children('.catalog-img'),
	 					loader = element.children().children('.loader');
	 				
	 				img.load(function() {
	 					loader.addClass('hidden-item');
	 					img.removeClass('hidden-item');
					});
	 			}
	 	    };

	 	}
	]);
});