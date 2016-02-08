
app.factory('productService', ['$http', function($http) {
    return {
        getProducts: function(config) {
            return $http.get('http://jeremy-raymond.com/product-api/products', config)
                .success(function(data) {
                    return data;
                })
                .error(function(err) {
                    return err;
                });
        }
    }
}]);
