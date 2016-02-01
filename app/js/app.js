var app = angular.module("productApp", ['ui.router']);

app.config(getConfig);

function getConfig($stateProvider) {
    var welcome = {
            url: "",
            templateUrl: "views/welcome.html"
        },
        products = {
            url: "products",
            templateUrl: "views/products.html"
        };

    $stateProvider
        .state('welcome', welcome)
        .state('products', products);
};
