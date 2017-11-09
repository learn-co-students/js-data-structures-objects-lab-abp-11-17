driver = {'name': 'me'}

// Write your solution in this file!
function updateDriverWithKeyAndValue(driver, key, val) {
  return Object.assign({},driver,{[key]:val})
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, val) {
  return Object.assign(driver,{[key]:val});
}

function deleteFromDriverByKey(driver, key) {
  let t = Object.assign({},driver);
  return delete t[key];
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  return delete driver[key];
}
