module.exports = [{ "isClass": true, "priority": 10000.0001, "key": "padding-left", "style": { left: "10%" } }, { "isClass": true, "priority": 10000.0002, "key": "padding-right", "style": { right: "10%" } }, { "isClass": true, "priority": 10000.0003, "key": "padding-top", "style": { top: "10%" } }, { "isClass": true, "priority": 10000.0004, "key": "padding-bottom", "style": { bottom: "10%" } }, { "isClass": true, "priority": 10000.0007, "key": "icon", "style": { font: { fontFamily: "icomoon", fontSize: 24 }, color: "#333", left: 5 } }, { "isClass": true, "priority": 10000.0008, "key": "icon-small", "style": { font: { fontSize: 14 } } }, { "isClass": true, "priority": 10000.0009, "key": "icon-lg", "style": { font: { fontSize: 48 } } }, { "isClass": true, "priority": 10000.001, "key": "icon-user", "style": { text: "" } }, { "isClass": true, "priority": 10000.0011, "key": "icon-lock", "style": { text: "" } }];function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'com.appcelerator.components/' + s :
  s.substring(0, index) + '/com.appcelerator.components/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}