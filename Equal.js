function isEqal(a, b) {
  var aProp = Object.getOwnPropertyNames(a);
  var bProp = Object.getOwnPropertyNames(b);

  if (aProp.length != bProp.length) {
    return false;
  }

  for (var i = 0; i < aProp.length; i++) {
    var propName = aProp[i];
    if (a[propName] !== b[propName]) {
      return false;
    }
  }
  return true;
}
var obj1 = { prop1: "test", prop2: function () {} };
var obj2 = { prop1: "test", prop2: function () {} };
