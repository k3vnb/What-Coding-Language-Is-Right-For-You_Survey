$(document).ready(function() {
  $("form#codequiz").submit(function(event) {
    var q1 = $("select#q1").val();
    var q2 = $("select#q2").val();
    var q3 = $("select#q3").val();
    var q4 = $("select#q4").val();
    var q5 = $("select#q5").val();

    if (q1, q2, q3, q4, q5 === "none") {
      alert("Please complete the form");
    } else if (q3 === "hate") {
      $("#phpnet, #design, #rubyreact, #designruby, #javaphp").hide();
      $("#other").show();
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
    };

    if (q5 === "big") {
      $("#lemur").hide();
      $("#minotaur").show();
    } else if (q5 === "small") {
      $("#minotaur").hide();
      $("#lemur").show();
    };
    alert("Test");

    event.preventDefault();
  });
});
