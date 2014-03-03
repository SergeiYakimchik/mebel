define([], function()
{
    return {
        defaultRoutePath: '/',
        
        defaultDependencies: [
        	 'l10n',
        	 'controller/MainController',
        	 'controller/MenuController',
        	 'service/AlertService',
        	 'service/CurrencyService'
        ],
                          
        routes: {
            '/index': {
                templateUrl: 'views/index.html',
                dependencies: [
                    'controller/IndexController'
                ]
            },
            '/catalog': {
                templateUrl : 'views/catalog.html',
                dependencies: [
                    'controller/CatalogController',
                    'service/ProductService'
                ]
            },
            '/product/:id': {
                templateUrl : 'views/product.html',
                dependencies: [
                    'controller/ProductController',
                    'service/OrderService',
                    'service/ProductService'
                ]
            },
            '/interesting': {
                templateUrl : 'views/interesting.html',
                dependencies: [
                ]
            },
            '/about': {
                templateUrl : 'views/about.html',
                dependencies: [
                ]
            },
            '/feedback': {
                templateUrl : 'views/feedback.html',
                dependencies: [
                ]
            }
        }
    };
});