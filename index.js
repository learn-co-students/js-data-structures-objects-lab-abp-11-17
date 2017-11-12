// Write your solution in this file!
let driver = {};
function updateDriverWithKeyAndValue(driver, key, value){
  let newdriver = {
        name: 'Sam',
        address: '11 Broadway'
        }
  return driver, newdriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver.address='12 Broadway';
  return driver;
}

function deleteFromDriverByKey(driver, key){
  let newdriver = {
        name: 'Sam',
        address: '11 Broadway'
        }
  let newObj = Object.assign({}, newdriver);
        delete newObj.name;
        return newObj;
}
function destructivelyDeleteFromDriverByKey(){
        delete driver.name;
        return driver;
}
