'use strict';

app.controller('MainController', ['$scope','productService', MainController]);

function MainController($scope, $productService) {
    $scope.allProducts = {};

    $productService
        .getAll()
        .then(function (response) {
            $scope.allProducts = response.data;
        }, function (error) {
            alert(error);
        });
}
