var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;


function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'com.appcelerator.components.login/' + s :
  s.substring(0, index) + '/com.appcelerator.components.login/' + s.substring(index + 1);

  return path.indexOf('/') !== 0 ? '/' + path : path;
}

function __processArg(obj, key) {
  var arg = null;
  if (obj) {
    arg = obj[key] || null;
  }
  return arg;
}

function Controller() {
  var Widget = new (require('/alloy/widget'))('com.appcelerator.components.login');this.__widgetId = 'com.appcelerator.components.login';
  require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
  this.__controllerPath = 'widget';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};

  // Generated code that must be executed before all UI and/or
  // controller code. One example is all model and collection
  // declarations from markup.


  // Generated UI code
  $.__views["login"] = Ti.UI.createWindow(
  { backgroundColor: "#ccc", layout: "vertical", id: "login" });

  $.__views["login"] && $.addTopLevelView($.__views["login"]);
  $.__views["__alloyId0"] = Ti.UI.createLabel(
  { color: "#000", left: "10%", text: 'Login Form', top: "30%", id: "__alloyId0" });

  $.__views["login"].add($.__views["__alloyId0"]);
  $.__views["__alloyId1"] = Ti.UI.createView(
  { layout: "vertical", top: "15", id: "__alloyId1" });

  $.__views["login"].add($.__views["__alloyId1"]);
  $.__views["username"] = Alloy.createWidget('com.appcelerator.components', 'textfield', { id: "username", icon: "icon-user", __parentSymbol: $.__views["__alloyId1"] });
  $.__views["username"].setParent($.__views["__alloyId1"]);
  $.__views["password"] = Alloy.createWidget('com.appcelerator.components', 'textfield', { classes: "password", icon: "icon-lock", id: "password", __parentSymbol: $.__views["__alloyId1"] });
  $.__views["password"].setParent($.__views["__alloyId1"]);
  $.__views["__alloyId2"] = Ti.UI.createView(
  { layout: "horizontal", left: "10%", id: "__alloyId2" });

  $.__views["__alloyId1"].add($.__views["__alloyId2"]);
  $.__views["__alloyId3"] = Alloy.createWidget('com.appcelerator.components', 'button', { title: "Cancel", classes: "cancel", id: "__alloyId3", __parentSymbol: $.__views["__alloyId2"] });
  $.__views["__alloyId3"].setParent($.__views["__alloyId2"]);
  $.__views["__alloyId4"] = Alloy.createWidget('com.appcelerator.components', 'button', { title: "Sign In", classes: "padding-left", id: "__alloyId4", __parentSymbol: $.__views["__alloyId2"] });
  $.__views["__alloyId4"].setParent($.__views["__alloyId2"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file

  var _args = arguments[0] || {};

  exports.open = function () {
    $.login.open();
  };

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/miga/tools/webinar-components/build/map/Resources/android/alloy/widgets/com.appcelerator.components.login/controllers/widget.js.map