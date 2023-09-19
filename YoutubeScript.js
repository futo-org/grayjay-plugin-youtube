const URL_BASE = "https://www.youtube.com";
const URL_BASE_M = "https://m.youtube.com";
const URL_HOME = "https://www.youtube.com";
const URL_CONTEXT = "https://www.youtube.com";
const URL_CONTEXT_M = "https://m.youtube.com";

const URL_CHANNEL_VIDEOS = "/videos";
const URL_CHANNEL_STREAMS = "/streams";
const URL_SEARCH_SUGGESTIONS = "https://suggestqueries-clients6.youtube.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=";
const URL_SEARCH = "https://www.youtube.com/youtubei/v1/search";
const URL_BROWSE = "https://www.youtube.com/youtubei/v1/browse";
const URL_BROWSE_MOBILE = "https://m.youtube.com/youtubei/v1/browse";
const URL_NEXT = "https://www.youtube.com/youtubei/v1/next";
const URL_GUIDE = "https://www.youtube.com/youtubei/v1/guide";
const URL_SUB_CHANNELS_M = "https://m.youtube.com/feed/channels";
const URL_SUBSCRIPTIONS_M = "https://m.youtube.com/feed/subscriptions";
const URL_PLAYLIST = "https://youtube.com/playlist?list=";
const URL_PLAYLISTS_M = "https://m.youtube.com/feed/library";

const URL_LIVE_CHAT_HTML = "https://www.youtube.com/live_chat?v=";
const URL_LIVE_CHAT = "https://www.youtube.com/youtubei/v1/live_chat/get_live_chat";

const URL_WATCHTIME = "https://www.youtube.com/api/stats/watchtime";

const URL_PLAYER = "https://youtubei.googleapis.com/youtubei/v1/player";

const URL_YOUTUBE_DISLIKES = "https://returnyoutubedislikeapi.com/votes?videoId=";

//Newest to oldest
const CIPHER_TEST_HASHES = ["4eae42b1", "f98908d1", "0e6aaa83", "d0936ad4", "8e83803a", "30857836", "4cc5d082", "f2f137c6", "1dda5629", "23604418", "71547d26", "b7910ca8"];
const CIPHER_TEST_PREFIX = "/s/player/";
const CIPHER_TEST_SUFFIX = "/player_ias.vflset/en_US/base.js";

const PLATFORM = "YouTube";
const PLATFORM_CLAIMTYPE = 2;

const BROWSE_TRENDING = "FEtrending";
const BROWSE_WHAT_TO_WATCH = "FEwhat_to_watch";
const BROWSE_SUBSCRIPTIONS = "FEsubscriptions";

const SEARCH_CHANNELS_PARAM = "EgIQAg%3D%3D";
const SEARCH_PLAYLISTS_PARAM = "EgIQAw%3D%3D";

const REGEX_VIDEO_URL_DESKTOP = new RegExp("https://(.*\\.)?youtube\\.com/watch.*?v=(.*)");
const REGEX_VIDEO_URL_SHARE = new RegExp("https://youtu\\.be/(.*)");
const REGEX_VIDEO_URL_SHARE_LIVE = new RegExp("https://(.*\\.)?youtube\\.com/live/(.*)");
const REGEX_VIDEO_URL_SHORT = new RegExp("https://(.*\\.)?youtube\\.com/shorts/(.*)");

const REGEX_VIDEO_CHANNEL_URL = new RegExp("https://(.*\\.)?youtube\\.com/channel/.*");
const REGEX_VIDEO_CHANNEL_URL2 = new RegExp("https://(.*\\.)?youtube\\.com/user/.*");
const REGEX_VIDEO_CHANNEL_URL3 =  new RegExp("https://(.*\\.)?youtube\\.com/@.*");

const REGEX_VIDEO_PLAYLIST_URL = new RegExp("https://(.*\\.)?youtube\\.com/playlist\\?list=.*");

const REGEX_INITIAL_DATA = new RegExp("<script.*?var ytInitialData = (.*?);<\/script>");
const REGEX_INITIAL_PLAYER_DATA = new RegExp("<script.*?var ytInitialPlayerResponse = (.*?});");

const REGEX_HUMAN_NUMBER = new RegExp("([0-9\\.,]*)([a-zA-Z]*)");
const REGEX_HUMAN_AGO = new RegExp("([0-9]*) ([a-zA-Z]*) ago");

const REGEX_DATE_HUMAN = new RegExp("([A-Za-z]*) ([0-9]*), ([1-9][0-9][0-9][0-9])");
const REGEX_DATE_ISO = new RegExp("([1-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])");
const REGEX_DATE_EU = new RegExp("([0-9][0-9])-([0-9][0-9])-([1-9][0-9][0-9][0-9])");
const REGEX_DATE_US = new RegExp("([0-9][0-9])/([0-9][0-9])/([1-9][0-9][0-9][0-9])");

const REGEX_CONTINUATION = new RegExp("\"continuation\":\"(.*?)\"");

const REGEX_INNERTUBE_KEY = new RegExp("\"INNERTUBE_API_KEY\":\"(.*?)\"");

const REGEX_YTCFG = new RegExp(/ytcfg\.set\((.*?)\);/g);

const REGEX_URL_KIND = new RegExp(/.*?\?kind=([^&]*)/g);
const REGEX_ASR = new RegExp(/<text .*?start="(.*?)" .*?dur="(.*?)".*?>(.*?)<\/text>/gms);

const USER_AGENT_WINDOWS = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36";
const USER_AGENT_PHONE = "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.5481.153 Mobile Safari/537.36";
const USER_AGENT_TABLET = "Mozilla/5.0 (iPad; CPU OS 13_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/87.0.4280.77 Mobile/15E148 Safari/604.1";
const USER_AGENT_IOS = "com.google.ios.youtube/17.31.4(iPhone14,5; U; CPU iOS 15_6 like Mac OS X; US)";
const USER_AGENT_ANDROID = "com.google.android.youtube/17.31.35 (Linux; U; Android 12; US) gzip";
const USER_AGENT_TVHTML5_EMBED = "Mozilla/5.0 (CrKey armv7l 1.5.16041) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.0 Safari/537.36";

const USE_MOBILE_PAGES = true;
const USE_ANDROID_FALLBACK = false;
const USE_IOS_FALLBACK = true;

const SORT_VIEWS_STRING = "Views";
const SORT_RATING_STRING = "Rating";

var config = {};
var _settings = {};
var _clientContext = {};
var _clientContextAuth = {};
var visitorId = "";
var langDisplayRegion = "en-US";
var langDisplay = "en";
var langRegion = "US";

var _prefetchHome = null;
var _prefetchHomeAuth = null;
var _prefetchHomeUsed = false;

function getClientContext(isAuth = false) {
	return (isAuth) ? _clientContextAuth : _clientContext;
}

//#region Source Methods
source.setSettings = function(settings) {
	_settings = settings;
}
source.enable = (conf, settings, saveStateStr) => {
	config = conf ?? {};
	_settings = settings ?? {};

	//log("Settings:\n" + JSON.stringify(settings, null, "   "));

	let didSaveState = false;
	try {
	    if(saveStateStr) {
	        const saveState = JSON.parse(saveStateStr);
	        if(saveState &&
	            saveState.clientContext &&
	            saveState.clientContextAuth) {
                _clientContext = saveState.clientContext;
                _clientContextAuth = saveState.clientContextAuth;
                _prefetchHomeUsed = true;
                _prefetchHome = undefined;
                _prefetchHomeAuth = undefined;
                didSaveState = true;
                log("Using save state");
	        }
	    }
	}
    catch(ex) {
        log("Failed to parse saveState:" + ex);
        didSaveState = false;
    }
    if(!didSaveState) {
	    log(config);

        const isLoggedIn = bridge.isLoggedIn();
        let batchReq = http.batch()
            .GET(URL_CONTEXT, {"Accept-Language": "en-US" }, false);
        if(isLoggedIn)
            batchReq = batchReq.GET(URL_CONTEXT_M, { "User-Agent": USER_AGENT_TABLET, "Accept-Language": "en-US" }, true);
        const batchResp = batchReq.execute();

        if(!batchResp[0].isOk) throw new ScriptException("Failed to request context");
        if(isLoggedIn && !batchResp[1].isOk) throw new ScriptException("Failed to request context");

        _clientContext = getClientConfig(batchResp[0].body)//requestClientConfig(false);
        if(isLoggedIn) {
            log("Logged in, fetching auth context");
            _clientContextAuth = getClientConfig(batchResp[1].body)//requestClientConfig(USE_MOBILE_PAGES, true);

            _prefetchHomeAuth = getInitialData(batchResp[1].body, true);
        }
        else {
            _clientContextAuth = _clientContext;
            _prefetchHomeAuth = null;
        }
        _prefetchHome = getInitialData(batchResp[0].body, false);
        _prefetchHomeAuth = _prefetchHomeAuth ?? _prefetchHome;
        _prefetchHomeUsed = false;
    }


	let innerContext = _clientContext.INNERTUBE_CONTEXT;
	let innerContextAuth = _clientContextAuth.INNERTUBE_CONTEXT;

	if(IS_TESTING)
		console.log("Context", innerContext);

	if(innerContext && innerContext.client) {
		innerContext.client.hl = langDisplay;
		innerContext.client.gl = langRegion;
		innerContext.client.visitorData = undefined;
	}
	if(innerContextAuth && innerContextAuth.client) {
		innerContextAuth.client.hl = langDisplay;
		innerContextAuth.client.gl = langRegion;
		innerContextAuth.client.visitorData = undefined;
	}

	return _clientContextAuth;
};

source.saveState = () => {
    return JSON.stringify({
        clientContext: _clientContext,
        clientContextAuth: _clientContextAuth
    });
};


//Home
source.getHome = () => {
    let initialData = null;
    if(!_prefetchHomeUsed && _prefetchHomeAuth != null) {
        log("Using pre-fetched Home Page")
        initialData = _prefetchHomeAuth;
        _prefetchHomeUsed = true;
    }
    else
        initialData = requestInitialData(URL_HOME, USE_MOBILE_PAGES, true);
	const tabs = extractPage_Tabs(initialData);
	if(tabs.length == 0)
		throw new ScriptException("No tabs found..");
	return new RichGridPager(tabs[0], {}, USE_MOBILE_PAGES, true);
};

//Search
source.searchSuggestions = (query) => {
	const suggestionsResp = http.GET(URL_SEARCH_SUGGESTIONS + query + "&hl=" + langDisplay.toLowerCase() + "&gl=" + langRegion.toLowerCase(), {});
	if(!suggestionsResp.isOk)
		throw new ScriptException("Failed to get suggestions");
	const suggestionsRaw = suggestionsResp.body;

	const startIndex = suggestionsRaw.indexOf("(") + 1;
	if(startIndex < 0) throw new ScriptException("Failed to filter suggestions (startIndex)");
	const endIndex = suggestionsRaw.lastIndexOf(")");
	if(endIndex < 0) throw new ScriptException("Failed to filter suggestions (endIndex)");
	const suggestions = JSON.parse(suggestionsRaw.substring(startIndex, endIndex));
	if(suggestions && suggestions.length >= 2) {
		if(suggestions[1] && suggestions[1].length > 0)
			return suggestions[1].filter(x=>x.length == 3).map(x=>x[0]);
	}

	return [];
};
source.getSearchCapabilities = () => {
	return {
		types: [Type.Feed.Videos, Type.Feed.Live],
		sorts: [Type.Order.Chronological, SORT_VIEWS_STRING, SORT_RATING_STRING],
		filters: FILTERS
	};
}
source.searchQuery = function(type, order, filters) {
	return searchQueryToSP(order, type, filters);
};
source.search = function(query, type, order, filters) {
	const param = (order || (filters && Object.keys(filters).length > 0 )) ?
		searchQueryToSP(order, type, filters) :
		null;
	if(IS_TESTING && param)
		console.log("Search Param:", param);

	const data = requestSearch(query, false, param);
	const searchResults = extractSearch_SearchResults(data);

	if(searchResults.videos)
		return new SearchItemSectionVideoPager(searchResults);
	return [];
};
source.searchChannels = function(query) {
    const data = requestSearch(query, false, SEARCH_CHANNELS_PARAM);
    const searchResults = extractSearch_SearchResults(data);

    if(searchResults.channels)
        return new SearchItemSectionChannelPager(searchResults);
    return [];
};

source.getSearchChannelContentsCapabilities = function(){ return { types: [Type.Feed.Mixed], sorts: [] }; }
source.searchChannelContents = function(channelUrl, query, type, order, filters) {
	const initialData = requestInitialData(channelUrl + "/search?query=" + query, USE_MOBILE_PAGES, true);
	const tabs = extractPage_Tabs(initialData, {});

	if(IS_TESTING) {
		console.log("Initial Data", initialData);
		console.log("Tabs", tabs);
	}

	const tab = tabs.find(x=>x.title == "Search");

	if(tab)
		return new RichGridPager(tab, {}, USE_MOBILE_PAGES, true);
	else
		throw new ScriptException("No search tab found");
}

source.getChannelUrlByClaim = (claimType, claimValues) => {
	const values = claimValues.values();
	if (values.length == 0)
		return null;
	const atName = values.find(x => x.startsWith("@"));
	if (atName)
		return URL_BASE + "/" + atName;
	else
		return URL_BASE + "/channel/" + values[0];
};
source.getChannelTemplateByClaimMap = () => {
	return {
		//Youtube
		2: {
			0: URL_BASE + "/{{CLAIMVALUE}}",
			1: URL_BASE + "/channel/{{CLAIMVALUE}}",
		}
	};
};


