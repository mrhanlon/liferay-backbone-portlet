require.config({
    deps: ["main"],
    paths: {
        "libs": "libs",
        "modules": "../modules",
        "lodash": "libs/lodash",
        "backbone": "libs/backbone"
    },
    shim: {
        backbone: {
            deps: ["lodash"],
            exports: "Backbone"
        }
    }
});