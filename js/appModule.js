define(['appRoutes','service/lazyDependencyResolver'], function(config, lazyDependencyResolver)
{
    var RMT = angular.module('RMT', ['ui.bootstrap']);
    
    RMT.host = '/rmt';
    
    RMT.empl = {}; 

    RMT.config(
    [
        '$routeProvider',
        '$locationProvider',
        '$controllerProvider',
        '$compileProvider',
        '$filterProvider',
        '$provide',

        function($routeProvider, $locationProvider, $controllerProvider, $compileProvider, $filterProvider, $provide)
        {
            RMT.lazy = {};

            RMT.lazy.controller = $controllerProvider.register;
            RMT.lazy.directive  = $compileProvider.directive;
            RMT.lazy.filter     = $filterProvider.register;
            RMT.lazy.factory    = $provide.factory;
            RMT.lazy.service    = $provide.service;
            
            angular.forEach(config.routes, function(route, path)
            {
                $routeProvider.when(path, {templateUrl:route.templateUrl, resolve:lazyDependencyResolver(route.dependencies)});
            });

            $routeProvider.otherwise({redirectTo: '/login'});
        }
    ]);
    

    return RMT;
});