//Video
source.isContentDetailsUrl = (url) => {
	return REGEX_VIDEO_URL_DESKTOP.test(url) || REGEX_VIDEO_URL_SHARE.test(url) || REGEX_VIDEO_URL_SHARE_LIVE.test(url) || REGEX_VIDEO_URL_SHORT.test(url);
};
source.getContentDetails = (url, useAuth) => {
	useAuth = !!_settings?.authDetails || !!useAuth;

    url = convertIfShortUrl(url);

	const clientContext = getClientContext(false);

	const videoId = extractVideoIDFromUrl(url);
	if(IS_TESTING)
		console.log("VideoID:", videoId);

	const useLogin = useAuth && bridge.isLoggedIn();

	const headersUsed = (useLogin) ? getAuthContextHeaders(false) : {};
	headersUsed["Accept-Language"] = "en-US";

	const batch = http.batch().GET(url, headersUsed, useLogin);
		
	if(videoId && _settings["youtubeDislikes"])
		batch.GET(URL_YOUTUBE_DISLIKES + videoId, {}, false);
	const resps = batch.execute();

	if(!resps[0].isOk)
		throw new ScriptException("Failed to request page [" + resps[0].code + "]");

	const html = resps[0].body;//requestPage(url);
	const initialData = getInitialData(html);
	let initialPlayerData = getInitialPlayerData(html);

    if(initialPlayerData.playabilityStatus.status == "UNPLAYABLE")
		throw new UnavailableException("Video unplayable");
	
	const jsUrlMatch = html.match("PLAYER_JS_URL\"\\s?:\\s?\"(.*?)\"");
	const jsUrl = (jsUrlMatch) ? jsUrlMatch[1] : clientContext.PLAYER_JS_URL;
	const isNewCipher = prepareCipher(jsUrl);
	
	const ageRestricted = initialPlayerData.playabilityStatus?.reason?.indexOf("your age") > 0 ?? false;
	if (ageRestricted) {
		if (_settings["allowAgeRestricted"]) {
			const sts = _sts[jsUrl];
			if (!initialPlayerData.streamingData && sts) {
				initialPlayerData = requestTvHtml5EmbedStreamingData(initialPlayerData.videoDetails.videoId, sts);
				console.log("Filled missing streaming data using TvHtml5Embed.");
			}
		} else {
			throw new AgeException("Age restricted videos can be allowed using the plugin settings");
		}
	}
	
	if (initialPlayerData.playabilityStatus?.status == "LOGIN_REQUIRED") {
		throw new ScriptException("Login required\nReason: " + initialPlayerData?.playabilityStatus?.reason);
	}
		
	if(IS_TESTING) {
		console.log("Initial Data", initialData);
		console.log("Initial Player Data", initialPlayerData);
	}

	const videoDetails = extractVideoPage_VideoDetails(initialData, initialPlayerData, {
		url: url
	}, jsUrl);

	if(!videoDetails.live && 
		(videoDetails.video?.videoSources == null || videoDetails.video.videoSources.length == 0) &&
		(!videoDetails.datetime || videoDetails.datetime < (((new Date()).getTime() / 1000) - 60 * 60))) {
        if(isNewCipher) {
            log("Unavailable video found with new cipher, clearing cipher");
            clearCipher(jsUrl);
        }
		throw new UnavailableException("No sources found");
    }

	//Substitute Dash manifest from Android
	if(USE_ANDROID_FALLBACK && videoDetails.dash && videoDetails.dash.url) {
		const androidData = requestAndroidStreamingData(videoDetails.id.value);
		if(IS_TESTING)
			console.log("Android Streaming Data", androidData);
		if(androidData?.streamingData?.dashManifestUrl) {
			log("Using Android dash substitute");
			const existingUrl = videoDetails.dash.url;
			videoDetails.dash.url = androidData.streamingData.dashManifestUrl;
			if(existingUrl == videoDetails.live?.url)
				videoDetails.live.url = androidData.streamingData.dashManifestUrl;
		}
	}
	//Substitute HLS manifest from iOS
	if(USE_IOS_FALLBACK && videoDetails.hls && videoDetails.hls.url) {
		const iosData = requestIOSStreamingData(videoDetails.id.value);
		if(IS_TESTING)
			console.log("IOS Streaming Data", iosData);
		if(iosData?.streamingData?.hlsManifestUrl) {
			log("Using iOS HLS substitute");
			const existingUrl = videoDetails.hls.url;
			videoDetails.hls.url = iosData.streamingData.hlsManifestUrl;
			if(existingUrl == videoDetails.live?.url)
				videoDetails.live.url = iosData.streamingData.hlsManifestUrl;
		}
	}

	if(resps.length > 1) {
		try {
            const youtubeDislikeInfoResponse = resps[1]
            if(youtubeDislikeInfoResponse.isOk) {
                const youtubeDislikeInfo = JSON.parse(youtubeDislikeInfoResponse.body);
                if(IS_TESTING)
                    console.log("Youtube Dislike Info", youtubeDislikeInfo);
                videoDetails.rating = new RatingLikesDislikes(videoDetails.rating.likes, youtubeDislikeInfo.dislikes);
            }
        }
        catch(ex) {
            console.log("Failed to fetch Youtube Dislikes", ex);
        }
	}

	const finalResult = videoDetails;
	if(!!_settings["youtubeActivity"] && useLogin) {
		finalResult.__playerData = initialPlayerData;
		finalResult.getPlaybackTracker = function(url) {
			return source.getPlaybackTracker(url, initialPlayerData)
		};
	}

	return finalResult;
};
source.getLiveChatWindow = function(url) {
	const id = extractVideoIDFromUrl(url);
	if(!id)
		throw new ScriptException("No valid id found");

	const chatUrl = URL_LIVE_CHAT_HTML + id;

	const chatHtmlResp = http.GET(chatUrl, {}, false);
	if(!chatHtmlResp.isOk)
		return null;
	else {
		return {
			url: chatUrl,
			removeElements: [ "yt-live-chat-header-renderer", "#ticker" ]
		};
	}
}
source.getLiveEvents = function(url) {
	const id = extractVideoIDFromUrl(url);
	if(!id)
		throw new ScriptException("No valid id found");

	const chatHtmlResp = http.GET(URL_LIVE_CHAT_HTML + id, {}, false);
	if(!chatHtmlResp.isOk)
		throw new ScriptException("Failed to get chat html");
	const chatHtml = chatHtmlResp.body;


	const matchKey = chatHtml.match(REGEX_INNERTUBE_KEY);
	if(!matchKey || matchKey.length < 1)
		throw new ScriptException("Live chat key not found");

	const matchContinuation = chatHtml.match(REGEX_CONTINUATION);
	if(!matchContinuation || matchContinuation.length < 1)
		throw new ScriptException("Live chat continuation not found");

	return new YTLiveEventPager(matchKey[1], matchContinuation[1]);
}

source.getPlaybackTracker = function(url, initialPlayerData) {
	if(!_settings["youtubeActivity"] || !bridge.isLoggedIn())
		return null;
	if(!initialPlayerData) {
		const video = source.getContentDetails(url, true);
		initialPlayerData = video.__playerData;
		if(!initialPlayerData)
			throw new ScriptException("No playerData for playback tracker");
	}
	return new YoutubePlaybackTracker(initialPlayerData);
}
class YoutubePlaybackTracker extends PlaybackTracker {
	constructor(playerData) {
		super(10 * 1000);
		this.playerData = playerData;

		this.cpn = randomString(16);
		this.idpj = -Math.floor(10 * Math.random());
		this.ldpj = -Math.floor(40 * Math.random());
		this.lastPosition = 0;
		
		this.watchUrl = playerData.playbackTracking?.videostatsWatchtimeUrl?.baseUrl;
		this.playbackUrl = playerData.playbackTracking?.videostatsPlaybackUrl?.baseUrl;
		if(!this.playbackUrl || !this.watchUrl)
			throw new ScriptException("Playback tracking unavailable");

		this.playbackUrlBase = this.playbackUrl.substring(0, this.playbackUrl.indexOf("?"));
		this.watchUrlBase = this.watchUrl.substring(0, this.watchUrl.indexOf("?"));
		this.watchParams = parseQueryString(this.watchUrl);
		this.playbackParams = parseQueryString(this.playbackUrl);
		
		delete this.playbackParams["fexp"];
	    delete this.watchParams["fexp"];

		if(this.playbackParams["plid"])// && !this.watchParams["plid"])
			this.watchParams["plid"] = this.playbackParams["plid"];
		if(this.playbackParams["of"])// && !this.watchParams["of"])
			this.watchParams["of"] = this.playbackParams["of"];
		if(this.playbackParams["vm"])// && !this.watchParams["vm"])
			this.watchParams["vm"] = this.playbackParams["vm"];
		if(this.playbackParams["ei"])// && !this.watchParams["ei"])
			this.watchParams["ei"] = this.playbackParams["ei"];
		if(this.playbackParams["cl"])// && !this.watchParams["cl"])
			this.watchParams["cl"] = this.playbackParams["cl"];

		const missing = ["plid", "of", "vm", "ei", "cl"].filter(x=>!this.watchParams[x]);
		if(missing && missing.length > 0)
			throw new ScriptException("Missing playback tracking parameter: " + missing.join(","));
	}
	onInit(seconds) {
		//Initial playback
		const resp = http.GET(constructUrl(this.playbackUrlBase, this.getProgressParameters(this.playbackParams, seconds)),
			getAuthContextHeaders(false), true);
		if(!resp.isOk)
			throw new ScriptException("Failed to initial playback:", resp.body);
		else if(resp.body && resp.body.indexOf("ERROR"))
			throw new ScriptException("Failed to initial playback:", resp.body);
	}
	onProgress(seconds, isPlaying) {
		const resp = http.GET(constructUrl(this.watchUrlBase, this.getProgressParameters(this.watchParams, seconds, !isPlaying)),
			getAuthContextHeaders(false), true);
		if(!resp.isOk)
			throw new ScriptException("Failed to update watchtime:", resp.body);
		else if(resp.body && resp.body.indexOf("ERROR"))
			throw new ScriptException("Failed to update watchtime:", resp.body);
	}

	getProgressParameters(baseParameters, progress, paused) {
		const rt = parseFloat(progress);
		const position = parseFloat(rt);

		let q = {};
		for(let key in baseParameters) {
			q[key] = baseParameters[key];
		}
		//q["cl"] = "547360702"; //NS
		q["ns"] = "yt"; //NS
		q["cmt"] = position; //Progress, Seconds
		q["cpn"] = this.cpn; //16 character string
		q["state"] = (paused) ? "paused" : "playing"; //State
		q["volume"] = "100"; //Volume
		q["lact"] = parseInt(progress * 1000); //Miliseconds
		q["fmt"] = "136"; //Format (itag)
		q["afmt"] = "251"; //Format Audio (itag)
		q["euri"] = ""; //Empty
		q["subscribed"] = "1"; //Subscribed
		q["cbr"] = "Chrome"; //Browser
		q["cbrver"] = "114.0.0.0"; //Browser version
		q["c"] = "WEB"; //Client Type
		q["cver"] = "2.20230427.04.00"; //Client version
		q["cplayer"] = "UNIPLAYER"; //Player Name
		q["cos"] = "Windows"; //OS
		q["cosver"] = "10"; //OS
		q["cplatform"] = "DESKTOP"; //Platform
		q["hl"] = "en_US"; //Language/Region
		q["cr"] = "US"; //Region
		q["idpj"] = this.idpj; //Random -0..-10
		q["ldpj"] = this.ldpj; //Random -0..-40
		if(!paused)
			q["rtn"] = (position + 10); //Next RT
		else
			q["final"] = 1;
		q["rt"] = position; //Current time spend on page
		q["rti"] = parseInt(position); //Current time spend on page (integer)
		q["st"] = this.lastPosition; //Last time
		q["et"] = position; //Current time
		//q["sourceid"] = "y"; //Always y
		q["ver"] = "2"; //Always y
		q["muted"] = "0"; //If muted
		//q["sdetails"] = "p:/feed/subscriptions" //Source page

		this.lastPosition = position;
		return q;
	}
}

function constructUrl(base, queryParams) {
	let hasQ = (base.indexOf("?") > 0);
	let url = base;
	for(let key in queryParams) {
		if(queryParams[key] === undefined)
			url += "";
		else if(!hasQ) {
			url += "?" + key + "=" + queryParams[key];
			hasQ = true;
		}
		else {
			if(queryParams[key] === "")
				url += "&" + key;
			else
				url += "&" + key + "=" + queryParams[key];
		}
	}
	return url;
}

source.getComments = (url) => {
    url = convertIfShortUrl(url);

	const html = requestPage(url);
	const initialData = getInitialData(html);
	const contents = initialData.contents;
	const result = contents.twoColumnWatchNextResults?.results?.results?.contents ??
		null;	//Add any alternative containers
	if(!result)
		return new CommentPager([], false);
	return extractTwoColumnWatchNextResultContents_CommentsPager(url, result);
};
source.getSubComments = (comment) => {
	if(typeof comment === 'string')
		comment = JSON.parse(comment);
	if(comment.context?.replyContinuation) {
		return requestCommentPager(comment.contextUrl, comment.context.replyContinuation);
	}
	else
		return new CommentPager([], false);
};



//Channel
source.isChannelUrl = (url) => {
	return REGEX_VIDEO_CHANNEL_URL.test(url) || 
		REGEX_VIDEO_CHANNEL_URL2.test(url) || 
		REGEX_VIDEO_CHANNEL_URL3.test(url)
};
source.getChannel = (url) => {
	const initialData = requestInitialData(url);
	return extractChannel_PlatformChannel(initialData, url);
};

source.getChannelCapabilities = () => {
	return {
		types: [Type.Feed.Videos, Type.Feed.Streams],
		sorts: [Type.Order.Chronological, "Popular"]
	};
}
source.getChannelContents = (url, type, order, filters) => {
	let targetTab = null;

	switch(type) {
		case undefined:
		case null:
		case Type.Feed.Videos:
			targetTab = "Videos";
			url = url + URL_CHANNEL_VIDEOS;
			break;
		case Type.Feed.Streams:
			targetTab = "Live";
			url = url + URL_CHANNEL_STREAMS;
			break;
		case Type.Feed.Live:
			targetTab = "Home";
			url = url;
			break;
		default:
			throw new ScriptException("Unsupported type: " + type);
	}

	const useAuth = bridge.isLoggedIn() && !!_settings?.authChannels;
	if(useAuth)
		log("USING AUTH FOR CHANNEL");

	const initialData = requestInitialData(url, false, useAuth);
	const channel = extractChannel_PlatformChannel(initialData, url);
	const contextData = {
		authorLink: new PlatformAuthorLink(new PlatformID(PLATFORM, channel.id.value, config.id, PLATFORM_CLAIMTYPE), channel.name, channel.url, channel.thumbnail)
	};
	const tabs = extractPage_Tabs(initialData, contextData);
	
	const tab = tabs.find(x=>x.title == targetTab);
	if(!tab) 
		return new VideoPager([], false);
	if(IS_TESTING)
		console.log("Tab", tab);

	if(type == Type.Feed.Live) {
		if(tab.shelves) {
			const featured = tab.shelves.find(x=>x?.name == "Featured");
			if(featured && featured.videos && featured.videos.length > 0) {
				const live = featured.videos.find(x=>x.isLive);
				if(live)
					return new VideoPager([live], false);
			}
		}
		return new VideoPager([], false);
	}
	//throw new ScriptException("Could not find tab: " + targetTab);

	return new RichGridPager(tab, contextData);
};

source.searchPlaylists = function(query, type, order, filters) {
    const data = requestSearch(query, false, SEARCH_PLAYLISTS_PARAM);
    if(IS_TESTING)
        console.log("Search data:", data);
    const searchResults = extractSearch_SearchResults(data);

    if(searchResults.playlists)
        return new SearchItemSectionPlaylistPager(searchResults);
    return new PlaylistPager([]);
};
source.isPlaylistUrl = function(url) {
    return REGEX_VIDEO_PLAYLIST_URL.test(url);
};
source.getPlaylist = function (url) {
	log(`Getting playlist: ${url}`);

	const initialData = requestInitialData(url, USE_MOBILE_PAGES, true);
	const contents = initialData.contents;

	if(IS_TESTING)
	    console.log("Initial data", initialData);

    const playlistHeaderRenderer = initialData?.header?.playlistHeaderRenderer;
    if(!playlistHeaderRenderer) {
        log("No playlist header found");
        return null;
    }

	if(IS_TESTING)
	    console.log("initialData", initialData);

    const renderer = initialData?.contents?.singleColumnBrowseResultsRenderer ?? initialData?.contents?.twoColumnBrowseResultsRenderer;
    if(renderer) {
        if(!renderer.tabs) {
            log("No tabs found");
            return null;
        }
        const tab = renderer.tabs[0];
        const tabRenderer = tab.tabRenderer;
        const playlistList = findRenderer(tab, "playlistVideoListRenderer");
        if(!playlistList || !playlistList.contents) {
            log("playlistVideoListRenderer not found");
            return null;
		}
		
        const id = playlistHeaderRenderer.playlistId;
		const title = extractText_String(playlistHeaderRenderer.title);
		const videos = [];
		let continuationToken = null;
        for(let playlistRenderer of playlistList.contents) {
            switchKey(playlistRenderer, {
                playlistVideoRenderer(renderer) {
                    const video = extractPlaylistVideoRenderer_Video(renderer);
                    if(video)
                        videos.push(video);
				},
				continuationItemRenderer(continueRenderer) {
					continuationToken = continueRenderer?.continuationEndpoint?.continuationCommand?.token;
				}
            });
		}

		//TODO: Make a proper pager
		while (continuationToken) {
			const newData = validateContinuation(()=>requestBrowse({
				continuation: continuationToken
			}, USE_MOBILE_PAGES, true));

			if (newData.length < 1) {
				break;
			}

			continuationToken = null;
			for(let playlistRenderer of newData) {
				switchKey(playlistRenderer, {
					playlistVideoRenderer(renderer) {
						const video = extractPlaylistVideoRenderer_Video(renderer);
						if(video)
							videos.push(video);
					},
					continuationItemRenderer(continueRenderer) {
						continuationToken = continueRenderer?.continuationEndpoint?.continuationCommand?.token;
					}
				});
			}
		}

		let thumbnail = null;
		if(videos && videos.length > 0 && 
			videos[0].thumbnails?.sources && 
			videos[0].thumbnails.sources.length > 0)
			thumbnail = videos[0].thumbnails.sources[videos[0].thumbnails.sources.length - 1].url;

		
        return new PlatformPlaylistDetails({
            url: url,
			id: new PlatformID(PLATFORM, playlistHeaderRenderer?.playlistId, config.id),
			author: extractRuns_AuthorLink(playlistHeaderRenderer?.ownerText?.runs),
            name: title,
            thumbnail: thumbnail,
            videoCount: videos.length,
            contents: new VideoPager(videos)
        });
    }
    return null;
};
source.getUserPlaylists = function() {
	if (!bridge.isLoggedIn()) {
		bridge.log("Failed to retrieve subscriptions page because not logged in.");
		return [];
	}

	let subsPage = requestPage(URL_PLAYLISTS_M, { "User-Agent": USER_AGENT_PHONE }, true);
	let result = getInitialData(subsPage);
	if(IS_TESTING)
	    console.log("Initial Data", result);

    return switchKey(result.contents, {
        singleColumnBrowseResultsRenderer(renderer) {
			if(!renderer.tabs || renderer.tabs <= 0)
				return [];
			const tab = renderer.tabs[0];
			const sections = tab?.tabRenderer?.content?.sectionListRenderer?.contents;
			if(!sections) {
				log("No sections found on library page");
				return [];
			}

            let playlistsItems = null;

			let playlistShelf = sections.find(x=>x.shelfRenderer && extractText_String(x.shelfRenderer.title) == "Playlists");

			let playlistItemSection = playlistShelf != null ? null : sections.find(x=>
			    x.itemSectionRenderer &&
			    x.itemSectionRenderer.contents && x.itemSectionRenderer.contents.length > 0 &&
			    x.itemSectionRenderer.contents[0].horizontalCardListRenderer &&
			    x.itemSectionRenderer.contents[0].horizontalCardListRenderer.cards &&
			    extractText_String(x.itemSectionRenderer.contents[0].horizontalCardListRenderer.header?.richListHeaderRenderer?.title) == "Playlists");

			if(playlistShelf != null)
                playlistsItems = playlistShelf.shelfRenderer?.content?.verticalListRenderer?.items;
            else if(playlistItemSection != null)
                playlistsItems = playlistItemSection.itemSectionRenderer.contents[0].horizontalCardListRenderer.cards;
            else {
                log("No playlists found");
                return [];
            }

			if(!playlistsItems) {
			    log("No container with playlists found");
			    return [];
			}
			if(IS_TESTING)
			    console.log("Playlist Items:", playlistsItems);

			let playlistUrls = [];
			for(let playlist of playlistsItems) {
			    switchKey(playlist, {
			        compactPlaylistRenderer(renderer) {
                        const playlistUrl = extractNavigationEndpoint_Url(renderer.navigationEndpoint);
                        if(playlistUrl)
                            playlistUrls.push(playlistUrl);
			        },
			        playlistCardRenderer(renderer) {
			            const playlistUrl = extractNavigationEndpoint_Url(renderer.navigationEndpoint);
                        if(playlistUrl)
                            playlistUrls.push(playlistUrl);
			        }
			    });
			}
            return playlistUrls;
        },
        default(name) {
		    log("No submenu found on subscriptions page");
            return [];
        }
    });


	return result;
};

