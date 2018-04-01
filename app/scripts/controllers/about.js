define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name sampleAngularApp.controller:AboutCtrl
   * @description
   * # AboutCtrl
   * Controller of the sampleAngularApp
   */
  angular.module('sampleAngularApp.controllers.AboutCtrl', [])
    .controller('AboutCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
