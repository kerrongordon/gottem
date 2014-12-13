$(document).ready(function() {
  var menu = $('.body');
  var menuToggle = $('#js-mobile-menu');
  var signUp = $('.sign-up');

  $(menuToggle).on('click', function(e) {
    e.preventDefault();
    $(menu).toggleClass('moveOver');
    });
});
