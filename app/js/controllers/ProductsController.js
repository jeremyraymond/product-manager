"use strict";

app.controller('ProductsController', ['$scope', '$location','productService', function($scope, $location, $productService) {
    $scope.products = [];
    $scope.displayed_products = [];
    $scope.manufacturers = [];

    $scope.filters = {
        product_name: '',
        bot_price: '',
        top_price: '',
        in_stock: false, // default value
        manufacturer_guid: '',
        category: '',
        per_set: '20',
        order_by: 'product_id', // default value
        order: 'asc' // default value
    };
    // if 'cat' is in the query string, set the category to its value
    if($location.search().cat) {
        $scope.filters['category'] = $location.search().cat;
    }

    /*/////////////////////////////////////////////////////////////////////////
        nextSet()

        Function to move to the next page
     */////////////////////////////////////////////////////////////////////////
    $scope.nextSet = function() {
        // prevents execution of logic if the products array doesn't have data
        if($scope.products.length > 0) {
            for (var i = 0; i < $scope.filters['per_set']; i++) {
                $scope.displayed_products.push($scope.products.shift());
            }
        }
    };

    /*/////////////////////////////////////////////////////////////////////////
        filterProducts()

        Function called when filters sidebar is used. Removes the pagination from
        the query string and then executes getProducts()
     */////////////////////////////////////////////////////////////////////////
    $scope.filterProducts = function() {
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
            order_by: $scope.filters['order_by'],
            order: $scope.filters['order']
        };
        var config = {
            params: data
        };

        $productService.getProducts(config).then(function (response) {
            $scope.products = response.data;
            // get the first set of data displayed on the page
            $scope.nextSet();
        }, function () {
            alert("productService broke");
        });
    };

    /*/////////////////////////////////////////////////////////////////////////
     getManufacturers()

     Function to call the API and return manufacturers, potentially based on
     category
     */////////////////////////////////////////////////////////////////////////
    $scope.getManufacturers = function() {
        var data = {
            category: $scope.filters['category']
        };
        var config = {
            params: data
        };

        $productService.getManufacturers(config).then(function (response) {
            $scope.products = response.data;
            // get the first set of data displayed on the page
            $scope.nextSet();
        }, function () {
            alert("productService broke");
        });
    };

    // run on page load
    $scope.getProducts();


}]);