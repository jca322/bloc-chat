(function() {
    function MainCtrl(roomService, $uibModal, messageService) {
        this.$uibModal = $uibModal;
         
        this.rooms = roomService.list();
        this.activeRoom = null;
        this.messages = messageService.list();
        
        /**
        *@desc indicates if modal is currently open
        *@type {boolean}
        */
        this.isOpen = false;
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

    
    angular
        .module('bloc-chat')
        .controller('MainCtrl', ['roomService', '$uibModal', 'messageService', MainCtrl])
})();
