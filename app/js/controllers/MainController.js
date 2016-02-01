app.controller('MainController', ['$scope','productService', function($scope, $productService) {
    $scope.allProducts = $productService.getAll();
}]);