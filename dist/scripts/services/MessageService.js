(function() {
    function MessageService($firebaseArray, roomsRef, messageRef, $cookies, roomService) {
        this.$firebaseArray = $firebaseArray;
        this.roomsRef = roomsRef;
        this.messageRef = messageRef;
        this.$cookies = $cookies;
    }
      
    MessageService.prototype.send = function(newMsgText, activeRoomId) {
        var messageRepo = this.$firebaseArray(this.messageRef);
        messageRepo.$add({ 
            username: this.$cookies.get('username'), //from $cookies
            content: newMsgText, 
            sentAt: Firebase.ServerValue.TIMESTAMP, //pull in date/timestamp
            roomId: activeRoomId //pull in activeRoom Id
        });
    };
    
    MessageService.prototype.list = function() {
        var messages = this.$firebaseArray(this.messageRef);
        return messages;        
    };  
    
    MessageService.prototype.getMessages = function(roomId) {
        messageRef.orderByChild('roomId').equalTo(this.activeRoom[roomId]);
    };
    
    
    angular
        .module('bloc-chat')
        .service('messageService', ['$firebaseArray', 'roomsRef', 'messageRef', '$cookies', 'roomService', MessageService]);
})();
