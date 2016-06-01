(function () {

    angular.module('wlist').service('WatchListService', ['$http', '$q', '$filter', function ($http, $q, $filter) {
            var self = this;

            self.fetchList = function () {
                return $http.get('app/static-data/watched.json')
                        .then(function (response) {
                            return response.data;
                        });
            };

            self.getTitle = function (id) {
                var deferred = $q.defer();

                $http.get('app/static-data/watched.json')
                        .then(function (response) {

//                            var title = response.data.filter(function (obj) {
//                                return obj.id === id;
//                            })[0];

                            deferred.resolve($filter('filter')(response.data,{id: id})[0]);

                        }, function (response) {
                            deferred.reject(response);
                        });

                return deferred.promise;
            };

        }]);

})();
