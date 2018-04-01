define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name sampleAngularApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the sampleAngularApp
   */
  angular.module('sampleAngularApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
