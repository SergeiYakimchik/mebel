require.config({
    baseUrl: 'scripts',
    paths: {}
});

require
(
    [
        'appModule'
    ],
    function(Shop)
    {
        angular.bootstrap(document, ['Shop']);
    }
);