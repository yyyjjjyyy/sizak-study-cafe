/* $(document).ready(function () {
  $("div.menu ul.l_gnb, div.menu ul.r_gnb").click(function () {
    if ($(window).width() <= 1000) {
      // 모바일
      $(this).toggleClass("close"); // 기본: 열려있음
    }
  });
}); */
$(document).ready(function () {
  // 토글 버튼 클릭 → 전체 메뉴 열고 닫기
  $("#i-toggle").click(function () {
    if ($(window).width() <= 1000) {
      $("#nav div.menu").toggleClass("open");
    }
  });

  // 상위 메뉴 클릭 → 서브메뉴 열고 닫기
  $(".gnb > li > a").click(function (e) {
    if ($(window).width() <= 1000) {
      e.preventDefault(); // 링크 이동 막기

      const $submenu = $(this).next(".sub");

      if ($submenu.is(":visible")) {
        $submenu.slideUp();
      } else {
        // $(".gnb .sub").slideUp(); // 다른 메뉴 닫기
        $submenu.slideDown(); // 현재 메뉴만 열기
      }
    }
  });
});