source.getUserSubscriptions = function() {
	if (!bridge.isLoggedIn()) {
		bridge.log("Failed to retrieve subscriptions page because not logged in.");
		return [];
	}
	
	let subsPage = requestPage(URL_SUB_CHANNELS_M, { "User-Agent": USER_AGENT_PHONE }, true);
	let result = getInitialData(subsPage);

	if(IS_TESTING) {
		console.log("Initial Data:", result);
	}

	return switchKey(result.contents, {
		singleColumnBrowseResultsRenderer(renderer) {
			if(!renderer.tabs || renderer.tabs <= 0)
				return [];
			let tab = renderer.tabs[0];
			let sectionListRenderer = tab?.tabRenderer?.content?.sectionListRenderer;
			let subMenu = sectionListRenderer?.subMenu;
			if(sectionListRenderer?.targetId == "browse-feedFEchannels") {
				const sectionContents = sectionListRenderer?.contents;
				const itemContents = sectionContents ? sectionContents[0].itemSectionRenderer?.contents : null;
				if(!itemContents || itemContents[0].channelListItemRenderer) {
					let subs = [];
					for(let item of itemContents) {
						switchKey(item, {
							channelListItemRenderer(itemRenderer) {
								const authorUrl = extractNavigationEndpoint_Url(itemRenderer.navigationEndpoint);
								if(authorUrl)
									subs.push(authorUrl);
							}
						});
					}
					return subs;
				}
			}
			if(!subMenu) {
				bridge.log("No subscriptions found..");
				return [];
			}
			return switchKey(subMenu, {
				channelListSubMenuRenderer(menuRenderer) {
					let subs = [];
					if(menuRenderer.contents) {
						for(let item of menuRenderer.contents) {
							switchKey(item, {
								channelListSubMenuAvatarRenderer(itemRenderer) {
									const author = extractChannelListSubMenuAvatarRenderer_URL(itemRenderer);
									if(author)
										subs.push(author);
								},
								default(name) { 
									log("Unknown menu item renderer: " + name);
								}
							});
						}
					}
					return subs;
				},
				default(name) {
					log("Unknown menu renderer: " + name);
					return [];
				}
			});
		},
		default() {
			log("Failed to retrieve subscriptions page, wrong items found")
			return [];
		}
	});

	/*
	const data = requestGuide(clientContext.DELEGATED_SESSION_ID);
	const channels = extractGuide_Channels(data);

	if(IS_TESTING) {
		console.log(data);
		console.log(channels);
	}

	return channels.map(x=>x.url); */
}



//#endregion

function extractVideoIDFromUrl(url) {
	let match = url.match(REGEX_VIDEO_URL_DESKTOP);
	if(match)
		return removeQuery(match[2]);

	match = url.match(REGEX_VIDEO_URL_SHARE);
	if(match)
		return removeQuery(match[1]);

	match = url.match(REGEX_VIDEO_URL_SHARE_LIVE);
	if(match)
		return removeQuery(match[2]);

	match = url.match(REGEX_VIDEO_URL_SHORT);
	if(match)
		return removeQuery(match[2]);

	return null;
}
function removeQuery(urlPart) {
	if(!urlPart)
		return urlPart;
	if(urlPart.indexOf("?") > 0)
		return urlPart.substring(0, urlPart.indexOf("?"));
	else if(urlPart.indexOf("&") > 0)
		return urlPart.substring(0, urlPart.indexOf("&"));
	return urlPart;
}


//#region Objects
class YTVideoSource extends VideoUrlRangeSource {
    constructor(obj) {
		super(obj);
    }

    getRequestModifier() {
        return new YTRequestModifier();
    }
}

class YTAudioSource extends AudioUrlRangeSource {
    constructor(obj) {
		super(obj);
    }

    getRequestModifier() {
        return new YTRequestModifier();
    }
}

class YTRequestModifier extends RequestModifier {
	constructor() {
		super({ allowByteSkip: false });
        this.requestNumber = 0;
    }

	/**
	 * Modifies the request
	 * @param {string} url The URL string used
	 * @param {{[key: string]: string}} headers The headers used
	 * @returns {Request}
	 */
	modifyRequest(url, headers) {
		const u = new URL(url);
		const isVideoPlaybackUrl = u.pathname.startsWith('/videoplayback');

		if (isVideoPlaybackUrl && !u.searchParams.has("rn")) {
			u.searchParams.set("rn", this.requestNumber.toString());
		}
		this.requestNumber++;

		if (headers["Range"] && !u.searchParams.has("range")) {
			let range = headers["Range"];
			if (range.startsWith("bytes=")) {
				range = range.substring("bytes=".length);
			}
			delete headers["Range"];
			u.searchParams.set("range", range);
		}

		const c = u.searchParams.get("c");
		if (c === "WEB" || c === "TVHTML5_SIMPLY_EMBEDDED_PLAYER") {
			headers["Origin"] = URL_BASE;
			headers["Referer"] = URL_BASE;
			headers["Sec-Fetch-Dest"] = "empty";
			headers["Sec-Fetch-Mode"] = "cors";
			headers["Sec-Fetch-Site"] = "cross-site";
		}
	
		headers['TE'] = "trailers";

		if (c) {
			switch (c) {
				case "ANDROID":
					headers["User-Agent"] = USER_AGENT_ANDROID;
					break;
				case "IOS":
					headers["User-Agent"] = USER_AGENT_IOS;
					break;
				default:
					headers["User-Agent"] = USER_AGENT_WINDOWS;
					break;
			}
		}

        return {
            url: u.toString(),
			headers: headers
		}
    }
}

class YTLiveEventPager extends LiveEventPager {
	constructor(key, continuation) {
		super([], continuation != null);
		this.key = key;
		this.continuation = continuation;
		this.hasMore = true;
		this.knownEmojis = {};
		this.nextPage();
	}
	nextPage() {
		const newResult = http.POST(URL_LIVE_CHAT + "?key=" + this.key + "&prettyPrint=false", 
		JSON.stringify({
			context: {
				client: {
					clientName: "WEB",
					clientVersion: "2.20220901.00.00",
					clientFormFactor: "UNKNOWN_FORM_FACTOR",
					utcOffsetMinutes: 0,
					memoryTotalKbytes: 100000,
					timeZone: "ETC/UTC"
				},
				user: {
					lockedSafetyMode: false
				}
			},
			continuation: this.continuation,
			webClientInfo: {
				isDocumentHidden: false
			}
		}), {
			"Content-Type": "application/json",
			"User-Agent": USER_AGENT_WINDOWS
		}, false);
		if(!newResult.isOk)
			throw new ScriptException("Failed chat: " + newResult.body);
		const json = JSON.parse(newResult.body);
		//if(IS_TESTING)
		//	console.log("Live Chat Json:", json);
	
		const continuationArr = json?.continuationContents?.liveChatContinuation?.continuations;
		if(!continuationArr || continuationArr.length == 0) {
			this.hasMore = false;
			throw new ScriptException("No chat continuation found");
		}
		const continuation = continuationArr[0]?.timedContinuationData?.continuation ?? continuationArr[0]?.invalidationContinuationData?.continuation
		if(!continuation) {
			this.hasMore = false;
			throw new ScriptException("No chat continuation found");
		}
		this.continuation = continuation;
	
		const actions = json.continuationContents?.liveChatContinuation?.actions;
		if(IS_TESTING)
			console.log("Live Chat Actions:", actions);
		let events = [];
		if(actions && actions.length > 0) {
			const actionResults = handleYoutubeLiveEvents(actions);
			const emojiMap = actionResults.emojis;
			events = actionResults.events;

			let newEmojiCount = 0;
			for(let kv in emojiMap) {
				if(this.knownEmojis[kv])
					delete emojiMap[kv];
				else {
					this.knownEmojis[kv] = emojiMap[kv];
					newEmojiCount++;
				}
			}
			if(newEmojiCount > 0) {
				console.log("New Emojis:", emojiMap);
				events.unshift(new LiveEventEmojis(emojiMap));
			}
		}
		this.results = events;

		//if(IS_TESTING)
		//	console.log("LiveEvents:", this.results);
	
		return this;
	}
}
function handleYoutubeLiveEvents(actions) {
	let emojiMap = {};
	let events = [];
	for(let action of actions) {
		try {
			if(action.addChatItemAction) {
				const obj = action.addChatItemAction;

				const isPaid = !!obj.item?.liveChatPaidMessageRenderer

				const renderer = (isPaid) ? obj.item?.liveChatPaidMessageRenderer : obj.item?.liveChatTextMessageRenderer;
				const msgObj = extractLiveMessage_Obj(renderer);

				if(!msgObj)
					continue;

				if(msgObj.emojis)
					for(let emojiKey in msgObj.emojis)
						emojiMap[emojiKey] = msgObj.emojis[emojiKey];

				if(msgObj && msgObj.name && (msgObj.message || isPaid)) {
					if(!isPaid)
						events.push(new LiveEventComment(msgObj.name, msgObj.message, msgObj.thumbnail, msgObj.colorName, msgObj.badges));
					else {
						const amount = extractText_String(renderer.amount ?? renderer.purchaseAmountText ?? paidMessageRenderer?.amount ?? paidMessageRenderer?.purchaseAmountText);
						events.push(new LiveEventDonation(amount, msgObj.name, msgObj.message ?? "", msgObj.thumbnail, 0, renderer.bodyBackgroundColor ? "#" + Number(renderer.bodyBackgroundColor).toString(16) : null));
					}
				}
			}
			else if(action.ReplaceChatItemAction) {}
			else if(action.RemoveChatItemAction) {}
			else if(action.addLiveChatTickerItemAction) {
				const obj = action.addLiveChatTickerItemAction;
				if(obj.item?.liveChatTickerSponsorItemRenderer) {
					const renderer = obj.item?.liveChatTickerSponsorItemRenderer;
					const membershipRenderer = renderer.showItemEndpoint?.showLiveChatItemEndpoint?.renderer?.liveChatMembershipItemRenderer;
					const msgObj = extractLiveMessage_Obj(membershipRenderer);
					if(msgObj && msgObj.name)
						events.push(new LiveEventDonation("Member", msgObj.name, msgObj.message, msgObj.thumbnail, (renderer.durationSec ?? 10) * 1000, membershipRenderer.bodyBackgroundColor ? "#" + Number(membershipRenderer.bodyBackgroundColor).toString(16) : null));
				}
				else if(obj.item?.liveChatTickerPaidMessageItemRenderer) {
					const renderer = obj.item?.liveChatTickerPaidMessageItemRenderer
					const paidMessageRenderer = renderer.showItemEndpoint?.showLiveChatItemEndpoint?.renderer?.liveChatPaidMessageRenderer;
					const msgObj = extractLiveMessage_Obj(paidMessageRenderer);
					const amount = extractText_String(renderer.amount ?? renderer.purchaseAmountText ?? paidMessageRenderer?.amount ?? paidMessageRenderer?.purchaseAmountText);
					if(msgObj && msgObj.name)
						events.push(new LiveEventDonation(amount, msgObj.name, msgObj.message, msgObj.thumbnail, (renderer.durationSec ?? 10) * 1000, paidMessageRenderer.bodyBackgroundColor ? "#" + Number(paidMessageRenderer.bodyBackgroundColor).toString(16) : null));
				}
			}
			else if(action.addBannerToLiveChatCommand) {
				const bannerRenderer = action.addBannerToLiveChatCommand?.bannerRenderer?.liveChatBannerRenderer;
				const redirectRenderer = bannerRenderer?.contents?.liveChatBannerRedirectRenderer;

				if(bannerRenderer && redirectRenderer && bannerRenderer.bannerType == "LIVE_CHAT_BANNER_TYPE_CROSS_CHANNEL_REDIRECT") {
					
					const url = redirectRenderer.inlineActionButton?.buttonRenderer?.command?.commandMetadata?.webCommandMetadata?.url;
					const name = redirectRenderer.bannerMessage?.runs?.find(x=>x.bold)?.text;
					const thumbnails = redirectRenderer.authorPhoto?.thumbnails;
					
					if(url && name && thumbnails && thumbnails.length && thumbnails.length > 0)
						events.push(new LiveEventRaid(URL_BASE + url, name, thumbnails[thumbnails.length - 1]?.url));
				}
			}
			else {
				const keys = Object.keys(action);
				log("Unknown Event: " + keys.join(",") + JSON.stringify(action, null, "   "));
			}
		}
		catch(ex) {
			log("Failed Youtube live action parse due to [" + ex + "]: " + JSON.stringify(action, null, "   "));
		}
	}
	return {
		events: events,
		emojis: emojiMap
	};
}
source.handleYoutubeLiveEvents = handleYoutubeLiveEvents;

function extractLiveMessage_Obj(obj) {
	if(!obj)
		return null;
	const name = extractText_String(obj.authorName);
	const thumbnails = obj?.authorPhoto?.thumbnails;
	let thumbnail = null;
	for(let thumb of thumbnails){
		if(thumb?.url) {
			thumbnail = thumb.url;
			break;
		}
	}
	let message = extractText_String(obj.message);
	const headerMessage = extractText_String(obj.headerPrimaryText);

	const emojiMap = {};

	let isMember = false;
	const badges = [];
    if(obj.authorBadges) {
        for(let badge of obj.authorBadges) {
            const badgeImages = badge.liveChatAuthorBadgeRenderer?.customThumbnail?.thumbnails;
            const badgeName = badge.liveChatAuthorBadgeRenderer?.tooltip;
            if(badgeImages && badgeImages.length > 0 && badgeName) {
                emojiMap[badgeName] = badgeImages[badgeImages.length - 1].url;
                badges.push(badgeName);

                if(badgeName.toLowerCase().indexOf("member") >= 0)
                    isMember = true;
            }
        }
    }

	if(obj?.message?.runs) {
		for(let part of obj?.message?.runs) {
			if(part.emoji?.image?.accessibility?.accessibilityData?.label && part.emoji?.image?.thumbnails) {
			    const label = part.emoji?.image?.accessibility?.accessibilityData?.label;
			    if(label && !emojiMap[label]) {
                    emojiMap[label] = part.emoji?.image?.thumbnails[0]?.url;
			    }
			}
		}
	}
	return {
		name: name,
		thumbnail: thumbnail,
		message: message,
		headerMessage: headerMessage,
		emojis: emojiMap,
		colorName: isMember ? "#2ba640" : null,
		badges: badges
	};
}

class YTCommentPager extends CommentPager {
	constructor(comments, continuation, contextUrl) {
		super(comments, continuation != null, contextUrl);
		this.continuation = continuation;
	}
	nextPage() {
		if(!this.continuation)
			return new CommentPager([], false);
		return requestCommentPager(this.context, this.continuation) ?? new CommentPager([], false);
	}
}
class YTComment extends Comment {
	constructor(obj) {
		super(obj);
	}
}

class RichGridPager extends VideoPager {
	constructor(tab, context, useMobile = false, useAuth = false) {
		super(tab.videos, tab.videos.length > 0 && !!tab.continuation, context);
		this.continuation = tab.continuation;
		this.useMobile = useMobile;
		this.useAuth = useAuth;
	}
	
