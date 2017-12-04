// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue() {
  let newDriver = {...driver, name:"Sam", address:"11 Broadway"};

  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue() {
  driver.address = "12 Broadway";

  return driver;
}

function deleteFromDriverByKey() {
  let driver = {name:"Sam"};
  let newdriver = Object.assign({}, driver);

  return newdriver.name;
}

function destructivelyDeleteFromDriverByKey() {
  delete driver.name;

  return driver;
}
