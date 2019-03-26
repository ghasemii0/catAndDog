$(document).ready(function(){
  $("#dog").click(function(){
    $("#bark").prepend('<li><img src="img/dog_bark.png">BARK</li>')
    var random_size = Math.random() * 50 + 20;
    
    $("#bark").children("li").first().css("font-size",random_size + "px");
    $("#bark").children("li").first().children("img").css("height",random_size + "px");
    $("#bark").children("li").first().children("img").css("background-color", randomcolor());
    if($("#bark").children("li").length > 4)
    {
      $("#bark").children("li")[4].remove();
    }
  });

  $("#cat").click(function(){
    $("#meow").prepend("<li><img src='img/cat_meow.png'>MEOW</li>");
    var random_size = Math.random() * 20 + 20;

    $("#meow").children("li").first().css("font-size",random_size + "px");
    $("#meow").children("li").first().children("img").css("height",random_size + "px");
    $("#meow").children("li").first().children("img").css("background-color", randomcolor());
    if($("#meow").children("li").length > 4)
    {
      $("#meow").children("li")[4].remove();
    }
  });
});

var randomcolor = function()
{
  var r = Math.round( Math.random() * 255);
  var g = Math.round( Math.random() * 255);
  var b = Math.round( Math.random() * 255);
  var color = "rgb(" + r + ", " + g + ", " + b + ")"
  return color;
}
