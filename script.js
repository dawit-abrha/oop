

// exercise 1-2
class Person{
    constructor(name ,age){
        this.name = name;
        this.age = age

    }
    introduce(){
         return `Hi,my name is ${this.name} and I am ${this.age} years old`;
    }
}
let Person1 = new Person('dawit' , 25)
function describePerson(callback) {
     callback.call(this);
}
function callbackFunction() {
    console.log(this.introduce());
  }
  describePerson.call(Person1, callbackFunction);

// exercise 3
  function wait(ms) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(`Waited for ${ms} milliseconds`);
      }, ms);
    });
  }
  wait(2000) 
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.error("An error occurred:", error);
    });