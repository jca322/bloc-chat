(function() {
    
    $stateProvider
            .state('main', {
                url: '/',
                controller: 'MainCtrl as main',
                templateUrl: '/templates/main.html'
            })
    
    angular
        .module('bloc-chat', ['firebase', 'ui-router'])
})()
