$("#work").click(function() {
  $(".personalBio").css("display", "none");
  $(".pastWork").css("display", "block");
  $(".contactMe").css("display", "none");
  $("#projects").css("display", "block");
  $("#oneLiner").css("display", "block");
  $("#currently").css("display", "none");
  $("#press").css("display", "block");
});

$("#contact").click(function() {
  $(".personalBio").css("display", "none");
  $(".pastWork").css("display", "none");
  $(".contactMe").css("display", "block");
  $("#projects").css("display", "none");
  $("#oneLiner").css("display", "none");
});

$("#backnav").click(function() {
  $(".personalBio").css("display", "block");
  $(".pastWork").css("display", "none");
  $(".contactMe").css("display", "none");
  $("#projects").css("display", "none");
  $("#oneLiner").css("display", "inline");
  $("#currently").css("display", "inline");
});
