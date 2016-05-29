(function () {
    "use strict";

    var app = angular.module('wlist');

    app.component('watchList', {
        templateUrl: 'app/components/watch-list/watch-list.component.html',
        controller: ['WatchListService', controller]
    });

    controller.$inject = ['WatchListService'];
    function controller(WatchListService) {
        var self = this;
        self.watchList = [];

        self.$onInit = function () {
            WatchListService.fetchList()
                    .then(function (watchList) {
                        self.watchList = watchList;
                    });
        };

        self.upRating = function (title) {
            if (title.rating < 5) {
                title.rating++;
            }
        };

        self.downRating = function (title) {
            if (title.rating > 1) {
                title.rating--;
            }
        };

        self.setRating = function (title, rating) {
            title.rating = rating;
        };
    }

})();