"use strict";

app.controller('ProductsController', ['$scope', '$location','productService', function($scope, $location, $productService) {
    $scope.first_page = false;
    $scope.last_page = false;
    $scope.products = {};

    $scope.filters = {
        product_name: '',
        bot_price: '',
        top_price: '',
        in_stock: false, // default value
        manufacturer_guid: '',
        last_seen: 1, // default value
        per_page: "20", // default value
        order_by: 'product_id', // default value
        order: 'asc' // default value
    };

    // Collect the last seen product from the url query string if it exists
    var page = $location.search()['page'];
    if (page != null) {
        $scope.filters['last_seen'] = parseInt(page) * parseInt($scope.filters['per_page']) + 1;
    }

    /*/////////////////////////////////////////////////////////////////////////
        nextSet()

        Function to move to the next page
     */////////////////////////////////////////////////////////////////////////
    $scope.nextSet = function() {
        // Add the last seen product ID by how many should be displayed per page
        $scope.filters['last_seen'] = parseInt($scope.filters['last_seen']) + parseInt($scope.filters['per_page']);
        // Add the new page number to the query string
        // This is equal to the last seen product ID minus 1, then divide by how many per page, then add one again.
        $location.search('page', parseInt(($scope.filters['last_seen']) - 1) / parseInt($scope.filters['per_page']) + 1);
        $scope.getProducts();
    };

    /*/////////////////////////////////////////////////////////////////////////
        filterProducts()

        Function called when filters sidebar is used. Removes the pagination from
        the query string and then executes getProducts()
     */////////////////////////////////////////////////////////////////////////
    $scope.filterProducts = function() {
        $location.search('page', null);
        $scope.filters['last_seen'] = 1;
        $scope.getProducts();
    };

    /*/////////////////////////////////////////////////////////////////////////
        getProducts()

        Function to collect the filters and call the API and return products
     */////////////////////////////////////////////////////////////////////////
    $scope.getProducts = function() {
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
    };

    // Call function on initial page load
    $scope.getProducts();


}]);