//***************************    Task 1   ***************************** */
// const http = require('http');
// const os = require('os');
// const path = require('path');
// http.createServer(function (request, response) {
//     response.writeHead(200, { 'Content-Type': 'text/html' });
//     response.end(`<h1>System infromation</h1>
//     Current user name: ${os.userInfo().username}<br>
//     OS type: ${os.type}<br>
//     System work time: ${Math.round(os.uptime() / 60)} minutes<br>
//     Current work directory: ${path.dirname('C:\\Users\\Dima\\Documents\\GitHub\\javascript-core\\module_11')}<br>
//     Server file name: ${path.basename('C:\\Users\\Dima\\Documents\\GitHub\\javascript-core\\module_11\\module11.js')}`);
// }).listen(5000);

//***************************    Task 2   ***************************** */
const http = require('http');
const os = require('os');
const greet = require('C:\\Users\\Дима\\Documents\\GitHub\\javascript-core\\module_11\\personalmodule');
http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(greet.greetUser(os.userInfo().username));
}).listen(5000);


