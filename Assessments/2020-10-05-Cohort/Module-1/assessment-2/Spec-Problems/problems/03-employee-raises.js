/*******************************************************************************

Your company is giving every employee earning less than $50,000 a 10% raise!

Write a function `employeeRaises(peopleObj)` that takes an array of objects
containing employee names and their salaries and returns an array containing
the employees that need raises, along with their new salaries.

Hint: It might be useful to create helper functions for this task.

Example:

*******************************************************************************/

let needRaises = function(num){
    if (num < 50,000) {
        let raise = num * .1;
    }
    return raise;
}

function employeeRaises(employees) {
    let newRaise = [];

    for (let i = 0; i < employees.length; i++){
        for (let keys in employees[i]) {
            let employee = employees[i][keys];
            console.log(employee);
        }
    }
}

employees = [{name: "Alice", salary: 80000},
             {name: "Bob", salary: 40000},
             {name: "Carol", salary: 60000},
             {name: "Dan", salary: 70000},
             {name: "Ellen", salary: 100000}]

console.log(employeeRaises(employees)); // [ { name: 'Bob', salary: 44000 } ]


/*****************DO NOT MODIFY ANYTHING UNDER THIS LINE**********************/
module.exports = employeeRaises;
