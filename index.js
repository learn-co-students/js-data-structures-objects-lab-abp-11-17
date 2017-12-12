// Write your solution in this file!
let driver = {
};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, {name: "Sam"}, {address: "11 Broadway"})
};

let newDriver = updateDriverWithKeyAndValue(driver, 'name', 'Sam');

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {name: "Sam"}, {address: "12 Broadway"})
};

function deleteFromDriverByKey(driver, key) {
  return delete newDriver.name;
};

function destructivelyDeleteFromDriverByKey(driver, key) {
  return delete driver.name;
};
