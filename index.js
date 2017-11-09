// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value} )
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {[key]: value} )
}

function deleteFromDriverByKey(driver, key) {
  return Object.assign({}, { name: undefined })
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  return Object.assign(driver, { name: undefined })
}
