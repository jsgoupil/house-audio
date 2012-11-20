(function(global, undefined) {
    var createAjaxRequest = function(type, url) {
        return $.ajax(url, {
            type: type.toUpperCase(),
            dataType: 'json'
        });
    };

    var amplifier = new (function() {
        this.Version = function() {
            return createAjaxRequest("get", AmplifierApi.url.Version);
        };

        this.Reset = function() {
            return createAjaxRequest("post", AmplifierApi.url.Reset);
        };
    })();

    var zone = new (function() {
        this.get = function(zone) {
            return createAjaxRequest("get", ZoneApi.url + "/" + zone.Id);
        };

        this.post = function(zone) {
            return createAjaxRequest("post", ZoneApi.url + "/" + "?" + $.param(zone));
        };
    })();

    global.AmplifierApi = amplifier;
    global.ZoneApi = zone;
})(this);

(function($, global, amp, undefined) {
    var timer = {};
    var timeCall = 300;

    var updateZone = function(zoneId) {
        if (!timer[zoneId]) {
            timer[zoneId] = getZone(zoneId);

            setTimeout(function() {
                ZoneApi.post(timer[zoneId]);
                timer[zoneId] = null;
            }, timeCall);
        }
    };

    var getZoneId = function(object) {
        return $(object).closest(".ha-zone").data("zoneid") || "0";
    };
    var getProperty = function(object) {
        return $(object).closest(".ha-zone-section").data("property") || null;
    };

    var Input = function(id) {
        this.Id = id;
    };

    var Zone = function(id) {
        this.Id = id;
        this.On = false;
        this.Volume = 0;
        this.Bass = 0;
        this.Treble = 0;
        this.Mute = false;
        this.Input = null;
    };

    var getZone = function(id) {
        var context = $("[data-zoneid=" + id + "]");
        var input = context.find(".ha-zone-input").val();

        var zone = new Zone(id);
        zone.On = context.find(".ha-zone-onoff").is(":checked");
        zone.Volume = context.find(".ha-zone-section[data-property=Volume] .ha-zone-value input").val();
        zone.Bass = context.find(".ha-zone-section[data-property=Bass] .ha-zone-value input").val();
        zone.Treble = context.find(".ha-zone-section[data-property=Treble] .ha-zone-value input").val();
        zone.Mute = !!context.find(".ha-zone-mute").data("muted");
        zone.Input = input !== "0" ? new Input(input) : null;

        return zone;
    };

    $("body")
        .on("change", ".ha-zone-slider input", function() {
            var $this = $(this),
                val = $this.val(),
                zoneId = getZoneId($this),
                property = getProperty($this);

            $this.closest(".ha-zone-section").find(".ha-zone-value input").val(val);
            updateZone(zoneId);
        })
        .on("change", ".ha-zone-value input", function() {
            var $this = $(this),
                val = $this.val(),
                zoneId = getZoneId($this),
                property = getProperty($this);

            $this.closest(".ha-zone-section").find(".ha-zone-slider input").val(val);
            updateZone(zoneId);
        })
        .on("change", ".ha-zone-onoff", function() {
            var $this = $(this),
                zoneId = getZoneId($this);

            updateZone(zoneId);
        })
        .on("click", ".ha-zone-mute", function() {
            var $this = $(this),
                zoneId = getZoneId($this),
                muted = !!$this.data("muted");

            $this
                .data("muted", !muted)
                .val(muted ? "Mute" : "Muted");

            updateZone(zoneId);
        })
        .on("change", ".ha-zone-input", function() {
            var $this = $(this),
                val = $this.val(),
                zoneId = getZoneId($this);

            updateZone(zoneId);
        })
        .on("click", ".reset", function() {
            AmplifierApi.Reset();
        });
})(jQuery, this);