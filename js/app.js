$(document).ready(function(){

    /* Show Menu*/
    $('.icon-menu').click(function() {
      $('.menu').animate({
        left: "0px"
      }, 200);

      $('body').animate({
        left: "285px"
      }, 200);
    });

    /* Hide Menu */
    $('.icon-close').click(function() {
      $('.menu').animate({
        left: "-285px"
      }, 200);

      $('body').animate({
        left: "0px"
      }, 200);
    });

var color = $(".selected").css("background-color");
var $canvas = $("canvas")
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

// Event Listener syntax for when dynamic events are added to a page
$('.buttons').on('click', "li", function(){
  $(this).siblings().removeClass('selected');
  $(this).addClass('selected');

  color = $(this).css('background-color');
})

$('#revealColorSelector').click(function(){
  changeColor();
  $('#colorSelector').toggle();
});

function changeColor(){
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();

  $("#newColor").css("background-color", "rgb(" + r + ", " + g + ", " + b + ")");

}

$("input[type=range]").change(changeColor);
  $("#addNewColor").click(function(){
    var $newColor = $("<li></li>");
    $newColor.css("background-color", $("#newColor").css("background-color"));
    $(".buttons ul").append($newColor);
    $newColor.click();
  });

$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  if(mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    console.log(color);
    context.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});

}) //End Of Doc Ready

