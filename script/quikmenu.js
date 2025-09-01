// 퀵메뉴

$(document).ready(function() {

        //변수선언
    const qbtn = $("aside i.fas");
    qbtn.click(function() {
        //방향버튼 클릭 시

            if ($(this).hasClass("fa-angle-right") == true) {
                //만약에 클릭한 태그에 현재 클래스명이 있다면 아래 내용 실행하라

                //aside의 위치가 right -132px 설정되어야 화면에서 없어진다.
                $("aside").animate({
                        right: "-132px",
                    },
                    500
                );

                //자기 자신의 속성 class안에 값을 변경하여 화살표 방향을 반대로 변경한다.
                $(this).attr("class", "fas fa-angle-left");
            } else {
                //그렇지 않으면 아래 내용 실행한다.

                //다시 나오게 하기 클래스명 right일때
                $("aside").animate({
                        right: "0px",
                    },
                    500
                );
                $(this).attr("class", "fas fa-angle-right");
            }
    });
});
