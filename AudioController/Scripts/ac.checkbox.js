(function($, parentWidget, undefined) {
    var base = parentWidget.prototype,
        template =
            "<input type='checkbox' />";

    $.widget("ac.checkbox", parentWidget, {
        options: {
            value: false,
            change: null
        },

        _clickHandler: null,
        _changeHandler: null,

        _create: function() {
            var that = this;
            
            this.widgetEventPrefix = "";

            this.element
                .html(template)
                .addClass("ac-checkbox")
                .on("click", this._clickHandler = function(evt) {
                    that._setOption("value", !that.options.value);
                    that._trigger("change", evt, { value: that.options.value });
                })
                .find("input")
                    .on("change",function(evt) {
                        that._setOption("value", $(this).is(":checked"));
                        evt.stopPropagation();
                       // that._trigger("change", evt, { value: that.options.value });
                    });

            this._setOption("value", this.options.value);

            base._create.call(this);
        },

        destroy: function() {
            this.element
                .empty()
                .removeClass("ac-checkbox ac-checkbox-on");

            if (this._clickHandler) {
                this.element.off("click", this._clickHandler);
                this._clickHandler = null;
            }

            base.destroy.call(this);
        },

        _setOption: function(key, value) {
            var ret = base._setOption.apply(this, arguments);

            switch (key) {
                case "value":
                    if (value) {
                        this.element.addClass("ac-checkbox-on");
                    } else {
                        this.element.removeClass("ac-checkbox-on");
                    }

                    break;
            }

            return ret;
        }
    });
})(jQuery, jQuery.Widget);