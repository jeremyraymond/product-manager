"use strict";

var app = angular.module("productApp", ['ui.router', 'infinite-scroll']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('welcome', {
            url: "/",
            templateUrl: "views/welcome.html"
        })
        .state('products', {
            url: "/products",
            templateUrl: "views/products.html",
            reloadOnSearch: false
        });
});