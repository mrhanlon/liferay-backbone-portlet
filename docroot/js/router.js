define([
    "app",
    "modules/test/test"
], function(app, Test) {
    var Router = Backbone.Router.extend({
        routes: {
            "": "index"
        },
        index: function() {
            console.log('index');
            new Test.Views.Default({
                el: "#backbone-portlet-main"
            }).render();
        }
    });

    return Router;
});