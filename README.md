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
  - [Functional Programming](#functional-programming)
    - [Arrow Functions](#arrow-functions)
    - [Iterables and Iterators](#iterables-and-iterators)
    - [for of](#for-of)
    - [Generators](#generators)
  - [Asynchronous Development](#asynchronous-development)
    - [Promises](#promises)
    - [Generators](#generators-1)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Learning ES6 with Pluralsight

Notes and code examples written in ES6, from [JavaScript Fundamentals for ES6](http://www.pluralsight.com/courses/javascript-fundamentals-es6)

## Setup

This project is setup to use Babel, JSPM and SystemJS, with Karma and Grunt to run the tests.

To run the code examples, clone this repo, then `cd` into project directory and:

```
npm install
jspm install
npm install -g grunt-cli
grunt tdd
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
[Functional Examples](test/generatorExampleSpec.js)

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

When a `yield` statement is encountered inside of a generator function,
execution is paused at that point, until the yield statement returns.
