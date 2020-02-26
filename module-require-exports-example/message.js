// module.exports.sayHi = ()=> {
//     return "Hello";
// };
// module.exports.sayBy = ()=> {
//     return "Good bye";
// };
// const validatonRules = {
//     email: /[0-9]/,
//     name: /[a-z]{2}/
// }

const person = {
    birthday: "20.01.1990",
    getAge(){
        const [dayBith, monthBith, yearBith] = this.birthday.split(".");
        const now = new Date();
        let age = now.getFullYear() - yearBith;
        return age;
    }
}

const nowGrinvith = new Date("настройки по гринвичу");
const now = new Date();
const diffrerent = now - nowGrinvith;

module.exports = diffrerent;

// module.exports.goodbyeMessage = "Bye bye!";