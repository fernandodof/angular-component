(function () {

    'use strict';

    angular.module('wlist').component('titleDetails', {
        templateUrl: 'app/components/title-details/title-details.component.html',
        $routeConfig: [
            {
                name: 'Overview',
                path: '/overview',
                component: 'titleOverview'
            },
            {
                name: 'Cast',
                path: '/cast',
                component: 'titleCast'
            },
            {
                name: 'Director',
                path: '/director',
                component: 'titleDirector'
            }
        ],
        controller: controller
    });

    controller.$inject = ['WatchListService'];
    function controller(WatchListService) {
        var self = this;

        self.$routerOnActivate = function (next, previous) {
            WatchListService.getTitle(next.params.id).then(function (response) {
                self.title = response;
            });
        };
    }


})();