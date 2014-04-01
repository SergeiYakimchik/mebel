define(['appModule'], function(app)
{
	app.lazy.directive('catalogListItem', 
	[
	 	function(){

	 		return {
	 			restrict:'E',
	 			scope: {
	 					id: "@",
						type: "@",
						title: "@",
						description: "@",
						src: "@"
					 },
				replace:true,
				controller: function($scope) {
					$scope.getDescription = function(s) {
						return s.replace(/\<br>/g,'');
					};
				},
				template: 
					'<div><div class="catalog-col">'+
						'<a href="#/product/{{type}}/{{id}}" class="img-thumbnail catalog-thumbnail">'+
	  						'<img class="catalog-img hidden-item" ng-src="{{src}}">'+
	  						'<span class="loader catalog-loader"><span class="lb-cancel"></span></span>'+
	  					'</a>'+
	  				'</div>'+
					'<div class="col-md-8">'+
						'<div style="padding-bottom: 5px;">'+
							'<span class="catalog-list-item-title">'+
								'{{title}} '+
							'</span>'+
						'</div>'+
						'<p> '+
							'{{getDescription(description)}}'+
						'</p>'+
					'</div></div>',
	 			link: function(scope, element, attrs) {
	 				var img = element.children().children().children('.catalog-img'),
	 					loader = element.children().children().children('.loader');
	 				img.load(function() {
	 					loader.addClass('hidden-item');
	 					img.removeClass('hidden-item');
					});
	 			}
	 	    };

	 	}
	]);
});