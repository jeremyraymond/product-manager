"use strict";

app.controller('ProductsController', ['$scope', '$location','productService', function($scope, $location, $productService) {
    $scope.products = {};
    var last_seen_product = $location.search()['last_seen'];
    $scope.filters = {
        product_name: '',
        bot_price: '',
        top_price: '',
        in_stock: false,
        manufacturer_guid: '',
        last_seen: 1,
        per_page: "20",
        order_by: 'product_id',
        order: 'asc'
    };

    if (last_seen_product != null) {
        $scope.filters['last_seen'] = last_seen_product;
    }

    $scope.filterProducts = function() {
        var data = {
            product_name: $scope.filters['product_name'],
            top_price: $scope.filters['top_price'],
            bot_price: $scope.filters['bot_price'],
            in_stock: $scope.filters['in_stock'],
            manufacturer_guid: $scope.filters['manufacturer_guid'],
            last_seen: $scope.filters['last_seen'],
            per_page: $scope.filters['per_page'],
            order_by: $scope.filters['order_by'],
            order: $scope.filters['order']
        };
        var config = {
            params: data
        };

        $productService.getProducts(config).then(function (response) {
            $scope.products = response.data;
            console.log($scope.products);
        }, function () {
            alert("productService broke");
        });
    }
    $scope.filterProducts();


}]);