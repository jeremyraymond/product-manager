/*
    limitchars

    Trims the input string based on the number of characters specified in the parameter.
    Does not cut off the returned string in the middle of a word, and an ellipse is added to the end.
 */
app.filter('limitchars', function() {
    return function(input, limit) {
        var output = '';
        if(input.length > limit) {
            output = input.substring(0,limit);
            output = output.substr(0, Math.min(output.length, output.lastIndexOf(" "))) + "...";
        }
        else {
            output = input;
        }
        return output;
    }
});