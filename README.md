# **Toy Problems: JavaScript Challenges**

This repository contains solutions to three code challenges 

---

## **Challenge 1: Student Grade Generator**
### **Description**
Write a function that:
- Prompts the user to input student marks.
- Ensures the input is between **0 and 100**.
- Outputs the corresponding grade based on the following criteria:
  - **A**: Marks greater than 79
  - **B**: Marks between 60 and 79
  - **C**: Marks between 50 and 59
  - **D**: Marks between 40 and 49
  - **E**: Marks below 40

### **Example**
Input: `70`  
Output: `Grade: B`

---

## **Challenge 2: Speed Detector**
### **Description**
Write a program that:
- Accepts the speed of a car as input.
- Prints `"Ok"` if the speed is less than or equal to **70**.
- For every **5 km/s** above the speed limit of **70**, it gives the driver **1 demerit point**.
- Prints the total number of demerit points.
- If the driver accumulates more than **12 demerit points**, prints `"License suspended"`.

### **Example**
Input: `80`  
Output: `Points: 2`

Input: `150`  
Output: `Points: 16`
`License suspended`

---

## **Challenge 3: Net Salary Calculator**
### **Description**
Write a program to calculate an individual’s net salary. The program should:
1. Accept inputs for **basic salary** and **benefits**.
2. Calculate:
   - **PAYE (Tax)**: Using the KRA tax brackets.
   - **NHIF deductions**: Based on gross salary.
   - **NSSF deductions**: 6% of gross salary capped at KES 1080.
   - **Gross salary**: Sum of basic salary and benefits.
   - **Net salary**: Gross salary minus all deductions.
3. Use KRA, NHIF, and NSSF values provided on the [official tax rate page](https://www.aren.co.ke/payroll/taxrates.htm).

### **Example**
Input:  
- Basic Salary: `50,000`  
- Benefits: `10,000`

Output:  
- Gross Salary: `60,000`  
- PAYE: `10,733`  
- NHIF: `1,200`  
- NSSF: `1,080`  
- Net Salary: `47,987`

---
