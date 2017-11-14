// Write your solution in this file!


const driver = {};


function updateDriverWithKeyAndValue(driver, key, value) {
  let newDriver = Object.assign({}, driver, { [key] : value });
  return newDriver;
}


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, { [key] : value });
}


function deleteFromDriverByKey(driver, key) {
  const extraDriver = Object.assign({}, driver);
  delete extraDriver[key];
  return extraDriver;
}


function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}
