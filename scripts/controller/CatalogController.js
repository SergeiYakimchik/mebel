define(["appModule"], function (e) {
    e.lazy.controller("CatalogController", ["$routeParams", "$scope", "$cookieStore", "$location", "ProductService",
        function (e, t, cookieStore, n, r) {
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
            
            t.templates = [
                          { url: 'views/catalog/table.html' },
                          { url: 'views/catalog/list.html' }];
            
            console.log();
            t.template = t.templates[0];
            
            var cookiesTemplate = cookieStore.get('glassMebelCatalogTemplate');
            
            if (!angular.isUndefined(cookiesTemplate)) {
            	t.template = t.templates[cookiesTemplate];
            } else {
            	t.tableItems();
            }
            
            t.tableItems = function() {
            	t.template = t.templates[0];
            	cookieStore.put('glassMebelCatalogTemplate', 0);
			};
			t.listItems = function() {
				t.template = t.templates[1];
				cookieStore.put('glassMebelCatalogTemplate', 1);
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