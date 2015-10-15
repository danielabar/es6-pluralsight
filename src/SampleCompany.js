export class SampleCompany {

  constructor() {
    this.employees = [];
  }

  addEmployees(...names) {
    this.employees = this.employees.concat(names);
  }

  *[Symbol.iterator]() {
    for(let e of this.employees) {
      console.log(`=== SampleCompany class yielding: ${e}`);
      yield e;
    }
  }
}
