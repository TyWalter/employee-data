// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn'); 

// creates a blank array of employees
let employeesArray = [];

// Collect employee data
const collectEmployees = function() {
// TODO: Get user input to create and return an array of employee objects

// sets confirmation to true for use in the while loops
  let addMore = true;


// while loop that uses prompts to enter employee information and loops if addMore is true
    while(addMore) {
      let addEmployee = {};
      addEmployee.firstName = prompt('Enter Employee First Name');
      addEmployee.lastName = prompt('Enter Employee Last Name');
      addEmployee.salary = parseInt(prompt('Enter Employee Salary'));
      employeesArray.push(addEmployee);
      addMore = confirm('Do you want to add more employees?');
    }

// displays employee array in console
  return employeesArray
};

// Display the average salary
const displayAverageSalary = function() {
// TODO: Calculate and display the average salary

// sets all salaries to 0 to begin with and iterates through adding each salary to totalSalary
  let totalSalary = 0;
  for(let i=0; i<employeesArray.length; i++){
    const obj=employeesArray[i];
    totalSalary += obj.salary;
  };


// averages out salaries and displays in the console
  const avgSalary = (`The average employee salary between our ${employeesArray.length} employee(s) is $${totalSalary / employeesArray.length}`);
  console.log(avgSalary);
}

// Select a random employee
const getRandomEmployee = function() {
  // TODO: Select and display a random employee

// chooses a random employee that has been added and displays it in the console
  const randomEmp = employeesArray[Math.floor(Math.random()*employeesArray.length)];
  console.log(`Congratulations to ${randomEmp.firstName} ${randomEmp.lastName}, our random drawing winner!`);
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