	nextPage() {
		this.context.page = this.context.page + 1;
		if(this.continuation) {
			const newData = validateContinuation(()=>requestBrowse({
				continuation: this.continuation.token
			}, !!this.useMobile, !!this.useAuth));
			if(newData && newData.length > 0) {
				const fakeRichGrid = {
					contents: newData
				};
				const newItemSection = extractRichGridRenderer_Shelves(fakeRichGrid, this.context);
				if(newItemSection.videos)
					return new RichGridPager(newItemSection, this.context, this.useMobile, this.useAuth);
			}
			else
				log("Call [RichGridPager.nextPage] continuation gave no appended items, setting empty page with hasMore to false");
		}
		this.hasMore = false;
		this.results = [];
		return this;
	}
}
class SearchItemSectionVideoPager extends VideoPager {
	constructor(itemSection) {
		super(itemSection.videos, itemSection.videos.length > 0 && !!itemSection.continuation);
		this.continuation = itemSection.continuation;
	}
	
	nextPage() {
		this.context.page = this.context.page + 1;
		if(this.continuation) {
			const continueItems = validateContinuation(()=>
				requestSearchContinuation(this.continuation.token));
			if(continueItems.length > 0) {
				const fakeSectionList = {
					contents: continueItems
				};
				const newItemSection = extractSectionListRenderer_Sections(fakeSectionList, this.context);
				if(newItemSection.videos)
					return new SearchItemSectionVideoPager(newItemSection);
			}
		}
		this.hasMore = false;
		this.results = [];
		return this;
	}
}
class SearchItemSectionChannelPager extends ChannelPager {
	constructor(itemSection) {
		super(itemSection.channels, itemSection.channels.length > 0 && !!itemSection.continuation);
		this.continuation = itemSection.continuation;
	}

	nextPage() {
		this.context.page = this.context.page + 1;
		if(this.continuation) {
			const continueItems = validateContinuation(()=>
				requestSearchContinuation(this.continuation.token));
			if(continueItems.length > 0) {
				const fakeSectionList = {
					contents: continueItems
				};
				const newItemSection = extractSectionListRenderer_Sections(fakeSectionList, this.context);
				if(newItemSection.channels)
					return new SearchItemSectionChannelPager(newItemSection);
			}
		}
		this.hasMore = false;
		this.results = [];
		return this;
	}
}
class SearchItemSectionPlaylistPager extends ChannelPager {
	constructor(itemSection) {
		super(itemSection.playlists, itemSection.playlists.length > 0 && !!itemSection.continuation);
		this.continuation = itemSection.continuation;
	}

	nextPage() {
		this.context.page = this.context.page + 1;
		if(this.continuation) {
			const continueItems = validateContinuation(()=>
				requestSearchContinuation(this.continuation.token));
			if(continueItems.length > 0) {
				const fakeSectionList = {
					contents: continueItems
				};
				const newItemSection = extractSectionListRenderer_Sections(fakeSectionList, this.context);
				if(newItemSection.channels)
					return new SearchItemSectionPlaylistPager(newItemSection);
			}
		}
		this.hasMore = false;
		this.results = [];
		return this;
	}
}
//#endregion

//#region Requests
function getAuthContextHeaders(useMobile = false, contentType = null) {
	const clientContext = getClientContext(true);
	const result = {
		"Accept-Language": "en-US",
		"x-goog-authuser": "0",
		"x-goog-pageid": clientContext.DELEGATED_SESSION_ID,
		"x-origin": useMobile ? URL_BASE_M : URL_BASE,
		"x-youtube-client-name": useMobile ? "2" : "1",
		"User-Agent": useMobile ? USER_AGENT_TABLET : USER_AGENT_WINDOWS 
	};
	if(contentType)
	    result["Content-Type"] = contentType;

	return result;
}

function requestGuide(pageId) {
	if(!pageId)
		throw new ScriptException("No page id found, invalid authentication?");

	const clientContext = getClientContext(true);
	const body = {
		context: clientContextAuth.INNERTUBE_CONTEXT
	};
	const url = URL_GUIDE + "?key=" + clientContext.INNERTUBE_API_KEY + "&prettyPrint=false"

	const res = http.POST(url, JSON.stringify(body), getAuthContextHeaders(false, "application/json"), true);
	if (res.code != 200) {
		bridge.log("Failed to retrieve subscriptions page.");
		return [];
	}
	const data = JSON.parse(res.body);
	return data;
}
function requestNext(body, useAuth = false) {
	const clientContext = getClientContext(useAuth);
	if(!clientContext || !clientContext.INNERTUBE_CONTEXT || !clientContext.INNERTUBE_API_KEY)
		throw new ScriptException("Missing client context");
	body.context = clientContext.INNERTUBE_CONTEXT;
	const url = URL_NEXT + "?key=" + clientContext.INNERTUBE_API_KEY + "&prettyPrint=false";
	const resp = http.POST(url, JSON.stringify(body), {"Content-Type": "application/json"});
	if(!resp.isOk) {
		log("Fail Url: " + url + "\nFail Body:\n" + JSON.stringify(body));
		throw new ScriptException("Failed to next [" + resp.code + "]");
	}
	return JSON.parse(resp.body);
}
function requestBrowse(body, useMobile = false, useAuth = false) {
	const clientContext = getClientContext(useAuth);
	if(!clientContext || !clientContext.INNERTUBE_CONTEXT || !clientContext.INNERTUBE_API_KEY)
		throw new ScriptException("Missing client context");
	body.context = clientContext.INNERTUBE_CONTEXT;

	let headers = !bridge.isLoggedIn() ? {} : getAuthContextHeaders(useMobile);
	if(useMobile)
		headers["User-Agent"] = USER_AGENT_TABLET;
	headers["Content-Type"] = "application/json";
 
	const baseUrl = !useMobile ? URL_BROWSE : URL_BROWSE_MOBILE;
	const url = baseUrl + "?key=" + clientContext.INNERTUBE_API_KEY + "&prettyPrint=false";
	const resp = http.POST(url, JSON.stringify(body), headers, useAuth);
	if(!resp.isOk) {
		log("Fail Url: " + url + "\nFail Body:\n" + JSON.stringify(body));
		throw new ScriptException("Failed to browse [" + resp.code + "]");
	}
	return JSON.parse(resp.body);
}
function requestSearch(query, useAuth = false, params = null) {
	const clientContext = getClientContext(useAuth);
	if(!clientContext || !clientContext.INNERTUBE_CONTEXT || !clientContext.INNERTUBE_API_KEY)
		throw new ScriptException("Missing client context");

	const body = {
		context: clientContext.INNERTUBE_CONTEXT,
		query: query
	};
	if(params)
	    body.params = params;
	
	const resp = http.POST(URL_SEARCH + "?key=" + clientContext.INNERTUBE_API_KEY + "&prettyPrint=false",
		JSON.stringify(body), {
			"User-Agent": USER_AGENT_WINDOWS,
			"Content-Type": "application/json"
		}, useAuth);
	if(!resp.isOk) throw new ScriptException("Failed to search [" + resp.code + "]");

	return JSON.parse(resp.body);
}
function requestSearchContinuation(continuation, useAuth = false) {
	const clientContext = getClientContext(useAuth);
	if(!clientContext || !clientContext.INNERTUBE_CONTEXT || !clientContext.INNERTUBE_API_KEY)
		throw new ScriptException("Missing client context");

	const body = {
		context: clientContext.INNERTUBE_CONTEXT,
		continuation: continuation
	};
	
	const resp = http.POST(URL_SEARCH + "?key=" + clientContext.INNERTUBE_API_KEY + "&prettyPrint=false",
		JSON.stringify(body), {
			"Content-Type": "application/json"
		}, useAuth);
	if(!resp.isOk) throw new ScriptException("Failed to search [" + resp.code + "]");

	return JSON.parse(resp.body);
}

function requestPage(url, headers, useAuth = false) {
	headers = headers ?? {};
	const headersUsed = Object.assign(headers, {"Accept-Language": "en-US"});
	const resp = http.GET(url, headersUsed, useAuth);
	if(resp.isOk)
		return resp.body;
	else throw new ScriptException("Failed to request page [" + resp.code + "]");
}
function requestInitialData(url, useMobile = false, useAuth = false) {
	let headers = {"Accept-Language": "en-US" };
	if(useMobile)
		headers["User-Agent"] = USER_AGENT_TABLET;

	const resp = http.GET(url, headers, useAuth);
	if(resp.isOk) {
		const html = resp.body;
		const initialData = getInitialData(html);
		return initialData;
	}
	else throw new ScriptException("Failed to request page [" + resp.code + "]\n" + url + "\n");
}
function requestClientConfig(useMobile = false, useAuth = false) {
	let headers = {

	}
	if(useMobile)
		headers["User-Agent"] = USER_AGENT_TABLET;

	const resp = http.GET(!useMobile ? URL_CONTEXT : URL_CONTEXT_M, headers, useAuth);
	if(!resp.isOk) throw new ScriptException("Failed to request context");
	return getClientConfig(resp.body);
}
function requestIOSStreamingData(videoId) {
	const body = {
		videoId: videoId,
		cpn: "" + randomString(16),
		contentCheckOk: "true",
		racyCheckOn: "true",
		context: {
			client: {
				"clientName": "IOS",
				"clientVersion": "17.31.4",
				"deviceMake": "Apple",
				"deviceModel": "iPhone14,5",
				"platform": "MOBILE",
				"osName": "iOS",
				"osVersion": "15.6.0.19G71",
				"hl": langDisplay,
				"gl": langRegion,
			},
			user: {
				"lockedSafetyMode": false
			}
		}
	};
	const headers = {
		"Content-Type": "application/json",
		"User-Agent": USER_AGENT_IOS,
		"X-Goog-Api-Format-Version": "2"
	};

	const token = randomString(12);
	const clientContext = getClientContext(false);
	const url = URL_PLAYER + 
		"?key=" + clientContext.INNERTUBE_API_KEY +
		"&prettyPrint=false" + 
		"&t=" + token +
		"&id=" + videoId

	const resp = http.POST(url, JSON.stringify(body), headers, false);
	if(resp.isOk)
		return JSON.parse(resp.body);
	else
		return null;
}
function requestAndroidStreamingData(videoId) {
	const body = {
		videoId: videoId,
		cpn: "" + randomString(16),
		contentCheckOk: "true",
		racyCheckOn: "true",
		context: {
			client: {
				"clientName": "ANDROID",
				"clientVersion": "17.31.35",
				"platform": "MOBILE",
				"osName": "Android",
				"osVersion": "12",
				"androidSdkVersion": 31,
				"hl": langDisplay,
				"gl": langRegion,
				"params": "8AEB"
			},
			user: {
				"lockedSafetyMode": false
			}
		}
	};
	const headers = {
		"Content-Type": "application/json",
		"User-Agent": USER_AGENT_ANDROID,
		"X-Goog-Api-Format-Version": "2"
	};

	const token = randomString(12);
	const clientContext = getClientContext(false);
	const url = URL_PLAYER + 
		"?key=" + clientContext.INNERTUBE_API_KEY +
		"&prettyPrint=false" + 
		"&t=" + token +
		"&id=" + videoId

	const resp = http.POST(url, JSON.stringify(body), headers, false);
	if(resp.isOk)
		return JSON.parse(resp.body);
	else
		return null;
}
function requestTvHtml5EmbedStreamingData(videoId, sts) {
	const body = {
		videoId: videoId,
		cpn: "" + randomString(16),
		contentCheckOk: "true",
		racyCheckOn: "true",
		playbackContext: {
			contentPlaybackContext: {
				signatureTimestamp: sts,
				referer: "https://www.youtube.com/watch?v=" + videoId
			}
		},
		context: {
			client: {
				"clientName": "TVHTML5_SIMPLY_EMBEDDED_PLAYER",
				"clientVersion": "2.0",
				"clientScreen": "EMBED",
				"platform": "TV",
				"hl": langDisplay,
				"gl": langRegion
			},
			thirdParty: {
				"embedUrl": "https://www.youtube.com/watch?v=" + videoId,
			},
			user: {
				"lockedSafetyMode": false
			}
		}
	};
	const headers = {
		"Content-Type": "application/json",
		"User-Agent": USER_AGENT_TVHTML5_EMBED,
		"X-Goog-Api-Format-Version": "2"
	};

	const token = randomString(12);
	const clientContext = getClientContext(false);
	const url = URL_PLAYER + 
		"?key=" + clientContext.INNERTUBE_API_KEY +
		"&prettyPrint=false" + 
		"&t=" + token +
		"&id=" + videoId

	const resp = http.POST(url, JSON.stringify(body), headers, false);
	if(resp.isOk)
		return JSON.parse(resp.body);
	else
		return null;
}
//#endregion

//#region Page Extraction
function getInitialData(html, useAuth = false) {
	const clientContext = getClientContext(useAuth);
	const match = html.match(REGEX_INITIAL_DATA);
	if(match) {
		const initialDataRaw = match[1].startsWith("'") && match[1].endsWith("'") ? 
			decodeHexEncodedString(match[1].substring(1, match[1].length - 1))
				//TODO: Find proper decoding strat
				.replaceAll("\\\\\"", "\\\"") : 
			match[1];
		let initialData = "null";
		try{
			initialData = JSON.parse(initialDataRaw);
		}
		catch(ex) {
			console.log("Failed to parse initial data: ", initialDataRaw);
			throw ex;
		}
		
		
		if(clientContext?.INNERTUBE_CONTEXT && !clientContext.INNERTUBE_CONTEXT.client.visitorData &&
			initialData.responseContext?.webResponseContextExtensionData?.ytConfigData?.visitorData) {
				clientContext.INNERTUBE_CONTEXT.client.visitorData = initialData.responseContext?.webResponseContextExtensionData?.ytConfigData?.visitorData
			log("Found new visitor (auth) data: " + clientContext.INNERTUBE_CONTEXT.client.visitorData);
		}
		return initialData;
	}
	return null;
}
function getInitialPlayerData(html) {
	const match = html.match(REGEX_INITIAL_PLAYER_DATA);
	if(match) {
		const initialDataRaw = match[1];
		return JSON.parse(initialDataRaw);
	}
	return null;
}
function getClientConfig(html) {
	const matches = html.matchAll(REGEX_YTCFG);
	let match = null;
	for(let m of matches) {
		if(m && m.length >= 2 && m[1].indexOf("INNERTUBE_CONTEXT") > 0) {
			match = m;
		}
	}

	if(!match) throw new ScriptException("Context structure not found");
	return JSON.parse(match[1]);
}
//#endregion

//#region Top-Level Extraction
/**
 * Extract Subscription channels from a submenu obtained from subscriptionsPage
 * @returns  {PlatformAuthorLink[]} Channels
 */
function extractChannelListSubMenuAvatarRenderer_AuthorLink(renderer) {
	const thumbnail = renderer?.thumbnail?.thumbnails && renderer.thumbnail.thumbnails.length > 0 ?
		renderer.thumbnail.thumbnails[renderer.thumbnail.thumbnails.length - 1] :
		null;
	const name = renderer?.accessibility?.accessibilityData?.label ?
		renderer.accessibility.accessibilityData.label.trim() :
		"";
	const url = renderer?.navigationEndpoint?.browseEndpoint?.canonicalBaseUrl ?
		URL_BASE + renderer.navigationEndpoint.browseEndpoint.canonicalBaseUrl :
		null;
	if(!url || !name)
		return null;
	else
		return new PlatformAuthorLink(new PlatformID(PLATFORM, null, config?.id, PLATFORM_CLAIMTYPE), name, url, thumbnail);
}
/**
 * Extract Subscription channels from a submenu obtained from subscriptionsPage
 * @returns  {String[]} Urls
 */
function extractChannelListSubMenuAvatarRenderer_URL(renderer) {
	const canonicalUrl = renderer?.navigationEndpoint?.browseEndpoint?.canonicalBaseUrl ?
		URL_BASE + renderer.navigationEndpoint.browseEndpoint.canonicalBaseUrl :
		null;
	const idUrl = renderer?.navigationEndpoint?.browseEndpoint?.browseId ?
		URL_BASE + "/channel/" + renderer.navigationEndpoint.browseEndpoint.browseId :
		null;
	const url = idUrl ?? canonicalUrl;
	if(!url)
		return null;
	else
		return url;
}
/**
 * Extract Subscription channels from a sections[] obtained from guide()
 * @returns {PlatformAuthorLink[]} Channels
 */
