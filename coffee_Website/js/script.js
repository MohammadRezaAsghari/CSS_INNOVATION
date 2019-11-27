$(document).ready(function(){
  $(window).scroll(function(event){
      var y = $(this).scrollTop();
      
      if(y>220){
          $(".circle").addClass("display-out");
      }
      if(y>330){
          $("#coffee").addClass("coffee-set");
          $("#book").addClass("book-set");
      }
      if(y>800){
          $(".three-circle").addClass("three-circle-set");
          $(".circle-img").addClass("three-circle-img-set");
      }
      if(y>1230){
          $(".fill").addClass("fill-set");
      }
      
  });
     $(".ham-menu").click(function(){
        $(".ham-page").toggleClass("ham-page-set");
    })
    
     
     
     
});