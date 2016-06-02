(function() {
    function MessageService($firebaseArray, roomsRef, messageRef) {
        this.$firebaseArray = $firebaseArray;
        this.roomsRef = roomsRef;
        this.messageRef = messageRef;
    }
    
    MessageService.prototype.add = function(username, content, sentAt, roomId) {
        var messageRepo = this.$firebaseArray(this.messageRef);
        return messageRepo.$add({ name: username, content: content, sentAt: sentAt, roomId: roomId });
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
        .service('messageService', ['$firebaseArray', 'roomsRef', 'messageRef', MessageService]);
})();