function extractGuide_Channels(data) {
	let sections = data.items ?? [];
	let channels = [];

	for(let section of sections) {
		switchKey(section, {
			guideSubscriptionsSectionRenderer(renderer) {
				for(let item of renderer.items) {
					switchKey(item, {
						guideEntryRenderer(guideEntryRenderer) {
							channels.push(extractGuideEntry_AuthorLink(guideEntryRenderer));
						},
						guideCollapsibleEntryRenderer(collapseRenderer) {
							if(collapseRenderer.expandableItems?.length > 0) {
								for(let item of collapseRenderer.expandableItems) {
									switchKey(item, {
										guideEntryRenderer(guideEntryRenderer) {
											channels.push(extractGuideEntry_AuthorLink(guideEntryRenderer));
										}
									})
								}
							}
						}
					});
				}
			}
		});
	}

	return channels;
}
function extractGuideEntry_AuthorLink(guideEntryRenderer) {
	const thumbnail = guideEntryRenderer.thumbnail?.thumbnails?.length > 0 ? 
		guideEntryRenderer.thumbnail.thumbnails[0].url : null;
	const name = guideEntryRenderer.formattedTitle?.simpleText ?? 
		guideEntryRenderer.accessibility?.accessibilityData?.label;
	const url = guideEntryRenderer.navigationEndpoint?.browseEndpoint?.canonicalBaseUrl ?
		URL_BASE + guideEntryRenderer.navigationEndpoint?.browseEndpoint?.canonicalBaseUrl : null;

	return new PlatformAuthorLink(new PlatformID(PLATFORM, null, config.id, PLATFORM_CLAIMTYPE), name, url, thumbnail);
}

/**
 * Extract all video results and shelves from a search page's initial data
 * @param data Root-data from search()
 * @param contextData Any context values used to fill out data for resulting objects
 * @returns Object containing videos and shelves
 */
function extractSearch_SearchResults(data, contextData) {
	let searchContents = data.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer ??
		data.contents?.sectionListRenderer;

	if(searchContents) {
		const results = extractSectionListRenderer_Sections(searchContents, contextData);
		return results;
	}
	return {};
}

/**
 * Extracts a PlatformChannel from a channel page's initial data
 * @param initialData Initial data from a ChannelPage 
 * @returns {PlatformChannel}
 */
function extractChannel_PlatformChannel(initialData, sourceUrl = null) {
	const headerRenderer = initialData.header?.c4TabbedHeaderRenderer;
	if(!headerRenderer) {
		log("Missing header renderer in structure: (" + sourceUrl + ")\n" + JSON.stringify(initialData, null, "   "));
		throw new ScriptException("No header renderer");
	}


	if(IS_TESTING)
		console.log("Initial Data", initialData);

	const thumbnailTargetWidth = 200;
	const thumbnails = headerRenderer.avatar?.thumbnails;
	const thumbnail = (thumbnails && thumbnails.length > 0) ? thumbnails.sort((a,b)=>Math.abs(a.width - thumbnailTargetWidth) - Math.abs(b.width - thumbnailTargetWidth))[0] : { url: "" };
	const banners = headerRenderer.banner?.thumbnails;
	const bannerTargetWidth = 1080;
	const banner = (banners && banners.length > 0) ? banners.sort((a,b)=>Math.abs(a.width - bannerTargetWidth) - Math.abs(b.width - bannerTargetWidth))[0] : { url: "" };
	
	const idUrl = headerRenderer?.navigationEndpoint?.browseEndpoint?.browseId ?
	    URL_BASE + "/channel/" + headerRenderer.navigationEndpoint.browseEndpoint.browseId :
	    null;
	const canonicalUrl = headerRenderer?.navigationEndpoint?.browseEndpoint?.canonicalBaseUrl ?
	    URL_BASE + headerRenderer.navigationEndpoint.browseEndpoint.canonicalBaseUrl :
	    null;

	return new PlatformChannel({
		id: new PlatformID(PLATFORM, headerRenderer.channelId, config.id, PLATFORM_CLAIMTYPE),
		name: headerRenderer.title ?? "",
		thumbnail: thumbnail.url,
		banner: banner.url,
		subscribers: Math.max(0, extractHumanNumber_Integer(extractText_String(headerRenderer.subscriberCountText))),
		description: "",
		url: idUrl,
		urlAlternatives: [idUrl, canonicalUrl],
		links: {}
	});
}
/**
 * Extracts multiple tabs from a page that contains a tab rendering
 * @param initialData Initial data from a page with a TwoColumnBrowseResultsRenderer
 * @param contextData Any context values used to fill out data for resulting objects
 * @returns 
 */
function extractPage_Tabs(initialData, contextData) {
	const content = initialData.contents;
	if(!content) throw new ScriptException("Missing contents");

	return switchKey(content, {
		twoColumnBrowseResultsRenderer(renderer) {
			return extractTwoColumnBrowseResultsRenderer_Tabs(renderer, contextData);
		},
		singleColumnBrowseResultsRenderer(renderer) {
			return extractSingleColumnBrowseResultsRenderer_Tabs(renderer, contextData);
		},
		default(name) {
			throw new ScriptException("Unknown renderer type: " + name);
		}
	});
}
//#endregion


//#region Layout Extractors
function extractVideoPage_VideoDetails(initialData, initialPlayerData, contextData, jsUrl) {
	const contents = initialData.contents;
	const contentsContainer = contents.twoColumnWatchNextResults?.results?.results ??
		null;
	if(!contentsContainer || !contentsContainer.contents || !initialPlayerData.videoDetails) return null;

	if (IS_TESTING) {
		console.log("initialData: ", initialData);
		console.log("playerData:", initialPlayerData);
		console.log("streamingData:", initialPlayerData?.streamingData);
	}
	const videoDetails = initialPlayerData.videoDetails;
	const nonce = randomString(16);

	const hlsSource = (initialPlayerData?.streamingData?.hlsManifestUrl) ?
		new HLSSource({
			url: initialPlayerData?.streamingData?.hlsManifestUrl
		}) : null;
	const dashSource = (initialPlayerData?.streamingData?.dashManifestUrl) ?
		new DashSource({
			url: initialPlayerData?.streamingData?.dashManifestUrl
		}) : null;

	const video = {
		id: new PlatformID(PLATFORM, videoDetails.videoId, config.id),
		name: videoDetails.title,
		thumbnails: new Thumbnails(videoDetails.thumbnail?.thumbnails.map(x=>new Thumbnail(x.url, x.height)) ?? []),
		author: new PlatformAuthorLink(new PlatformID(PLATFORM, videoDetails.channelId, config.id, PLATFORM_CLAIMTYPE), videoDetails.author, URL_BASE + "/channel/" + videoDetails.channelId, null),
		duration: parseInt(videoDetails.lengthSeconds),
		viewCount: parseInt(videoDetails.viewCount),
		url: contextData.url,
		isLive: videoDetails?.isLive ?? false,
		description: videoDetails.shortDescription,
		hls: (videoDetails?.isLive ?? false) ? hlsSource : null,
		dash: (videoDetails?.isLive ?? false) ? dashSource : null,
		live: (videoDetails?.isLive ?? false) ? (hlsSource ?? dashSource) : null,
		video: initialPlayerData?.streamingData?.adaptiveFormats ? new UnMuxVideoSourceDescriptor(
			initialPlayerData.streamingData.adaptiveFormats.filter(x=>x.mimeType.startsWith("video/")).map(y=>{
				const codecs = y.mimeType.substring(y.mimeType.indexOf('codecs=\"') + 8).slice(0, -1);
				const container = y.mimeType.substring(0, y.mimeType.indexOf(';'));
				if(codecs.startsWith("av01"))
					return null; //AV01 is unsupported.

				const logItag = y.itag ==  134;
				if(logItag) {
					log(videoDetails.title + " || Format " + container + " - " + y.itag + " - " + y.width);
					log("Source Parameters:\n" + JSON.stringify({
						url: y.url,
						cipher: y.cipher,
						signatureCipher: y.signatureCipher
					}, null, "   "));
				}
				
				let url = decryptUrlN(y.url, jsUrl, logItag) ?? decryptUrl(y.cipher, jsUrl, logItag) ?? decryptUrl(y.signatureCipher, jsUrl, logItag);
				if(url.indexOf("&cpn=") < 0)
					url = url + "&cpn=" + nonce;

				const duration = parseInt(parseInt(y.approxDurationMs) / 1000) ?? 0;
				if(isNaN(duration))
					return null;

                if(!y.initRange?.end || !y.indexRange?.end)
                    return null;

				return new YTVideoSource({
					name: y.height + "p" + (y.fps ? y.fps : "") + " " + container,
					url: url,
					width: y.width,
					height: y.height,
					duration: (!isNaN(duration)) ? duration : 0,
					container: y.mimeType.substring(0, y.mimeType.indexOf(';')),
					codec: codecs,
					bitrate: y.bitrate,

					itagId: y.itag,
					initStart: parseInt(y.initRange?.start),
					initEnd: parseInt(y.initRange?.end),
					indexStart: parseInt(y.indexRange?.start),
					indexEnd: parseInt(y.indexRange?.end)
				});
			}).filter(x=>x != null),
			initialPlayerData.streamingData.adaptiveFormats.filter(x=>x.mimeType.startsWith("audio/")).map(y=>{
				const codecs = y.mimeType.substring(y.mimeType.indexOf('codecs=\"') + 8).slice(0, -1);
				const container = y.mimeType.substring(0, y.mimeType.indexOf(';'));

				let url = decryptUrlN(y.url, jsUrl) ?? decryptUrl(y.cipher, jsUrl) ?? decryptUrl(y.signatureCipher, jsUrl);
				if(url.indexOf("&cpn=") < 0)
					url = url + "&cpn=" + nonce;
				
				const duration = parseInt(parseInt(y.approxDurationMs) / 1000);
				if(isNaN(duration))
					return null;

                if(!y.initRange?.end || !y.indexRange?.end)
                    return null;

				return new YTAudioSource({
					name: y.audioTrack?.displayName ? y.audioTrack.displayName : codecs,
					container: container,
					bitrate: y.bitrate,
					url: url,
					duration: (!isNaN(duration)) ? duration : 0,
					container: y.mimeType.substring(0, y.mimeType.indexOf(';')),
					codec: codecs,
					language: ytLangIdToLanguage(y.audioTrack?.id),

					itagId: y.itag,
					initStart: parseInt(y.initRange?.start),
					initEnd: parseInt(y.initRange?.end),
					indexStart: parseInt(y.indexRange?.start),
					indexEnd: parseInt(y.indexRange?.end),
					audioChannels: y.audioChannels
				});
			}).filter(x=>x!=null),
		) : new VideoSourceDescriptor([]),
		subtitles: initialPlayerData
			.captions
			?.playerCaptionsTracklistRenderer
			?.captionTracks
			?.map(x=>{
				let kind = x.baseUrl.match(REGEX_URL_KIND);
				if(kind)
					kind = kind[1];

				if(!kind || kind == "asr") {
					return {
						name: extractText_String(x.name),
						url: x.baseUrl,
						format: "text/vtt",

						getSubtitles() {
							const subResp = http.GET(x.baseUrl, {});
							if(!subResp.isOk)
								return "";
							const asr = subResp.body;
							let lines = asr.match(REGEX_ASR);
							const newSubs = [];
							let skipped = 0;
							for(let i = 0; i < lines.length; i++) {
								const line = lines[i];
								const lineParsed = /<text .*?start="(.*?)" .*?dur="(.*?)".*?>(.*?)<\/text>/gms.exec(line);

								const start = parseFloat(lineParsed[1]);
								const dur = parseFloat(lineParsed[2]);
								const end = start + dur;
								const text = decodeHtml(lineParsed[3]);

								newSubs.push((i - skipped + 1) + "\n" +
									toSRTTime(start, true) + " --> " + toSRTTime(end, true) + "\n" +
									text + "\n");
							}
							console.log(newSubs);
							return "WEBVTT\n\n" + newSubs.join('\n');
						}
					};
				}
				else if(kind == "vtt") {
					return {
						name: extractText_String(x.name),
						url: x.baseUrl,
						format: "text/vtt",
					};
				}
				else return null;
			})?.filter(x=>x != null) ?? []
	};

	//Add additional/better details
	for(let i = 0; i < contentsContainer.contents.length; i++) {
		const content = contentsContainer.contents[i];
		switchKey(content, {
			videoPrimaryInfoRenderer(renderer) {
				//if(renderer.title?.runs)
				//	video.name = extractString_Runs(renderer.title.runs);
				if(renderer.viewCount?.videoViewCountRenderer?.viewCount?.simpleText)
					video.viewCount = extractFirstNumber_Integer(renderer.viewCount?.videoViewCountRenderer?.viewCount.simpleText)
				else if(renderer.viewCount?.videoViewCountRenderer?.viewCount?.runs) {
					video.viewCount = parseInt(extractFirstNumber_Integer(extractRuns_String(renderer.viewCount?.videoViewCountRenderer?.viewCount?.runs)));
				}
				if(renderer.viewCount?.videoViewCountRenderer?.isLive || renderer.viewCount?.videoViewCountRenderer?.viewCount?.isLive)
					video.isLive = true;
				else
					video.isLive = false;
				

				if(renderer.videoActions?.menuRenderer?.topLevelButtons)
					renderer.videoActions.menuRenderer.topLevelButtons.forEach((button)=>{
						switchKey(button, {
							segmentedLikeDislikeButtonRenderer(renderer) {
								const likeButtonRenderer = renderer?.likeButton?.toggleButtonRenderer;
								if(likeButtonRenderer) {
									const likeTextData = likeButtonRenderer.defaultText;
									if(likeTextData){
										if(likeTextData.accessibility?.accessibilityData?.label)
											video.rating = new RatingLikes(extractFirstNumber_Integer(likeTextData.accessibility.accessibilityData.label));
										else if(likeTextData.simpleText)
											video.rating = new RatingLikes(extractHumanNumber_Integer(likeTextData.simpleText));

									}
								}
							}
						});
					});


				if(!video.datetime || video.datetime <= 0) {
					let date = 0;
					
					if (date <= 0 && renderer.relativeDateText?.simpleText)
						date = extractAgoText_Timestamp(renderer.relativeDateText.simpleText);
					if(date <= 0 && renderer.dateText?.simpleText)
						date = extractDate_Timestamp(renderer.dateText.simpleText);

					video.datetime = date;
				}
			},
			videoSecondaryInfoRenderer(renderer) {
				if(renderer.owner.videoOwnerRenderer)
					video.author = extractVideoOwnerRenderer_AuthorLink(renderer.owner.videoOwnerRenderer);
				if(renderer.description?.runs)
					video.description = extractRuns_Html(renderer.description.runs);
			},
			itemSectionRenderer() {
				//Comments
			}
		});
	}

	const scheduledTime = initialPlayerData?.playabilityStatus?.liveStreamability?.liveStreamabilityRenderer?.offlineSlate?.liveStreamOfflineSlateRenderer?.scheduledStartTime;
	
	if(scheduledTime && !isNaN(scheduledTime))
		video.datetime = parseInt(scheduledTime);

    const result = new PlatformVideoDetails(video);
    result.getComments = function() {
        return extractTwoColumnWatchNextResultContents_CommentsPager(contextData.url, contentsContainer?.contents)
    };
    return result;
}
function toSRTTime(sec, withDot) {
	let hours = 0;
	let minutes = 0;
	let seconds = sec;
	let remainder = 0;

	remainder = parseInt((seconds % 1) * 100);
	minutes = parseInt(seconds / 60);
	seconds = parseInt(seconds % 60);
	hours = parseInt(minutes / 60);
	minutes = minutes % 60;

	return ("" + hours).padStart(2, '0') + ":" +
		("" + minutes).padStart(2, '0') + ":" +
		("" + seconds).padStart(2, '0') + ((withDot) ? "." : ",") +
		("" + remainder).padEnd(3, '0');
}

