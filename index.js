const driver = {
}

function updateDriverWithKeyAndValue(driver, key, value){
  const nduDriver = Object.assign({}, driver, { [key]: value });
  return nduDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  const cloneDriver = Object.assign({}, driver);
  delete cloneDriver[key];
  return cloneDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
