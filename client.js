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
         <td><button id="deleteBtn">Delete</button></td>
         </tr>`;
        el.append(employeesName);
        costTotal += Number(arr[i].annualSalary);
        // this looks at the #empAppend id and on click
        // on the button with the id= #deleteBtn runs function deleteEmp.
        $('#empAppend').on('click', '#deleteBtn', deleteEmp);
        costCal(costTotal)

    }
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

    function deleteEmp(){

        console.log(this);
        // "this" is now on the delete button inside the table
        // and it delete the parent().parent() which is the <td></td> 
        // where the employees names etc... lives
        $(this).parent().parent().remove();
    }













