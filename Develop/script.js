// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let dateTime = document.getElementById("dateTime");

function dateTimeUpdate() {
  let rightNow = dayjs().format("dddd, MMMM DD YYYY");
  dateTime.textContent = rightNow;
}

setInterval(dateTimeUpdate, 1000) ;
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  //for each hour, if hour is past, use past style, if hour is present, use present style, etc. 
  $(function () {
    // Get the current hour using day.js
    var currentHour = dayjs().hour();
    console.log(currentHour);
  
    // Loop through each time block
    $(".time-block").each(function () {
      // Extract the hour from the id attribute
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
      // Compare the block hour with the current hour
      if (blockHour < currentHour) {
        // Past
        $(this).removeClass("present future").addClass("past");
      } else if (blockHour === currentHour) {
        // Present
        $(this).removeClass("past future").addClass("present");
      } else {
        // Future
        $(this).removeClass("past present").addClass("future");
      }
    });


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
