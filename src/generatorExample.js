export class Company {

  constructor() {
    this.employees = [];
  }

  addEmployees(...names) {
    this.employees = this.employees.concat(names);
  }

  *[Symbol.iterator]() {
    for(let e of this.employees) {
      yield e;
    }
  }
}
