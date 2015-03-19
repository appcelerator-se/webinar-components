function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.appcelerator.components/" + s : s.substring(0, index) + "/com.appcelerator.components/" + s.substring(index + 1);
    return path;
}

function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    new (require("alloy/widget"))("com.appcelerator.components");
    this.__widgetId = "com.appcelerator.components";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "textfield";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.textField = Ti.UI.createTextField({
        top: 15,
        backgroundColor: "#333",
        width: "80%",
        height: 45,
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 15,
        color: "#fff",
        apiName: "Ti.UI.TextField",
        id: "textField",
        classes: [ "container" ]
    });
    $.__views.textField && $.addTopLevelView($.__views.textField);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var _args = arguments[0] || {};
    $.addClass($.textField, _args.classes);
    if (_args.icon) {
        var icon = Alloy.createWidget("com.appcelerator.components", "icon", {
            icon: _args.icon
        }).getView();
        $.addClass($.textField, "iconic");
        $.textField.add(icon);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;