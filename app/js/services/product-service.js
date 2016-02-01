app.factory('productService', ['$http', function($http) {
    return {
        getAll: function getAll() {
            $http.get('http://jeremy-raymond.com/product-api/products')
                .success(function(data) {
                    console.log("test1");
                    return data;
                })
                .error(function(err) {
                    console.log("test2");
                    return err;
                });
        }
    }
}]);