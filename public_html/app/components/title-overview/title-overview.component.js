(function () {

    'use strict';

    angular.module('wlist').component('titleOverview', {
        templateUrl: 'app/components/title-overview/title-overview.component.html',
        require: {
            'parent': '^titleDetails'
        }
    });

})();