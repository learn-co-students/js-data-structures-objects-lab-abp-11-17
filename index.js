driver = {
  name: 'Sam',
}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {...driver};

  newDriver['address'] = '11 Broadway';

  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {

  driver['address'] = '12 Broadway';

  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newName = {...driver};

  delete newName.name;

  return newName;
}

function destructivelyDeleteFromDriverByKey(driver, key) {

  delete driver.name;

  return driver;
}
