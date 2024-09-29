const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Basic Salary: ", (basicSalary) => {
    rl.question("Benefits: ", (benefits) => {
        // Convert inputs to numbers
        basicSalary = parseFloat(basicSalary);
        benefits = parseFloat(benefits);

        // Calculate gross salary
        let grossSalary = basicSalary + benefits;

        // Function to calculate PAYE
        function payee() {
            let pay;
            if (grossSalary <= 24000) {
                pay = 0.10 * grossSalary;
            } else if (grossSalary <= 32333) {
                pay = 0.25 * grossSalary;
            } else if (grossSalary <= 500000) {
                pay = 0.30 * grossSalary;
            } else if (grossSalary <= 800000) {
                pay = 0.325 * grossSalary;
            } else {
                pay = 0.35 * grossSalary;
            }
            return pay;
        }

        // Function to calculate NHIF deductions
        function NHIF() {
            let nhif;
            if (grossSalary <= 5999) {
                nhif = 150;
            } else if (grossSalary <= 7999) {
                nhif = 300;
            } else if (grossSalary <= 11999) {
                nhif = 400;
            } else if (grossSalary <= 14999) {
                nhif = 500;
            } else if (grossSalary <= 19999) {
                nhif = 600;
            } else if (grossSalary <= 24999) {
                nhif = 750;
            } else if (grossSalary <= 29999) {
                nhif = 850;
            } else if (grossSalary <= 34999) {
                nhif = 900;
            } else if (grossSalary <= 39999) {
                nhif = 950;
            } else if (grossSalary <= 44999) {
                nhif = 1000;
            } else if (grossSalary <= 49999) {
                nhif = 1100;
            } else if (grossSalary <= 59999) {
                nhif = 1200;
            } else if (grossSalary <= 69999) {
                nhif = 1300;
            } else if (grossSalary <= 79999) {
                nhif = 1400;
            } else if (grossSalary <= 89999) {
                nhif = 1500;
            } else if (grossSalary <= 99999) {
                nhif = 1600;
            } else {
                nhif = 1700;
            }
            return nhif;
        }

        // Function to calculate NSSF deductions
        function NSSF() {
            let nssf = 0.06 * grossSalary;
            return nssf;
        }

        // Calculate deductions and net salary
        let PaYee = payee();
        let NhIf = NHIF();
        let NsSf = NSSF();

        // Calculate net salary
        let netSalary = grossSalary - (PaYee + NhIf + NsSf);

        // Output the net salary
        console.log("Net Salary: ", netSalary);

        // Close the readline interface
        rl.close();
    });
});