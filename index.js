const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  return Object.assign({}, driver, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  
  return driver;
}

function deleteFromDriverByKey(driver, key){
  const driverNew = delete driver.key;
  
  return(driverNew);
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  
  return driver;
}


