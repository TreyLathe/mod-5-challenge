//Wrap all code that interacts with the DOM in a call to jQuery
$(document).ready(function () {

  let dateTime = document.getElementById("dateTime");

  function dateTimeUpdate() {
  let rightNow = dayjs().format("dddd, MMMM DD YYYY");
  dateTime.textContent = rightNow;
  }

  setInterval(dateTimeUpdate, 1000) ;

  // Get the current hour using day.js
  let currentHour = dayjs().hour();
  
  // function Loop through each time block assigning style depending on past/present/future
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


  // Event listener for saveBtn click
  $('.saveBtn').on('click', function () {
        // Get the description text
      let descriptionText = $(this).siblings('.description').val();
      // Get the unique ID of the parent time block
      let timeBlockID = $(this).parent().attr('id');
      // Save the text to local storage using the time block ID as a key
      localStorage.setItem(timeBlockID, descriptionText);
  });

    // Load saved events on page 
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
 

