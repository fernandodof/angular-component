(function () {

    'use strict';

    angular.module('wlist').component("titleDetails", {
        templateUrl: 'app/components/title-details/title-details.component.html',
        //$canActivate: canActivate,
        controller: controller
    });
    
    controller.$inject = ['WatchListService'];
    function controller(WatchListService) {
        var self = this;

        self.$routerOnActivate = function (next, previous) {
            WatchListService.getTitle(next.params.id).then(function (response){
                self.title = response;
            });
        };
    }

    canActivate.$inject = ['$timeout'];
    function canActivate($timeout) {
        return $timeout(function () {
            return true;
        }, 2000);
    }



})();