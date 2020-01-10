$("#work").click(function() {
  $(".personalBio").css("display", "none");
  $(".pastWork").css("display", "block");
  $(".contactMe").css("display", "none");
  $("#projects").css("display", "block");
  $("#currently").css("display", "none");
});

$("#contact").click(function() {
  $(".personalBio").css("display", "none");
  $(".pastWork").css("display", "none");
  $(".contactMe").css("display", "block");
  $("#projects").css("display", "none");
  $(".oneLiner").css("display", "none");
});
