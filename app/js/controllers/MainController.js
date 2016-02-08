app.controller('MainController', ['$scope','productService', function($scope, $productService) {
    $scope.products = {};

    $scope.filter_product_name = '';
    $scope.filter_top_price = 0;
    $scope.filter_bot_price = 0;
    $scope.filter_in_stock = true;
    $scope.filter_manufacturer_guid = '';
    $scope.filter_last_seen = 0;
    $scope.filter_per_page = 0;
    $scope.filter_order_by = '';
    $scope.filter_order = 'asc';

    var getProducts = function() {
        var data = {
            product_name: $scope.filter_product_name,
            top_price: $scope.filter_top_price,
            bot_price: $scope.filter_bot_price,
            in_stock: $scope.filter_in_stock,
            manufacturer_guid: $scope.filter_manufacturer_guid,
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
    }

}]);