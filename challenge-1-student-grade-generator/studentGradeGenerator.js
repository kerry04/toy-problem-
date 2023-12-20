// Function to generate student grade based on input marks
function generateStudentGrade(marks) {
    try {
        // Validate input
        if (isNaN(marks) || marks < 0 || marks > 100) {
            return "Invalid input. Please enter a numeric value between 0 and 100.";
        }

        // Determine the grade based on the provided criteria
        if (marks > 79) {
            return 'A';
        } else if (marks >= 60 && marks <= 79) {
            return 'B';
        } else if (marks >= 50 && marks <= 59) {
            return 'C';
        } else if (marks >= 40 && marks <= 49) {
            return 'D';
        } else {
            return 'E';
        }
    } catch (error) {
        return "An error occurred. Please try again.";
    }
}

// Example usage:
const studentMarks = parseFloat(prompt("Enter Student Marks:"));
const result = generateStudentGrade(studentMarks);
console.log(`Student Grade: ${result}`);
