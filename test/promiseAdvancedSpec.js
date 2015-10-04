import {getOrder, getUser, getCompany} from 'src/promiseAdvanced';

/*eslint no-unused-vars:0*/
describe('Promises Advanced', () => {

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

});
