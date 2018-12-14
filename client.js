$(document).ready(readyNow);

class Employees{
    constructor(name, lastName, id, title, annualSalary){
        this.name = name;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary

    }
} 

const jen = new Employees('Jen', 'Barber', '4521', 'team Lead', '80000')
const maurice = new Employees('Maurice', 'Moss', '8724', 'Support Team', '58000')
const roy = new Employees('Roy', 'Smith', '9623', 'Quality Assurance', '48000')

const employees = [jen, maurice, roy]

function readyNow(){
    console.log('JQ');
    $('#submitBtn').on('click', addEmployee);
}

for(let i = 0; i < employees.length; i++){
    console.log(employees[i]);
}

function addEmployee(){
    let name = $('#nameIn').val();
    console.log(name);
    let lastName = $('#lastNameIn').val();
    console.log(lastName)
    let id = $('#idIn').val();
    console.log(id)
    let title = $('#titleIn').val();
    console.log(title)
    let salary = $('#annualSalaryIn').val();
    console.log(salary)

    $('#empAppend').append(`<td>${name}</td>`);
    $('#empAppend').append(`<td>${lastName}</td>`);
    $('#empAppend').append(`<td>${id}</td>`);
    $('#empAppend').append(`<td>${title}</td>`);
    $('#empAppend').append(`<td>${salary}</td>`);


    
    
}



// $('#empAppend').append(`<tr>${employees[i].name}</tr>`)