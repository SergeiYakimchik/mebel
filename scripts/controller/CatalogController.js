define(["appModule"], function (e) {
    e.lazy.controller("CatalogController", ["$routeParams", "$scope", "$location", "ProductService",
        function (e, t, n, r) {
            t.init = function () {
                t.type = e.type;
                var i;
                if (angular.isUndefined(t.type)) {
                	n.path("/index")
                } else {
                    i = "products/" + t.type + ".json"
                }
                r.getProducts(i).success(function (e) {
                    t.products = e.products
                }).error(function () {
                    console.log("error");
                    n.path("/index")
                })
            };
            t.buildSmallImg = function (e) {
                if (angular.isUndefined(e)) {
                    return
                } else {
                    return "img/products/small/" + t.type + "/" + e + ".jpg"
                }
            };
            t.buildLargeImg = function (e) {
                if (angular.isUndefined(e)) {
                    return
                } else {
                    return "img/products/large/" + t.type + "/" + e + ".jpg"
                }
            };
            t.init()
        }
    ])
})