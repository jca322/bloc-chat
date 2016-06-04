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
    
    function checkCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('username');
        console.log("$cookies.get(username) is " + currentUser);
        if (!currentUser || currentUser === "") {
            var userModalInstance = $uibModal.open({
                templateUrl: '../../templates/usernameModal.html',
                controller: 'UsernameModalCtrl as usermodal',
                size: 'sm',
                backdrop: 'static',
                keyboard: false
            })
        }
        return;
    }
    
    
    angular
        .module('bloc-chat', ['firebase', 'ui.router', 'ui.bootstrap', 'ngCookies'])
        .value('roomsRef', roomsRef)
        .value('messageRef', messageRef)
        .config(config)
        .run(['$cookies', '$uibModal', checkCookies]);
})();
