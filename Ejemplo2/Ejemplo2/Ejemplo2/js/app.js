'use strict';

/* App Module */

var catApp = angular.module('catApp', ['ngRoute', 'candidatocatControllers']);

catApp.config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider.
        when('/cand', {
            templateUrl: 'partials/cat-list.html',
            controller: 'CandidatoListCtrl'
        }).
        when('/cand/:cantId', {
            templateUrl: 'partials/cat-detail.html',
            controller: 'CandidatoDetailCtrl'
        }).
        otherwise({
            redirectTo: '/cand'
        });
  }]);