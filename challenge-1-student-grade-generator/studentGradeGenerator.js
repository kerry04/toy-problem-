// Function to generate student grade based on input marks
function generateStudentGrade() {
    try {
        // Get user input for student marks
        var marks = parseFloat(prompt("Enter Student Marks:"));

        // Validate input
        if (isNaN(marks) || marks < 0 || marks > 100) {
            alert("Invalid input. Please enter a numeric value between 0 and 100.");
            return;
        }

        // Determine the grade based on the provided criteria
        var grade;
        if (marks > 79) {
            grade = 'A';
        } else if (marks >= 60 && marks <= 79) {
            grade = 'B';
        } else if (marks >= 50 && marks <= 59) {
            grade = 'C';
        } else if (marks >= 40 && marks <= 49) {
            grade = 'D';
        } else {
            grade = 'E';
        }

        // Display the result
        alert(`Student Grade: ${grade}`);
    } catch (error) {
        alert("An error occurred. Please try again.");
    }
}

// Call the function to test
generateStudentGrade();
