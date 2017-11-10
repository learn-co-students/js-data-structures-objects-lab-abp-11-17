// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const clone = Object.assign({}, driver, {[key]: value} )
  return clone
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const clone = Object.assign({}, driver, key = "")
  return delete clone.key
}

function  destructivelyDeleteFromDriverByKey(driver,key) {
     delete driver[key]
     return driver
}
