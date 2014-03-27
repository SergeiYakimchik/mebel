define([], function () {
    return {
        defaultRoutePath: "/",
        defaultDependencies: ["controller/MainController", "controller/MenuController", "service/AlertService", "service/CurrencyService"],
        routes: {
            "/index": {
                templateUrl: "views/index.html",
                dependencies: ["controller/IndexController", "service/ProductService"]
            },
            "/catalog/:type": {
                templateUrl: "views/catalog.html",
                dependencies: ["controller/CatalogController", "service/ProductService"]
            },
            "/product/:type/:id": {
                templateUrl: "views/product.html",
                dependencies: ["controller/ProductController", "service/OrderService", "service/ProductService"]
            },
            "/interesting": {
                templateUrl: "views/interesting.html",
                dependencies: []
            },
            "/about": {
                templateUrl: "views/about.html",
                dependencies: []
            },
            "/feedback": {
                templateUrl: "views/feedback.html",
                dependencies: []
            }
        }
    }
})