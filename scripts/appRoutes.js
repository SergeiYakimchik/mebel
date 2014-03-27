define([], function () {
    return {
        defaultRoutePath: "/",
        defaultDependencies: ["controller/MainController", "controller/MenuController", "service/AlertService", "service/CurrencyService", "service/ProductService"],
        routes: {
            "/index": {
                templateUrl: "views/index.html",
                dependencies: ["controller/IndexController"]
            },
            "/catalog/:type": {
                templateUrl: "views/catalog.html",
                dependencies: ["controller/CatalogController"]
            },
            "/product/:type/:id": {
                templateUrl: "views/product.html",
                dependencies: ["controller/ProductController", "service/OrderService"]
            },
            "/interesting": {
                templateUrl: "views/interesting.html",
                dependencies: []
            },
            "/delivery": {
                templateUrl: "views/delivery.html",
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