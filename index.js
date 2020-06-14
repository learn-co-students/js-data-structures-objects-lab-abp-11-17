// Write your solution in this file!
let driver = {};
let driver1 = Object.assign({}, driver);

function updateDriverWithKeyAndValue(driver, key, value) {
  let driver1 = Object.assign({}, driver);
  driver1[key] = value;
   return driver1;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
   driver[key] = value;
   return driver;
}

function deleteFromDriverByKey(driver, key) {
  let driver1 = Object.assign({}, driver);
  delete driver1[key];
  return driver1;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
};
