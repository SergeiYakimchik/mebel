define(['appModule'], function(Shop)
{
	Shop.lazy.controller('IndexController', 
	[
	 	'$scope',

	 	function($scope){
	 		
	 		$scope.interval = 5000;
	 		
	 		var slides = $scope.slides = [];
	 		
	 		$scope.addSlide = function(i) {
	 			slides.push({
	 				image: 'img/products/' + (i+1) + '.jpg',
	 				text: ['','','',''][slides.length % 4] + ' ' +
	 				['', '', '', ''][slides.length % 4]
	 			});
	 		};
	 		
	 		for (var i=0; i<4; i++) {
	 			$scope.addSlide(i);
	 		}

	 	}
	]);
});