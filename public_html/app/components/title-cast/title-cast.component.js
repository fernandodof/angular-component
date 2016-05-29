(function () {

    'use strict';

    angular.module('wlist').component('titleCast', {
        templateUrl: 'app/components/title-cast/title-cast.component.html',
        require: {
            'parent': '^titleDetails'
        }
    });

})();