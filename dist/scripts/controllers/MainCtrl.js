(function() {
    function MainCtrl(roomService, $uibModal, messageService, $cookies) {
        this.$uibModal = $uibModal;
        this.$cookies = $cookies;
        this.messageService = messageService;
         
        this.rooms = roomService.list();
        this.activeRoom = null;
        this.messages = messageService.list();
        
        /**
        *@desc indicates if modal is currently open
        *@type {boolean}
        */
        this.isOpen = false;
        
        this.newMsgText = "";
    }
                
    MainCtrl.prototype.openModal = function() {
        var modalInstance = this.$uibModal.open({
            templateUrl: '../../templates/modal.html',
            controller: 'ModalInstanceCtrl as modal',
            size: 'sm'
        });
     }

    MainCtrl.prototype.openRoom = function(r) {
        this.selected = r;
    }

    MainCtrl.prototype.select = function(i) {
        this.activeRoom = i;
    };

    MainCtrl.prototype.getUsername = function() {
        return this.$cookies.get('username');
    };
    
    MainCtrl.prototype.send = function() {
      this.messageService.send(this.newMsgText, this.activeRoom.$id); 
      this.newMsgText = "";
    };

    
    angular
        .module('bloc-chat')
        .controller('MainCtrl', ['roomService', '$uibModal', 'messageService', '$cookies', MainCtrl])
})();
