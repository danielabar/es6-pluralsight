describe('the class keyword', () => {

  it('creates a class', () => {
    class Employee {
      doWork() {
        return 'complete';
      }
      getName() {
        return 'Scott';
      }
    }
    let e = new Employee();
    expect(e.doWork()).toEqual('complete');
    expect(e.getName()).toEqual('Scott');
  });

  it('has a constructor', () => {
    class Employee {
      constructor(name) {
        this._name = name;
      }
      getName() {
        return this._name;
      }
    }

    let e1 = new Employee('Joe');
    let e2 = new Employee('Alex');
    expect(e1.getName()).toEqual('Joe');
    expect(e2.getName()).toEqual('Alex');
  });

});
