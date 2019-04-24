# Weekend Challenge 1: Salary Calculator
Create an application that records employee salaries and adds salaries up to report monthly costs. 


## Assignment

[x]The application should have an input form that collects _employee first name, last name, ID number, job title, annual salary_.

[x]A 'Submit' button should collect the form information,[x] store the information to calculate monthly costs,[x] append information to the DOM and clear the input fields.  [x]Using the stored information, [x]calculate monthly costs and append this to the to DOM. [x]If the total monthly cost exceeds $20,000, [x]add a red background color to the total monthly cost.

[x]Create a delete button that removes an employee from the DOM. For Base mode, it does **not** need to remove that Employee's salary from the reported total.

### Files Provided
No files have been provided. Fork and clone this repository or create a new GitHub repository to get started. Make sure to commit regularily!

### Wireframe

![Wireframe](salary-calc-wireframe.png)

## Stretch Mode

Create an `Employee` class to store the information about each new employee in an Array.

Add styling or extra functionality that fits with the theme of this assignment.

Once the employee is deleted, update the total spend on salaries account for this employee's removal. This will require that the logic knows which element was removed. You will need to use `.text()` as a getter or look into jQuery's `.data()` function. This is tricky! 

## Reminder About Modes

Above, we introduced the concept of levels of difficulty. "Mode" is how we will typically refer to each level. Below is a brief explanation of

* what to expect when attempting each mode
* if they are required or not

Mode | Description
--- | ---
Base | required
Stretch | optional, stretches your understanding and may require additional research


