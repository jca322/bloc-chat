(function() {
    function RoomService($firebaseArray, roomsRef) {
        this.$firebaseArray = $firebaseArray;
        this.roomsRef = roomsRef;
    }
    
    RoomService.prototype.add = function(roomName) {
        var roomsRepo = this.$firebaseArray(this.roomsRef);
        return roomsRepo.$add({ name: roomName });
    };
    
    RoomService.prototype.list = function() {
        var rooms = this.$firebaseArray(this.roomsRef);
        return rooms;        
    };    
    
    
    angular
        .module('bloc-chat')
        .service('roomService', ['$firebaseArray', 'roomsRef', RoomService]);
})();
