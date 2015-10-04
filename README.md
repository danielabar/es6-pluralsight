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

## Promises

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
