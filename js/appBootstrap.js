require.config({
    baseUrl: 'scripts',
    paths: {}
});

require
(
    [
        'appModule'
    ],
    function(RMT)
    {
        angular.bootstrap(document, ['RMT']);
    }
);