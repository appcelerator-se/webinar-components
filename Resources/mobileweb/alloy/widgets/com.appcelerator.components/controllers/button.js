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
    this.__controllerPath = "button";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.button = Ti.UI.createButton({
        top: 15,
        width: "30%",
        height: 45,
        color: "white",
        backgroundColor: "#66F",
        borderRadius: 5,
        apiName: "Ti.UI.Button",
        id: "button",
        classes: [ "container" ]
    });
    $.__views.button && $.addTopLevelView($.__views.button);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var _args = arguments[0] || {};
    $.addClass($.button, _args.classes);
    $.button.title = _args.title || "Button";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;