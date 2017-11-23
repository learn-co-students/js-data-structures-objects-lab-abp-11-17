let driver = {
  name: 'Sam'
};

function updateDriverWithKeyAndValue () {
  let newDriver = {...driver};
  newDriver.address = "11 Broadway";
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue () {
  driver.address = "12 Broadway";
  return driver;
}

function deleteFromDriverByKey () {
  let deletedNewDriver = {...driver};
  delete deletedNewDriver.name;
  return deletedNewDriver;
}

function destructivelyDeleteFromDriverByKey () {
  delete driver.name;
  return driver;
}
