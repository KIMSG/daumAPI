define(['jquery', 'app/common'], function ($) {
  return {
    init: function () {

      console.log("->result_side->init()");

      $(document).ready(function () {
        // menu 클래스 바로 하위에 있는 a 태그를 클릭했을때
        $(".result_map_menu>.menu_button").click(function () {
          var submenu = $(this).next(".map_hide");

          // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
          if (submenu.is(":visible")) {
            submenu.slideUp();
          } else {
            submenu.slideDown();
          }
        });
      });


    }
  };
});