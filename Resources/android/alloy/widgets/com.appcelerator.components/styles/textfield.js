module.exports = [{ "isClass": true, "priority": 10000.0001, "key": "padding-left", "style": { left: "10%" } }, { "isClass": true, "priority": 10000.0002, "key": "padding-right", "style": { right: "10%" } }, { "isClass": true, "priority": 10000.0003, "key": "padding-top", "style": { top: "10%" } }, { "isClass": true, "priority": 10000.0004, "key": "padding-bottom", "style": { bottom: "10%" } }, { "isClass": true, "priority": 10000.0012, "key": "container", "style": { width: Ti.UI.FILL, height: 45, backgroundColor: "#e7e7e7", color: "#000", borderRadius: 5, padding: { left: 15, right: 15 } } }, { "isClass": true, "priority": 10000.0013, "key": "password", "style": { passwordMask: true } }, { "isClass": true, "priority": 10000.0014, "key": "iconic", "style": { padding: { left: 80 } } }, { "isId": true, "priority": 100000.0015, "key": "view_container", "style": { top: 15, width: "80%", height: 45 } }];function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'com.appcelerator.components/' + s :
  s.substring(0, index) + '/com.appcelerator.components/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}