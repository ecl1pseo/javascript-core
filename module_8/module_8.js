//*****************************   Task 1  ********************************** */
function upperCase(str) {
    let regexp1 = /^[A-Z]/;
    if (regexp1.test(str)) {
        console.log("String's starts with uppercase character ");
    }
    else {
        console.log("String's not starts with uppercase character");
    }
}
upperCase('java');
upperCase('JavaScript');

//*****************************   Task 2  ********************************** */
// function checkEmail(str) {
//     let regexp1 = /\w+@\S+\.\S+/;
//     console.log(regexp1.test(str));
// }
// checkEmail("Qmail2@gmail.com");
// checkEmail("Qmail2gmail.com");
// checkEmail("Qmail2@gmailcom");

//*****************************   Task 3 ********************************** */
// let regExp = [/d[bB]+d/g, /(?<=d)[bB]+(?=d)/g, /(?<=d[bB]+)d/g];
// let result = [];
// for (i = 0; i < regExp.length; i++) {
//     result.push('cdbBdbsbz'.match(regExp[i]));
// }
// console.log('Для стрінги "cdbBdbsbz" результат: ' + result);

//*****************************   Task 4 ********************************** */
// let regExp = /([A-Za-z]+)\s([A-Za-z]+)/;
// let str = 'Java Script';
// let result = str.replace(regExp, '$2, $1');
// console.log(result);

//*****************************   Task 5 ********************************** */
// function checkBankCard(str) {
//     let regExp = /^\d{4}-\d{4}-\d{4}-\d{4}\b/;
//     let result = regExp.test(str);
//     if (result) {
//         console.log("Validation successful");
//     } else {
//         console.log("Please, try again. Incorrect data input!");
//     }
// }
// checkBankCard('2543-6557-4355-7865');
// checkBankCard('5423d-6575-4355-7865');
// checkBankCard('5423-6575-4355-78658');

//*****************************   Task 6 ********************************** */
// function checkEmail(str) {
//     var re = /^[^\W_]+(\w+)?(\-)?\w+(@gmail\.com)$/;
//     let check = re.test(str);
//     if (check) {
//         console.log("Email is correct!")
//     } else {
//         console.log("Email is not correct!")
//     }
// }

// checkEmail('my__mail@gmail.com');
// checkEmail('$my_mail@gmail.com');
// checkEmail('my-mail@gmail.com');
// checkEmail('my--mail@gmail.com');



//*****************************   Task 7 ********************************** */
// function checkLogin(str) {
//     let regExp = /^[^\d][a-z0-9\.]{0,8}[a-z0-9\.]$/;
//     let result = regExp.test(str);
//     console.log(result);
//     regExp = /\d+\.?\d*/g;
//     result = str.match(regExp);
//     console.log(`${result}`);
// }
// checkLogin('ee1.1ret3');
// checkLogin('ee1*1ret3');
// checkLogin('ee');
// checkLogin('ee154*165ret3.5fgdfg');


