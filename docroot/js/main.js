require([
    "app",
    "router"
], function(app, Router) {
    app.router = new Router();
    Backbone.history.start();
    // All navigation that is relative should be passed through the navigate
    // method, to be processed by the router. If the link has a `data-bypass`
    // attribute, bypass the delegation completely.
    $(document).on("click", "a:not([data-bypass])", function(evt) {
        var href = $(this).attr("href");
        // relative link
        if (href.indexOf("http") !== 0) {
            evt.preventDefault();
            Backbone.history.navigate(href.attr, true);
        }
  });
});