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
    priority: 10000.0016,
    key: "container",
    style: {
        top: 15,
        backgroundColor: "#e7e7e7",
        width: "80%",
        height: 45,
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 15
    }
}, {
    isClass: true,
    priority: 10000.0017,
    key: "password",
    style: {
        passwordMask: true
    }
}, {
    isClass: true,
    priority: 10000.0018,
    key: "iconic",
    style: {
        paddingLeft: 40
    }
}, {
    isClass: true,
    priority: 10000.901899999999,
    key: "container",
    style: {
        top: 15,
        backgroundColor: "#333",
        color: "#fff",
        width: "80%",
        height: 45,
        borderRadius: 5,
        paddingLeft: 15,
        paddingRight: 15
    }
}, {
    isClass: true,
    priority: 10000.902,
    key: "password",
    style: {
        passwordMask: true
    }
} ];