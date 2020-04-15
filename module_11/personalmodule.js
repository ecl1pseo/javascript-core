function greetUser(username) {
    let date = new Date()
    let currentHour = date.getHours();
    let currentDate = `${date.toString()}`;
    if (currentHour >= 23 && currentHour <= 5) {
        return (`${currentDate}<br>Good night, ${username}!`);
    }
    else if (currentHour > 5 && currentHour <= 11) {
        return (`${currentDate}<br>Good morning, ${username}!`);
    }
    else if (currentHour > 11 && currentHour <= 17) {
        return (`${currentDate}<br>Good afternoon, ${username}!`);
    }
    else if (currentHour > 17 && currentHour < 23) {
        return (`${currentDate}<br>Good evening, ${username}!`);
    }
}
console.log(greetUser('Dima'));
module.exports.greetUser = greetUser;