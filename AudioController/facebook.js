if (window.CavalryLogger) {
    CavalryLogger.start_js(["K2H1x"]);
}
copy_properties = $.extend;

window.SpotifyAjaxRequest || (function () {
    window.SpotifyAjaxRequest = function () {
        this._request = null;
        this._data = {};
        this._option = {
            timeout: 30000,
            method: 'GET'
        };
        this._timeout = null;
    };
    copy_properties(SpotifyAjaxRequest, {
        LOAD_ERROR: 'LOAD_ERROR',
        TIMEOUT_ERROR: 'TIMEOUT_ERROR',
        PARSE_ERROR: 'PARSE_ERROR',
        isSupported: function () {
            return window.XMLHttpRequest && typeof XDomainRequest !== 'undefined' || ('withCredentials' in new XMLHttpRequest());
        }
    });
    Class.mixin(SpotifyAjaxRequest, 'Arbiter', {
        setData: function (a) {
            this._data = a;
            return this;
        },
        setOption: function (a, b) {
            this._option[a] = b;
            return this;
        },
        setURI: function (a) {
            this._uri = URI(a);
            return this;
        },
        send: function () {
            if (this.inform('initial', this) !== false) {
                this._uri.addQueryData(copy_properties({
                    cors: ''
                }, this._data));
                this._request = new XMLHttpRequest();
                if ('withCredentials' in this._request) {
                    this._request.open(this._option.method, this._uri.toString(), true);
                } else if (typeof XDomainRequest !== 'undefined') {
                    this._request = new XDomainRequest();
                    this._request.open(this._option.method, this._uri.toString());
                } else throw new Error('SpotifyAjaxRequest: not supported');
                this._request.ontimeout = bagofholding;
                this._request.onprogress = bagofholding;
                this._request.onload = this._parseResult.bind(this);
                this._request.onerror = this._dispatchResult.bind(this, 'error', {
                    error: {
                        type: SpotifyAjaxRequest.LOAD_ERROR,
                        message: 'the request failed to load at: ' + this._uri
                    }
                });
                if (this._option.timeout > 0) this._timeout = this._dispatchResult.bind(this, 'timeout', {
                    error: {
                        type: SpotifyAjaxRequest.TIMEOUT_ERROR,
                        message: 'a timeout occurred after ' + this._option.timeout + 'ms'
                    }
                }).defer(this._option.timeout, false);
                this._request.send();
            }
            return this;
        },
        abort: function () {
            clearTimeout(this._timeout);
            try {
                this._request.abort();
            } catch (a) {}
            this._request = null;
            this.inform('finish');
            return this;
        },
        _dispatchResult: function (b, a) {
            clearTimeout(this._timeout);
            this.inform.bind(this, 'finish', a).defer();
            this.inform(b, a);
        },
        _parseResult: function () {
            var e;
            var c;
            var b;
            var d;
            try {
                e = this._request.responseText || '';
            } catch (a) {
                c = SpotifyAjaxRequest.LOAD_ERROR;
                b = 'responseText not available - ' + a.message;
            }
            if (!c) try {
                d = JSON.parse(e);
            } catch (a) {
                c = SpotifyAjaxRequest.PARSE_ERROR;
                b = 'exception parsing JSON - ' + a.message;
            }
            if (!c && !d) {
                c = SpotifyAjaxRequest.PARSE_ERROR;
                b = 'empty JSON';
            }
            if (c) {
                this._dispatchResult('error', {
                    error: {
                        type: c,
                        message: b
                    }
                });
            } else this._dispatchResult(d.error ? 'error' : 'success', d);
        }
    });
})();

