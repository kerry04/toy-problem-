// Function to calculate net salary based on input basic salary and benefits
function calculateNetSalary() {
    try {
        // Get user input for basic salary and benefits
        var basicSalary = parseFloat(prompt("Enter Basic Salary:"));
        var benefits = parseFloat(prompt("Enter Benefits:"));

        // Validate input
        if (isNaN(basicSalary) || isNaN(benefits)) {
            alert("Invalid input. Please enter numeric values for Basic Salary and Benefits.");
            return;
        }

        // Calculate gross salary
        var grossSalary = basicSalary + benefits;

        // Calculate payee (tax) based on the provided monthly rates
        var monthlyTaxablePay = grossSalary;
        var payeeRate;

        if (monthlyTaxablePay <= 24000) {
            payeeRate = 0.1;
        } else if (monthlyTaxablePay <= 32333) {
            payeeRate = 0.25;
        } else if (monthlyTaxablePay <= 500000) {
            payeeRate = 0.3;
        } else if (monthlyTaxablePay <= 800000) {
            payeeRate = 0.325;
        } else {
            payeeRate = 0.35;
        }

        var payee = grossSalary * payeeRate;

        // Calculate NHIF Deductions based on the provided rates
        var nhifDeductions;
        if (grossSalary <= 5999) {
            nhifDeductions = 150;
        } else if (grossSalary <= 7999) {
            nhifDeductions = 300;
        } else if (grossSalary <= 11999) {
            nhifDeductions = 400;
        } else if (grossSalary <= 14999) {
            nhifDeductions = 500;
        } else if (grossSalary <= 19999) {
            nhifDeductions = 600;
        } else if (grossSalary <= 24999) {
            nhifDeductions = 750;
        } else if (grossSalary <= 29999) {
            nhifDeductions = 850;
        } else if (grossSalary <= 34999) {
            nhifDeductions = 900;
        } else if (grossSalary <= 39999) {
            nhifDeductions = 950;
        } else {
            nhifDeductions = 1700;
        }

        // Calculate NSSF Deductions based on the provided tiered contribution system
        var nssfRateTierI = 0.06; // 6% NSSF rate for Tier I
        var nssfRateTierII = 0.06; // 6% NSSF rate for Tier II

        var nssfDeductions;
        if (grossSalary <= 6000) {
            nssfDeductions = grossSalary * nssfRateTierI;
        } else if (grossSalary <= 18000) {
            // For Tier II, only the portion above 6000 is considered
            nssfDeductions = (18000 - 6000) * nssfRateTierII + (grossSalary - 18000) * nssfRateTierI;
        } else {
            // For Tier II, only the portion above 6000 is considered
            nssfDeductions = (grossSalary - 18000) * nssfRateTierII;
        }

        // Calculate net salary
        var netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;

        // Display the result
        alert(`
            Gross Salary: ${grossSalary.toFixed(2)}
            Payee (Tax): ${payee.toFixed(2)}
            NHIF Deductions: ${nhifDeductions.toFixed(2)}
            NSSF Deductions: ${nssfDeductions.toFixed(2)}
            Net Salary: ${netSalary.toFixed(2)}
        `);
    } catch (error) {
        alert("An error occurred. Please try again.");
    }
}

// Call the function to test
calculateNetSalary();
