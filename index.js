const driver = {};

let key;

function updateDriverWithKeyAndValue(driver, key, value){
  const newObj = { ...driver };
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  const newObj = Object.assign({}, driver);
  delete newObj.key;
  return driver;
}

function destructivelyDeleteFromdriverByKey(driver, key){
  delete driver.key;
  return driver;
}
