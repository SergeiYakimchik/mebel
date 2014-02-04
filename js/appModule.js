define(['appRoutes','service/lazyDependencyResolver'], function(config, lazyDependencyResolver)
{
    var Shop = angular.module('Shop', ['ui.bootstrap']);
    
    Shop.config(
    [
        '$routeProvider',
        '$locationProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',

        function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide)
        {
        	Shop.lazy = {};

        	Shop.lazy.controller = $controllerProvider.register;
        	Shop.lazy.directive  = $compileProvider.directive;
        	Shop.lazy.filter     = $filterProvider.register;
        	Shop.lazy.factory    = $provide.factory;
        	Shop.lazy.service    = $provide.service;
            
            angular.forEach(config.routes, function(route, path)
            {
                $routeProvider.when(path, {templateUrl:route.templateUrl, resolve:lazyDependencyResolver(route.dependencies)});
            });

            $routeProvider.otherwise({redirectTo: '/index'});
        }
    ]);
    

    return Shop;
});
