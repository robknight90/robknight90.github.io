var lastElem = 5;

$(document).ready(function() {
  $("a").on('click',function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      var winS = $(window).scrollTop();
      var headerS = $("#header").offset().top;
      var h = $("#header").height();
      var off = 60;
      if (winS-headerS<h) off = 120;
      
      $('html, body').animate({
        scrollTop: $(hash).offset().top - off
      }, 800, function() {
        window.location.hash=hash;
      });
    }
  });
});

$(window).scroll(function() {
  var winS = $(window).scrollTop();
  var headerS = $("#header").offset().top;
  var aboutS = $("#about").offset().top;
  var portS = $("#portfolio").offset().top;
  var contactS = $("#contact").offset().top;
  //console.log(winS-contactS);
  var nl = $(".navbar-nav li");
  var colorAct = "rgba(13,99,35,0.9)";
  var colorInact = "rgba(0,0,0,0)";
  var speed = 'slow';
  var activeElem=0;
  if(winS-contactS>-320) {
    activeElem = 2;
  } else if (winS-portS>-320) {
    activeElem = 1;
  } else {
      activeElem = 0;
  }
  
  if (activeElem!=lastElem) {
  
    for (var i=0; i<=2;i++) {
      nl.eq(i).stop();
      if (i==activeElem) {
        nl.eq(i).addClass("active");
        nl.eq(i).animate({backgroundColor: colorAct}, speed);
      } else {
        nl.eq(i).removeClass("active");
        nl.eq(i).animate({backgroundColor: colorInact}, speed);
      }


    }
  }
  lastElem = activeElem;
  
  //Fixing the navbar only after the scrolling goes below where it starts OR if width <= 540px;
  console.log(winS-headerS);
  var h = $("#header").height();
  if (winS-headerS>h || $(window).width() <= 540) {
    $(".navbar").addClass("fixed-top");
    
  } else {
    $(".navbar").removeClass("fixed-top");
     
  }
  
});