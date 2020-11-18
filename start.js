(function($) {
$.getJSON('https://jsonplaceholder.typicode.com/users').done(function(people) {
    console.log(people);
    for (person in people) {
        console.log(person);
        $('ul').append('<li>' + person + '</li>');
    }
});
})(jQuery)