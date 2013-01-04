Number.prototype.zeroPad = Number.prototype.zeroPad ||
     function(length) {
         var nr = this, len = (length - String(nr).length) + 1;
         return len > 0 ? new Array(len).join('0') + nr : nr;
     };

String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, '');
};
String.prototype.ltrim = function() {
    return this.replace(/^\s+/, '');
};
String.prototype.rtrim = function() {
    return this.replace(/\s+$/, '');
};
function trim(str, chars) {
    return ltrim(rtrim(str, chars), chars);
}
function ltrim(str, chars) {
    chars = chars || '\\s';
    return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}
function rtrim(str, chars) {
    chars = chars || '\\s';
    return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}

(function(global, undefined) {
    var createAjaxRequest = function(type, url) {
        return $.ajax(url, {
            type: type.toUpperCase(),
            dataType: 'json'
        });
    };

    var spotify = new (function() {
        this.Search = function(query, kind) {
            SpotifyApi.url.Search = "/api/Spotify/Search";
            return createAjaxRequest("get", SpotifyApi.url.Search + "/" + encodeURIComponent(query) + "?kind=" + encodeURIComponent(kind || ""));
        };

        this.Play = function(uri) {
            SpotifyApi.url.Search = "/api/Spotify/Play";
            return createAjaxRequest("post", SpotifyApi.url.Search + "/?id=" + encodeURIComponent(uri));
        }
    })();
    
    global.SpotifyApi = spotify;
})(this);

(function($, global, undefined) {
    var createAjaxRequest = function(type, url) {
        return $.ajax(url, {
            type: type.toUpperCase(),
            dataType: 'json'
        });
    };

    $(function() {
        var main = $("#main"),
            tabs = $(".tabs")
                .on("click", "a", function() {
                    var $this = $(this),
                        li = $this.closest("li");
                    main.removeClass("showing-sound showing-spotify");
                    tabs.find("li").removeClass("selected");
                    li.addClass("selected");
                    main.addClass("showing-" + li.data("tab"));

                    return false;
                });

        tabs
            .find("[data-tab=spotify] a").click();

        $("body").on("click", "[data-spotify-play]", function() {
            var $this = $(this),
                spotify = $this.data("spotify-play");

            SpotifyApi.Play(spotify);

            return false;
        });

        var context = $("#main .spotify");
        var helper = {
            renderArt: function(element) {
                console.log("render");
                console.log(element[1]);
                SpotifyApi.url.GetArt = "/api/Spotify/GetArt";
                $(element).find("[data-spotify-art]").each(function() {
                    var $this = $(this),
                        art = $this.data("spotify-art");
                    createAjaxRequest("get", SpotifyApi.url.GetArt + "?id=" + art)
                        .done(function(result) {
                            $this.attr("src", result);
                        });
                });
            },
            artists: function(artists) {
                var artistArray = [];
                artists.forEach(function(artist) {
                    artistArray.push("<a href='#' data-spotify-search='" + artist.href + "'>" + artist.name + "</a>");
                });
                return artistArray.join(", ");
            },
            time: function(length) {
                var hours = parseInt(length / 60 / 60, 10),
                    minutes = parseInt(length / 60 % 60, 10),
                    seconds = Math.round(length % 60);

                if (hours < 1) {
                    return ltrim(minutes.zeroPad(2), "0") + ":" + seconds.zeroPad(2);
                } else {
                    return ltrim(hours.zeroPad(2), "0") + ":" + minutes.zeroPad(2) + ":" + seconds.zeroPad(2);
                }
            },
            popularity: function(popularity) {
                return (Math.round((+popularity) * 100 * 100) / 100) + "%";
            },
            album: function(album) {
                return "<a href='#' data-spotify-lookup='" + album.href + "'>" + album.name + "</a>";
            }
        }
        context.find(".search").on("submit", function() {
            SpotifyApi.Search(context.find(".search .text input").val())
                .done(function(result) {
                    if(!result) {
                        return;
                    }

                    // Let's splice only the 4 first
                    result.artistResult.artists = result.artistResult.artists.slice(0, 4);
                    result.albumResult.albums = result.albumResult.albums.slice(0, 4);

                    searchViewModel.trackResult(result.trackResult);
                    searchViewModel.artistResult(result.artistResult);
                    searchViewModel.albumResult(result.albumResult);
                });

            return false;
        });

        var searchViewModel = {
            trackResult: ko.observable({ info:{}, tracks: [] }),
            artistResult: ko.observable({ info: {}, artists: [] }),
            albumResult: ko.observable({ info: {}, albums: [] }),
            helper: helper
        };
        ko.applyBindings(searchViewModel, context[0]);
    });


})(jQuery, this);