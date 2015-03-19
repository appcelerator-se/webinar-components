function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.appcelerator.components.login/" + s : s.substring(0, index) + "/com.appcelerator.components.login/" + s.substring(index + 1);
    return path;
}

module.exports = [ {
    isClass: true,
    priority: 10000.0001,
    key: "padding-left",
    style: {
        left: "10%"
    }
}, {
    isClass: true,
    priority: 10000.0002,
    key: "padding-right",
    style: {
        right: "10%"
    }
}, {
    isClass: true,
    priority: 10000.0003,
    key: "padding-top",
    style: {
        top: "10%"
    }
}, {
    isClass: true,
    priority: 10000.0004,
    key: "padding-bottom",
    style: {
        bottom: "10%"
    }
}, {
    isClass: true,
    priority: 10000.0023,
    key: "container",
    style: {
        backgroundColor: "#ccc",
        layout: "vertical"
    }
}, {
    isClass: true,
    priority: 10000.0024,
    key: "form",
    style: {
        layout: "vertical",
        top: "15"
    }
}, {
    isClass: true,
    priority: 10000.0025,
    key: "button-bar",
    style: {
        layout: "horizontal",
        left: "10%"
    }
} ];