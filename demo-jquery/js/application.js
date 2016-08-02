  //DOC
  // https://developer.mozilla.org/fr/docs/Web/API/Node

  //JS

  console.log("starting js");
  var firstParagraph = document.createElement("p");
  firstParagraph.textContent = "we haved missed some players";
  document.body.appendChild(firstParagraph);

// JQUERY

// hide all img
// $("img").hide();
// hide img with css class invisible
// $('.invisible').hide();
// addClass() removeClass()

$(document).ready(function() {

console.log($('#neil').length)
console.log($('.poker-player').length)
$("#zvi").addClass('img-circle');

// in console, show the content of the selected id from the dom
//var firstParagraph = $('#first-paragraph');
//firstParagraph.html();

//insert html tag and text in p tag with the selected css ids
//firstParagraph.html('hello<strong>World<strong>');

// .text() method show concatenate content from selected element without html tags

// .val() method show the content of an input form with selected class

//chainage methode
// $(".link").addClass("btn btn-primary").text("Je suis un bouton");

});