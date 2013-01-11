define([
    "app"
], function(app) {
    var Test = app.module();

    Test.Views.Default = Backbone.View.extend({
        template: "modules/test/test",
        events: {
            "click .addSubView": "addSubView"
        },
        addSubView: function(e) {
            e.preventDefault();
            var subviews = this.$el.find(".subviews"),
                el = this.make("div");
            subviews.append(el);
            new Test.Views.SubView({
                el: el
            }).render();
        },
        render: function() {
            var self = this;
            app.fetchTemplate(this.template).done(function(tmpl) {
                self.$el.append(tmpl());
            }, this);
        }
    });

    Test.Views.SubView = Backbone.View.extend({
        template: "modules/test/subview",
        render: function() {
            var self = this;
            app.fetchTemplate(this.template).done(function(tmpl) {
                self.$el.append(tmpl());
            }, this);
        }
    });

    return Test;
});