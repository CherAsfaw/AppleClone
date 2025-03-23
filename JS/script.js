$(document).ready(function () {
  $(".footer-links-wrapper h3").on("click", function () {
    let footerContent = $(this).next("ul");
    $(this).toggleClass("expanded");
    footerContent.slideToggle();
  });
  $(window).resize(function () {
    if ($(window).width() > 768) {
      $(".footer-links-wrapper ul").show();
      $(".footer-links-wrapper h3").removeClass("expanded");
    } else {
      $(".footer-links-wrapper ul").hide();
    }
  });
});