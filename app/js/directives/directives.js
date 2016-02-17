/**
 * Created by Jeremy on 1/31/2016.
 */
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