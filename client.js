$(document).ready(readyNow);

class Employees {
    constructor(name, lastName, id, title, annualSalary) {
        this.name = name;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary

    }
}

let employees = [];
let costTotal = 0;

function readyNow() {
    console.log('JQ');
    $('#submitBtn').on('click', addEmployee);
}

function addEmployee() {

    let collectEmp = new Employees(

        $('#nameIn').val(),
        $('#lastNameIn').val(),
        $('#idIn').val(),
        $('#titleIn').val(),
        $('#annualSalaryIn').val(),
    )
    employees.push(collectEmp);
    console.log('this is employees', collectEmp);
    updateEmployees(employees);
}

function updateEmployees(arr) {

    $('#nameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#annualSalaryIn').val('');

    let el = $('#empAppend');
    el.empty();
    
    // this loop through the array and append the employees name to DOM
    for (let i = 0; i < arr.length; i++) {
        console.log('this is update employees', arr[i]);
        let employeesName = `<tr>
         <td>${arr[i].name}</td>,
         <td>${arr[i].lastName}</td>, 
         <td>${arr[i].id}</td>,
         <td>${arr[i].title}</td>,
         <td>${arr[i].annualSalary}</td>
         </tr>`;
        el.append(employeesName);
        costTotal += Number(arr[i].annualSalary);
        costCal(costTotal)

    }

    function costCal(total) {
        
        // this calculate the monthly cost and append to DOM
        let totalCost = total / 12;
        $('#costIn').html('<h4>Monthly total: ' + ' $ ' + Number(totalCost.toFixed(2)) + '</h4>');
        if (totalCost > 20000) {
            // this turn background-color to red if exceed over $20,000
            $('#costIn').css('background-color', 'red')
        }


    }


}










for (let i = 0; i < employees.length; i++) {
    console.log(employees[i]);
}