const userName = prompt('Enter your name', '')

/* Task 1 */
let obj = {
  name: "John",
  lastName: "Wick",
  profession: "killer"
};

/* Task 2 */
obj.country = 'USA'
obj.nickname = 'Baba Yaga'

/* Task 3 */
obj.greetings = function (name) {
  return (`Hi, ${name}`)
}

obj.greetings(userName)


obj.information = function () {
  return (`My name's ${this.name}`)
}

/* Task 4 */

function allObj(obj) {
  let result = '';
  for (let key in obj) {
    if (typeof obj[key] !== 'function') {
      result += `${key}: ${obj[key]}. \n`;
    }
  }
  console.log(result);
}
allObj(obj);


/* Task 5 */

const objToCheck = {
  name: 'Luis',
  age: 42,

};

function objCheck(obj) {
  for (let key in obj) {
    if (obj[key] !== null && typeof obj[key] === 'object') {
      return true;
    }
  }
  return false;
}

console.log(objCheck(objToCheck));
