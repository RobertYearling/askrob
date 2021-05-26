$.getJSON("http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=fac31643f5c44b4b8c18e2c5a2b6c870&stpid=40020", function(data) {
  
  var staid = data.staid;

  $('staid').attr("src", staid);

});

$(document). ready(function() {

  function updateDOM(results) {
    
    var staid = results.eta.staid;

    $('staid').html(staid);
  }
});

