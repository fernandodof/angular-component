(function () {

    'use strict';

    angular.module('wlist').component('accordion', {
        templateUrl: 'app/components/accordion/accordion.component.html',
        transclude: true,
        controller: controller
    });

    function controller() {
        var self = this;

        var panels = [];

        self.selectPanel = function (panel) {

            for (var i in panels) {
                if (panels[i] === panel) {
                    panels[i].turnOn();
                } else {
                    panels[i].turnOff();
                }
            }
        };

        self.addPanel = function (panel) {
            panels.push(panel);
            if (panels.length > 0) {
                panels[0].turnOn();
            }
        };

    }

})();