function extractVideoOwnerRenderer_AuthorLink(renderer) {
	let bestThumbnail = null;
	if(renderer.thumbnail?.thumbnails)
		bestThumbnail = renderer.thumbnail.thumbnails[renderer.thumbnail.thumbnails.length - 1].url;

	let subscribers = null;
	if(renderer.subscriberCountText)
		subscribers = extractHumanNumber_Integer(extractText_String(renderer.subscriberCountText));
	
	const id = renderer?.navigationEndpoint?.browseEndpoint?.browseId;
	return new PlatformAuthorLink(new PlatformID(PLATFORM, id, config.id, PLATFORM_CLAIMTYPE), 
		extractRuns_String(renderer.title.runs),
		(!id) ? extractRuns_Url(renderer.title.runs) : URL_BASE + "/channel/" + id,
		bestThumbnail,
		subscribers);
}
function extractTwoColumnWatchNextResultContents_CommentsPager(contextUrl, contents) {
	//Add additional/better details

	let totalComments = 0;
	let commentsToken = null;
	for(let i = 0; i < contents.length; i++) {
		const content = contents[i];
		switchKey(content, {
			videoPrimaryInfoRenderer(renderer) { },
			videoSecondaryInfoRenderer(renderer) { },
			itemSectionRenderer(itemSectionRenderer) {
				const contents = itemSectionRenderer.contents;
				const content = contents && contents.length > 0 ? contents[0] : null;
				if(content)
					switchKey(content, {
						commentsEntryPointHeaderRenderer(renderer) {
							if(renderer?.commentCount?.simpleText) {
								totalComments = parseInt(renderer.commentCount.simpleText);
							}
						},
						continuationItemRenderer(continueRenderer) {
							if(totalComments > 0 && itemSectionRenderer.targetId == 'comments-section' && continueRenderer?.continuationEndpoint?.continuationCommand) {
								commentsToken = continueRenderer.continuationEndpoint.continuationCommand.token;
							}
						}
					});
			}
		});
	}
	if(!commentsToken)
		return new CommentPager([], false);
	return requestCommentPager(contextUrl, commentsToken);
}
function requestCommentPager(contextUrl, continuationToken) {
	const data = requestNext({
		continuation: continuationToken
	});
	if(IS_TESTING)
	    console.log("data", data);
	const endpoints = data?.onResponseReceivedCommands ?? data?.onResponseReceivedActions ?? data?.onResponseReceivedEndpoints;
	if(!endpoints)
		return null;
	for(let i = 0; i < endpoints.length; i++) {
		const endpoint = endpoints[i];
		const continuationItems = endpoint.reloadContinuationItemsCommand?.continuationItems ??
			endpoint.appendContinuationItemsAction?.continuationItems;
		if(continuationItems && continuationItems.length > 0) {
			let commentsContinuation = null;
			let comments = [];

			if(continuationItems && continuationItems.length > 0) {
				for(let continuationItem of continuationItems) {
					switchKey(continuationItem, {
						commentThreadRenderer(renderer) {
							const commentRenderer = renderer?.comment?.commentRenderer;
							if(!commentRenderer)
								return;

							const replyCount = (commentRenderer.replyCount ? commentRenderer?.replyCount : 0);
							const replyContinuation = renderer.replies?.commentRepliesRenderer?.contents?.length == 1 ?
								renderer.replies.commentRepliesRenderer.contents[0]?.continuationItemRenderer?.continuationEndpoint?.continuationCommand?.token :
								null;

							comments.push(extractCommentRenderer_Comment(contextUrl, commentRenderer, replyCount, replyContinuation));
						},
						commentRenderer(renderer) {
							comments.push(extractCommentRenderer_Comment(contextUrl, renderer, 0, null));
						},
						continuationItemRenderer(renderer) {
							if(renderer?.continuationEndpoint?.continuationCommand?.token)
								commentsContinuation = renderer?.continuationEndpoint?.continuationCommand?.token;
							else if(renderer?.button?.buttonRenderer?.command?.continuationCommand?.token)
							    commentsContinuation = renderer.button.buttonRenderer.command.continuationCommand.token
						}
					});
				}
				if(comments.length > 0) {
					return new YTCommentPager(comments, commentsContinuation, contextUrl);
				}
			}
		}
	}
	return null;
}

function extractSingleColumnBrowseResultsRenderer_Tabs(renderer, contextData) {
	const tabs = [];
	if(!renderer.tabs) throw new ScriptException("No tabs found");

	for(let i = 0; i < renderer.tabs.length; i++) {
		const tab = renderer.tabs[i];

		if(!tab.tabRenderer)
			continue;

		const tabRenderer = tab.tabRenderer; //TODO: Check if this is ever null?
		const isDefault = tabRenderer.selected;
		const title = tabRenderer.title;
		const content = tabRenderer.content;
		
		if(!content)
			continue; //.endpoint

		const tabContentRendererName = Object.keys(content)[0];
		if(!tabContentRendererName) continue;
		let tabResult = undefined;
		switchKey(content, {
			richGridRenderer(renderer) {
				tabResult = extractRichGridRenderer_Shelves(content[tabContentRendererName], contextData);
			},
			sectionListRenderer(renderer) {
				if(!renderer.contents)
					return;
				tabResult = extractSectionListRenderer_Sections(renderer, contextData);
			},
			default() {
				throw new ScriptException("Unknown tab renderer: " + tabContentRendererName);
			}
		});
		if(tabResult) {
			tabResult.isDefault = !!isDefault;
			tabResult.title = title;
			tabs.push(tabResult);
		}
	}

	return tabs;
}
function extractTwoColumnBrowseResultsRenderer_Tabs(renderer, contextData) {
	const tabs = [];
	if(!renderer.tabs) throw new ScriptException("No tabs found");

	for(let i = 0; i < renderer.tabs.length; i++) {
		const tab = renderer.tabs[i];

		if(!tab.tabRenderer && !tab.expandableTabRenderer)
			continue;

		const tabRenderer = tab.tabRenderer ?? tab.expandableTabRenderer;
		const isDefault = tabRenderer.selected;
		const title = tabRenderer.title;
		const content = tabRenderer.content;
		
		if(!content)
			continue; //.endpoint

		const tabContentRendererName = Object.keys(content)[0];
		if(!tabContentRendererName) continue;
		let tabResult = undefined;
		switchKey(content, {
			richGridRenderer(renderer) {
				tabResult = extractRichGridRenderer_Shelves(renderer, contextData);
			},
			sectionListRenderer(renderer) {
				//Channel sectioned tabs..
				tabResult = extractSectionListRenderer_Sections(renderer, contextData)
			},
			default() {
				throw new ScriptException("Unknown tab renderer: " + tabContentRendererName);
			}
		});
		if(tabResult) {
			tabResult.isDefault = !!isDefault;
			tabResult.title = title;
			tabs.push(tabResult);
		}
	}

	return tabs;
}
function extractRichGridRenderer_Shelves(richGridRenderer, contextData) {
	const contents = richGridRenderer.contents;

	const shelves = [];
	const videos = [];

	let continuation = null;

	for(let ci = 0; ci < contents.length; ci++) {
		const content = contents[ci];		
		switchKey(content, {
			richSectionRenderer(renderer) {
				shelves.push(extractRichSectionRenderer_Shelf(renderer, contextData));
			},
			richItemRenderer(renderer) {
				videos.push(extractRichItemRenderer_Video(renderer, contextData));
			},
			continuationItemRenderer(renderer) {
				continuation = extractContinuationItemRenderer_Continuation(renderer, contextData);
			},
			default(name) {
				log("Unknown shelf/section renderer in extractRichGridRenderer_Shelves: " + name);
			}
		});
	}
	
	return {
		shelves: shelves.filter(x=>x != null),
		videos: videos.filter(x=>x != null),
		continuation: continuation
	};
}
function extractSectionListRenderer_Sections(sectionListRenderer, contextData) {
	const contents = sectionListRenderer.contents;

	let shelves = [];
	let videos = [];
	let channels = [];
	let playlists = [];
	let continuation = null;

	for(let i = 0; i < contents.length; i++) {
		const item = contents[i];
		switchKey(item, {
			itemSectionRenderer(renderer) {
				const items = extractItemSectionRenderer_Shelves(renderer);
				if(items.videos.length > 0)
					videos.push(...items.videos);
				if(items.channels.length > 0)
					channels.push(...items.channels);
				if(items.playlists.length > 0)
					playlists.push(...items.playlists);
				if(items.shelves)
					shelves.push(...items.shelves);
			},
			continuationItemRenderer(renderer) {
				continuation = extractContinuationItemRenderer_Continuation(renderer, contextData);
			}
		});
	}
	return {
		shelves: shelves,
		videos: videos,
		channels: channels,
		playlists: playlists,
		continuation: continuation
	};
}
function extractItemSectionRenderer_Shelves(itemSectionRenderer, contextData) {
	const contents = itemSectionRenderer.contents;
	let shelves = [];
	let videos = [];
	let channels = [];
	let playlists = [];

	contents.forEach((item)=>{
		switchKey(item, {
			channelFeaturedContentRenderer(renderer) {
				if(renderer.items) {
					let videos = switchKeyVideos(renderer.items, contextData);
					if(videos && videos.length > 0) {
						shelves.push({
							name: "Featured",
							type: "Shelf",
							videos: videos
						});
					}
				}
			},
			channelRenderer(renderer) {
			    const channel = extractChannelRenderer_AuthorLink(renderer);
			    if(channel)
			        channels.push(channel);
			},
			playlistRenderer(renderer) {
			    const playlist = extractPlaylistRenderer_Playlist(renderer);
			    if(playlist)
			        playlists.push(playlist);
			},
			default() {
				const video = switchKeyVideo(item, contextData);
				if(video)
					videos.push(video);
			}
		});
		
	});

	return {
		shelves: shelves.filter(x=>x != null),
		videos: videos.filter(x=>x != null),
		channels: channels.filter(x=>x != null),
		playlists: playlists.filter(x=>x != null)
	};
}
function switchKeyVideos(contents, contextData) {
	let videos = [];
	for(let content of contents) {
		const video = switchKeyVideo(content, contextData);
		if(video)
			videos.push(video);
	}
	return videos;
}
function switchKeyVideo(content, contextData) {
	return switchKey(content, {
		channelFeaturedContentRenderer(renderer) {
			return extractVideoRenderer_Video(renderer, contextData);
		},
		videoRenderer(renderer) {
			return extractVideoRenderer_Video(renderer, contextData);
		},
		compactVideoRenderer(renderer) {
			return extractVideoWithContextRenderer_Video(renderer, contextData);
		},
		videoWithContextRenderer(renderer) {
			return extractVideoWithContextRenderer_Video(renderer, contextData);
		},
		reelItemRenderer(renderer) {
			return extractReelItemRenderer_Video(renderer, contextData);
		},
		adSlotRenderer(adSlot) {
			return null;
		},
		default(name) {
			return null;
		}
	});
}
//#endregion

//#region Element Extractors
function extractShelfRenderer_Shelf(shelfRenderer, contextData) {
	throw new ScriptException("Not implemented");
}
function extractContinuationItemRenderer_Continuation(continuationItemRenderer) {
	return  {
		url: continuationItemRenderer.continuationEndpoint.commandMetadata.apiUrl, //TODO: See if this is useful at all
		token: continuationItemRenderer.continuationEndpoint.continuationCommand.token
	};
}
function extractRichSectionRenderer_Shelf(sectionRenderer, contextData) {
	const content = sectionRenderer.content;

	return switchKey(content, {
		richShelfRenderer(renderer) {
			return extractRichShelfRenderer_Shelf(renderer, contextData);
		},
		default(name) {
			log("Unknown shelf renderer in extractRichSectionRenderer_Shelf: " + name);
			return null;
			//throw new ScriptException("Unknown shelf renderer: " + name);
		}
	});
}
function extractRichShelfRenderer_Shelf(shelfRenderer, contextData) {
	const shelf = {
		name: extractRuns_String(shelfRenderer.title?.runs),
		type: "Shelf",
		videos: []
	};

	for(let itemi = 0; itemi < shelfRenderer.contents.length; itemi++) {
		const item = shelfRenderer.contents[itemi];
		switchKey(item, {
			richItemRenderer(renderer) {
				shelf.videos.push(extractRichItemRenderer_Video(renderer), contextData);
			},
			default(name) {
				log("Unknown shelf renderer in extractRichShelfRenderer_Shelf: " + name);
				//throw new ScriptException("Unknown item renderer: " + name);
			}
		});
	}

	shelf.videos = shelf.videos.filter(x=>x != null);
	return shelf;
}
//#endregion

//#region Item Extractor
function extractRichItemRenderer_Video(itemRenderer, contextData) {
	const content = itemRenderer.content;
	return switchKeyVideo(content, contextData); 
}
function extractVideoWithContextRenderer_Video(videoRenderer, contextData) {

	const liveBadges = videoRenderer.thumbnailOverlays?.filter(x=>
		x.thumbnailOverlayTimeStatusRenderer?.accessibility?.accessibilityData?.label == "LIVE");
	let isLive = liveBadges != null && liveBadges.length > 0;

	let plannedDate = null;
	if(videoRenderer.upcomingEventData?.startTime)
		plannedDate = parseInt(videoRenderer.upcomingEventData.startTime);

	//if(!isLive && !videoRenderer.publishedTimeText?.simpleText)
	//	return  null; //Not a normal video


	const author = (contextData && contextData.authorLink) ?
		contextData.authorLink : extractVideoWithContextRenderer_AuthorLink(videoRenderer);

	if(IS_TESTING)
		console.log(videoRenderer);

	if(!videoRenderer?.lengthText?.runs || !videoRenderer.publishedTimeText?.runs)
		isLive = true; //If no length, live after all?

    let viewCount = 0;
    if(videoRenderer?.shortViewCountText?.runs != null)
        viewCount = extractHumanNumber_Integer(extractRuns_String(videoRenderer.shortViewCountText.runs));
    else log("No viewcount found on video " + videoRenderer.videoId);

	const title = (videoRenderer.headline) ? extractText_String(videoRenderer.headline) : extractText_String(videoRenderer.title);

	if (isLive) {
		return new PlatformVideo({
			id: new PlatformID(PLATFORM, videoRenderer.videoId, config.id),
			name: title,
			thumbnails: extractThumbnail_Thumbnails(videoRenderer.thumbnail),
			author: author,
			uploadDate: plannedDate ?? parseInt(new Date().getTime() / 1000),
			duration: 0,
			viewCount: viewCount,
			url: URL_BASE + "/watch?v=" + videoRenderer.videoId,
			isLive: true,
			extractType: "VideoWithContext"
		});
	} else {
		return new PlatformVideo({
			id: new PlatformID(PLATFORM, videoRenderer.videoId, config.id),
			name: title,
			thumbnails: extractThumbnail_Thumbnails(videoRenderer.thumbnail),
			author: author,
			uploadDate: parseInt(extractAgoText_Timestamp(extractText_String(videoRenderer.publishedTimeText))),
			duration: extractHumanTime_Seconds(extractText_String(videoRenderer.lengthText)),
			viewCount: viewCount,
			url: URL_BASE + "/watch?v=" + videoRenderer.videoId,
			isLive: false,
			extractType: "VideoWithContext"
		});
	}
}
function extractVideoRenderer_Video(videoRenderer, contextData) {

	const liveBadges = videoRenderer.badges?.filter(x=>x.metadataBadgeRenderer?.label == "LIVE");
	const liveOverlays = videoRenderer.thumbnailOverlays?.filter(x=>
		x.thumbnailOverlayTimeStatusRenderer?.style == "LIVE" ||
		x.thumbnailOverlayTimeStatusRenderer?.accessibility?.accessibilityData?.label == "LIVE");
	let isLive = (liveBadges != null && liveBadges.length > 0) ||
		(liveOverlays != null && liveOverlays.length > 0);

	let plannedDate = null;
	if(videoRenderer.upcomingEventData?.startTime)
		plannedDate = parseInt(videoRenderer.upcomingEventData.startTime);
	if(plannedDate)
		isLive = true;

	if(!isLive && !videoRenderer.publishedTimeText?.simpleText)
		return  null; //Not a normal video



	const author = (contextData && contextData.authorLink) ?
		contextData.authorLink : extractVideoRenderer_AuthorLink(videoRenderer);

	if(IS_TESTING)
		console.log(videoRenderer);

	if(!videoRenderer?.lengthText?.simpleText)
		isLive = true; //If no length, live after all?

	if(isLive)
		return new PlatformVideo({
			id: new PlatformID(PLATFORM, videoRenderer.videoId, config.id),
			name: extractRuns_String(videoRenderer.title.runs),
			thumbnails: extractThumbnail_Thumbnails(videoRenderer.thumbnail),
			author: author,
			uploadDate: plannedDate ?? parseInt(new Date().getTime()/1000),
			duration: 0,
			viewCount: !videoRenderer.viewCountText ? 0 : extractRuns_ViewerCount(videoRenderer.viewCountText.runs),
			url: URL_BASE + "/watch?v=" + videoRenderer.videoId,
			isLive: true,
			extractType: "Video"
		});
	else
		return new PlatformVideo({
			id: new PlatformID(PLATFORM, videoRenderer.videoId, config.id),
			name: extractRuns_String(videoRenderer.title.runs),
			thumbnails: extractThumbnail_Thumbnails(videoRenderer.thumbnail),
			author: author,
			uploadDate: parseInt(extractAgoText_Timestamp(videoRenderer.publishedTimeText.simpleText)),
			duration: extractHumanTime_Seconds(videoRenderer.lengthText.simpleText),
			viewCount: extractFirstNumber_Integer(extractText_String(videoRenderer.viewCountText)),
			url: URL_BASE + "/watch?v=" + videoRenderer.videoId,
			isLive: false,
			extractType: "Video"
		});
}
function extractReelItemRenderer_Video(reelItemRenderer) {
	//We don't do shorts for now..
	return null;
}
function extractPlaylistVideoRenderer_Video(videoRenderer, contextData) {
    if(!videoRenderer.lengthText)
        return null;

	const author = (contextData && contextData.authorLink) ?
		contextData.authorLink : extractRuns_AuthorLink(videoRenderer.shortBylineText?.runs);

	if(IS_TESTING)
		console.log(videoRenderer);

    let date = 0;
    if(videoRenderer?.publishedTimeText?.simpleText)
        date = parseInt(extractAgoText_Timestamp(videoRenderer.publishedTimeText.simpleText));


	return new PlatformVideo({
		id: new PlatformID(PLATFORM, videoRenderer.videoId, config.id),
		name: extractRuns_String(videoRenderer.title.runs),
		thumbnails: extractThumbnail_Thumbnails(videoRenderer.thumbnail),
		author: author,
		uploadDate: date,
		duration: extractHumanTime_Seconds(extractText_String(videoRenderer.lengthText)),
		viewCount: 0,//extractFirstNumber_Integer(videoRenderer.viewCountText.simpleText),
		url: URL_BASE + "/watch?v=" + videoRenderer.videoId,
		isLive: false,
		extractType: "Video"
	});
}
function extractPlaylistRenderer_Playlist(playlistRenderer, contextData) {
	const author = (contextData && contextData.authorLink) ?
		contextData.authorLink : extractRuns_AuthorLink(playlistRenderer.shortBylineText?.runs);

    return new PlatformPlaylist({
		id: new PlatformID(PLATFORM, playlistRenderer.playlistId, config.id),
		author: author,
        name: extractText_String(playlistRenderer.title),
        thumbnail: (playlistRenderer.thumbnails && playlistRenderer.thumbnails.length > 0) ? extractThumbnail_BestUrl(playlistRenderer.thumbnails[0]) : null,
        url: URL_PLAYLIST + playlistRenderer.playlistId,
        videoCount: extractFirstNumber_Integer(extractText_String(playlistRenderer.videoCountText)),
    });
}

