define([
    "lodash",
    "backbone"
], function(_, Backbone) {

    var contextPath = $("#backbone-portlet-main").data("context-path");
    var app = {
        root: contextPath + "/",
        fetchTemplate: function(path) {
            var JST = window.JST = window.JST || {};
            return $.Deferred(function(def) {
                if (JST[path]) {
                    def.resolve(JST[path]);
                } else {
                    $.get(contextPath + "/" + path + ".html", function(contents) {
                        JST[path] = _.template(contents);
                        def.resolve(JST[path]);
                    });
                }
            }).promise();
        }
    };

    // Mix Backbone.Events, modules, and layout management into the app object.
    return _.extend(app, {
        // Create a custom object with a nested Views object.
        module: function(additionalProps) {
            return _.extend({ Views: {} }, additionalProps);
        }
    }, Backbone.Events);
});