function HulkRemote() {}(function () {
    var a = window.location.protocol === 'https:';
    Class.mixin(HulkRemote, 'Arbiter', {
        PROTOCOL_VERSIONS: [9],
        serial: 1,
        manualPlay: false,
        showLoggingin: false,
        oauthTokenInvalid: false,
        config: {
            play_now_url: '/ajax/music/spotify_play_now.php?init_only',
            oauth_step: 8,
            set_installed_url: '/ajax/music/spotify/installed.php',
            csrf_uri: '/ajax/music/spotify/set_csrf.php',
            fetch_oauth_url: '/ajax/music/spotify/auth.php?going_online',
            retryPeriod: 3000,
            iframeUpdatePeriod: 10000,
            iframeTryCycles: 3,
            longPollPeriod: 60000,
            optimisticPlayNowTime: 1000,
            failureCycles: 4,
            loggingInTimeout: 15000,
            defaultTimeout: 4000,
            pingPortsTimeout: 4000,
            expBackoffFactor: 1.2,
            maxPollInterval: 2200
        },
        responseCallback: bagofholding,
        tokens: {
            spotify_csrf: '',
            spotify_oauth: ''
        },
        serverConfig: {
            url: window.location.protocol + '//' + ((Math.random() * 10000) | 0) + '.spotilocal.com',
            start_port: a ? 4370 : 4380,
            end_port: a ? 4374 : 4384,
            path: '/',
            callbackParam: 'callback',
            ops: {
                STATUS: 'remote/status.json',
                RESUME: 'remote/pause.json?pause=false',
                PAUSE: 'remote/pause.json?pause=true',
                PLAY: 'remote/play.json',
                VERSION: 'service/version.json?service=remote',
                GET_IFRAME_RESPONSE: 'csrf/getFbCsrfToken.html',
                LOGIN: 'remote/login.json'
            }
        },
        STATES: {
            OFFLINE: 'OFFLINE',
            RESIGNED: 'RESIGNED',
            SEARCHING: 'SEARCHING',
            AUTHENTICATING: 'AUTHENTICATING',
            LOGGED_OUT_AND_WAITING: 'LOGGED_OUT_AND_WAITING',
            FETCHING_OAUTH: 'FETCHING_OAUTH',
            IFRAME_POLLING: 'IFRAME_POLLING',
            RETRYING_TOKENS: 'RETRYING_TOKENS',
            LOGGING_IN: 'LOGGING_IN',
            ONLINE: 'ONLINE'
        },
        init: function (b, c) {
            this._iframeTryCount = 0;
            this._providerArgs = c;
            this._switchToState(this.STATES.OFFLINE);
            b && this.setResponseCallback(b);
            this.uri = new URI(this.serverConfig.url || '');
            this.uri.setPath(this.serverConfig.path || '');
            if (!this.serverConfig.start_port) this.serverConfig.start_port = this.serverConfig.port || 80;
            this._hasXDomainXHR = SpotifyAjaxRequest.isSupported();
        },
        persistSearchingFor: function (b) {
            this._persistFor = b;
            var c = this._persistentLoopTimer;
            this._resetPersistenceTimers();
            if (c && this._persistFor) this._persistentLoopTimer = this._giveUpPersisting.bind(this, this._persistFor).defer(this._persistFor * 1000, false);
        },
        serviceRunning: function () {
            switch (this.state) {
            case this.STATES.LOGGED_OUT_AND_WAITING:
            case this.STATES.IFRAME_POLLING:
            case this.STATES.RETRYING_TOKENS:
            case this.STATES.FETCHING_OAUTH:
            case this.STATES.LOGGING_IN:
            case this.STATES.ONLINE:
                return true;
            default:
                return false;
            }
        },
        attemptGoOnline: function (b) {
            this.manualPlay = b;
            if (!this._hasXDomainXHR && a) {
                if (this.manualPlay) Dialog.bootstrap('/ajax/music/hulk/unsupported_browser.php');
                return;
            }
            switch (this.state) {
            case this.STATES.OFFLINE:
                if (window.MusicDiagnostics && b) MusicDiagnostics.userAction.curry(MusicProviders.HULK, MusicDiagnostics.GOING_ONLINE).defer();
            case this.STATES.RESIGNED:
                var c = this.serverConfig.start_port || this.serverConfig.port;
                c && this.uri.setPort(c);
                this._switchToState(this.STATES.SEARCHING);
                this.responseCallback(MusicConstants.DIAGNOSTIC_EVENT.SEARCHING);
                if (this._hasXDomainXHR) {
                    this._pingPorts();
                } else Bootloader.loadComponents('SpotifyJSONPRequest', this._pingPorts.bind(this));
                break;
            case this.STATES.LOGGED_OUT_AND_WAITING:
                this._switchToState(this.STATES.LOGGING_IN);
                this._send(MusicConstants.OP.LOGIN);
            }
            this.persistSearchingFor(this._persistFor);
        },
        reconnect: function (b) {
            this.setTokens(b);
            if (this.state === this.STATES.IFRAME_POLLING) {
                this._cleanupIframe();
            } else if (this.state === this.STATES.FETCHING_OAUTH) {
                this.fetchedOauth = true;
                this.oauthTokenInvalid = false;
            } else return;
            this._switchToState(this.STATES.RETRYING_TOKENS);
            this._send(MusicConstants.STATUS_CHANGE_OP.STATUS);
        },
        setShowLoggingin: function (b) {
            this.showLoggingin = b;
        },
        setTokens: function (b) {
            b = b || {};
            if (b.spotify_csrf) this.tokens.spotify_csrf = b.spotify_csrf;
            if (b.spotify_oauth) this.tokens.spotify_oauth = b.spotify_oauth;
        },
        getSpotifyCSRFToken: function () {
            return this.tokens.spotify_csrf;
        },
        goOffline: function () {
            this._switchToState(this.STATES.OFFLINE);
            clearTimeout(this._authenticatingRetry);
            this._cleanupIframe();
            this._stopPersisting();
            this.oauthTokenInvalid = false;
            this.fetchedOauth = false;
            this._iframeTryCount = 0;
            this.responseCallback(MusicConstants.DIAGNOSTIC_EVENT.OFFLINE);
        },
        launchPlayNowDialog: function (b) {
            if (this.serviceRunning()) return;
            this._resetLaunchSubscription();
            var c = this._launchPlayNow.bind(this, b);
            this.prePlayNowLaunchTimer = c.defer(this.config.optimisticPlayNowTime, false);
            this.launchSubscription = this.subscribe([MusicConstants.DIAGNOSTIC_EVENT.STATE_CHANGE, MusicConstants.DIAGNOSTIC_EVENT.WRONG_VERSION], function (d, e) {
                if (d === MusicConstants.DIAGNOSTIC_EVENT.WRONG_VERSION) {
                    this._resetLaunchSubscription();
                } else switch (e.to) {
                case this.STATES.OFFLINE:
                case this.STATES.RESIGNED:
                    this._resetLaunchSubscription();
                    c();
                    break;
                case this.STATES.AUTHENTICATING:
                    this._resetLaunchSubscription();
                    break;
                }
            }.bind(this));
            this.attemptGoOnline(true);
        },
        send: function (b, c) {
            if (this.state === this.STATES.ONLINE) {
                this._send.call(this, b, c);
            } else return false;
        },
        setResponseCallback: function (b) {
            this.responseCallback = b;
        },
        _send: function (d, e) {
            var f = false;
            if (d === MusicConstants.OP.PLAY && e) {
                f = {
                    uri: e.uri
                };
                if (e.playlist) {
                    f.context = e.playlist;
                } else if (e.album) {
                    f.context = e.album;
                } else if (e.song_list) {
                    var b = e.song_list.indexOf(e.uri);
                    var h = e.song_list.map(function (i) {
                        return i.replace(/.*\//, '');
                    });
                    f.context = 'spotify:trackset:' + escape(e.title || 'Facebook') + ':' + h.join(',');
                }
                if (e.offset) {
                    var c = Math.floor(e.offset / 60);
                    var g = e.offset % 60;
                    f.uri += '#' + c + ':' + g;
                }
            }
            this._createOpRequest(d, f || e).send();
            if (window.MusicDiagnostics) MusicDiagnostics.sendUpdate.curry(MusicProviders.HULK, d, f || e).defer();
        },
        _launchPlayNow: function (b) {
            this._resetLaunchSubscription();
            Dialog.bootstrap(this.config.play_now_url, b);
        },
        _resetLaunchSubscription: function () {
            clearTimeout(this.prePlayNowLaunchTimer);
            this.launchSubscription && this.unsubscribe(this.launchSubscription);
        },
        _pingPorts: function () {
            var b = this.serverConfig.end_port || this.serverConfig.start_port;
            this.portAttemptCount = b - this.serverConfig.start_port + 1;
            for (var c = this.serverConfig.start_port; c <= b; c++) {
                this.uri.setPort(c);
                this._createOpRequest(MusicConstants.OP.VERSION).send();
            }
        },
        _stopPersisting: function () {
            this._persistFor = 0;
            this._resetPersistenceTimers();
            return this;
        },
        _resetPersistenceTimers: function () {
            clearTimeout(this._persistentLoopTimer);
            clearTimeout(this._persistentLoopIterationTimer);
            this._persistentLoopTimer = null;
            this.loopIterationTime = 1000;
        },
        _giveUpPersisting: function (b) {
            this._stopPersisting();
        },
        _pingPortsModeResign: function () {
            if (this._persistFor) {
                var b = this.loopIterationTime * this.config.expBackoffFactor;
                if (b < this.config.maxPollInterval) this.loopIterationTime = b;
                this._persistentLoopIterationTimer = this.attemptGoOnline.bind(this, this.manualPlay).defer(this.loopIterationTime, false);
                this._switchToState(this.STATES.RESIGNED);
            } else this.goOffline();
        },
        _startPolling: function () {
            if (this.state !== this.STATES.ONLINE) return false;
            this._latestRequest = this._createOpRequest(MusicConstants.STATUS_CHANGE_OP.STATUS, {
                returnon: '{login,logout,play,error}',
                returnafter: this.config.longPollPeriod / 1000
            });
            this._latestRequest.subscribe('finish', this._startPolling.bind(this));
            this._latestRequest.send();
        },
        _createOpRequest: function (b, c) {
            if (!this.serverConfig.ops[b]) return false;
            var f = this.config.defaultTimeout;
            if (c && c.returnon) {
                f = 0;
            } else if (this.state === this.STATES.SEARCHING) {
                f = this.config.pingPortsTimeout;
            } else if (this.state === this.STATES.LOGGING_IN) f = this.config.loggingInTimeout;
            var e = this._hasXDomainXHR ? new SpotifyAjaxRequest() : new SpotifyJSONPRequest();
            e.setOption('callbackParam', this.serverConfig.callbackParam).setOption('timeout', f).setData(copy_properties({
                csrf: this.tokens.spotify_csrf,
                oauth: this.tokens.spotify_oauth
            }, (c || {}))).setURI(this.uri.toString() + this.serverConfig.ops[b]);
            var d = this.uri.getPort();
            e.subscribe('success', this._respondToSuccess.bind(this, b, d));
            e.subscribe('error', this._respondToError.bind(this, b, d));
            e.subscribe('timeout', this._respondToError.bind(this, b, d));
            return e;
        },
        _respondToSuccess: function (d, e, b, g) {
            this.uri.setPort(e);
            switch (this.state) {
            case this.STATES.SEARCHING:
                var c = g.client_version;
                var f = g.version;
                if (this._isValidClient(c, f)) {
                    this._switchToState(this.STATES.AUTHENTICATING);
                    this._send(MusicConstants.STATUS_CHANGE_OP.STATUS);
                } else {
                    this.inform(MusicConstants.DIAGNOSTIC_EVENT.WRONG_VERSION);
                    if (this.manualPlay) Dialog.bootstrap('/ajax/music/hulk/version_mismatch.php');
                    this.goOffline();
                    return;
                }
                break;
            case this.STATES.LOGGING_IN:
                this._switchToState(this.STATES.AUTHENTICATING);
                this._send(MusicConstants.STATUS_CHANGE_OP.STATUS);
                break;
            case this.STATES.RETRYING_TOKENS:
            case this.STATES.AUTHENTICATING:
                this._switchToState(this.STATES.ONLINE);
                this._stopPersisting();
                this.oauthTokenInvalid = false;
                this._iframeTryCount = 0;
                this.responseCallback(MusicConstants.DIAGNOSTIC_EVENT.ONLINE);
                this._startPolling();
                new AsyncRequest(this.config.set_installed_url).setData({
                    set: true,
                    csrf: this.getSpotifyCSRFToken()
                }).send();
                break;
            case this.STATES.RESIGNED:
            case this.STATES.OFFLINE:
                return;
            }
            g = g ? this._convertURIFields(g) : {};
            this.error_count = 0;
            this.responseCallback(d, g);
        },
        _respondToError: function (f, h, b, i) {
            switch (this.state) {
            case this.STATES.SEARCHING:
                if (--this.portAttemptCount <= 0) this._pingPortsModeResign();
                return;
            case this.STATES.RESIGNED:
            case this.STATES.OFFLINE:
                return;
            }
            if (f === MusicConstants.OP.VERSION) return;
            var c = bagofholding;
            var g = i || {};
            var d = this._getError(g.error.type);
            switch (d) {
            case 'SERVICE_DEPENDENT_ERRORS':
                var j = this._getError(g.error.type, true);
                if (MusicConstants.STATUS_CHANGE_OP[f] && MusicConstants.ERROR[j] !== 'AUDIO_AD_PLAYING') {
                    var e = {
                        code: j,
                        provider: MusicProviders.HULK
                    };
                    if (g.error_url) e.url = g.error_url;
                    Dialog.bootstrap('/ajax/music/play_error.php', e);
                }
                break;
            case 'PARSE_ERROR':
            case 'LOAD_ERROR':
            case 'TIMEOUT_ERROR':
            case 'SERVICE_NOT_RESPONDING':
            case 'UNKNOWN_SERVICE':
            case 'UNKNOWN_METHOD':
            case 'ERROR_PARSING_REQUEST':
                clearTimeout(this._authenticatingRetry);
                if (d == 'SERVICE_NOT_RESPONDING' && this.state === this.STATES.AUTHENTICATING) {
                    c = this._pingPortsModeResign;
                    break;
                }
                c = this._loadError;
                if (this.state === this.STATES.AUTHENTICATING || this.state === this.STATES.RETRYING_TOKENS) {
                    this._authenticatingRetry = this._send.bind(this, MusicConstants.STATUS_CHANGE_OP.STATUS).defer(this.config.retryPeriod, false);
                } else if (this.state === this.STATES.LOGGING_IN) this._authenticatingRetry = this._send.bind(this, MusicConstants.OP.LOGIN).defer(this.config.retryPeriod, false);
                break;
            case 'INVALID_OAUTH_FOR_CURRENT_USER':
            case 'NO_USER_LOGGED_IN':
                if (this.state === this.STATES.ONLINE) {
                    this.goOffline();
                    this._switchToState(this.STATES.LOGGED_OUT_AND_WAITING);
                    return;
                } else if (this.manualPlay && this.state !== this.STATES.LOGGING_IN) {
                    this._switchToState(this.STATES.LOGGING_IN);
                    this._send(MusicConstants.OP.LOGIN);
                } else if (this.state === this.STATES.RETRYING_TOKENS || this.state === this.STATES.LOGGING_IN) {
                    c = this._authError;
                } else this._switchToState(this.STATES.LOGGED_OUT_AND_WAITING);
                break;
            case 'EXPIRED_OAUTH_TOKEN':
            case 'OAUTH_TOKEN_NOT_VERIFIED':
            case 'LOGIN_BAD_CREDENTIALS':
                this.oauthTokenInvalid = true;
                if (!this.fetchedOauth) {
                    this._switchToState(this.STATES.FETCHING_OAUTH);
                    new AsyncRequest(this.config.fetch_oauth_url).send();
                    return;
                }
            case 'INVALID_CSRF_TOKEN':
            case 'AUTH_FAILED':
            case 'TOKEN_VERIFICATION_TIMEOUT':
            case 'TOKEN_VERIFICATION_DENIED_TOO_MANY_REQUESTS':
                c = this._authError;
                break;
            default:
                break;
            }
            c.call(this, f, g);
        },
        _loadError: function (c, b) {
            if (++this.error_count >= this.config.failureCycles) this.goOffline();
        },
        _authError: function (c, b) {
            if (this.showLoggingin) {
                this._launchPlayNow({
                    step: 10
                });
                this.showLoggingin = false;
            }
            this._cleanupIframe();
            if (this._iframeTryCount <= this.config.iframeTryCycles) {
                this._switchToState(this.STATES.IFRAME_POLLING);
                this._makeIframePollRequest();
                this.responseCallback(MusicConstants.DIAGNOSTIC_EVENT.IFRAME_POLLING);
            } else {
                if (this.manualPlay) Dialog.bootstrap('/ajax/music/login_error.php');
                this.goOffline();
            }
        },
        _makeIframePollRequest: function () {
            var b = window.location.protocol + '//' + window.location.hostname;
            var c = URI(b + this.config.csrf_uri).setQueryData({
                fb_dtsg: Env.fb_dtsg,
                refresh_token: this.oauthTokenInvalid
            });
            var d = URI(this.uri.toString() + this.serverConfig.ops.GET_IFRAME_RESPONSE).setQueryData({
                set_csrf_path: c.toString(),
                cbust: this.serial++
            });
            this._iframe && DOM.remove(this._iframe);
            this._iframe = $N('iframe', {
                className: 'hidden_elem',
                src: d
            });
            document.body.appendChild(this._iframe);
            var e = bagofholding;
            if (++this._iframeTryCount < this.config.iframeTryCycles) {
                e = function () {
                    this._makeIframePollRequest();
                };
            } else e = function () {
                this._pingPortsModeResign();
            };
            this._iframePollTimeout = e.bind(this).defer(this.config.iframeUpdatePeriod, false);
        },
        _cleanupIframe: function () {
            clearTimeout(this._iframePollTimeout);
            this._iframe && DOM.remove(this._iframe);
            this._iframe = null;
        },
        _switchToState: function (b) {
            if (window.MusicDiagnostics) MusicDiagnostics.stateChanged.curry(MusicProviders.HULK, this.state, b).defer();
            this.inform(MusicConstants.DIAGNOSTIC_EVENT.STATE_CHANGE, {
                from: this.state,
                to: b
            });
            this.state = b;
        },
        _convertURIFields: function (c) {
            if (!c) return null;
            if (c.track && c.track.track_resource) {
                var e = c.track;
                c.track = {
                    uri: e.track_resource.location.og,
                    name: e.track_resource.name
                };
                if (e.track_type) c.track.track_type = e.track_type;
                if (e.artist_resource) c.track.artist = e.artist_resource.name;
                if (e.album_resource) c.track.album = e.album_resource.name;
                if (e.length) {
                    c.playing_position = c.playing_position ? Math.floor(c.playing_position) : 0;
                    c.expires_in = e.length - c.playing_position;
                    c.expires_in = c.expires_in < 0 ? 0 : c.expires_in;
                }
            }
            if (c.context && c.context.context_resource && c.context.context_resource.location) {
                var b = c.context;
                c.context = {
                    uri: b.context_resource.location.og,
                    name: b.context_resource.name
                };
                if (b.creator) c.context.creator = b.creator.real_name;
            }
            for (var d in c) if (!MusicConstants.ALLOWED_STATUS_PARAMS[d]) delete c[d];
            if (window.MusicDiagnostics) MusicDiagnostics.receiveUpdate.curry(MusicProviders.HULK, c).defer();
            return c;
        },
        _isValidClient: function (e, d) {
            var b = this._providerArgs.blacklisted_versions;
            var c = this._providerArgs.minimum_version;
            return this.PROTOCOL_VERSIONS.indexOf(d) !== -1 && c && b && e && b.indexOf(e) === -1 && this._greaterOrEqualToMinimumVersion(e, c);
        },
        _greaterOrEqualToMinimumVersion: function (b, e) {
            var g = /(?:\d+\.)+/;
            var c = b.match(g)[0].split('.').slice(0, -1);
            var f = e.match(g)[0].split('.').slice(0, -1);
            if (c.length !== f.length) return false;
            for (var d = 0; d < f.length; d++) if (+c[d] < +f[d]) {
                return false;
            } else if (+c[d] > +f[d]) return true;
            return true;
        },
        _getError: function (b, c) {
            if (!c && !isNaN(parseFloat(b))) if (b >= 4200 && b <= 4399) return this._errorMap['4200 - 4399'];
            return this._errorMap[b];
        },
        _errorMap: {
            '4200 - 4399': 'SERVICE_DEPENDENT_ERRORS',
            4201: 1,
            4202: 2,
            4203: 3,
            4204: 4,
            4205: 5,
            4301: 101,
            4302: 102,
            4303: 103,
            '4000 - 4099': 'GENERAL_RPC_ERRORS',
            4001: 'UNKNOWN_METHOD',
            4002: 'ERROR_PARSING_REQUEST',
            4003: 'UNKNOWN_SERVICE',
            4004: 'SERVICE_NOT_RESPONDING',
            '4100 - 4199': 'RPC_AUTHENTICATION_ERRORS',
            4102: 'LOGIN_BAD_CREDENTIALS',
            4103: 'EXPIRED_OAUTH_TOKEN',
            4104: 'OAUTH_TOKEN_NOT_VERIFIED',
            4105: 'TOKEN_VERIFICATION_DENIED_TOO_MANY_REQUESTS',
            4106: 'TOKEN_VERIFICATION_TIMEOUT',
            4107: 'INVALID_CSRF_TOKEN',
            4108: 'INVALID_OAUTH_FOR_CURRENT_USER',
            4109: 'INVALID_CSRF_PATH',
            4110: 'NO_USER_LOGGED_IN',
            LOAD_ERROR: 'LOAD_ERROR',
            TIMEOUT_ERROR: 'TIMEOUT_ERROR',
            PARSE_ERROR: 'PARSE_ERROR'
        }
    });
})();
