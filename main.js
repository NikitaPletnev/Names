$(document).ready(function(){
	$.get('names.txt', function(data) {    
    var lines = data.split("\n");

    $.each(lines, function(n, elem) {
       $('.app').append('<div>' + elem + '</div>');
    });
});
})