$(document).ready(function() {
  $("form#codequiz").submit(function(event) {
    var nameInput = $("input#name").val();
    var q1 = $("select#q1").val();
    var q2 = $("select#q2").val();
    var q3 = $("select#q3").val();
    var q4 = $("select#q4").val();
    var q5 = $("select#q5").val();

    if (nameInput === "") {
      alert("Please enter name");
    } else if (q1 === "none") {
      alert("Please complete the form");
    } else if (q2 === "none") {
      alert("Please complete the form");
    } else if (q3 === "none") {
      alert("Please tell us your feelings about computers");
    } else if (q4 === "none") {
      alert("Please complete the form");
    } else if (q5 === "none") {
      alert("Please select a spirit animal");
    } else if (q3 === "hate") {
      $("#phpnet, #design, #rubyreact, #designruby, #javaphp").hide();
      $("#other").show();
      $(".name").text(nameInput).show();
    } else if (q1 === "corp" && q2 === "back") {
      $("#other, #design, #rubyreact, #designruby, #javaphp").hide();
      $("#phpnet").show();
    }  else if (q1 === "corp" && q2 === "front") {
      $("#phpnet, #other, #rubyreact, #designruby, #javaphp").hide();
      $("#design").show();
    } else if (q1 === "smbus" && q2 === "front" || q1 !== "corp" && q2 === "back") {
      $("#phpnet, #design, #other, #designruby, #javaphp").hide();
      $("#rubyreact").show();
    } else if (q1 === "ind" && q2 === "front") {
      $("#phpnet, #design, #rubyreact, #other, #javaphp").hide();
      $("#designruby").show();
    } else if (q1 === "ind" && q2 === "back") {
      $("#phpnet, #design, #rubyreact, #designruby, #other").hide();
      $("#javaphp").show();
    }

    if (q5 === "big") {
      $("#lemur").fadeOut(400);
      $("#minotaur").fadeIn(400);
    } else if (q5 === "small") {
      $("#minotaur").fadeOut(400);
      $("#lemur").fadeIn(400);
    };

    event.preventDefault();
  });
});
