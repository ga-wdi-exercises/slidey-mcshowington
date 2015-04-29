var searchTerm;
var timing = 5;
var transition = "fade";
var transitionTiming = .5;

function getImage(){
  var url = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg&tag=";
  $.getJSON(url + searchTerm, addToBackground);
}

function addToBackground(response){
  var imgUrl = response["data"]["image_url"];
  $("#background")
    .css("background-image", "url('" + imgUrl + "')")
    .animate({
      opacity: 1
    },
    {
      duration: transitionTiming * 1000,
      complete: function(){
        console.log("Done changing!");
      }
    }); 
}

function changeSlide(){
  $("#background").animate({
    opacity: 0
  },
  {
    duration: transitionTiming * 1000,
    complete: function(){
      getImage();
    }
  });
}

function setSearchTerm(){
  searchTerm = $("#word").val();
}

$(document).ready(function(){
  setSearchTerm();
  changeSlide();
  setInterval(changeSlide, timing * 1000);

  $("#word").keydown(function(evt){
    if(evt.keyCode === 13){
      setSearchTerm();
      changeSlide();
    }
  });
});
