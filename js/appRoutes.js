define([], function()
{
    return {
        defaultRoutePath: '/',
        routes: {
            '/index': {
                templateUrl: 'views/index.html',
                dependencies: [
                    'l10n',
                    'controller/MenuController',
                    'service/AlertService'
                ]
            },
            '/about': {
                templateUrl : 'views/about.html',
                dependencies: [
                    'l10n',
                    'controller/MenuController',
                    'service/AlertService'
                ]
            },
            '/catalog': {
                templateUrl : 'views/catalog.html',
                dependencies: [
                    'l10n',
                    'controller/MenuController',
                    'service/AlertService'
                ]
            }
        }
    };
});