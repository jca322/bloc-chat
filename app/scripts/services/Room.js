(function() {
    function Room($firebaseArray) {
        var firebaseRef = new Firebase("https://radiant-fire-6835.firebaseio.com/");
        var rooms = $firebaseArray(firebaseRef.child('rooms'));
        
        return {
            all: rooms
        };
    }
    
    angular
        .module('bloc-chat')
        .factory('Room', ['$firebaseArray', Room]);
})();
