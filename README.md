# Learning ES6 with Pluralsight

Notes and code examples written in ES6, from [JavaScript Fundamentals for ES6](http://www.pluralsight.com/courses/javascript-fundamentals-es6)

## Setup

This project is setup to use Babel, JSPM and SystemJS, with Karma to run the tests.

To run the code examples, clone this repo, then `cd` into project directory and:

```
npm install
jspm install
npm install -g karma-cli
karma start
```

## Destructuring

[Examples](test/destructuringSpec.js)

Operation for assigning values to a _set_ of variables.

## Default Parameter Values

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

## Rest Parameters

[Examples](test/restParameterSpec.js)

Make it easy to work with a variable or unknown number of arguments in a function.

For example, to write a sum function, want to allow caller to provide as many or as little arguments
representing the numbers to be summed.

ES5 solution was to use implicit `arguments` object,
which holds all of the arguments passed to a function in an array-like structure.
Problem with `arguments` is it looks like an array but isn't truly an array.

ES6 solution is to use REST parameter syntax. Rest parameter is always the last parameter in a function,
and will have `...` prefix. The values will be packaged into a true array object.

## Promises

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

## Generators

When a `yield` statement is encountered inside of a generator function,
execution is paused at that point, until the yield statement returns.
