// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  //
  // TODO: Add code to display the current date in the header of the page.
  var vtime = dayjs().format("YYYY/MM/DD");
  $("#currentDay").text(vtime);
  //
  // get and set hour
  var htime = dayjs().format("HH");
  //

  // Button function to clear local storage and clear contents
//   $("#clearBtn").click(function (event) {
//     event.preventDefault;
//     $("textarea").val("");
//     localStorage.clear();
//   });

  //grabs hour from each time slot and compares it to actual time
  $(".time-div").each(function () {
    var timeDiv = $(this).attr("id").split("-")[1];
    console.log(" the div is " + timeDiv);
    console.log(" the HH is " + htime);
    console.log("  ");
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

  //grabs values from time and value divs and saves them to local storage
  $(".saveBtn").click(function (event) {
    event.preventDefault();
    var value = $(this).siblings(".time-block").val();
    var time = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(time, value);
  });

  //retrieves items from local storage and sets them in proper places
  $("#hour-08 .description").val(localStorage.getItem("08"));
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
