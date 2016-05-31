$(document).ready(function() {
    $("#cemetery .clickable").click(function(){
      $("#cemetery-showing").toggle();
      $("#cemetery-hidden").toggle();
    });
    $("#mom .clickable").click(function(){
      $("#mom-showing").toggle();
      $("#mom-hidden").toggle();
    });
    $("#sushi .clickable").click(function(){
      $("#sushi-showing").toggle();
      $("#sushi-hidden").toggle();
    });
});
