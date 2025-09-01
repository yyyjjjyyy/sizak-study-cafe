
$(document).ready(function() {
    /*이미지 마우스 오버 - 스터디카페 */

    $(".hover01").hover(
        function() {
            $(this).attr({
                src: "images/hover01.jpg",
                alt: "스터디카페 마우스 오버",
            });
        },
        function() {
            $(this).attr({
                src: "images/sz_44.png",
                alt: "스터디카페",
            });
        }
    );

    /*이미지 마우스 오버 - 독서실 */

    $(".hover02").hover(
        function() {
            $(this).attr({
                src: "images/hover02.jpg",
                alt: "스터디카페 마우스 오버",
            });
        },
        function() {
            $(this).attr({
                src: "images/sz_46.png",
                alt: "마우스 오버 전",
            });
        }
    );

    
});


