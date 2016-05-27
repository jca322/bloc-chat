(function() {
    function ModalInstanceCtrl($uibModalInstance, roomService) {
        this.$uibModalInstance = $uibModalInstance;
        this.roomService = roomService;
        
        this.roomName = "";
    }
    
        
    ModalInstanceCtrl.prototype.cancel = function() {
        this.$uibModalInstance.close('cancel');
    };

    ModalInstanceCtrl.prototype.addRoom = function() {
        this.roomService.add(this.roomName);
        this.$uibModalInstance.close();
    };
        
    
    angular
        .module('bloc-chat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', 'roomService', ModalInstanceCtrl]);
})();
