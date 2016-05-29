(function () {
    'use strict';

    function buildEntries(rating, max) {
        var entries = [];
        
        for (var i = 1; i <= max; i++) {
            var icon = i <= rating ? 'fa-star': 'fa-star-o';
            entries.push(icon);
        }

        return entries;
    }

    angular.module('wlist').component('movieRating', {
        templateUrl: 'app/components/title-rating/title-rating.component.html',
        bindings: {
            rating: '<',
            max: '<',
            setRating: '&'
        },
        controller: [controller]
    });


    function controller() {
        var self = this;

        self.$onInit = function () {
            self.entries = buildEntries(self.rating, self.max);
        };

        self.$onChanges = function () {
            self.entries = buildEntries(self.rating, self.max);
        };

    }


})();