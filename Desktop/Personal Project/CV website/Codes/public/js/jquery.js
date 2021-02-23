$(".navbar-toggler").on("click",function(event){
  $(".navbar-collapse").slideToggle();
});

$(".more").on("click",function(e){
  var a = $(this).attr("id");
  $("#"+a+"-elaboration").slideToggle();

  if($(this).text() === "+"){
    $(this).text("-");
  }else{
    $(this).text("+");    
  }
});
