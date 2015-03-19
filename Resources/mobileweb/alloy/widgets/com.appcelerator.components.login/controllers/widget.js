function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.appcelerator.components.login/" + s : s.substring(0, index) + "/com.appcelerator.components.login/" + s.substring(index + 1);
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
    new (require("alloy/widget"))("com.appcelerator.components.login");
    this.__widgetId = "com.appcelerator.components.login";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    $.__views.login = Ti.UI.createWindow({
        backgroundColor: "#ccc",
        layout: "vertical",
        id: "login"
    });
    $.__views.login && $.addTopLevelView($.__views.login);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        left: "10%",
        text: "Login Form",
        top: "30%",
        id: "__alloyId0"
    });
    $.__views.login.add($.__views.__alloyId0);
    $.__views.__alloyId1 = Ti.UI.createView({
        layout: "vertical",
        top: "15",
        id: "__alloyId1"
    });
    $.__views.login.add($.__views.__alloyId1);
    $.__views.username = Alloy.createWidget("com.appcelerator.components", "textfield", {
        id: "username",
        icon: "icon-user",
        __parentSymbol: $.__views.__alloyId1
    });
    $.__views.username.setParent($.__views.__alloyId1);
    $.__views.password = Alloy.createWidget("com.appcelerator.components", "textfield", {
        classes: "password",
        icon: "icon-lock",
        id: "password",
        __parentSymbol: $.__views.__alloyId1
    });
    $.__views.password.setParent($.__views.__alloyId1);
    $.__views.__alloyId2 = Ti.UI.createView({
        layout: "horizontal",
        left: "10%",
        id: "__alloyId2"
    });
    $.__views.__alloyId1.add($.__views.__alloyId2);
    $.__views.__alloyId3 = Alloy.createWidget("com.appcelerator.components", "button", {
        title: "Cancel",
        classes: "cancel",
        id: "__alloyId3",
        __parentSymbol: $.__views.__alloyId2
    });
    $.__views.__alloyId3.setParent($.__views.__alloyId2);
    $.__views.__alloyId4 = Alloy.createWidget("com.appcelerator.components", "button", {
        title: "Sign In",
        classes: "padding-left",
        id: "__alloyId4",
        __parentSymbol: $.__views.__alloyId2
    });
    $.__views.__alloyId4.setParent($.__views.__alloyId2);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    exports.open = function() {
        $.login.open();
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;