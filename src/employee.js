// export a class
export class Employee {

  constructor(name) {
    this.name = name;
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
