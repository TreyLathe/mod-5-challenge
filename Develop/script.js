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

  //for each hour, if hour is past, use past style, if hour is present, use present style, etc. 
  $(function () {
    // Get the current hour using day.js
    let currentHour = dayjs().hour();
  
    // Loop through each time block
    $(".time-block").each(function () {
      // Extract the hour from the id attribute
      let blockHour = parseInt($(this).attr("id").split("-")[1]);
  
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

    $(document).ready(function () {
      // Event listener for saveBtn click
      $('.saveBtn').on('click', function () {
        // Get the description text
        let descriptionText = $(this).siblings('.description').val();

        // Get the unique ID of the parent time block
        let timeBlockID = $(this).parent().attr('id');

        // Save the text to local storage using the time block ID as a key
        localStorage.setItem(timeBlockID, descriptionText);
      });

      // Load saved events on page load
      function loadSavedEvents() {
        // Loop through each time block
        $('.time-block').each(function () {
          // Get the time block ID
          let timeBlockID = $(this).attr('id');

          // Retrieve the saved text from local storage using the time block ID
          let savedText = localStorage.getItem(timeBlockID);

          // If there's saved text, set it in the description textarea
          if (savedText !== null) {
            $(this).find('.description').val(savedText);
          }
        });
      }

      // Call the function to load saved events on page load
      loadSavedEvents();
    });
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
