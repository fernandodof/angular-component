(function (){
    "use strict";
    
    var app = angular.module('wlist');
    
    app.component('watchList', {
        templateUrl: 'app/components/watch-list/watch-list.component.html',
        controller: function (){
            var self = this;
        
            self.message = 'Hello from controller template';
            
            self.changeMessage = function (){
                self.message = 'New message';
            };
        }
    });
        
    
})();