// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){
  const newDriver = {...driver}
newDriver[key] = value;
return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key){
  anObj = Object.assign({},driver);
  delete anObj[key];
  return anObj;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];
  return driver;
}
