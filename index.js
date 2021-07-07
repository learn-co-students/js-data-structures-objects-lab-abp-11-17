const driver = {
  name: 'Sam'
}

function updateDriverWithKeyAndValue(obj, key, value) {
  return newDriver = Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  return newDriver = Object.assign(obj, {[key]: value});
}

function deleteFromDriverByKey(driver, key) {
  return newDriver = delete driver.key;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
   return delete driver[key];
}
