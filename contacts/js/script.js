 var contactsApp = angular.module('contactsApp', []);

 contactsApp.controller('contactsCtrl', function ($scope, $http){
   $http.get('js/data.json').success(function(data) {
     $scope.contacts = data;
   });
  });
