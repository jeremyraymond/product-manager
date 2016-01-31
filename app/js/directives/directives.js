/**
 * Created by Jeremy on 1/31/2016.
 */
app.directive('welcome', function() {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'js/directives/html/welcome.html'
    };
});