// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value){

  const newDriver = { ...driver };

  newDriver[key] = value;

  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;

  return driver;
}
//deletes `key` from a clone of driver and returns the new driver (it is non-destructive)
function deleteFromDriverByKey(driver, key){

  const newdriver = Object.assign({}, driver);

  delete newdriver[key];

  return newdriver;
}
//returns driver without the delete key/value pair
//modifies the original driver
function destructivelyDeleteFromDriverByKey(driver, key){

  delete driver[key];

  return driver;

}
