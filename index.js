// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return driver = {
    name: "Sam",
    address: "11 Broadway"
  };
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver["address"] = "12 Broadway";
  return driver;
}

function deleteFromDriverByKey(driver, key){
   const newDriver = delete driver.key;

   return(newDriver);
 }

 function destructivelyDeleteFromDriverByKey(driver, key){
   delete driver[key];

   return driver;
 }
