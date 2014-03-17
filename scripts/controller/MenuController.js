define(['appModule'], function(Shop)
{
	Shop.lazy.controller('MenuController', 
	[
	 	'$scope',

	 	function($scope){
	 		
	 		$scope.interval = 5000;
	 		
	 		var slides = $scope.slides = [];
	 		
	 		$scope.addSlide = function(i) {
	 			slides.push({
	 				image: 'img/products/small/' + (i+1) + '.jpg',
	 				text: ['','','',''][slides.length % 4] + ' ' +
	 				['', '', '', ''][slides.length % 4]
	 			});
	 		};
	 		
	 		for (var i=0; i<4; i++) {
	 			$scope.addSlide(i);
	 		}


	 		$('#leftMenu').affix({
	 			offset: {
	 				top: 200
	 				, bottom: function () {
	 					return (this.bottom = $('.bs-footer').outerHeight(true))
	 				}
	 			}
	 		})
	 		
	 		
	 	}
	]);
});