export default class Employee {

  constructor(name) {
    this.name = name;
  }

  doWork() {
    return `${this.name} is working`;
  }

}
