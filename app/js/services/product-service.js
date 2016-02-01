
app.factory('productService', ['$http', function($http) {
    return {
        getAll: function() {
            return $http.get('http://jeremy-raymond.com/product-api/products')
                .success(function(data) {
                    return data;
                })
                .error(function(err) {
                    return err;
                });
        }
    }
}]);