function extractChannelRenderer_AuthorLink(channelRenderer) {
    const id = channelRenderer.channelId;
    const name = extractText_String(channelRenderer.title);
    const channelUrl = extractNavigationEndpoint_Url(channelRenderer.navigationEndpoint);
    let thumbUrl = extractThumbnail_BestUrl(channelRenderer.thumbnail);
    if(thumbUrl.startsWith("//"))
        thumbUrl = "https:" + thumbUrl;

	const subscribers = extractHumanNumber_Integer(extractText_String(channelRenderer.videoCountText));

	return new PlatformAuthorLink(new PlatformID(PLATFORM, id, config.id, PLATFORM_CLAIMTYPE), name, channelUrl, thumbUrl, subscribers);
}

function extractRuns_AuthorLink(runs) {
    if(!runs || runs.length == 0)
        return null;

    const id = runs[0]?.navigationEndpoint?.browseEndpoint?.browseId;
    const name = extractRuns_String(runs);
    const channelUrl = extractNavigationEndpoint_Url(runs[0]?.navigationEndpoint);
    const thumbUrl = null;

	return new PlatformAuthorLink(new PlatformID(PLATFORM, id, config.id, PLATFORM_CLAIMTYPE), name, channelUrl, thumbUrl ?? "");
}

function extractThumbnail_Thumbnails(thumbnail) {
	return new Thumbnails(thumbnail.thumbnails.map(x=>new Thumbnail(x.url, x.height)));
}
function extractThumbnail_BestUrl(thumbnail) {
    if(!thumbnail?.thumbnails || thumbnail.thumbnails.length <= 0)
        return null;
    let bestUrl = thumbnail.thumbnails[0].url;
    let bestHeight = thumbnail.thumbnails[0].height;
    for(let thumb of thumbnail.thumbnails)
        if(thumb.height > bestHeight) {
            bestUrl = thumb.url;
            bestHeight = thumb.height;
        }
    return bestUrl;
}
function extractVideoWithContextRenderer_AuthorLink(videoRenderer) {
	let id = videoRenderer.channelThumbnail?.channelThumbnailWithLinkRenderer?.navigationEndpoint?.browseEndpoint?.browseId;
	const name = extractRuns_String(videoRenderer.shortBylineText.runs);
	const channelThumbs = videoRenderer.channelThumbnail.channelThumbnailWithLinkRenderer?.thumbnail?.thumbnails;
	const thumbUrl = channelThumbs && channelThumbs.length > 0 ? channelThumbs[0].url : null;
	let channelUrl = videoRenderer.channelThumbnail?.channelThumbnailWithLinkRenderer?.navigationEndpoint?.browseEndpoint?.canonicalBaseUrl;
	if(channelUrl) channelUrl = URL_BASE + channelUrl;
	if (id) channelUrl = URL_BASE + "/channel/" + id;
	return new PlatformAuthorLink(new PlatformID(PLATFORM, id, config.id, PLATFORM_CLAIMTYPE), name, channelUrl, thumbUrl);
}
function extractVideoRenderer_AuthorLink(videoRenderer) {
	const id = videoRenderer.channelThumbnailSupportedRenderers.channelThumbnailWithLinkRenderer?.navigationEndpoint?.browseEndpoint?.browseId;
	const name = extractRuns_String(videoRenderer.ownerText.runs);
	const channelIcon = videoRenderer.channelThumbnailSupportedRenderers.channelThumbnailWithLinkRenderer;
	const thumbUrl = channelIcon.thumbnail.thumbnails[0].url;
	const channelUrl = (!id) ? extractRuns_Url(videoRenderer.ownerText.runs) : URL_BASE + "/channel/" + id;

	return new PlatformAuthorLink(new PlatformID(PLATFORM, id, config.id, PLATFORM_CLAIMTYPE), name, channelUrl, thumbUrl);
}
function extractCommentRenderer_Comment(contextUrl, commentRenderer, replyCount, replyContinuation) {
	const authorName = commentRenderer.authorText?.simpleText ?? "";
	const authorEndpoint = commentRenderer.authorEndpoint?.commandMetadata?.webCommandMetadata?.url ?? "";
	const authorThumbnail = (commentRenderer.authorThumbnail?.thumbnails ? 
		commentRenderer.authorThumbnail.thumbnails[commentRenderer.authorThumbnail.thumbnails.length - 1].url :
		""	
	);
	return new YTComment({
		contextUrl: contextUrl,
		author: new PlatformAuthorLink(new PlatformID(PLATFORM, null, config.id, PLATFORM_CLAIMTYPE), authorName, URL_BASE + authorEndpoint, authorThumbnail),
		message: extractRuns_String(commentRenderer.contentText?.runs) ?? "",
		rating: new RatingLikes(commentRenderer?.voteCount?.simpleText ? extractHumanNumber_Integer(commentRenderer.voteCount.simpleText) : 0),
		date: (commentRenderer.publishedTimeText?.runs ? extractAgoTextRuns_Timestamp(commentRenderer.publishedTimeText.runs) : 0),
		replyCount: replyCount ?? 0,
		context: { replyContinuation: replyContinuation }
	})
}
//#endregion

function convertIfShortUrl(url) {
    const shortMatch = url.match(REGEX_VIDEO_URL_SHORT);
    if(shortMatch && shortMatch.length == 3) {
        let id = shortMatch[2];
        if(id.indexOf("?") > 0)
            id = id.substring(0, id.indexOf("?"));
        url = URL_BASE + "/watch?v=" + id;
    }
    return url;
}


//#region Basic Extractors
function extractText_String(item) {
    if(typeof item === 'string')
        return item;
    if(item?.simpleText)
        return item.simpleText;
    if(item?.runs)
        return extractRuns_String(item.runs);

	if(item)
		log("Unknown string object: " + JSON.stringify(item, null, "   "));
    return null;
}
function extractRuns_String(runs) {
	if(!runs)
		return null;

	let str = "";
	for(let runi = 0; runi < runs.length; runi++) {
		const run = runs[runi];
		if(run.text)
			str += run.text;
		else if(run.emoji?.image?.accessibility?.accessibilityData?.label)
			str += "__" + run.emoji?.image?.accessibility?.accessibilityData?.label + "__"
	}
	return str;
}
function extractRuns_Html(runs) {
	if(!runs)
		return null;

	let str = "";
	for(let runi = 0; runi < runs.length; runi++) {
		const run = runs[runi];
		if(run.text)
			str += run.text;
	}
	return str;
}
function extractRuns_Url(runs) {
	for(let runi = 0; runi < runs.length; runi++) {
		const run = runs[runi];

		if(run.navigationEndpoint && run.navigationEndpoint.browseEndpoint && run.navigationEndpoint.browseEndpoint.canonicalBaseUrl)
			return URL_BASE + run.navigationEndpoint.browseEndpoint.canonicalBaseUrl;
	}
}

function extractNavigationEndpoint_Url(navEndpoint, baseUrl) {
    if(!baseUrl)
        baseUrl = URL_BASE;
    if(!navEndpoint)
		return null;
	if(navEndpoint?.browseEndpoint?.browseId && navEndpoint?.browseEndpoint?.canonicalBaseUrl && navEndpoint.browseEndpoint.canonicalBaseUrl.startsWith("/@"))
		return baseUrl + "/channel/" + navEndpoint?.browseEndpoint?.browseId;
    if(navEndpoint?.browseEndpoint?.canonicalBaseUrl)
        return baseUrl + navEndpoint?.browseEndpoint?.canonicalBaseUrl;
    if(navEndpoint.commandMetadata?.webCommandMetadata?.url)
        return baseUrl + navEndpoint.commandMetadata?.webCommandMetadata?.url;
    return null;
}

function extractAgoTextRuns_Timestamp(runs) {
	const runStr = extractRuns_String(runs);
	return extractAgoText_Timestamp(runStr);
}
function extractAgoText_Timestamp(str) {
	const match = str.match(REGEX_HUMAN_AGO);
	if(!match)
		return 0;
	const value = parseInt(match[1]);
	const now = parseInt(new Date().getTime() / 1000);
	switch(match[2]) {
		case "second":
		case "seconds":
			return now - value;
		case "minute":
		case "minutes":
			return now - value * 60;
		case "hour":
		case "hours":
			return now - value * 60 * 60;
		case "day":
		case "days":
			return now - value * 60 * 60 * 24;
		case "week":
		case "weeks":
			return now - value * 60 * 60 * 24 * 7;
		case "month":
		case "months":
			return now - value * 60 * 60 * 24 * 30; //For now it will suffice
		case "year":
		case "years":
			return now - value * 60 * 60 * 24 * 365;
		default:
			throw new ScriptException("Unknown time type: " + match[2]);
	}
}
function extractRuns_ViewerCount(runs) {
	if(runs && runs.length > 0) {
		const item = runs[0].text.replaceAll(".", "").replaceAll(",", "");
		if(isNaN(item))
			return -1;
		return parseInt(item);
	}
	return -1;
}
function extractHumanTime_Seconds(str) {
	if(str.indexOf(" ") >= 0)
		str = str.split(" ")[0];
	const parts = str.split(":");
	let scale = 1;
	let seconds = 0;
	for(let i = parts.length-1; i >= 0; i--) {
		if(isNaN(parts[i]))
			return seconds;
		seconds += parseInt(parts[i]) * scale;
		scale *= 60;
	}
	return parseInt(seconds);
}
function extractFirstNumber_Integer(str) {
	if(str) {
		const parts = str.split(' ');
		if(parts && parts.length > 0) {
			const num = parts[0].replaceAll(".","").replaceAll(",","");
			if(isNaN(num))
				return -1;
			return parseInt(num);
		}
	}
	return -1;
}
function extractHumanNumber_Integer(str) {
	if(!str)
		return -1;
	const match = str.match(REGEX_HUMAN_NUMBER);
	if(!match)
		return extractFirstNumber_Integer(str);

	const value = parseFloat(match[1]);
	
	switch(match[2]) {
		case "T":
			return parseInt(1000000000000 * value);
		case "B":
			return parseInt(1000000000 * value);
		case "M":
			return parseInt(1000000 * value);
		case "K":
			return parseInt(1000 * value);
		default:
			return parseInt(value);
	}
}
function extractDate_Timestamp(dateStr) {
	if(!dateStr)
		return -1;
	if(dateStr.indexOf("ago") > 0)
		return extractAgoText_Timestamp(dateStr);

	let matchDate = dateStr.match(REGEX_DATE_HUMAN);
	if(matchDate) return extractHumanDate_Timestamp(matchDate.slice(1));
	matchDate = dateStr.match(REGEX_DATE_EU);
	if(matchDate) return new Date(matchDate[0]).getTime() / 1000;
	matchDate = dateStr.match(REGEX_DATE_EU);
	if(matchDate) return new Date(matchDate[0]).getTime() / 1000;
	return -1;
}
function extractHumanDate_Timestamp(dateParts) {
	if(dateParts.length != 3)
		return -1;
	let day = -1;
	let month = -1;
	let year = -1;
	for(let i = 0; i < dateParts.length; i++) {
		const part = dateParts[i];
		if(part.length > 2) {
			const newMonth = monthNameToNumber(part);
			if(newMonth > 0)
				month = newMonth;
		}
		if(part.length == 4 && !isNaN(part))
			year = parseInt(part);
		if(part.length <= 2 && !isNaN(part))
			day = parseInt(part);
	}
	return (day > 0 && month > 0 && year > 0) ? 
		new Date(year + "-" + month + "-" + day).getTime() / 1000 : 
		-1;
}

//#endregion

//#region Filters
const FILTER_DATE_HOUR = 1;
const FILTER_DATE_DAY = 2;
const FILTER_DATE_WEEK = 3;
const FILTER_DATE_MONTH = 4;
const FILTER_DATE_YEAR = 5;

const FILTER_DURATION_4MIN = 1;
const FILTER_DURATION_4_20MIN = 3;
const FILTER_DURATION_20MIN = 2;

const FILTER_HD = 32;
const FILTER_SUBS = 40;
const FILTER_LIVE = 64;
const FILTER_4K = 112;
const FILTER_CreativeCommons = 48;
const FILTER_360 = 120
const FILTER_VR = 208;
const FILTER_3D = 56;
const FILTER_HDR = 200
const FILTERS = [
	{
		id: "date",
		name: "Upload Date",
		isMultiSelect: false,
		filters: [
			new FilterCapability("Last Hour", FILTER_DATE_HOUR, Type.Date.LastHour),
			new FilterCapability("This Day", FILTER_DATE_DAY, Type.Date.Today),
			new FilterCapability("This Week", FILTER_DATE_WEEK, Type.Date.LastWeek),
			new FilterCapability("This Month", FILTER_DATE_MONTH, Type.Date.LastMonth),
			new FilterCapability("This Year", FILTER_DATE_YEAR, Type.Date.LastYear),
		]
	},
	{
		id: "duration",
		name: "Duration",
		isMultiSelect: false,
		filters: [
			new FilterCapability("Under 4 minutes", FILTER_DURATION_4MIN, Type.Duration.Short),
			new FilterCapability("4-20 minutes", FILTER_DURATION_4_20MIN, Type.Duration.Medium),
			new FilterCapability("Over 20 minutes", FILTER_DURATION_20MIN, Type.Duration.Long)
		]
	},
	{
		id: "features",
		name: "Features",
		isMultiSelect: true,
		filters: [
			new FilterCapability("HD", FILTER_HD),
			new FilterCapability("4K", FILTER_4K),
			new FilterCapability("HDR", FILTER_HDR),
			new FilterCapability("Subtitles", FILTER_SUBS),
			new FilterCapability("Live", FILTER_LIVE),
			new FilterCapability("Creative Commons", FILTER_CreativeCommons),
			new FilterCapability("VR", FILTER_VR),
			new FilterCapability("3D", FILTER_3D),
			new FilterCapability("360", FILTER_360)
		]
	}
]

const SORT_RELEVANCE = 18;
const SORT_DATE = 2;
const SORT_VIEWS = 3;
const SORT_RATING = 1;

const TYPE_VIDEO = 1;
const TYPE_CHANNEL = 2;
const TYPE_PLAYLIST = 3;
const TYPE_MOVIES = 4;

const PREFIX_TYPE = 16;
const PREFIX_LENGTH = 18;
const PREFIX_ORDER = 8;
const PREFIX_DATE = 8;
const PREFIX_DURATION = 24;


function sortToByte(sort) {
	switch(sort) {
		case Type.Order.Chronological:
			return SORT_DATE;
		case SORT_RATING_STRING:
			return SORT_RATING;
		case SORT_VIEWS_STRING:
			return SORT_VIEWS;
		default:
			throw new ScriptException("Unknown sort");
	}
}

