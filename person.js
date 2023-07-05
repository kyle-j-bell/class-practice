//Defines a Person class with firstName, lastName, and age instance variables.
class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  //An instance method that prints a simple string "introducing" the Person object calling it.
  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`);
  }

  //A static mmethod that checks if person is an Array and if each element is an instance of the Person class, then calls the introduce method on each element of person.
  //An error is thrown is person is not an Array, or if an element is not an instance of Person.
  static introducePeople(person) {
    if (!Array.isArray(person)) {
      throw new Error("introducePeople only takes an array as an argument.");
    }
    if (!person.every(person => person instanceof Person)) {
      throw new Error("All items in array must be Person class instances.");
    }
    else {
      person.forEach(person => person.introduce());
    }
  }
}


/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
