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

  it('has getters and setters', () => {
    class Employee {
      constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
      }

      // getter function must return something, but can also execute any other code
      // such as transforming the value, logging, etc.
      get firstName() {
        return this._firstName.toUpperCase();
      }

      // a computed property
      get fullName() {
        return `${this._firstName} ${this._lastName}`;
      }

      // setter function
      set lastName(newValue) {
        if(newValue != null && newValue.length > 1) {
          this._lastName = newValue;
        } else {
          throw new Error('Last name must be at least one character long');
        }
      }
    }

    let e1 = new Employee('Joe', 'Schmoe');
    let e2 = new Employee('Alex', 'Smith');

    // fullName and firstName are getter function but client can invoke them as property of object
    expect(e1.fullName).toEqual('Joe Schmoe');
    expect(e2.fullName).toEqual('Alex Smith');
    expect(e1.firstName).toEqual('JOE');
    expect(e2.firstName).toEqual('ALEX');

    // setter with valid data
    e1.lastName = 'Schmoe-Foo';
    expect(e1.fullName).toEqual('Joe Schmoe-Foo');

    // setter with invalid data
    try {
      e1.lastName = '';
    } catch (e) {
      expect(e.message).toEqual('Last name must be at least one character long');
    }
  });

});
