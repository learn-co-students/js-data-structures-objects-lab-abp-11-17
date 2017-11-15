// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue (driver, key, value) {
  const newdriver = { ...driver };
  newdriver[key] = value;
  return newdriver;
}

function destructivelyUpdateDriverWithKeyAndValue (driver, key, value){
  driver[key] =  value;
  return driver;
}

function deleteFromDriverByKey (driver, name) {
  let newdriver = { ...driver };
  delete newdriver.name;
  return newdriver;
}

function destructivelyDeleteFromDriverByKey (driver, key) {
  delete driver[key];
  return driver;
}
