// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue() {

  /*this function should take in a driver object, a key and a value.
  The function should not mutate the driver parameter and return a new
  driver that has an updated value for the key passed in.*/

  const driver = {name: "Sam"};

  return Object.assign({}, driver, {address: "11 Broadway"});
}

function destructivelyUpdateDriverWithKeyAndValue() {

  /*this function should work the same as updateDriverWithKeyAndValue()
  but it should mutate the driver parameter passed in.*/

  return Object.assign(driver, {address: "12 Broadway"})
}

function deleteFromDriverByKey(driver, key) {
  /*should take in a driver object and a key. It should delete the
  key/value pair for the key that was passed in from the driver object.
  This should all not actually mutate the driver passed in.*/

  const newObj = Object.assign({}, driver);

  delete newObj[key];

  return newObj;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  /** `destructivelyDeleteFromDriverByKey()` - this function should work
  the same as `deleteFromDriverByKey()` but it *should* mutate the `driver`
  passed in.*/

  delete driver[key];

  return driver;
}
