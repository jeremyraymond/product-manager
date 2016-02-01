app.controller('MainController', ['$scope','productService', function($scope, $productService) {
    $scope.allProducts = {};

    $productService.getAll().then(function(response) {
        $scope.allProducts = response.data;
    }, function() {
        alert("productService broke");
    });

}]);