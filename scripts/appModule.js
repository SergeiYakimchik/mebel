define(["appRoutes","service/lazyDependencyResolver"],function(e,t){var n=angular.module("Shop",["ui.bootstrap","ngCookies"]);n.server="http://localhost:8080/mbl/";n.config(["$routeProvider","$locationProvider","$controllerProvider","$compileProvider","$filterProvider","$provide","$httpProvider",function(r,i,s,o,u,a,f){n.lazy={};n.lazy.controller=s.register;n.lazy.directive=o.directive;n.lazy.filter=u.register;n.lazy.factory=a.factory;n.lazy.service=a.service;f.defaults.useXDomain=true;delete f.defaults.headers.common["X-Requested-With"];angular.forEach(e.routes,function(n,i){r.when(i,{templateUrl:n.templateUrl,resolve:t(e.defaultDependencies.concat(n.dependencies))})});r.otherwise({redirectTo:"/index"})}]);return n})