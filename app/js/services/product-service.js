'use strict';

app.factory('productService', ['$http', ProductService]);

function ProductService($http) {
    return {
        getAll: function() {
            return $http.get('http://jsonplaceholder.typicode.com/posts?userId=1');
        }
    }
}
