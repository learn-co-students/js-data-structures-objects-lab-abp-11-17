driver = {name: 'Sam'}
function updateDriverWithKeyAndValue (obj, key, value) {
  const seconddriver = {...driver};
  seconddriver [key] = value
  return seconddriver;
 }
function destructivelyUpdateDriverWithKeyAndValue (obj, key, value) {
  obj [key] = value;
  const thirddriver = (driver, 'address', '12 Broadway')
  return thirddriver
}
function deleteFromDriverByKey (obj, key, value) {
 const newdriver = (driver, 'name')
  return newdriver
}
function destructivelyDeleteFromDriverByKey() {
  return delete driver.name
}
