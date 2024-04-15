$(document).ready(function () {
  let slides = $(".home .slides-con .slide");
  let about = $(".team-about");
  let info = $(".info");
  let aIndex = 0;
  let index = 0;

  $("#closer").click(function () {
    $(".navbar").removeClass("active");
    $(".shopping-cart").removeClass("active");
    $(".login-form").removeClass("active");
    $(this).css("display", "none");
  });

  $("#menu-btn").click(function () {
    $("#closer").css("display", "block");
    $(".navbar").toggleClass("active");
  });

  $("#cart-btn").click(function () {
    $("#closer").css("display", "block");
    $(".shopping-cart").toggleClass("active");
  });

  $("#login-btn").click(function () {
    $("#closer").css("display", "block");
    $(".login-form").toggleClass("active");
  });

  $("#search-btn").click(function () {
    $(".search-form").toggleClass("active");
  });

  $(".slide-next").click(function () {
    $(slides[index]).removeClass("active");
    index = (index + 1) % slides.length;
    $(slides[index]).addClass("active");
  });

  $(".slide-prev").click(function () {
    $(slides[index]).removeClass("active");
    index = (index - 1 + slides.length) % slides.length;
    $(slides[index]).addClass("active");
  });

  $(info).on("click", function () {
    aIndex = $(info).index(this, "info");
    $(about[aIndex]).toggleClass("active");
  });
});
