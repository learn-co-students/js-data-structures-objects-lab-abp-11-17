const driver = {
  key: 'value',
}


function updateDriverWithKeyAndValue(obj, key, value) {
  const newDriver = { ...obj };
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(obj,key) {
  const cloneDriver = { ...obj};
  delete cloneDriver[key];
  return cloneDriver;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
  delete obj[key];
  return obj;
}
