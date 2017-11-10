// Write your solution in this file!
const driver = {};

// updateDriverWithKeyAndValue()- this function should take in a driver object, a key and a value. The function should not mutate the driver parameter and return a new driver that has an updated value for the key passed in.
function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = { ...driver };
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
   driver[key] = value;
   return driver;
}

//* `deleteFromDriverByKey()` - this function should take in a `driver` object and a `key`. It should delete the `key`/`value` pair for the `key` that was passed in from the `driver` object. This should all not actually mutate the `driver` passed in.
function deleteFromDriverByKey(driver, key) {
  const newObj = delete driver.key;
  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
