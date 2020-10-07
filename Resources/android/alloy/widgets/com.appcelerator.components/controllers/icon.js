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
  this.__controllerPath = 'icon';
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
  $.__views["icon"] = Ti.UI.createLabel(
  { font: { fontFamily: "icomoon", fontSize: 24 }, color: "#333", left: 5, id: "icon" });

  $.__views["icon"] && $.addTopLevelView($.__views["icon"]);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  var _args = arguments[0] || {};


  /*
                                                                   * Add the appropriate class styling to the icon. A list of icon classes are listed in icon.tss
                                                                   */
  if (_args.icon) {
    $.addClass($.icon, _args.icon);
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
//# sourceMappingURL=file:///home/miga/tools/webinar-components/build/map/Resources/android/alloy/widgets/com.appcelerator.components/controllers/icon.js.map