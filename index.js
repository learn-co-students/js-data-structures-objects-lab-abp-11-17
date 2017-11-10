// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = { ...driver };
    newDriver[key] = value;
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key, value) {
  const newDriver = { ...driver };
  return delete newDriver.key;
}

function destructivelyDeleteFromDriverByKey(driver, key, value) {
  delete driver.name;
  return driver;
}
