
$(document).ready(function () {
  // TODO: Add code to display the current date in the header of the page.
  var vtime = dayjs().format("YYYY/MM/DD");
  $("#currentDay").text(vtime);
  // get and set hour
  var htime = dayjs().format("HH");
  //get id of div and splits it to compare that time to hour of day
  $(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    // console.log(" the div is " + timeDiv);
    // console.log(" the HH is " + htime);
    // console.log("  ");
    if (htime == timeDiv) {
      $(this).addClass("present");
    } else if (htime < timeDiv) {
      $(this).removeClass("present");
      $(this).addClass("future");
    } else if (htime > timeDiv) {
      $(this).removeClass("future");
      $(this).addClass("past");
    }
  });
  //get values and saves to local
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
    // console.log(" the val is " + value);
    // console.log(" the time is " + time);
    // console.log("  "); 
  });
  //get local storage values and sets them
  $("#hour-09 .description").val(localStorage.getItem("09"));
  $("#hour-10 .description").val(localStorage.getItem("10"));
  $("#hour-11 .description").val(localStorage.getItem("11"));
  $("#hour-12 .description").val(localStorage.getItem("12"));
  $("#hour-13 .description").val(localStorage.getItem("13"));
  $("#hour-14 .description").val(localStorage.getItem("14"));
  $("#hour-15 .description").val(localStorage.getItem("15"));
  $("#hour-16 .description").val(localStorage.getItem("16"));
  $("#hour-17 .description").val(localStorage.getItem("17"));
});
