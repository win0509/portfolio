$(document).ready(function(){

 //AOS
 AOS.init(); 
  

$(window).resize(function(){
  var ww = $(window).width();
  if(sct < webPos && ww > 1199){
    skrollr.init().destroy();
  }
});

//반응형 플러그인 제거
var ww = $(window).width();
console.log(ww)

if(ww < 1199){
  skrollr.init().destroy();
}

// 가로스크롤
$(window).scroll(function(){
  var sct = $(window).scrollTop();
  var webPos = $('.web-container').offset().top;
  var contactPos = $('.contact').offset().top - $(window).height();

  if(sct < webPos && ww > 1199){
    skrollr.init().destroy();
    console.log('scrollTop')
    // $('.page-container').css({
    //   position: 'static',
    //   top: 0,
    //   left: 0
    // })


  }else if(sct >= webPos && sct < contactPos && ww > 1199){
    console.log('working')
    skrollr.init();
    $('.page-container').css({
      position: 'fixed',
      top: 0,
      left: 0
    })
  }else{
  //     $('.page-container').css({
  //     position: 'absolute',
  //     top: 'auto',
  //     bottom: 0,
  //     left: 0
  // })

  }
});











    








    


}); /* end */