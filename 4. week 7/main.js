// **** html references ****
var nameInput = document.getElementById('nameInput');
var submitButton = document.getElementById('submitButton');
var outputDiv = document.getElementById('outputDiv');
var mouseTracker = document.getElementById('mouseTracker');
var coordinatesDiv = document.getElementById('coordinates');

// **** functions ****

// runs when the submit button is clicked or 'Enter' is pressed.
function handleSubmission() {
    // Get the text the user typed into the input box
    var name = nameInput.value;
    
    // removes any empty spaces start and end of the text
    var cleanedName = name.trim();

    // check if the user entered a name
    if (cleanedName !== "") {
    // if they did enter a name -> show a welcome message
    outputDiv.textContent = "Welcome, " + cleanedName + "!";
    // change the background color to green to show success
    outputDiv.style.backgroundColor = '#d1fae5'; // light green
    outputDiv.style.color = '#065f46'; // dark green text
    outputDiv.style.borderColor = '#10b981'; // medium green border
    } else {
    // if they did NOT enter a name -> show an error message.
    outputDiv.textContent = "Error: Please enter a name.";
    // change the background color to red to show an error
    outputDiv.style.backgroundColor = '#fee2e2'; // light red 
    outputDiv.style.color = '#991b1b'; // dark red text
    outputDiv.style.borderColor = '#ef4444'; // medium red border
    }
}

// runs whenever the mouse moves inside the 'mouseTracker' box
function trackMouse(event) {
    // get position and size of the tracker box
    var rect = mouseTracker.getBoundingClientRect();
    
    // calc the mouse's X position relative to the box
    var x = Math.round(event.clientX - rect.left);
    // calc the mouse's Y position relative to the box
    var y = Math.round(event.clientY - rect.top);
    
    // update the text to show coordinates
    coordinatesDiv.textContent = "Mouse Coordinates: X: " + x + ", Y: " + y;
}

// runs when the mouse pointer leaves the 'mouseTracker' box
function resetMouseCoords() {
    // reset the coordinates text to default state
    coordinatesDiv.textContent = "Mouse Coordinates: X: 0, Y: 0";
}

// runs whenever a key is pressed on the keyboard inside the name input field
function handleKeyPress(event) {
    // check if key that was pressed was the 'Enter' key
    if (event.key === "Enter") {
    // event.preventDefault() stops the browser from doing default action (which might be to refresh the page)
    event.preventDefault(); 
    // call our submission function, just as if the button were clicked
    handleSubmission();
    }
}

// **** event listeners ****

// click on submit button
submitButton.addEventListener('click', handleSubmission);

// key press
nameInput.addEventListener('keydown', handleKeyPress);

// mouse moving inside tracker div
mouseTracker.addEventListener('mousemove', trackMouse);

// mouse leaving tracker div
mouseTracker.addEventListener('mouseleave', resetMouseCoords);