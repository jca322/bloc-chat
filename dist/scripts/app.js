(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
            .state('main', {
                url: '/',
                controller: 'MainCtrl as main',
                templateUrl: '/templates/main.html'
            });
    }
    
    var firebaseRef = new Firebase("https://radiant-fire-6835.firebaseio.com/");
    var roomsRef = firebaseRef.child("rooms");
    var messageRef = firebaseRef.child("messages");
    
    
    angular
        .module('bloc-chat', ['firebase', 'ui.router', 'ui.bootstrap'])
        .value('roomsRef', roomsRef)
        .value('messageRef', messageRef)
        .config(config);
})();
