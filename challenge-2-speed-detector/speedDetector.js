// Function to calculate demerit points and check for license suspension
function calculateDemeritPoints(speed) {
    try {
        // Validate input
        if (isNaN(speed) || speed < 0) {
            return "Invalid input. Please enter a non-negative numeric value.";
        }

        // Calculate demerit points based on the provided criteria
        const speedLimit = 70;
        const demeritPoints = Math.floor((speed - speedLimit) / 5);

        // Check for license suspension
        if (demeritPoints > 12) {
            return "License suspended. Too many demerit points.";
        } else {
            return `Demerit Points: ${demeritPoints}`;
        }
    } catch (error) {
        return "An error occurred. Please try again.";
    }
}

// Example usage:
const carSpeed = parseFloat(prompt("Enter Car Speed (km/h):"));
const result = calculateDemeritPoints(carSpeed);
console.log(result);
