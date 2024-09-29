function NetSalaryCalculator() {
    const basicSalary = parseInt(document.getElementById("basic-salary").value);
    const benefits = parseInt(document.getElementById("benefits").value);
    const grossSalary = basicSalary + benefits;

    // PAYE tax brackets (July 2023)
    const taxBrackets = [
        { upperLimit: 24000, rate: 0.10 },
        { upperLimit: 32333, rate: 0.25 },
        { upperLimit: 500000, rate: 0.30 },
        { upperLimit: 800000, rate: 0.325 },
        { upperLimit: Infinity, rate: 0.35 }
    ];

    // PAYE Calculation
    let payee = 0;
    let remainingSalary = grossSalary;
    for (let i = 0; i < taxBrackets.length; i++) {
        const bracket = taxBrackets[i];
        if (remainingSalary > bracket.upperLimit) {
            payee += bracket.upperLimit * bracket.rate;
            remainingSalary -= bracket.upperLimit;
        } else {
            payee += remainingSalary * bracket.rate;
            break;
        }
    }

    // NHIF rates (2024)
    const nhifRates = [
        { upperLimit: 5999, deduction: 150 },
        { upperLimit: 7999, deduction: 300 },
        { upperLimit: 11999, deduction: 400 },
        { upperLimit: 14999, deduction: 500 },
        { upperLimit: 19999, deduction: 600 },
        { upperLimit: 24999, deduction: 750 },
        { upperLimit: 29999, deduction: 850 },
        { upperLimit: 34999, deduction: 900 },
        { upperLimit: 39999, deduction: 950 },
        { upperLimit: 44999, deduction: 1000 },
        { upperLimit: 49999, deduction: 1100 },
        { upperLimit: 59999, deduction: 1200 },
        { upperLimit: 69999, deduction: 1300 },
        { upperLimit: 79999, deduction: 1400 },
        { upperLimit: 89999, deduction: 1500 },
        { upperLimit: 99999, deduction: 1600 },
        { upperLimit: Infinity, deduction: 1700 }
    ];

    // NHIF Calculation
    let nhif = 0;
    for (let i = 0; i < nhifRates.length; i++) {
        if (grossSalary <= nhifRates[i].upperLimit) {
            nhif = nhifRates[i].deduction;
            break;
        }
    }

    // NSSF calculation (6% of basic salary and benefits, subject to limits)
    const tierI = Math.min(basicSalary, 7000) * 0.06;
    const tierII = Math.min(Math.max(basicSalary - 7000, 0), 29000) * 0.06;
    const nssf = tierI + tierII;

    // Housing Levy (1.5% of gross salary)
    const housingLevy = grossSalary * 0.015;

    // Net Salary Calculation
    const netSalary = grossSalary - (payee + nhif + nssf + housingLevy);

    const netSalaryResult = document.getElementById("net-salary-result");
    netSalaryResult.textContent = `Your net salary is Ksh ${netSalary.toFixed(2)}.`;
}

const calculateBtn = document.getElementById("calculate-btn");
calculateBtn.addEventListener("click", NetSalaryCalculator);