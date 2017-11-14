// Write your solution in this file!
let driver = {

}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({ name: 'Sam', address: '11 Broadway' });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver['name'] = 'Sam';
  driver['address'] = '12 Broadway';
  return driver;
}

function deleteFromDriverByKey(driver,  name) {
  const newDriver = {};
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, name) {
  delete driver.name;
  return driver;
}
