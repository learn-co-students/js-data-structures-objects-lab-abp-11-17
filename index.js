const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
   const newdriver = {...driver};
   newdriver[key] = value;
   return newdriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  const driverclone = {...driver};
  delete driverclone[key];
  return driverclone;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
