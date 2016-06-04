(function() {
    function UsernameModalCtrl($uibModalInstance, $cookies) {
        this.$uibModalInstance = $uibModalInstance;
        this.$cookies = $cookies;
        
        this.username = "";
    }

    UsernameModalCtrl.prototype.setName = function() {
        if(!this.username || this.username === "") {
            alert("Username must be at least one character");
            return;
        }
        
        this.$cookies.put('username', this.username);
        this.$uibModalInstance.close();
        
    };
        
    
    angular
        .module('bloc-chat')
        .controller('UsernameModalCtrl', ['$uibModalInstance', '$cookies', UsernameModalCtrl]);
})();
