const driver = { name:'sam'};
function updateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, {[key]: value });
}
function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {
  return Object.assign(obj, {[key]: value });
}
function deleteFromDriverByKey(obj, key) {
  const newdriver = Object.assign({}, obj);
  delete newdriver[key];
  return newdriver;
}
function destructivelyDeleteFromDriverByKey(obj, key) {
  Object.assign(obj);
  delete obj[key];
  return obj;
}
