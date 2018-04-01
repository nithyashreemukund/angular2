/*jshint unused: vars */
define(['angular', 'controllers/main', 'controllers/about']/*deps*/, function (angular, MainCtrl, AboutCtrl)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name sampleAngularApp
   * @description
   * # sampleAngularApp
   *
   * Main module of the application.
   */
  return angular
    .module('sampleAngularApp', ['sampleAngularApp.controllers.MainCtrl',
'sampleAngularApp.controllers.AboutCtrl',
/*angJSDeps*/'ngCookies','ngResource','ngSanitize','ngRoute','ngAnimate','ngTouch'])
    .config(function ($routeProvider,$locationProvider) {
      $locationProvider.hashPrefix('');
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
