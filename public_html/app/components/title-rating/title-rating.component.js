(function () {
    'use strict';

    angular.module('wlist').component('movieRating', {
        templateUrl: 'app/components/title-rating/title-rating.component.html',
        transclude: true,
        bindings: {
            rating: '<'
        },
        controller: [controller]
    });


    function controller() {
        var self = this;

        self.$onInit = function () {
            self.entries = new Array(self.rating);
        };

        self.$onChanges = function () {
            self.entries = new Array(self.rating);
        };

    }


})();