function calculateGrade() {
    let marks = 70;
   
    if (marks < 0 || marks > 100) {
        console.log("Error! Please enter a valid number between 0 and 100.");
        return; 
    }
    console.log("Valid marks entered.");
    
    let grade;
    if (marks >= 80) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }
    
    // Message Output
    console.log(`Scored ${marks} and received grade ${grade}`);
}


// Call the function
calculateGrade();