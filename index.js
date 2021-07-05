// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newObj = Object.assign({}, driver, { [key] : value })
  ///debugger;
  console.log(newObj)
  console.log(driver)
  ///debugger;
  return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj
}

function deleteFromDriverByKey(driver, key) {
  const newObj = Object.assign({},driver);
  delete newObj[key]
  return newObj
  return driver
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}
