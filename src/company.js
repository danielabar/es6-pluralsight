import {Employee} from './employee';

export class Company {

  hire(...names) {
    this.employees = names.map( n => new Employee(n));
  }

  doWork() {
    // array comprehension
    return [for (e of this.employees) e.doWork()];
  }
}
