describe('Proxies', () => {

  it('can intercept get', () => {
    let unicorn = {
      legs: 4,
      color: 'brown',
      horn: true
    };

    // Proxy constructor takes target object,
    // and object literal representing which operations should be intercepted
    let proxyUnicorn = new Proxy(unicorn, {
      // get function takes target object, and string which is name of property being accessed
      get: function(target, property) {
        if(Object.is(property, 'color')) {
          return `awesome ${target[property]}`;
        } else {
          return target[property];
        }
      }
    });

    expect(proxyUnicorn.color).toEqual('awesome brown');
    expect(proxyUnicorn.legs).toEqual(4);
  });

  it('can intercept set', () => {
    let unicorn = {
      legs: 4,
      color: 'brown',
      horn: true
    };

    let proxyUnicorn = new Proxy(unicorn, {
      // use set interceptor to disallow setting 'horn' property to false
      set: function(target, property, value) {
        if(Object.is(property, 'horn') && value === false) {
          console.log('Unicorn cannot lose its horn!');
        } else {
          target[property] = value;
        }
        return true;
      }
    });

    proxyUnicorn.color = 'white';
    proxyUnicorn.horn = false;

    expect(proxyUnicorn.color).toEqual('white');
    expect(proxyUnicorn.horn).toBe(true);
  });

  it('can intercept function calls', () => {
    let unicorn = {
      legs: 4,
      color: 'brown',
      horn: true,
      hornAttack: function(target) {
        return `${target.name} was obliterated`;
      }
    };

    // to prevent theif from stealing (see below), create a proxy object around the hornAttack FUNCTION
    // (not a proxy around unicorn object, because functions are objects)
    unicorn.hornAttack = new Proxy(unicorn.hornAttack, {
      // target:  function itself (i.e. the original wrapped function)
      // context: object that is the current 'this' for the function invocation
      // args:    array of arguments to function
      apply: function(target, context, args) {
        // only allow unicorn as acceptable context
        if (context !== unicorn) {
          return 'Only unicorns can invoke hornAttack';
        } else {
          return target.apply(context, args);
        }
      }
    });

    // thief tries to steal functions from other objects
    let thief = {name: 'Robert'};
    thief.attack = unicorn.hornAttack;

    // invocation context is thief object
    let thiefAttempt = thief.attack();
    expect(thiefAttempt).toEqual('Only unicorns can invoke hornAttack');

    let unicornAttempt = unicorn.hornAttack(thief);
    expect(unicornAttempt).toEqual('Robert was obliterated');
  });

});
