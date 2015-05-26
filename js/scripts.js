var leapYear = function(year) {
  if (((year % 4 === 0) && (year % 100 !== 0)) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
};

$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var yearString = $("input#year").val();
    var year = parseInt(yearString);
    var result = leapYear(year);

    if (isNaN(year)) {
      result = false;
      year = yearString;
    }

    $(".year").text(year);
    $(".not").text("");
    if (!result) {
      $(".not").text("not");
    }

    $("#result").show();
    event.preventDefault();
  });
});
