// Write your solution in this file!
const driver = {

};

function updateDriverWithKeyAndValue(driver, name, address) {
  const newDriver = {...driver};
  newDriver.name = 'Sam';
  newDriver.address = '11 Broadway';
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, name, address) {
  driver.name = 'Sam';
  driver.address = '12 Broadway';
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = {...driver};
  delete newDriver.name;
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver.name;
  delete driver.address;
  return driver;
}
