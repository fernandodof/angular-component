(function () {

    'use strict';

    angular.module('wlist').component("accordionPanel", {
        templateUrl: 'app/components/accordion/accordion-panel.component.html',
        bindings: {
            heading: '@'
        },
        require: {
            'parent': '^accordion'
        },
        transclude: true,
        controller: controller
    });

    function controller() {
        var self = this;
        self.selected = false;

        self.$onInit = function () {
            self.parent.addPanel(self);
        };

        self.turnOn = function () {
            self.selected = true;
        };

        self.turnOff = function () {
            self.selected = false;
        };

        self.select = function () {
            self.parent.selectPanel(self);
        };
    }

})();