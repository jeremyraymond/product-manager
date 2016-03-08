"use strict";

app.controller('ProductsController', ['$scope', '$location','productService', function($scope, $location, $productService) {
    $scope.products = {};
    var last_seen_product = $location.search()['last_seen'];
    $scope.filters = {
        product_name: 'nulla',
        bot_price: '60',
        top_price: '310',
        in_stock: false,
        manufacturer_guid: '',
        last_seen: 1,
        per_page: 20,
        order_by: 'product_id',
        order: 'asc'
    };

    if (last_seen_product != null) {
        $scope.filters['last_seen'] = last_seen_product;
    }

    // need to add a function here and have ng-init call that function.
    // also need to get rid of the main controller and have a controller for every view.
    var data = {
        product_name: $scope.filters['product_name'],
        top_price: $scope.filters['top_price'],
        bot_price: $scope.filters['bot_price'],
        in_stock: $scope.filters['in_stock'],
        last_seen: $scope.filters['last_seen'],
        per_page: $scope.filters['per_page'],
        order_by: $scope.filters['order_by'],
        order: $scope.filters['order']
    };
    var config = {
        params: data
    };

    function filterProducts() {
        $productService.getProducts(config).then(function (response) {
            $scope.products = response.data;
        }, function () {
            alert("productService broke");
        });
    }
    console.log("test");
    filterProducts();


}]);