// Write your solution in this file!
const driver= {
  name: 'hairy',};

function updateDriverWithKeyAndValue(object, key, value){
   const newDriver= { ...object}
    newDriver[key] = value
      return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue (object, key, value){
    object[key]= value;
    return object;

}

function deleteFromDriverByKey ( object, key){
  const JuniorDriver= {...object}
    delete JuniorDriver[key]
   return JuniorDriver
}

function destructivelyDeleteFromDriverByKey(object,key){
  delete object[key] // object =driver
  return object;
}
