// Write your solution in this file!
function drivers (driver){
  driver=Object.assign
}

const driver = {}

function updateDriverWithKeyAndValue(driver,key,value){
  newdriver=Object.assign({}, driver, { [key]: value });
  return newdriver;
}
function destructivelyUpdateDriverWithKeyAndValue (driver,key,value){
  driver[key]=value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver);
  delete newDriver[key];
  return newDriver;
}
function destructivelyDeleteFromDriverByKey(driver,key){
  delete driver[key];
  return driver;
}
