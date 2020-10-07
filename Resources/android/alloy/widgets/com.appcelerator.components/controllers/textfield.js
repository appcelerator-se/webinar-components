var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;


function WPATH(s) {
  var index = s.lastIndexOf('/');
  var path = index === -1 ?
  'com.appcelerator.components/' + s :
  s.substring(0, index) + '/com.appcelerator.components/' + s.substring(index + 1);

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
  var Widget = new (require('/alloy/widget'))('com.appcelerator.components');this.__widgetId = 'com.appcelerator.components';
  require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
  this.__controllerPath = 'textfield';
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
  $.__views["view_container"] = Ti.UI.createView(
  { top: 15, width: "80%", height: 45, apiName: "Ti.UI.View", id: "view_container", classes: [] });

  $.__views["view_container"] && $.addTopLevelView($.__views["view_container"]);
  $.__views["textField"] = Ti.UI.createTextField(
  { width: Ti.UI.FILL, height: 45, backgroundColor: "#e7e7e7", color: "#000", borderRadius: 5, padding: { left: 15, right: 15 }, apiName: "Ti.UI.TextField", id: "textField", classes: ["container"] });

  $.__views["view_container"].add($.__views["textField"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var _args = arguments[0] || {};


  /** Apply any predefined styles **/
  $.addClass($.textField, _args.classes);

  if (_args.icon) {

    var icon = Alloy.createWidget("com.appcelerator.components", "icon", { icon: _args.icon }).getView();

    $.addClass($.textField, "iconic");
    $.view_container.add(icon);
  }

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///home/miga/tools/webinar-components/build/map/Resources/android/alloy/widgets/com.appcelerator.components/controllers/textfield.js.map