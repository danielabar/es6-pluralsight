describe('Template literals', () => {
  'use strict';

  it('Combine literals and data', () => {
    let doWork = function(name) {
      return `Hello, ${name}`;
    };

    let result = doWork('Scott');
    expect(result).toEqual('Hello, Scott');
  });

  it('Can help build URLs', () => {
    let category = 'music',
      id = 2122;

    let url = `http://apiserver/${category}/${id}`;

    expect(url).toEqual('http://apiserver/music/2122');
  });

  it('Can use tags', () => {
    // upper is a tag associated with a template,
    // this is a function invoked by the runtime
    // function invocation for template tag gets two parameters
    // 1) parsed template string: pieces of literal text in the template, chopped up in array
    //    such that substitutions are removed
    // 2) rest parameter: values being used inside the template
    let upper = function(strings, ...values) {
      let result = '';
      for(let i=0; i<strings.length; i++) {
        result += strings[i];
        if (i < values.length) {
          result += values[i];
        }
      }
      return result.toUpperCase();
    };

    let x = 1,
      y = 3;

    let result = upper `${x} + ${y} is ${x+y}`;

    expect(result).toEqual('1 + 3 IS 4');
  });
});
