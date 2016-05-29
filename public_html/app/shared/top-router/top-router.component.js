(function () {

    'use strict';

    angular.module('wlist').component('topRouter', {
        templateUrl: 'app/shared/top-router/top-router.component.html',
        $routeConfig: [{
            name: 'List',
            path: '/list',
            component: 'watchList'
        },  {
            name: 'About',
            path: '/about',
            component: 'aboutPage'
        },{
            name: 'Details',
            path: 'detail/:id/...',
            component: 'titleDetails'
        },{
            path: '/**',
            redirectTo: ['List']
        }]
    });


})();