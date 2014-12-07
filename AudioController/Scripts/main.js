(function ($) {
    "use strict";

    $(function () {
        var main = $("#main"),
            tabs = $(".tabs")
                .on("click", "a", function () {
                    var $this = $(this),
                        li = $this.closest("li");
                    main.removeClass("showing-sound showing-spotify");
                    tabs.find("li").removeClass("selected");
                    li.addClass("selected");
                    main.addClass("showing-" + li.data("tab"));

                    return false;
                });

        tabs
            .find("[data-tab=sound] a").click();
    });
})(jQuery)