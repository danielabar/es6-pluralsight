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
