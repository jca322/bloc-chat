(function() {
    function MainCtrl(roomService, $uibModal) {
        this.rooms = roomService.list();
        
        /**
        *@desc indicates if modal is currently open
        *@type {boolean}
        */
        var isOpen = false;
                
        this.open = function() {
            if(isOpen === false) {
               var modalInstance = $uibModal.open({
                    templateUrl: '../../templates/modal.html',
                    controller: 'ModalInstanceCtrl as modal',
                    size: 'sm',
                })
               isOpen = true;
               modalInstance.result.then(function(result) {
                   isOpen = false;
               });
             } else {
                console.log("isOpen equals " + isOpen);
             };
         }
    }
    
    angular
        .module('bloc-chat')
        .controller('MainCtrl', ['roomService', '$uibModal', MainCtrl])
})();
