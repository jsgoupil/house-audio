(function($, parentWidget, undefined) {
    var base = parentWidget.prototype,
        template =
            "<div class='ac-range-before'></div>" +
            "<div class='ac-range-thumb'></div>" +
            "<div class='ac-range-helper'></div>";

    $.widget("ac.range", parentWidget, {
        options: {
            min: 0,
            max: 100,
            value: 0,
            change: null
        },

        _creating: false,
        _pointerDownHandler: null,
        _touchStartHandler: null,
        _mouseDownHandler: null,
        _pointerMoveHandler: null,
        _mouseMoveHandler: null,
        _touchMoveHandler: null,
        _clickHandler: null,
        _thumb: null,
        _before: null,
        _helper: null,
        _previousValue: null,

        _create: function() {
            var that = this;

            this._creating = true;
            
            this.widgetEventPrefix = "";

            this.element
                .html(template)
                .addClass("ac-range")
                .on("MSPointerDown", this._pointerDownHandler = function(evt1) {
                    var offset = that.element.offset(),
                        thumbWidth = that._thumb.width();

                    $("body")
                        .on("MSPointerMove", that._pointerMoveHandler = function(evt2) {
                            that._setPositionRaw(evt2.originalEvent.pageX - offset.left - thumbWidth / 2);
                            evt2.preventDefault();
                        })
                        .on("MSPointerUp", function() {
                            $(this).off("MSPointerMove", that._pointerMoveHandler);
                            that._pointerMoveHandler = null;
                            that._pointerUp();
                        });

                    that._setPositionRaw(evt1.originalEvent.pageX - offset.left - thumbWidth / 2);
                    evt1.preventDefault();
                })
                .on("touchstart", this._touchStartHandler = function(evt1) {
                    var offset = that.element.offset(),
                        thumbWidth = that._thumb.width();
                    $("body")
                        .on("touchmove", that._touchMoveHandler = function(evt2) {
                            that._setPositionRaw(evt2.originalEvent.touches[0].pageX - offset.left - thumbWidth / 2);
                            evt2.preventDefault();
                        })
                        .on("touchend", function() {
                            $(this).off("touchmove", that._touchMoveHandler);
                            that._touchMoveHandler = null;
                            that._pointerUp();
                        });

                    that._setPositionRaw(evt1.originalEvent.touches[0].pageX - offset.left - thumbWidth / 2);

                    evt1.preventDefault();
                })
                .on("mousedown", ".ac-range-thumb", this._mouseDownHandler = function(evt1) {
                    var offset = that.element.offset(),
                        thumbWidth = that._thumb.width();
                    $("body")
                        .on("mousemove touchmove", that._mouseMoveHandler = function(evt2) {
                            that._setPositionRaw(evt2.pageX - offset.left - thumbWidth / 2);
                        })
                        .one("mouseup", function() {
                            $(this).off("mousemove", that._mouseMoveHandler);
                            that._mouseMoveHandler = null;
                            that._pointerUp();
                        });

                    evt1.preventDefault();
                })
                .on("click", this._clickHandler = function(evt) {
                    var offset = that.element.offset(),
                        thumbWidth = that._thumb.width();

                    that._setPositionRaw(evt.pageX - offset.left - thumbWidth / 2);
                });

            this._thumb = this.element.find(".ac-range-thumb");
            this._before = this.element.find(".ac-range-before");
            this._helper = this.element.find(".ac-range-helper");

            this._previousValue = parseInt(this.options.value, 10);
            this._setOption("value", this.options.value);

            this._creating = false;

            base._create.call(this);
        },

        destroy: function() {
            this.element
                .empty()
                .removeClass("ac-range");

            if (this._pointerDownHandler) {
                this.element.off("MSPointerDown", this._pointerDownHandler);
                this._pointerDownHandler = null;
            }

            if (this._touchStartHandler) {
                this.element.off("touchstart", this._touchStartHandler);
                this._touchStartHandler = null;
            }

            if (this._mouseDownHandler) {
                this.element.off("mousedown", this._mouseDownHandler);
                this._mouseDownHandler = null;
            }

            if (this._clickHandler) {
                this.element.off("click", this._clickHandler);
                this._clickHandler = null;
            }

            base.destroy.call(this);
        },

        _setPosition: function(value) {
            // Find the percentage
            var percentage = (value - this.options.min) / (this.options.max - this.options.min);
            this._setPositionRaw(this.element.width() * percentage);
        },

        _setPositionRaw: function(value) {
            var that = this,
                elementWidth = this.element.width(),
                thumbWidth = this._thumb.width(),
                effectiveWidth = elementWidth - thumbWidth,
                correctedValue = Math.min(effectiveWidth, Math.max(0, value));
            this._thumb
                .css({
                    left: correctedValue
                });
            this._before
                .css({
                    width: correctedValue
                });

            this.options.value = parseInt(parseInt(correctedValue / effectiveWidth * 100) / 100 * (this.options.max - this.options.min) + this.options.min, 10);

            this._helper
                .html(this.options.value);

            if (!this._creating) {
                this._helper
                    .css({
                        left: correctedValue + thumbWidth / 2 - this._helper.outerWidth(true) / 2,
                        top: -this._helper.outerHeight(true) - 5
                    })
                    .fadeIn("fast");
            }

            if (this.options.value !== this._previousValue) {
                this._previousValue = this.options.value;
                this._trigger("change", null, { value: this.options.value });
            }
        },

        _pointerUp: function() {
            this._helper.fadeOut("fast");
        },

        _setOption: function(key, value) {
            var ret = base._setOption.apply(this, arguments);

            switch (key) {
                case "min":
                case "max":
                case "value":
                    this._setPosition(this.options.value);
                    break;
            }

            return ret;
        }
    });
})(jQuery, jQuery.Widget);