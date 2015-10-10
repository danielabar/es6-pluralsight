'use strict';

export function getOrder(orderId) {
  console.log(`Retrieving order: ${orderId}`);
  return Promise.resolve({userId:35});
}

export function getUser(userId) {
  console.log(`Retrieving user: ${userId}`);
  return Promise.resolve({companyId:18});
}

export function getCompany(companyId) {
  console.log(`Retrieving company: ${companyId}`);
  return Promise.resolve({name:'Pluralsight'});
}

export function getCourse(courseId) {
  console.log(`Retrieving course: ${courseId}`);
  var courses = {
    1: {name: 'Introduction to Cobol'},
    2: {name: 'Yet Another C# Course'},
    3: {name: 'How to make billions by logging'}
  };
  return Promise.resolve(courses[courseId]);
}
