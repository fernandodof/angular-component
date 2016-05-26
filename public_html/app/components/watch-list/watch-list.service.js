(function () {
    var app = angular.module('wlist');

    app.service('WatchListService', ['$http', function ($http) {
            var self = this;

            self.fetchList = function () {
                return $http.get('app/static-data/watched.json')
                        .then(function (response) {
                            return response.data;
                        });
            };

        }]);

})();