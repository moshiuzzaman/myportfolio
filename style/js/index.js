var lang = {
  "html": "95%",
  "css": "90%",
  "bootstrap": "75%",
  "javascript": "75%",
  "jQuery": "80%",
  "Wordpress": "80%",
  "php": "55%",
  "Photoshop": "80%",
  "Illustrator": "90%"
};

var multiply = 3;

$.each( lang, function( language, pourcent) {

  var delay = 700;
  
  setTimeout(function() {
    $('#'+language+'-pourcent').html(pourcent);
  },delay*multiply);
  
  multiply++;

});