(function () {

    'use strict';

    angular.module('wlist').component("titleDirector", {
        templateUrl: 'app/components/title-director/title-director.component.html',
        require: {
            'parent': '^titleDetails'
        }
    });

})();