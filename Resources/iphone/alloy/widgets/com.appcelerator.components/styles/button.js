function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "com.appcelerator.components/" + s : s.substring(0, index) + "/com.appcelerator.components/" + s.substring(index + 1);
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
    priority: 10000.0006,
    key: "container",
    style: {
        top: 15,
        width: "30%",
        height: 45,
        color: "white",
        backgroundColor: "#CA2127",
        borderRadius: 5
    }
}, {
    isClass: true,
    priority: 10000.0007,
    key: "cancel",
    style: {
        backgroundColor: "#333"
    }
} ];