"use strict";

app.controller('ProductsController', ['$scope','productService', function($scope, $productService) {
    $scope.products = {};

    $scope.filter_product_name = 'con';
    $scope.filter_top_price = 300;
    $scope.filter_bot_price = 20;
    $scope.filter_in_stock = true;
    $scope.filter_manufacturer_guid = '';
    $scope.filter_last_seen = 1;
    $scope.filter_per_page = 20;
    $scope.filter_order_by = 'product_id';
    $scope.filter_order = 'asc';

    // need to add a function here and have ng-init call that function.
    // also need to get rid of the main controller and have a controller for every view.
    var data = {
        product_name: $scope.filter_product_name,
        top_price: $scope.filter_top_price,
        bot_price: $scope.filter_bot_price,
        in_stock: $scope.filter_in_stock,
        last_seen: $scope.filter_last_seen,
        per_page: $scope.filter_per_page,
        order_by: $scope.filter_order_by,
        order: $scope.filter_order
    };
    var config = {
        params: data
    };
    $productService.getProducts(config).then(function (response) {
        $scope.products = response.data;
    }, function () {
        alert("productService broke");
    });


}]);