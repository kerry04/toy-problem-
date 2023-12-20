// Function to calculate demerit points and check for license suspension
function calculateDemeritPoints() {
    try {
        // Get user input for car speed
        var speed = parseFloat(prompt("Enter Car Speed (km/h):"));

        // Validate input
        if (isNaN(speed) || speed < 0) {
            alert("Invalid input. Please enter a non-negative numeric value.");
            return;
        }

        // Calculate demerit points based on the provided criteria
        var speedLimit = 70;
        var demeritPoints = Math.floor((speed - speedLimit) / 5);

        // Check for license suspension
        if (demeritPoints > 12) {
            alert("License suspended. Too many demerit points.");
        } else {
            // Display the result
            alert(`Demerit Points: ${demeritPoints}`);
        }
    } catch (error) {
        alert("An error occurred. Please try again.");
    }
}

// Call the function to test
calculateDemeritPoints();
