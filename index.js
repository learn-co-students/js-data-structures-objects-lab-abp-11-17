// Write your solution in this file!
let driver = {};

function updateDriverWithKeyAndValue(obj1, key1, val1){
  let newObj1 = {...obj1};
  newObj1[key1] = val1;
  return newObj1;
}
function destructivelyUpdateDriverWithKeyAndValue(obj1, key1, val1){
  obj1[key1] = val1;
  return obj1;
}
function deleteFromDriverByKey(obj1, key1, val1){
  let newObj1 = {...obj1};
  delete newObj1[key1];
  return newObj1;

}
function destructivelyDeleteFromDriverByKey(obj1, key1, val1){
  delete obj1[key1];
  return obj1;
}
