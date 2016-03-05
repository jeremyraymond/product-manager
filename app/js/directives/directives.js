"use strict";

app.directive('products', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/directives/html/products-dir.html'
    };
});

app.directive('mynav', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/directives/html/mynav-dir.html'
    };
});

app.directive('productsfilter', function() {
    return {
        restrict: 'E',
        templateUrl: 'js/directives/html/productsfilter-dir.html'
    };
});