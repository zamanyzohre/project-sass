$(document).ready(function () {
  



  $(".btn-tabiat").on("click", function () {
    $(".tecnology").addClass("hidden");
    $(".travel").addClass("hidden");
    $(".all").addClass("hidden");
    $(".tabiat").removeClass("hidden");
    $(".tabiat").addClass("show");
  });

  $(".btn-tecnology").on("click", function () {
    $(".tabiat").addClass("hidden");
    $(".travel").addClass("hidden");
    $(".all").addClass("hidden");
    $(".tecnology").removeClass("hidden");
    $(".tecnology").addClass("show");
  });

  $(".btn-travel").on("click", function () {
    $(".tabiat").addClass("hidden");
    $(".tecnology").addClass("hidden");
    $(".all").addClass("hidden");
    $(".travel").removeClass("hidden");
    $(".travel").addClass("show");
  });


  $(".btn-all").on("click", function () {
    $(".tabiat").addClass("hidden");
    $(".travel").addClass("hidden");
    $(".tecnology").addClass("hidden");
    $(".all").removeClass("hidden");
    $(".all").addClass("show");
  });

  

});
