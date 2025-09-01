$(document).ready(function () {
    $('div.menu ul.l_gnb, div.menu ul.r_gnb').click(function() {
        if ($(window).width() <= 1000) {
            // 모바일
            $(this).toggleClass('close'); // 기본: 열려있음
        }
    });

    $('#i-toggle').click(function() {
        if ($(window).width() <= 1000) {
            // 모바일

            const menu = $('#nav div.menu');
            menu.toggleClass('close'); // 기본: 열려있음
            const hasClass = menu.hasClass('close');

            if (hasClass) { // open-> CLOSE
                // do nothing

            } else { // CLOSE-> open
                $('div.menu ul.l_gnb, div.menu ul.r_gnb').removeClass('close'); // CLOSE-> open
            }
        }
    });
});

// $(document).ready(function () {

//   // <div class="wrap" style="display: none;"> // 사용자로부터 감춘다.
//   $('ul.gnb ul.sub').hide(); // javascript로 화면 관련 할 일을 한다
//   $('ul.c_gnb ul.sub').hide();

//   $('.sub').hide();

//   // $('div.menu ul.sns_sub').hide();
//   // $('div.menu ul.gnb').hide();

//   $('div.wrap').show(); // 그 할일이 끝나면, 비로소 화면을 사용자에게 보여준다.
//   // -> 단점: javascript가 동작하지 않으면, 화면 자체가 안 보이게 된다

//   // 열었다, 닫혔다 하는 것을
//   // jQuery의 애니메이션 함수를 쓰지 않고 (예: slideTolggle(), slideDown(), slideUp()) 
//   // css를 직접 만들어서, css 클래스명을 붙였다/땠다로 되도록 구현 <- 퍼블리셔
//   // javascript로 css 클래스명을 붙였다/땠다하기 <- 프론트앤드

//   let gnb = $(".gnb > li > a");

//   //토글버튼 클릭시 모바일 메뉴 

//   $('.toggle').click(function () {

//     if ($(window).width() <= 1000) {
//       $(".menu").stop().slideToggle();
//       return false; //#기능 무력화
//     }
//   });



//   gnb.click(function () {
//     if ($(window).width() <= 1000) {
//       // 모바일
//       $('.sub').stop().slideToggle();
//       return false; //#기능 무력화
//     }
//   });


//   gnb.hover(function () {
//     console.log('gnb.hover(true)');
//     if ($(window).width() <= 1000) {
//       // do nothing

//     } else {
//       // 데스크탑
//       $('.sub').stop().slideDown();
//     }

//   }, function () {
//     console.log('gnb.hover(false)');
//     if ($(window).width() <= 1000) {
//       // do nothing
//     } else {
//       // 데스크탑
//       $('.sub').stop().slideUp();
//     }
//   });




// });






            // $(document).ready(function () {
            //     $(".gnb").hover(
            //       function () {            
            //          $('.sub').stop().slideDown(); //서브메뉴 숨기고 서서히 나타나게 한다.
            //          },
            //       function () {
            //         $('.sub').stop().slideUp();
            //       });


            //     let gnb = $(".gnb > li");

            //     $('.toggle').click(function () {                  
            //       $(".gnb").stop().fadeIn().css('width','100%').css('display','flex');
            //       $(".sub").stop().fadeIn();


            //       return false; //#기능 무력화


            //     });


            //  });

