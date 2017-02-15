function showSongs(song) {
    var source = $('#spotify-template').html();
    var template = Handlebars.compile(source);
    $.ajax({
        url: 'https://api.spotify.com/v1/search',
        data: {
            q: song,
            type: 'track'
        }
    })
    .done(function(response) {
        console.log("success");
        $('#resultados').html(template(response));
    })
    .fail(function() {
        console.log("error");
    })
    .always(function() {
        console.log("complete");
    });
}

jQuery( document ).ready(function($) {
    $('#input-search').on('submit', function (e) {
        e.preventDefault();
        showSongs($('#inputSong').val());
        $('#inputSong').val('');
    });
});

