<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](http://doctoc.herokuapp.com/)*

- [Learning ES6 with Pluralsight](#learning-es6-with-pluralsight)
  - [Setup](#setup)
  - [Variables and Parameters](#variables-and-parameters)
    - [Destructuring](#destructuring)
    - [Default Parameter Values](#default-parameter-values)
    - [Rest Parameters](#rest-parameters)
    - [Spread Operator](#spread-operator)
    - [Template Literals](#template-literals)
  - [Classes](#classes)
    - [Class Versus Prototype](#class-versus-prototype)
    - [Constructor](#constructor)
  - [Functional Programming](#functional-programming)
    - [Arrow Functions](#arrow-functions)
    - [Iterables and Iterators](#iterables-and-iterators)
    - [for of](#for-of)
    - [Generators](#generators)
    - [Comprehensions](#comprehensions)
      - [Array Comprehensions](#array-comprehensions)
      - [Generator Comprehension](#generator-comprehension)
  - [Built-In Objects](#built-in-objects)
    - [Numbers](#numbers)
    - [Math](#math)
    - [Arrays](#arrays)
  - [Asynchronous Development](#asynchronous-development)
    - [Promises](#promises)
    - [Generators](#generators-1)
  - [Objects](#objects)
    - [Proxies](#proxies)
  - [Modules](#modules)
    - [IIFE](#iife)
    - [CommonJS](#commonjs)
    - [AMD](#amd)
    - [ES6 Modules](#es6-modules)
      - [Default](#default)
      - [Information Hiding](#information-hiding)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Learning ES6 with Pluralsight

Notes and code examples written in ES6, from [JavaScript Fundamentals for ES6](http://www.pluralsight.com/courses/javascript-fundamentals-es6)

## Setup

This project is setup to use Babel, JSPM and SystemJS, with Karma and Gulp to run the tests.

To run the code examples, clone this repo, then `cd` into project directory and:

```
npm install
jspm install
npm install -g gulp-cli
gulp tdd
```

## Variables and Parameters

### Destructuring

[Examples](test/destructuringSpec.js)

Operation for assigning values to a _set_ of variables.

### Default Parameter Values

[Examples](test/defaultParamsSpec.js)

To solve the problem of not enough parameters provided to a function.
ES5 solution was:

```javascript
var doWork = function(name) {
  name = name || 'Scott';
  // do something with name...
};
```

In ES6, can have an expression as a parameter to provide a default value:

```javascript
let doWork = function(name='Scott') {
  // do something with name...
};
```

The default assignment will only be applied if no value is supplied or explicitly `undefined`.

### Rest Parameters

[Examples](test/restParameterSpec.js)

Make it easy to work with a variable or unknown number of arguments in a function.

For example, to write a sum function, want to allow caller to provide as many or as little arguments
representing the numbers to be summed.

ES5 solution was to use implicit `arguments` object,
which holds all of the arguments passed to a function in an array-like structure.
Problem with `arguments` is it looks like an array but isn't truly an array.

ES6 solution is to use REST parameter syntax. Rest parameter is always the last parameter in a function,
and will have `...` prefix. The values will be packaged into a true array object.

### Spread Operator

[Examples](test/spreadOperatorSpec.js)

Similar to rest parameters in that the spread operator also uses `...`,
but when used outside of a function argument list, it means "spread" an array across individual parameters.

### Template Literals

[Examples](test/templateLiteralSpec.js)

Can be used to replace string concatenation. For example, instead of this:

```javascript
let category = 'music';
let id = 2122;

let url = 'http://apiserver/' + category + '/' + id;
```

Use a template literal, note use of backticks instead of quotes:

```javascript
let url = `http://apiserver/${category}/${id}`;
```

_Substitution placeholders_ are identified with dollar sign and curly braces wrapping a variable name.

## Classes

[Examples](test/classSpec.js)

`class` keyword brings vocabulary of object oriented programming to JavaScript.

`class` keyword creates a class definition, which is a _blueprint_ which can be used for
creating objects, i.e. _instantiation_.

### Class Versus Prototype

Class is using Prototype behind the scenes:

```javascript
// constructor is capitalized by convention
var Employee = function() {
  // this.whatever = ...
}

// every object instatiated with Employee constructor will SHARE this function implementation
Employee.prototype.doWork  = function() {
  // implementation...
}

// sample usage
var e = new Employee();
e.doWork();
```

Equivalent using ES6 class:

```javascript
class Employee {
  doWork() {
    // implementation
  }
}
```

### Constructor

Managing state persistently requires initialization logic for an object,
this can be implemented in `constructor`. This is a class member and a functin.
It's automatically invoked on `new`.

Inside constructor, implicit `this` refers to the object being constructed.

```javascript
class Employee {
  constructor() {

  }
  // ... other functions, getters and setters
}
```

### Getters and Setters

Use `get` and `set` keywords to provide encapsulation for object data.

These keywords bind a property of an object to a function.
A getter function will return a value and a setter function will take a parameter
and use that to set some data in an object.

This means that you can have code execute whenever the caller is reading or writing a prpoerty on an object.
Indirection supports dynamic computed values, running validation logic, etc.

```javascript
class Employee {
  get name() {
    return this._name;
  }
  set name(newValue) {
    this._name = newValue;
  }
}
```

## Functional Programming

### Arrow Functions

[Examples](test/arrowFunctionSpec.js)

Concise syntax for defining a block of executable code. Simple example:

```javascript
let add = (x,y) => x + y;
expect(add(3,5)).toEqual(8);
```

The left hand side of arrow specifies the function parameters.
Parameters are surrounded by parenthesis, if have more than one.

The right hand side of arrow is the function body. This will be executed when function is invoked.
Note no need for curly braces, `function` keyword, or `return` statement.

Arrow functions always capture the `this` value of the context they are inside.
i.e. arrow functions _lexically bind to this_.

### Iterables and Iterators

[Examples](test/iteratorSpec.js)

An _iterable_ is an object that holds a collection of items (in the abstract sense, any sequence of objects,
such as array, map, tree etc).

If an object that holds a collection is iterable, then an _iterator_ can be retrieved from it.
An iterator supports walking through the collection one item at a time, using the `next()` method.

Next returns an object representing the next item in the collection. This object has a `value` and boolean `done` properties. Done is true when there are no more items in the collection.

Iterator can only be used to go one item at a time, doesn't have features such as length property.
Iterators are lazy.

### for of

JavaScript has always had `for...in` loop, which works by enumerating the properties of an object.
It can be used on arrays (enumerates array index) or objects (enumerates object keys).

`for of` is a new looping syntax supports iterating over _values_, and not having to
worry about the keys or indexes.

```javascript
let numbers = [1, 2, 3, 4];
for(let i of numbers) {
  console.log(i);
}
```

`for of` is compatible with iterators. Behind the scenes it can call the `next` method and check
the done flag to determine if iteration is complete. It uses `Symbol.iterator` property of object to do so.

### Generators

[Simple Examples](test/generatorSpec.js)
[Functional Examples](test/generatorFunctionalSpec.js)

A generator function is a function that generates an iterator. Uses the `yield` keywrod
and special `function*` syntax.

```javascript
let numbers = function*() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}
```

Instead of using `return` keyword to return a single value, a generator function can use `yield`,
to return multiple values.

Each time a generator uses `yield`, it _yields_ the thread of execution back to the caller.
Value is returned to caller with yield _immediately_. Caller can do whatever it needs to with result.
Then when caller asks generator for next value, thread of execution returns to generator function,
and it continues where it left off.

Generator functions _suspend_ execution when they yield, then _resume_ later when caller tries to get next value.

Iterators and generators support building functions that _compose_ together.
i.e. functions that take in other functions as arguments.

Generator function exhibits _lazy evaluation_, which is very useful for functional programming.
For example, to filter a collection...

### Comprehensions

[Examples](test/comprehensionSpec.js)

Comprehensions are a compact and declarative syntax for building arrays and generators.

#### Array Comprehensions

Array comprehension are expressions built inside of square brackets:

```javascript
var numbers = [for (n of [1, 2, 3]) n * n];
expect(numbers).toEqual([1, 4, 9]);
```

Looks like `for of` statment. Variable `n` represents each item from some collection.
In above example, collection is array literal `[1, 2, 3]`, but it could be any iterable object.

`let` keyword is not needed when defining variable `n` because it's implied.
`n` is scoped to the inside of the comprehension expression.

After the `for of` is the value that should be computed for each `n`, in above example, `n * n`.

The example above is equivalent to writing this for loop:

```javascript
let numbers = [];
for (let n of [1,2,3]) {
  numbers.push(n * n);
}
expect(numbers).toEqual([1, 4, 9]);
```

A _predicate_ can be used to filter values:

```javascript
var numbers = [for (n of [1, 2, 3]) if(n > 1) n * n];
expect(numbers).toEqual([4, 9]);
```

Array comprehension is _greedy_. It will immediately build the entire array as a concrete data structure.

#### Generator Comprehension

Generator comprehension uses parentheses instead of square brackets.

In the example below, numbers2 is NOT an array, its a generator that allows us to evaluate lazily.

```javascript
var numbers2 = (for (n of [1,2,3]) n * n);
expect(Array.from(numbers2)).toEqual([1,4,9]);
```

A lot of `for of` statements are candidates for being re-written in the comprehension syntax.

## Built-In Objects

### Numbers

[Examples](test/numbersSpec.js)

All numbers in JavaScript are stored in the `Number` type, but several different literal notations are available:

* decimal: `var myDecimal = 10;`
* hexadecimal (leading `0x`): `var myHex = 0xa;`
* octal (leading `0`): `var myOct = 071;`

New to ES6:

* octal literal (leading `0o`): `var myOct = 0o71;`
* binary literal (leading `0b`): 'var myBin = 0b1101;'

### Math

[Examples](test/mathSpec.js)

Several new trigonometry functions are available on `Math` object.
And also several new miscellaneous functions including cube root,

`clz32`, number of leading zeroes in a 32 bit representation of the number,

`log1p`, natural logarithm of the number plus 1,

`hypot` (hypotenuse) takes variable number of arguments and returns the square
root of the sum of the squares of the arguments,

`fround` takes a decimal number and returns the closest value that is able to be represented
inside of JavaScripts number system.


`trunc` truncates off decimal portion of a number, different than `floor` because on
positive numbers it will round down, whereas on negative numbers it rounds up.

### Arrays



## Asynchronous Development

### Promises

[Examples](test/promiseSpec.js)

A promise is an object which represents a handle to listen to the results of the async operation,
whether it succeeds or fails. The promise "promises" to alert the caller when the async operation is done,
and provide the results of the operation.

Promises are _composable_. Two promises representing different async operations can be chained,
such that one executes after another. Or can wait for both to have completed before running something else.

Can make other promises that depend on results of a previous promise, and succeeds when it succeeds,
and fails when it fails.

Promise is made up of two parts:

1. Control (aka deferred, a separate object). Gives the creator of the promise the ability to mark it as succeeded or failed.
1. Promise - an object that can be passed around. Enables interested parties to register listeners that can take actions when asynchronous operation completes.

Promise exists in one of three states:

1. Pending - hasn't completed yet
1. Fulfilled - has completed successfully
1. Rejected - has failed

In the example below, `getOrder`, `getUser`, and `getCompany` all return promises.
The results of one asynchronous call are passed into the next.

To handle error, chain a final `.then` with first argument undefined,
and second argument is a function that handles the failure.

```javascript
function getCompanyFromOrderId(orderId) {
  getOrder(orderId).then(function(order) {
    return getUser(order.userId);
  }).then(function(user) {
    return getCompany(user.companyId);
  }).then(function(company) {
    // do something with company
  }).then(undefined, function(error) {
    // handle error
  });
}
```

### Generators

[Examples](test/asyncGeneratorSpec.js)

When a `yield` statement is encountered inside of a generator function,
execution is paused at that point, until the yield statement returns.

## Objects

[Examples](test/objectSpec.js)

Two new functions have been added to Object, `is`, which replaces triple equals `===`,
with some additional edge case handling,

and `assign`, which replaces the `extend` pattern seen in libraries like jQuery to provide mixin functionality.

To use `is`, simply pass in two arguments to be compared:

```javascript
Object.is(1, 2); // false
```

### Proxies

[Examples](test/proxySpec.js)

Proxies allow us to intercept operations performed on objects. For example, gets and sets on properties.

Using a proxy object does not modify the original object, rather it creates a new object that is a wrapper
around the original object. Therefore if you're going to use proxy objects, _must_ access object through
proxy, and not the original object itself.

Can also intercept calls to delete properties, define property function, calls to freeze or seal an object,
when `in` operator is used, calls to `hasOwnProperty`. Can also intercept enumeration using `for...in`.

To intercept more than one function on an object, add a key/value pair on the handler object.

Proxies can also be used to intercept function calls.

## Modules

Prior to ES6, there was no native module system in JavaScript, so a few different systems have been used,
to achieve code organization and information hiding.

### IIFE

Immediately invoked function expression.

```javascript
(function(target) {

  var privateDoWork = function(name) {
    return name + ' is working';
  };

  var Employee = function(name) {
    this.name = name;
  };

  Employee.prototype = {
    doWork: function() {
      return privateDoWork(this.name);
    }
  }

  target.Employee = window;

}(window));
```

### CommonJS

Introduced with NodeJS for running JavaScript outside of a browser environment.
Assumed environment has a file system, and its fast.

No IIFE required. Uses `require` and `exports`.
Module system executes files inside of a non-global context.

```javascript
var privateDoWork = function(name) {
  return name + ' is working';
};

var Employee = function(name) {
  this.name = name;
};

Employee.prototype = {
  doWork: function() {
    return privateDoWork(this.name);
  }
}

// Publish the public API for this module
exports.Employee = Employee;
// exports.Another = SomethingElse
```

Module can be used as follows:

```javascript
var Employee = require('./Employee').Employee;

var e1 = new Employee('joe');
console.log(e1.doWork());
```

### AMD

Takes into account fact that scripts need to be loaded asynchronously on the web,
and shouldn't block the main UI thread. Also takes into account that the scripts
need to be optimized for production, to minimize number of http requests.

Most populate implementation of AMD is provided by RequireJS, which is a script loader
that implements the AMD api. The primary keyword is `define`.

```javascript
// employee.js
define(function() {

  var privateDoWork = function() {
    // ...
  };

  var Employee = function(name) {
    // ...
  };

  // Public API
  return Employee;

});
```

### ES6 Modules

[Example Source](src/employee.js) | [Example Test](test/moduleSpec.js)

Conceptually similar to above two systems in that you can export and import dependencies.

```javascript
// models/employee.js
export class Employee {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this.name;
  }

  doWork() {
    return `${this.name} is working`;
  }
}

// app.js
import {Employee} from './models/employee';

let e = new Employee('Scott');
e.doWork();
```

Can `export` as many symbols as you like from a module.
The `import` syntax is an example of [object destructuring](#destructuring).

Looks closer to CommonJS than AMD. Everything in a JavaScript file that is treated as a module
will implicitly be executed in a local context, such that no global objects are created.

Note that `import` is synchronous, still need a module loader solution for use in the browser.

#### Default

If there's only one export, can use the default keyword, which allows the caller to import it
without a destructuring assignment, and the variable can be named anything.

```javascript
// models/employee.js
export default class Employee {
  // ...
}

// app.js
import factory from './models/employee';
```

#### Information Hiding

Anything not explicitly exported from a module is private to that module.
But what about class properties?

Modules and Symbols can be combined to achieve information hiding.

Symbol is a new built-in type in JavaScript. It can be invoked to get a new Symbol value.
Every Symbol value is unique and can be used as a key on an object.

If you don't publish Symbol value that was used to add something to an object,
no one else will know how to get to it.
