// //Task 1
// function testThrow(err) {
//     try {
//         throw err;
//     }
//     catch (err) {
//         console.log(`${err}`);
//     }
// }
// testThrow(5);
// testThrow('Test');
// testThrow(new Error('An error happened'));

// //Task 2
// function calcRectangleArea(width, height) {
//     if (typeof width === 'number' && typeof height === 'number') {
//         return width * height;
//     }
//     else {
//         throw new TypeError('Width and height must be numbers');
//     }
// }

// try {
//     console.log(calcRectangleArea(5, 4));
//     console.log(calcRectangleArea(7, 10));
//     console.log(calcRectangleArea(true, false));
// }
// catch (error) {
//     console.log(`${error.name}: ${error.message}`);
// }

// //Task 3
// function checkAge() {
//     let userAge = +prompt('Enter your age. You should be 14 years old or older!');
//     if (userAge == " ") {
//         throw new ReferenceError('The field is empty! Please try again');
//     }
//     else if (userAge < 14) {
//         throw new RangeError('You should be 14 years old or older!');
//     }
//     else if (userAge >= 14) {
//         alert('OK. You have access now to watch this film');
//     }
//     else {
//         throw new TypeError('Must be a number');
//     }
// }

// try {
//     checkAge();
// }
// catch (error) {
//     alert(`${error.name}: ${error.message}`);
// }

// //Task 4
// const monthOrder = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
//     'August', 'September', 'October', 'November', 'December'];

// class MonthException {
//     constructor(message) {
//         this.name = 'MonthExcpetion';
//         this.message = message;
//     }
// }

// function showMonthName(month) {
//     month = month - 1;
//     try {
//         if (monthOrder[month] !== undefined) {
//             return monthOrder[month];
//         }
//         else {
//             throw new MonthException('Incorrect month number');
//         }
//     }
//     catch (error) {
//         console.log(`${error.name}: ${error.message}`);
//     }
// }

// console.log(showMonthName(5));
// console.log(showMonthName(14));

//Task 5
function showUser(id) {
    if (id >= 0) {
        return { id };
    }
    else {
        throw new Error(`ID must not be negative: ${id}`);
    }
}

function showUsers(ids) {
    let checkedIds = [];
    ids.forEach(id => {
        try {
            checkedIds.push(showUser(id));
        }
        catch (error) {
            console.log(`${error.name}: ${error.message}`);
        }
    });
    return checkedIds;
}

console.log(showUsers([7, -12, 44, 22]));




