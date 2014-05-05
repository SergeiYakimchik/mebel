define(['appModule'], function(Shop)
{
	Shop.lazy.controller('MenuController', 
	[
	 	'$scope',
	 	'ProductService',

	 	function($scope, p){
	 		
	 			$scope.interval = 5e3;
	 			$scope.slides = [];
	            
	 			$scope.init = function() {
	 				$scope.currentYear = new Date().getFullYear();
	            	var url = 'products/carousel.json';
	            	p.getProducts(url).success(function (response) {
	            		addSlides(response.products);
	                }).error(function () {
	                    console.log("error");
	                    n.path("/index")
	                });
	            	
				};
				
				var addSlides = function (products) {
					angular.forEach(products, function(item){
						$scope.slides.push({
			                    image: "img/products/small/carousel/" + item.id + ".jpg",
			                    text: '',
			                    active: item.active,
			                    url: item.url,
			                })
					});
	                
	            };
	            
//		 		$('#leftMenu').affix({
//		 			offset: {
//		 				top: 200
//		 				, bottom: function () {
//		 					return (this.bottom = $('.bs-footer').outerHeight(true))
//		 				}
//		 			}
//		 		})
	            
	            $scope.getCurrentYear = function() {
					return
				}
	            
	            $scope.init();
	 		
	 	}
	]);
});