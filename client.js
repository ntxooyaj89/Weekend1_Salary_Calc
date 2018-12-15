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

const employees = [];

function readyNow() {
    console.log('JQ');
    $('#submitBtn').on('click', addEmployee);
}

function addEmployee() {

    const collectEmp = new Employees(
        $('#nameIn').val(),
        $('#lastNameIn').val(),
        $('#idIn').val(),
        $('#titleIn').val(),
        $('#annualSalaryIn').val(),
    )
    employees.push(collectEmp);
    console.log('this is employees', collectEmp);
    updateEmployees;
}

function updateEmployees(){

    
}


    // $('#empAppend').append(`<td>${name}</td>`);
    // $('#empAppend').append(`<td>${lastName}</td>`);
    // $('#empAppend').append(`<td>${id}</td>`);
    // $('#empAppend').append(`<td>${title}</td>`);
    // $('#empAppend').append(`<td>${salary}</td>`);








for (let i = 0; i < employees.length; i++) {
    console.log(employees[i]);
}