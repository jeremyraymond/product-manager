"use strict";

app.factory('productService', ['$http', function($http) {
    return {
        getProducts: function(config) {
            return $http.get('http://products.jeremy-raymond.com/product-api/products', config)
                .success(function(data) {
                    return data;
                })
                .error(function(err) {
                    return err;
                });
        }
    }
}]);

app.factory('productService', ['$http', function($http) {
    return {
        getManufacturers: function(config) {
            return $http.get('http://products.jeremy-raymond.com/product-api/manufacturers', config)
                .success(function(data) {
                    return data;
                })
                .error(function(err) {
                    return err;
                });
        }
    }
}]);
