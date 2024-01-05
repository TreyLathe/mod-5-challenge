Module 5 Challenge
Work Day Scheduler

CHALLENGE GOAL:
Create a simple calendar application that allows a user to save events for each hour of a typical working day (9am–5pm). This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

RESOURCES USED:
*Class instruction and office hours
*Pertinent MDN and W3 sections
*Xpert Learning assistant 

RELEVANT LINKS:
Repository: https://github.com/TreyLathe/mod-5-challenge
Deployed Site: 

SCREENSHOTS:


COMMENTS:

    GIVEN I am using a daily planner to create a schedule
    WHEN I open the planner
    THEN the current day is displayed at the top of the calendar

Added day.js function JS to show day and date on the header.. 

    WHEN I scroll down
    THEN I am presented with time blocks for standard business hours of 9am to 5pm

Expanded standard business hours from 8am to 7pm since those are my current work hours.

    WHEN I view the time blocks for that day
    THEN each time block is color-coded to indicate whether it is in the past, present, or future

Used provided code to expand the hours, changed colors, added javascript and day.js functions with css to change color depending on if the hour is past/present or future

WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
