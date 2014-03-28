define(['appModule'], function(app)
{
	app.lazy.directive('productImg', 
	[
	 	function(){

	 		return {
	 			restrict:'E',
	 			scope: {
	 					id: "@",
						type: "@",
						title: "@"
					 },
				replace:true,
				template: 
					'<a data-lightbox="image" title="{{title}}" href="img/products/large/{{type}}/{{id}}.jpg" class="img-thumbnail product-thumbnail">'+
						'<img class="product-img hidden-item" ng-src="img/products/large/{{type}}/{{id}}.jpg" />'+
						'<div id="loader" class="product-loader"> <div class="lb-cancel"></div> </div>'+
					'</a>',
	 			link: function(scope, element, attrs) {
	 				$('.product-img').load(function(e) {
	 					$('#loader').addClass('hidden-item');
	 					$('.product-img').removeClass('hidden-item');
					});
	 			}
	 	    };

	 	}
	]);
});