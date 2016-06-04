(function(){
    function RoomService($log, $firebaseArray) {
        var roomsRef = new Firebase("https://radiant-fire-6835.firebaseio.com/rooms");
        $log.debug("Room reference: ", roomsRef);
        
        return {
            all: function() {
                return $firebaseArray(roomsRef);
            }
        };
    }
    
    angular
        .module('rooms', [])
        .factory('RoomService', ['$log', '$firebaseArray', RoomService]);
}());