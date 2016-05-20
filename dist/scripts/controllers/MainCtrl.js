(function() {
    function MainCtrl(Room) {
        this.rooms = Room.all;
    }
    
    angular
        .module('bloc-chat')
        .controller('MainCtrl', ['Room', MainCtrl])
})();
