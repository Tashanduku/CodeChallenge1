function calculateNetSalary(basicSalary, benefits) {
   
    const grossSalary = basicSalary + benefits;

    // PAYE (Income Tax) 
    function calculatePayee(grossSalary) {
        let tax;
        if (grossSalary <= 24000) {
            tax = grossSalary * 0.1; // 10%
        } 
        else if (grossSalary <= 32333) {
            tax = 2400 + (grossSalary - 24000) * 0.25; // 25% 
        } 
        else if (grossSalary <= 500000) {
            tax = 2400 + 2083.25 + ((grossSalary - 32333) * 0.3); //30%
        } 
        else if (grossSalary <= 800000) {
            tax = 2400 + 2083.25 + 140000 + ((salary - 500000) * 0.325); //32.5%
        }
        else {
            tax = 2400 + 2083.25 + 140000 + 97500 + ((salary - 800000) * 0.35); //35%
        }
       
        return tax;
    }

    // NHIF deductions
    function calculateNHIF(grossSalary) {
        if (grossSalary <= 5999) return 150;
        else if (grossSalary <= 7999) return 300;
        else if (grossSalary <= 11999) return 400;
        else if (grossSalary <= 14999) return 500;
        else if (grossSalary <= 19999) return 600;
        else if (grossSalary <= 24999) return 750;
        else if (grossSalary <= 29999) return 850;
        else if (grossSalary <= 34999) return 900;
        else if (grossSalary <= 39999) return 950;
        else if (grossSalary <= 44999) return 1000;
        else if (grossSalary <= 49999) return 1100;
        else if (grossSalary <= 59999) return 1200;
        else if (grossSalary <= 69999) return 1300;
        else if (grossSalary <= 79999) return 1400;
        else if (grossSalary <= 89999) return 1500;
        else if (grossSalary <= 99999) return 1600;
        else return 1700;
    }

    // NSSF deduction 
    function calculateNSSF(grossSalary) {
        let nssfDeduction = 0;
    
        // Tier I: Up to 7,000
        const tierOneAmount = Math.min(grossSalary, 7000);
        nssfDeduction = tierOneAmount * 0.06;
    
        // Tier II: 7,001 to 36,000
        if (grossSalary > 7000) {
            const tierTwoAmount = Math.min(grossSalary - 7000, 36000 - 7000);
            nssfDeduction += tierTwoAmount * 0.06;
        }
    
        return nssfDeduction;
    }
    

    // declaring the variables
    const payee = calculatePayee(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);

    // Calculate net salary
    const netSalary = grossSalary - (payee + nhif + nssf);

    // Display calculations
    console.log("Basic Salary: " + basicSalary);
    console.log("Benefits: " + benefits);
    console.log("Gross Salary: " + grossSalary);
    console.log("PAYE (Tax): " + payee);
    console.log("NHIF Deduction: " + nhif);
    console.log("NSSF Deduction: " + nssf);
    console.log("Net Salary: " + netSalary);

    return {
        grossSalary,
        payee,
        nhif,
        nssf,
        netSalary
    };
}


calculateNetSalary(50000, 10000);