function searchQueryToSP(sort, type, filters) {
	if(!type)
		type = TYPE_VIDEO;

	let filter_date = (filters?.date && filters.date.length > 0) ? filters.date[0] : null;
	let filter_duration = (filters?.duration && filters.duration.length > 0) ? filters.duration[0] : null;
	let filter_features = filters?.features ?? [];
	
	const sortByte = sort ? sortToByte(sort) : null;//SORT_RELEVANCE;

	let arrLength = 0;
	let filterLength = 0;
	if(sortByte)
		arrLength += 2;
	if(type) {
		filterLength += 2;
		arrLength += 2;
	}
	if(filter_date) {
		filterLength += 2;
		arrLength += 2;
	}
	if(filter_duration) {
		filterLength += 2;
		arrLength += 2;
	}
	if(filter_features.length > 0) {
		for(let i = 0; i < filter_features.length; i++) {
			arrLength += 2;
			filterLength += 2;
			if(filter_features[i] > 128) {
				arrLength += 1;
				filterLength += 1;
			}
		}
	}
	if(filterLength > 0)
		arrLength += 2;
	
	const array = new Uint8Array(arrLength);
	let index = 0;


	if(sortByte) {
		array[index] = PREFIX_ORDER;
		array[index + 1] = sortByte;
		index += 2;
	}
	if(filterLength > 0) {
		array[index] = PREFIX_LENGTH;
		array[index + 1] = filterLength;
		index += 2;
	}
	if(filter_date) {
		array[index] = PREFIX_DATE;
		array[index + 1] = filter_date;
		index += 2;
	}
	if(filter_duration) {
		array[index] = PREFIX_DURATION;
		array[index + 1] = filter_duration;
		index += 2;
	}
	if(type) {
		array[index] = PREFIX_TYPE;
		array[index + 1] = type;
		index += 2;
	}
	for(let i = 0; i < filter_features.length; i++) {
		array[index] = filter_features[i];
		array[index + 1] = 1;
		index += 2;
		if(filter_features[i] > 128) {
			array[index] = 1;
			index += 1;
		}
	}

	return utility.toBase64(array);
}

//#endregion


//#region Utility
const htmlEncodedCharacters = {
	"amp": "&",
	"lt": "<",
	"gt": ">",
	"quot": "\"",
	"apos": "'"
}
function decodeHtml(text) {
	return text.replace(/(?:&amp;|&)#([0-9]*);/gm, function(match, dec) {
		return String.fromCharCode(dec);
	}).replace(/&([a-z]*);(#.*?;)?/gm, function(match, c){
		if(htmlEncodedCharacters[c])
			return htmlEncodedCharacters[c];
		return c;
	});
}

function monthNameToNumber(month) {
	if(!month)
		return -1;
	month = month.toLowerCase();

	//Either partial or full month name
	if(month.startsWith("jan")) return 1;
	if(month.startsWith("feb")) return 2;
	if(month.startsWith("mar")) return 3;
	if(month.startsWith("apr")) return 4;
	if(month.startsWith("may")) return 5;
	if(month.startsWith("jun")) return 6;
	if(month.startsWith("jul")) return 7;
	if(month.startsWith("aug")) return 8;
	if(month.startsWith("sep")) return 9;
	if(month.startsWith("oct")) return 10;
	if(month.startsWith("nov")) return 11;
	if(month.startsWith("dec")) return 12;
	return -1;
}

const ytLangMap = {
	"ar": Language.ARABIC,
	"es": Language.SPANISH,
	"fr": Language.FRENCH,
	"hi": Language.HINDI,
	"id": Language.INDONESIAN,
	"ko": Language.KOREAN,
	"pt-BR": Language.PORTBRAZIL,
	"ru": Language.RUSSIAN,
	"th": Language.THAI,
	"tr": Language.TURKISH,
	"vi": Language.VIETNAMESE,
	"en": Language.ENGLISH,
	"en-US": Language.ENGLISH
};
function ytLangIdToLanguage(id) {
	if(!id)
		return Language.UNKNOWN;
	const langParts = id?.split(".");
	const langPart = (langParts && langParts.length > 0) ? langParts[0] : "";
	if(ytLangMap[langPart])
		return ytLangMap[langPart];
	return Language.UNKNOWN;
}

function findRenderer(obj, rendererName) {
    if(!obj)
        return null;
    const keys = Object.keys(obj);
    if(!keys || keys.length == 0)
        return null;
	const objName = keys[0];
	const renderer = obj[objName];
	if(objName == rendererName)
	    return renderer;
    if(renderer.contents) {
        for(let content of renderer.contents) {
            const result = findRenderer(content, rendererName);
            if(result)
                return result;
        }
    }
    if(renderer.content)
        return findRenderer(renderer.content, rendererName);
    return null;
}

function switchKey(obj, handlers) {
	const objName = Object.keys(obj)[0];
	if(!objName) {
		if(handlers["null"])
			return handlers["null"];
		return null;
	}
	
	if(handlers[objName])
		return handlers[objName](obj[objName]);
	if(handlers["default"])
		return handlers["default"](objName);
	return null;
}

//#endregion


function validateContinuation(reqcb, useAuth = false) {
	const clientContext = getClientContext(useAuth);
	const result = reqcb();
	const append = result?.onResponseReceivedCommands ?? result?.onResponseReceivedActions;
	if(append && append.length > 0 && append[0].appendContinuationItemsAction) {
		const appendResults = append[0].appendContinuationItemsAction.continuationItems;
		if(!appendResults) {
			if(IS_TESTING)
				console.log("Continuation found without items?", result);
			return [];
		}
		else
			return appendResults;
	}
	else if(!clientContext.INNERTUBE_CONTEXT.client.visitorData && result.responseContext?.visitorData) {
		log("[validateContinuation] No visitor data set, found visitor data in response, retrying");
		clientContext.INNERTUBE_CONTEXT.client.visitorData = result.responseContext.visitorData;
		//Retry with visitorData
		const reResult = reqcb();
		log("[validateContinuation] retry result");
		if(append && append.length > 0 && append[0].appendContinuationItemsAction) {
			const appendResults = append[0].appendContinuationItemsAction.continuationItems;
			if(!appendResults) {
				if(IS_TESTING)
					console.log("Continuation found without items?", result);
				return [];
			}
			else
				return appendResults;
		}
		else
			return [];
	}
	else
		return [];
}

//#region Cipher/Decryption

var _cipherDecode = {

};
var _nDecrypt = {
	
};
var _sts = {
	
};
const REGEX_CIPHERS = [
	new RegExp("(?:\\b|[^a-zA-Z0-9$])([a-zA-Z0-9$]{2,})\\s*=\\s*function\\(\\s*a\\s*\\)\\s*\\{\\s*a\\s*=\\s*a\\.split\\(\\s*\"\"\\s*\\)"),
	new RegExp("\\bm=([a-zA-Z0-9$]{2,})\\(decodeURIComponent\\(h\\.s\\)\\)"),
	new RegExp("\\bc&&\\(c=([a-zA-Z0-9$]{2,})\\(decodeURIComponent\\(c\\)\\)"),
	new RegExp("([\\w$]+)\\s*=\\s*function\\((\\w+)\\)\\{\\s*\\2=\\s*\\2\\.split\\(\"\"\\)\\s*;"),
	new RegExp("\\b([\\w$]{2,})\\s*=\\s*function\\((\\w+)\\)\\{\\s*\\2=\\s*\\2\\.split\\(\"\"\\)\\s*;"),
	new RegExp("\\bc\\s*&&\\s*d\\.set\\([^,]+\\s*,\\s*(:encodeURIComponent\\s*\\()([a-zA-Z0-9$]+)\\(")
];
const REGEX_DECRYPT_N = /\.get\(\"n\"\)\)&&\([a-zA-Z0-9$_]=([a-zA-Z0-9$_]+)(?:\[(\d+)])?\([a-zA-Z0-9$_]\)/;
const REGEX_PARAM_N = new RegExp("[?&]n=([^&]*)");
const STS_REGEX = new RegExp("signatureTimestamp[=:](\\d+)");

source.decryptUrlTest = function(encrypted) {
	prepareCipher();

	let url = decryptUrlN(encrypted.url, true);
	if(!url)
	    url = decryptUrl(encrypted.cipher, true);
	if(!url)
		url = decryptUrl(encrypted.signatureCipher, true);
	return url;
}
source.decryptUrlTestN = function(n) {
	prepareCipher();
	let url = "https://whatever.com/asdgdsag?a=b&n=" + n + "&u=asd"

	return decryptUrlN(url, true);
}

function decryptUrl(encrypted, jsUrl, doLogging) {
	if(!encrypted) return null;

	const query = parseQueryString(encrypted);
	const baseUrl = query.url;
	const sigKey = query.sp;
	const sigValue = decodeCipher(decodeURIComponent(query.s), jsUrl);

	let decryptedUrl = decodeURIComponent(baseUrl) + "&" + sigKey + "=" + sigValue;

	if(doLogging) {
		log("SigKey: " + sigKey);
		log("SigValue: " + sigValue);
		log("Decrypted: " + decryptedUrl);
	}
	return decryptUrlN(decryptedUrl, jsUrl, doLogging);
}
function decryptUrlN(url, jsUrl, doLogging) {
	const nParamMatch = REGEX_PARAM_N.exec(url);
	if(nParamMatch) {
		const encryptedN = nParamMatch[1];
		const decryptedN = decryptN(encryptedN, jsUrl);

		if(doLogging) {
			log("Encrypt URL:" + url);
			log("NParam Found: " + encryptedN + " (length:" + encryptedN.length + ")");
			log("NParam Decrypted: " + decryptedN + " (size:" + decryptedN.length + ")");
			log("Decrypted URL:" + url.replace(encryptedN, decryptedN));
		}

		url = url.replace(encryptedN, decryptedN);
	}
	else if(doLogging)
		log("No NParam found in (" + url + ")");
	return url;
}
function decodeCipher(cipher, jsUrl) {
	if(!_cipherDecode[jsUrl])
		throw new ScriptException("Cipher decoder was not available [" + jsUrl + "]");
	return _cipherDecode[jsUrl](cipher);
}
function decryptN(encryptedN, jsUrl) {
	if(!_nDecrypt[jsUrl])
		throw new ScriptException("N Decryptor was not available [" + jsUrl + "]");
	return _nDecrypt[jsUrl](encryptedN);
}
function testCiphers() {
	let testResults = [];
	for(hash of CIPHER_TEST_HASHES) {
		const jsUrl = CIPHER_TEST_PREFIX + hash + CIPHER_TEST_SUFFIX;
		try{
			if(prepareCipher(jsUrl))
				testResults.push("CipherTest [" + hash + "]: PASSED");
			else 
				testResults.push("CipherTest [" + hash + "]: FAIL");
		}
		catch(ex) {
			testResults.push(["CipherTest [" + hash + "]: FAIL", ex]);
		}
		clearCipher(jsUrl);
	}
	for(result of testResults) {
		if(result.constructor === Array)
			console.log(result[0], result[1]);
		else
			console.log(result);
	}
}
source.testCiphers = testCiphers;
function prepareCipher(jsUrl) {
	if(_cipherDecode[jsUrl])
		return false;//_cipherDecode[jsUrl];
	log("New JS Url found: [" + jsUrl + "], fetching new js (total: " + (Object.keys(_cipherDecode).length + 1) + ")");

	try{
		const playerCodeResp = http.GET(URL_BASE + jsUrl, {});
		if(!playerCodeResp.isOk)
			throw new ScriptException("Failed to get player js");
		console.log("Javascript Url: " + URL_BASE + jsUrl);
		const playerCode = playerCodeResp.body;

		const cipherFunctionCode = getCipherFunctionCode(playerCode, jsUrl);
		console.log("DecodeCipher Function: " + cipherFunctionCode);
		_cipherDecode[jsUrl] = eval(cipherFunctionCode);

		const decryptFunctionCode = getNDecryptorFunctionCode(playerCode, jsUrl);
		console.log("DecryptN Function: " + decryptFunctionCode);
		_nDecrypt[jsUrl] = eval(decryptFunctionCode);

		const stsMatch = playerCode.match(STS_REGEX);
		console.log("stsMatch: " + stsMatch);
		if (stsMatch !== null && stsMatch.length > 1) {
			const sts = stsMatch[1];
			_sts[jsUrl] = sts;
			console.log("sts: " + sts);
		}

		return true;//_cipherDecode[jsUrl];
	}
	catch(ex) {
		clearCipher(jsUrl);
		throw new ScriptException("Failed to get Cipher due to: " + ex);
	}
}
source.prepareCipher = prepareCipher;
function clearCipher(jsUrl) {
    if(_cipherDecode[jsUrl])
        _cipherDecode[jsUrl] = undefined;
    if(_nDecrypt[jsUrl])
        _nDecrypt[jsUrl] = undefined;
}
function getNDecryptorFunctionCode(code, jsUrl) {
	if(_nDecrypt[jsUrl])
		return _nDecrypt[jsUrl];
	const nDecryptFunctionArrNameMatch = REGEX_DECRYPT_N.exec(code);
	if(!nDecryptFunctionArrNameMatch)
		throw new ScriptException("Failed to find n decryptor (name)");
	const nDecryptFunctionArrName = nDecryptFunctionArrNameMatch[1];
	const nDecryptFunctionArrIndex = parseInt(nDecryptFunctionArrNameMatch[2]);
	
	const nDecryptFunctionNameMatch = code.match(nDecryptFunctionArrName + "\\s*=\\s*\\[([a-zA-Z0-9,\\(,\\)\\.]+?)]");
	if(!nDecryptFunctionNameMatch)
		throw new ScriptException("Failed to find n decryptor (array)");
	const nDecryptArray = nDecryptFunctionNameMatch[1].split(",");
	if(nDecryptArray.length <= nDecryptFunctionArrIndex)
		throw new ScriptException("Failed to find n decryptor (index)");
	const nDecryptFunctionName = nDecryptArray[nDecryptFunctionArrIndex];
	const nDecryptFunctionCodeMatch = code.match(nDecryptFunctionName + "=function\\(a\\)\\{[\\s\\S]*?join\\(\\\"\\\"\\)};");
	if(!nDecryptFunctionCodeMatch)
		throw new ScriptException("Failed to find n decryptor (code)");
	
	return "(function(){" + 
		"var " + nDecryptFunctionCodeMatch[0] + "\n" +
		"return function decryptN(nEncrypted){ return " + nDecryptFunctionName + "(nEncrypted); } \n" +
	"})()";
}
function getCipherFunctionCode(playerCode, jsUrl) {
	if(_cipherDecode[jsUrl])
		return _cipherDecode[jsUrl];
	let cipherFunctionName = null;

	for(let i = 0; i < REGEX_CIPHERS.length; i++) {
		const match = playerCode.match(REGEX_CIPHERS[i]);
		if(match) {
			cipherFunctionName = match[1];
			break;
		}
	}
	if(!cipherFunctionName)	
		throw new ScriptException("Failed to find cipher (name)");
	const cipherFunctionCodeMatch = playerCode.match("(" + cipherFunctionName.replace("$", "\\$") + "=function\\([a-zA-Z0-9_]+\\)\\{.+?\\})");
	if(!cipherFunctionCodeMatch) {
		if(IS_TESTING)
			console.log("Failed to find cipher function in: ", playerCode);
		throw new ScriptException("Failed to find cipher (function)");
	}
	const cipherFunctionCode = cipherFunctionCodeMatch[1];
	const cipherFunctionCodeVar = "var " + cipherFunctionCode;
	const helperObjNameMatch = cipherFunctionCode.match(";([A-Za-z0-9_\\$]{2,3})\\...\\(");
	if(!helperObjNameMatch) {
		if(IS_TESTING)
			console.log("Failed to find helper name in: ", playerCode);
		throw new ScriptException("Failed to find helper (name)");
	}
	if(IS_TESTING)
		console.log("Cipher Code: ", cipherFunctionCode);
	const helperObjName = helperObjNameMatch[1];
	const helperObjMatch = playerCode.match("(var " + escapeRegex(helperObjName) + "=\\{[\\s\\S]*?\\};)");
	if(!helperObjMatch) {
		if(IS_TESTING)
			console.log("Failed to find helper method [" + helperObjName + "] in: ", playerCode);
		throw new ScriptException("Failed to extract helper (methods)");
	}
	const helperObj = helperObjMatch[1];
	const functionCode = "return function decodeCipher(str){ return " + cipherFunctionName + "(str); }";

	return "(function(){" + helperObj + "\n" + 
		cipherFunctionCodeVar + "\n" +
		functionCode + "})()";
}
function escapeRegex(str) {
	return str.replace("$", "\\$");
}

function decodeHexEncodedString(str) {
	return str.replace(/\\x([0-9A-Fa-f]{2})/g, function() {
        return String.fromCharCode(parseInt(arguments[1], 16));
    });
}

function parseQueryString(query) {
	if(query.indexOf("?") >= 0)
		query = query.substring(query.indexOf("?") + 1);

	const parts = query.split("&");
	const results = {};
	for(let i = 0; i < parts.length; i++) {
		const part = parts[i];
		const valueIndex = part.indexOf("=");
		if(valueIndex == -1)
			results[part] = true;
		else
			results[part.substring(0, valueIndex)] = part.substring(valueIndex + 1);
	}
	return results;
}
//#endregion


//#region Others
const RANDOM_CHARACTER_SET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function randomString(length) {
	let str = "";
	for(let i = 0; i < length; i++)
		str += RANDOM_CHARACTER_SET[Math.floor(Math.random() * RANDOM_CHARACTER_SET.length)]
	return str;
}
function randomInt(start, end) {
	return Math.floor(random() * (end + start) - end);
}
//#endregion

console.log("LOADED");