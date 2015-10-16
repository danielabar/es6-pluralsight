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

});
