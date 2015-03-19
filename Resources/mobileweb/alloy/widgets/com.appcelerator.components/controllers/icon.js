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
    this.__controllerPath = "icon";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.icon = Ti.UI.createLabel({
        font: {
            fontFamily: "icomoon",
            fontSize: 24
        },
        color: "#CCC",
        left: 5,
        id: "icon"
    });
    $.__views.icon && $.addTopLevelView($.__views.icon);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var _args = arguments[0] || {};
    _args.icon && $.addClass($.icon, _args.icon);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;