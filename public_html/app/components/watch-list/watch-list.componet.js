(function () {
    "use strict";

    var app = angular.module('wlist');

    function controller(WatchListService) {
        var self = this;
        self.watchList = [];

        self.$onInit = function () {
            WatchListService.fetchList()
                    .then(function (watchList) {
                        self.watchList = watchList;
                    });
        };

        self.upRating = function (movie) {
            if (movie.rating < 5) {
                movie.rating++;
            }
        };

        self.downRating = function (movie) {
            if (movie.rating > 1) {
                movie.rating--;
            }
        };
    }

    app.component('watchList', {
        templateUrl: 'app/components/watch-list/watch-list.component.html',
        controller: ['WatchListService', controller]
    });


})();