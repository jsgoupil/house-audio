(function(global, undefined) {
    var baseUrl = "/api/Control";

    var replaceUrl = function(url, object) {
        object = object || {};

        return url
            .replace("__ID__", object.zoneId || 0)
            .replace("__INPUTID__", object.inputId || 0)
            .replace("__ZONEID__", object.zoneId || 0)
            .replace(/(Volume=)(\d*)/, "$1" + (object.volume || 0))
            .replace(/(Bass=)(\d*)/, "$1" + (object.bass || 0))
            .replace(/(Treble=)(\d*)/, "$1" + (object.treble || 0));
    };

    var createAjaxRequest = function(type, urlCode, object) {
        var url;

        return $.ajax(replaceUrl(urlCode[type], object), {
            type: type.toUpperCase(),
            dataType: 'json'
        });
    };

    var amplifier = new (function(baseUrl) {
        this.Version = function() {
            return createAjaxRequest("get", Amplifier.urls.Version);
        };
        this.Reset = function() {
            return createAjaxRequest("get", Amplifier.urls.Reset);
        };
        this.On = function(id) {
            return createAjaxRequest("post", Amplifier.urls.On, { zoneId: id });
        };
        this.Off = function(id) {
            return createAjaxRequest("post", Amplifier.urls.Off, { zoneId: id });
        };
        this.Mute = function(id) {
            return createAjaxRequest("post", Amplifier.urls.Mute, { zoneId: id });
        };
        this.UnMute = function(id) {
            return createAjaxRequest("post", Amplifier.urls.UnMute, { zoneId: id });
        };
        this.MuteAll = function() {
            return createAjaxRequest("post", Amplifier.urls.MuteAll);
        };
        this.UnMuteAll = function() {
            return createAjaxRequest("post", Amplifier.urls.UnMuteAll);
        };
        this.Volume = function(id, volume) {
            var type = "post";

            // We want to read
            if (typeof volume === undefined) {
                type = "get";
            }

            return createAjaxRequest(type, Amplifier.urls.Volume, { zoneId: id, volume: volume });
        };
        this.Bass = function(id, bass) {
            var type = "post";

            // We want to read
            if (typeof bass === undefined) {
                type = "get";
            }

            return createAjaxRequest(type, Amplifier.urls.Bass, { zoneId: id, bass: bass });
        };
        this.Treble = function(id, treble) {
            var type = "post";

            // We want to read
            if (typeof treble === undefined) {
                type = "get";
            }

            return createAjaxRequest(type, Amplifier.urls.Treble, { zoneId: id, treble: treble });
        };
        this.Link = function(inputId, outputId) {
            return createAjaxRequest("post", Amplifier.urls.Link, { inputId: inputId, zoneId: outputId });
        };
    })(baseUrl);

    global.Amplifier = amplifier;
})(this);

(function($, global, amp, undefined) {
    var timers = {};
    var timeCall = 300;
    var callAmp = function(code, callback) {
        if (timers[code]) {
            global.clearTimeout(timers[code]);
        }

        timers[code] = setTimeout(function() {
            timers[code] = null;
            callback();
        }, timeCall);
    };

    var getZoneId = function(object) {
        return $(object).closest(".ha-zone").data("zoneid") || "0";
    };
    var getProperty = function(object) {
        return $(object).closest(".ha-zone-section").data("property") || null;
    };

    $("body")
        .on("change", ".ha-zone-slider input", function() {
            var $this = $(this),
                val = $this.val(),
                zoneId = getZoneId($this),
                property = getProperty($this);
            $this.closest(".ha-zone-section").find(".ha-zone-value input").val(val);

            callAmp(property + "|" + zoneId, function() {
                amp[property](zoneId, val);
            });
        })
        .on("change", ".ha-zone-value input", function() {
            var $this = $(this),
                val = $this.val(),
                zoneId = getZoneId($this),
                property = getProperty($this);
            $this.closest(".ha-zone-section").find(".ha-zone-slider input").val(val);

            callAmp(property + "|" + zoneId, function() {
                amp[property](zoneId, val);
            });
        })
        .on("change", ".ha-zone-onoff", function() {
            var $this = $(this),
                zoneId = getZoneId($this),
                checked = $this.is(":checked");

            callAmp("onoff" + "|" + zoneId, function() {
                amp[checked ? "On" : "Off"](zoneId);
            });
        })
        .on("click", ".ha-zone-mute", function() {
            var $this = $(this),
                zoneId = getZoneId($this),
                muted = !!$this.data("muted");

            $this
                .data("muted", !muted)
                .toggleClass("ha-zone-mute-active", !muted)
                .val(muted ? "Mute" : "Muted");

            callAmp("mute" + "|" + zoneId, function() {
                amp[muted ? "UnMute" : "Mute"](zoneId);
            });
        })
        .on("change", ".ha-zone-input", function() {
            var $this = $(this),
                val = $this.val(),
                zoneId = getZoneId($this);

            callAmp("link" + "|" + zoneId, function() {
                amp.Link(val, zoneId);
            });
        });
})(jQuery, this, Amplifier);