// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}
// destructivelyUpdateDriverWithKeyAndValue(driver, name, 'Sam');

function deleteFromDriverByKey(driver, key) {
  const newDriver = delete driver.key;
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
