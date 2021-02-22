/*******************************************************************************
Your company is giving every employee earning less than $50,000 a 10% raise!

Write a function `employeeRaises(peopleObj)` that takes an array of objects
containing employee names and their salaries and returns an array containing
the employees that need raises, along with their new salaries.

Hint: It might be useful to create helper functions for this task.

Example:
*******************************************************************************/

// P A R T   1
// takes in an array (of objects) 
// create empty array
// iterate through given array
  // if employee makes < 50,000, add them to array

// P A R T   2 
// iterate through array using map (will create a new array)
  // pull the employee's salary
  // multiple by 1.1 (110%, or a 10% increase)
  // reassign the value 
  // return the object (which will add to the array created by map)
// return the array created by map

function employeeRaises(employees) {
  let needRaise = [];
  employees.forEach(person => {
    if (person.salary < 50000) {
      needRaise.push(person);
    }
  });
//   console.log(needRaise); // should add Bob's stats
  let raised = needRaise.map(person => {
      person.salary *= 1.1; // reassigning the value of their salary to a raised amount
      return person;
  });
  return raised;
}

employees = [{ name: "Alice", salary: 80000 },
{ name: "Bob", salary: 40000 },
{ name: "Carol", salary: 60000 },
{ name: "Dan", salary: 70000 },
{ name: "Ellen", salary: 100000 }]

console.log(employeeRaises(employees)); // [ { name: 'Bob', salary: 44000 } ]


/*****************DO NOT MODIFY ANYTHING UNDER THIS LINE**********************/
module.exports = employeeRaises;
