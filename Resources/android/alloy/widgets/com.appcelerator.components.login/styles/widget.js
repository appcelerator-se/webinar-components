module.exports = [{ "isApi": true, "priority": 1000.0017, "key": "Label", "style": { color: "#000" } }, { "isClass": true, "priority": 10000.0001, "key": "padding-left", "style": { left: "10%" } }, { "isClass": true, "priority": 10000.0002, "key": "padding-right", "style": { right: "10%" } }, { "isClass": true, "priority": 10000.0003, "key": "padding-top", "style": { top: "10%" } }, { "isClass": true, "priority": 10000.0004, "key": "padding-bottom", "style": { bottom: "10%" } }, { "isClass": true, "priority": 10000.0018, "key": "container", "style": { backgroundColor: "#ccc", layout: "vertical" } }, { "isClass": true, "priority": 10000.0019, "key": "form", "style": { layout: "vertical", top: "15" } }, { "isClass": true, "priority": 10000.002, "key": "button-bar", "style": { layout: "horizontal", left: "10%" } }];function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'com.appcelerator.components.login/' + s :
  s.substring(0, index) + '/com.appcelerator.components.login/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}