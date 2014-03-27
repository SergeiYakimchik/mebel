define(["appModule"], function (Shop) {
	Shop.lazy.controller("IndexController", ["$scope", "ProductService",
        function (e, p) {
            e.interval = 5e3;
            e.slides = [];
            
            e.init = function() {
            	var url = 'products/carousel.json';
            	p.getProducts(url).success(function (e) {
            		addSlides(e.products);
                }).error(function () {
                    console.log("error");
                    n.path("/index")
                });
            	
			};
			
			var addSlides = function (products) {
				angular.forEach(products, function(item){
					e.slides.push({
		                    image: "img/products/large/carousel/" + item.id + ".jpg",
		                    text: item.title,
		                    active: item.active,
		                    url: item.url,
		                })
				});
                
            };
            
            e.init();
        }
    ])
})