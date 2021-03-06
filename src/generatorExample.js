export class Company {

  constructor() {
    this.employees = [];
  }

  addEmployees(...names) {
    this.employees = this.employees.concat(names);
  }

  *[Symbol.iterator]() {
    for(let e of this.employees) {
      // console.log(`=== Company class yielding: ${e}`);
      yield e;
    }
  }
}
