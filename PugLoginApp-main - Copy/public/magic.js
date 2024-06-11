$(document).ready(function(){
    $("form#change").on('submit', function(e){
        e.preventDefault();
        var data = { name: $('input[name=name]').val() }; // Correctly format the data as an object
        $.ajax({
            type: 'post', 
            url: '/ajax',
            data: data,
            dataType: 'json' // Expect a JSON response from the server
        })
        .done(function(response){
            $('h1').html(response.name); // Assuming the server returns a JSON with a 'name' property
        });
    });
});