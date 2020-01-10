$("#work").click(function() {
  $(".personalBio").css("display", "none");
  $(".pastWork").css("display", "block");
  $(".contactMe").css("display", "none");
  $("#projects").css("display", "block");
});

$("#contact").click(function() {
  $(".personalBio").css("display", "none");
  $(".pastWork").css("display", "none");
  $(".contactMe").css("display", "block");
  $("#projects").css("display", "none");
});
