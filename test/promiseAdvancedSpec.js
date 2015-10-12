import {getOrder, getUser, getCompany, getCourse} from 'src/promiseAdvanced';

/*eslint no-unused-vars:0*/
describe('Promises Advanced', () => {
  'use strict';

  it('Chains sequentially using then', done => {
    getOrder(3).then( order => {
      // getUser returns a promise, VERY IMPORTANT to return a promise, to support chainability
      return getUser(order.userId);
    }).then( user => {
      return getCompany(user.companyId);
    }).then( company => {
      expect(company.name).toBe('Pluralsight');
      done();
    }).catch( err => {
      fail(err);
    });
  });

  it('Executes after ALL promises are resolved', done => {
    var courseIds = [1, 2, 3];
    var promises = [];
    for (let i=0; i<courseIds.length; i++) {
      promises.push(getCourse(courseIds[i]));
    }
    Promise.all(promises).then( values => {
      expect(values.length).toBe(3);
      // Note that we can't assert anything about the sequence of values,
      // don't know which courseId will be in which position in array
      done();
    });
  });

  it('Resolves after the first promise using the race function', done => {
    var courseIds = [1, 2, 3];
    var promises = [];
    for (let i=0; i<courseIds.length; i++) {
      promises.push(getCourse(courseIds[i]));
    }
    Promise.race(promises).then( firstValue => {
      expect(firstValue.name).toBeDefined();
      done();
    });
  });

});
