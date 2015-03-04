(function ($) {
    "use strict";

    $(function () {
        // This will keep our amp and app pool awake.
        setInterval(function () {
            $.ajax(AmplifierApi.url.Version);
        }, 1000 * 60);
    });
})(jQuery)