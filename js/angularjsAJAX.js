'use strict';

let app = angular.module('peticionAJAX', []);
app.controller('ajaxCtrl', function($scope, $http) {
    $http.get("https://jsonplaceholder.typicode.com/todos")
        .then(function(response) {
            $scope.datos = response.data;
            console.log($scope.datos);
        }, function(error) {
            console.log(`Ha habido un error: Este error : ${error}`)
        });
    $scope.titulos = ['id', 'titulo', 'completado'];
});