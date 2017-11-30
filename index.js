driver = {};

function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver
}

function deleteFromDriverByKey(driver, key) {
  newdriver = Object.assign({}, driver)
  delete newdriver.name
  return newdriver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver.name
  return driver
}
