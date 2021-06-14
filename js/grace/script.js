$(document).ready(function() {

  $('#slides').superslides({
    animation: 'fade',
    play: 5000
  });

  var typed = new Typed(".typed", {
    strings: ["Homemade", "Private Gatherings", "Call Us Today"],
    typeSpeed: 100,
    loop: true,
    startDelay: 1300,
    showCursor: false 
  });
}); 