$(document).ready(function () {
    $(".mobile-menu").hide();
    $(".close-icon").hide();
    $(".close-icon").css("font-size","40px");
    $(".fa-bars").click(function () {
      $(".mobile-menu").slideToggle("slow", function () {
        $(".mobile-menu").show();
        $(".close-icon").show();
        $(".close-icon").css("font-size","2rem");
        $(".fa-bars").hide();
      });
    });
    $(".close-icon").click(function () {
      $(".mobile-menu").slideToggle("slow", function () {
        $(".mobile-menu").hide();
        $(".close-icon").hide();
        $(".fa-bars").show();
      });
    });
  });