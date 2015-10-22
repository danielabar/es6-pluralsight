// Use a Symbol to prevent direct modification of _name
let s_name = Symbol();

// export a class
export class Employee {

  constructor(name) {
    this[s_name] = name;
  }

  get name() {
    return this[s_name];
  }

  doWork() {
    return `${this.name} is working`;
  }

}

// export a function
export let empLogger = function(employee) {
  console.log(employee.name);
  return true;
};

// export a primitive
export let defaultRaise = 0.03;

// export an object
export let modelEmployee = new Employee('Allen');
