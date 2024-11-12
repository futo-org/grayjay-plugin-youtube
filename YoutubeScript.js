const URL_BASE = "https://www.youtube.com";
const URL_BASE_M = "https://m.youtube.com";
const URL_HOME = "https://www.youtube.com";
const URL_TRENDING = "https://www.youtube.com/feed/trending";
const URL_CONTEXT = "https://www.youtube.com";
const URL_CONTEXT_M = "https://m.youtube.com";

const URL_CHANNEL_VIDEOS = "/videos";
const URL_CHANNEL_STREAMS = "/streams";
const URL_CHANNEL_PLAYLISTS = "/playlists";
const URL_SEARCH_SUGGESTIONS = "https://suggestqueries-clients6.youtube.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=";
const URL_SEARCH = "https://www.youtube.com/youtubei/v1/search";
const URL_BROWSE = "https://www.youtube.com/youtubei/v1/browse";
const URL_BROWSE_MOBILE = "https://m.youtube.com/youtubei/v1/browse";
const URL_NEXT = "https://www.youtube.com/youtubei/v1/next";
const URL_NEXT_MOBILE = "https://m.youtube.com/youtubei/v1/next";
const URL_GUIDE = "https://www.youtube.com/youtubei/v1/guide";
const URL_SUB_CHANNELS_M = "https://m.youtube.com/feed/channels";
const URL_SUBSCRIPTIONS_M = "https://m.youtube.com/feed/subscriptions";
const URL_PLAYLIST = "https://youtube.com/playlist?list=";
const URL_PLAYLISTS_M = "https://m.youtube.com/feed/library";

const URL_CHANNEL_BASE = URL_BASE + "/channel/";

const URL_LIVE_CHAT_HTML = "https://www.youtube.com/live_chat";
const URL_LIVE_CHAT = "https://www.youtube.com/youtubei/v1/live_chat/get_live_chat";

const URL_WATCHTIME = "https://www.youtube.com/api/stats/watchtime";

const URL_PLAYER = "https://youtubei.googleapis.com/youtubei/v1/player";

const URL_YOUTUBE_DISLIKES = "https://returnyoutubedislikeapi.com/votes?videoId=";
const URL_YOUTUBE_SPONSORBLOCK = "https://sponsor.ajay.app/api/skipSegments?videoID=";

const URL_YOUTUBE_RSS = "https://www.youtube.com/feeds/videos.xml?channel_id=";

//Newest to oldest
const CIPHER_TEST_HASHES = ["3400486c", "b22ef6e7", "a960a0cb", "178de1f2", "4eae42b1", "f98908d1", "0e6aaa83", "d0936ad4", "8e83803a", "30857836", "4cc5d082", "f2f137c6", "1dda5629", "23604418", "71547d26", "b7910ca8"];
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
const REGEX_VIDEO_URL_CLIP = new RegExp("https://(.*\\.)?youtube\\.com/clip/(.*)[?]?");
const REGEX_VIDEO_URL_EMBED = new RegExp("https://(.*\\.)?youtube\\.com/embed/([^?]+)");

const REGEX_VIDEO_CHANNEL_URL = new RegExp("https://(.*\\.)?youtube\\.com/channel/(.*)");
const REGEX_VIDEO_CHANNEL_URL2 = new RegExp("https://(.*\\.)?youtube\\.com/user/.*");
const REGEX_VIDEO_CHANNEL_URL3 =  new RegExp("https://(.*\\.)?youtube\\.com/@.*");
const REGEX_VIDEO_CHANNEL_URL4 =  new RegExp("https://(.*\\.)?youtube\\.com/c/*");

const REGEX_VIDEO_PLAYLIST_URL = new RegExp("https://(.*\\.)?youtube\\.com/playlist\\?list=.*");

const REGEX_INITIAL_DATA = new RegExp("<script.*?var ytInitialData = (.*?);<\/script>");
const REGEX_INITIAL_PLAYER_DATA = new RegExp("<script.*?var ytInitialPlayerResponse = (.*?});");

//TODO: Make this one more flexible/reliable. For now used as fallback if initial fails.
const REGEX_INITIAL_PLAYER_DATA_FALLBACK = new RegExp("<script.*?var ytInitialPlayerResponse = (.*});var meta = document\.createElement");

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

const IOS_APP_VERSION = "19.14.3"
const IOS_DEVICE_VERSION = "iPhone15,4"
const IOS_OS_VERSION = "17_4_1"
const IOS_OS_VERSION_DETAILED = "17.4.1.21E237"
const USER_AGENT_IOS = "com.google.ios.youtube/" + IOS_APP_VERSION + "(" + IOS_DEVICE_VERSION + "; U; CPU iOS " + IOS_OS_VERSION + " like Mac OS X; US)";

const USER_AGENT_ANDROID = "com.google.android.youtube/17.31.35 (Linux; U; Android 12; US) gzip";
const USER_AGENT_TVHTML5_EMBED = "Mozilla/5.0 (CrKey armv7l 1.5.16041) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.0 Safari/537.36";

const USE_MOBILE_PAGES = true;
const USE_ANDROID_FALLBACK = false;
const USE_IOS_FALLBACK = true;
const USE_IOS_VIDEOS_FALLBACK = true;

let USE_ABR_VIDEOS = false;

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
	
	USE_ABR_VIDEOS = !!_settings.useUMP && (bridge.buildSpecVersion ?? 1) > 1;
	log("ABR Enabled: " + USE_ABR_VIDEOS);

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

		console.log("batchResp", batchResp);
		throwIfCaptcha(batchResp[0])
		if (!batchResp[0].isOk)
			throw new ScriptException("Failed to request context enable !batchResp[0].isOk");

        if(isLoggedIn && !batchResp[1].isOk) throw new ScriptException("Failed to request context enable isLoggedIn && !batchResp[1].isOk");

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
    else if(bridge.isLoggedIn())
        initialData = requestInitialData(URL_CONTEXT_M, USE_MOBILE_PAGES, true);
	else
		initialData = requestInitialData(URL_HOME, USE_MOBILE_PAGES, true);
	const tabs = extractPage_Tabs(initialData);
	if(tabs.length == 0) {
        if(bridge.devSubmit) bridge.devSubmit("getHome - No tabs found..", JSON.stringify(initialData));
		throw new ScriptException("No tabs found..");
	}
    if(tabs[0].videos.length > 0)
	    return new RichGridPager(tabs[0], {}, USE_MOBILE_PAGES, true);
    else
        return source.getTrending();
};

source.getTrending = () => {
    let initialData = requestInitialData(URL_TRENDING, USE_MOBILE_PAGES, false);
    if(IS_TESTING)
        console.log("getTrending initialData", initialData);
	const tabs = extractPage_Tabs(initialData);
	if(tabs.length == 0) {
        if(bridge.devSubmit) bridge.devSubmit("getTrending - No tabs found..", JSON.stringify(initialData));
		throw new ScriptException("No tabs found..");
	}
	let tab = tabs[0];
	if (tab.videos.length === 0) {
		if (tab.shelves.length > 0) {
			tab = tab.shelves[0];
		}
	}
	return new RichGridPager(tab, {}, USE_MOBILE_PAGES, false);
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
	else {
        if(bridge.devSubmit) bridge.devSubmit("searchChannelContents - No search tab found", JSON.stringify(initialData));
		throw new ScriptException("No search tab found");
	}
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
	return REGEX_VIDEO_URL_DESKTOP.test(url) || REGEX_VIDEO_URL_SHARE.test(url) || REGEX_VIDEO_URL_SHARE_LIVE.test(url) || REGEX_VIDEO_URL_SHORT.test(url) || REGEX_VIDEO_URL_CLIP.test(url) || REGEX_VIDEO_URL_EMBED.test(url);
};


if(false && (bridge.buildSpecVersion ?? 1) > 1) {
	//TODO: Implement more compact version using new api batch spec
}
else {
	source.getContentDetails = (url, useAuth, simplify) => {
		useAuth = !!_settings?.authDetails || !!useAuth;

		log("ABR Enabled: " + USE_ABR_VIDEOS);

		url = convertIfOtherUrl(url);

		const clientContext = getClientContext(false);

		const videoId = extractVideoIDFromUrl(url);
		if(IS_TESTING)
			console.log("VideoID:", videoId);


		const useLogin = useAuth && bridge.isLoggedIn();

		const headersUsed = (useLogin) ? getAuthContextHeaders(false) : {};
		headersUsed["Accept-Language"] = "en-US";
		headersUsed["Cookie"] = "PREF=hl=en&gl=US"

		let batchCounter = 1;
		const batch = http.batch()
			.GET(url, headersUsed, useLogin);
		
		let batchYoutubeDislikesIndex = -1;
		if(videoId && _settings["youtubeDislikes"] && !simplify) {
			batch.GET(URL_YOUTUBE_DISLIKES + videoId, {}, false);
			batchYoutubeDislikesIndex = batchCounter++;
		}

		let batchIOS = -1;
		if(USE_IOS_VIDEOS_FALLBACK) {
			requestIOSStreamingData(videoId, batch);
			batchIOS = batchCounter++;
		}

		const resps = batch.execute();

		throwIfCaptcha(resps[0]);
		if(!resps[0].isOk) {
			throw new ScriptException("Failed to request page [" + resps[0].code + "]");
		}

		let html = resps[0].body;//requestPage(url);
		let initialData = getInitialData(html);
		let initialPlayerData = getInitialPlayerData(html);
		let clientConfig = getClientConfig(html);
		
		let ageRestricted = initialPlayerData.playabilityStatus?.reason?.indexOf("your age") > 0 ?? false;
		if (initialPlayerData.playabilityStatus?.status == "LOGIN_REQUIRED" && (bridge.isLoggedIn() || !ageRestricted)) {
			if(!!_settings?.allowLoginFallback && !useLogin) {
				bridge.toast("Using login fallback to resolve:\n" + initialPlayerData?.playabilityStatus?.reason);
				resps[0] = http.GET(url, headersUsed, true);

				html = resps[0].body;//requestPage(url);
				initialData = getInitialData(html);
				initialPlayerData = getInitialPlayerData(html);
				clientConfig = getClientConfig(html);

				if (initialPlayerData.playabilityStatus?.status == "LOGIN_REQUIRED")
					throw new ScriptLoginRequiredException("Login required\nReason: " + initialPlayerData?.playabilityStatus?.reason);
			}
			else
				throw new ScriptLoginRequiredException("Login required\nReason: " + initialPlayerData?.playabilityStatus?.reason);
		}
		const invalidExperiments = [51217102, 51217476];
		var invalidExperimentIndexes = invalidExperiments.map(x=>clientConfig.FEXP_EXPERIMENTS.indexOf(x));
		const isExperiment = clientConfig.FEXP_EXPERIMENTS && invalidExperimentIndexes.filter(x=>x >= 0).length > 0;


		if(initialPlayerData?.playabilityStatus?.status == "UNPLAYABLE")
			throw new UnavailableException("Video unplayable");
		
		const jsUrlMatch = html.match("PLAYER_JS_URL\"\\s?:\\s?\"(.*?)\"");
		const jsUrl = (jsUrlMatch) ? jsUrlMatch[1] : clientContext.PLAYER_JS_URL;
		const isNewCipher = prepareCipher(jsUrl);

		ageRestricted = initialPlayerData.playabilityStatus?.reason?.indexOf("your age") > 0 ?? false;
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
		const controversial = initialPlayerData.playabilityStatus?.errorScreen?.playerErrorMessageRenderer?.reason?.simpleText?.indexOf("following content may") > 0 ?? false;
		if(controversial) {
			if (_settings["allowControversialRestricted"]) {
				const sts = _sts[jsUrl];
				if (!initialPlayerData.streamingData && sts) {
					initialPlayerData = requestTvHtml5EmbedStreamingData(initialPlayerData.videoDetails.videoId, sts);
					console.log("Filled missing streaming data using TvHtml5Embed.");
				}
			} else {
				throw new UnavailableException("Controversial restricted videos can be allowed using the plugin settings");
			}
		}
		
		if(IS_TESTING) {
			console.log("Initial Data", initialData);
			console.log("Initial Player Data", initialPlayerData);
		}

		let creationData = {
			url: url,
			initialData: initialData,
			initialPlayerData: initialPlayerData,
			jsUrl: jsUrl
		};

		const videoDetails = extractVideoPage_VideoDetails(initialData, initialPlayerData, {
			url: url
		}, jsUrl, useLogin);
		if(videoDetails == null)
			throw new UnavailableException("No video found");

		if(!videoDetails.live && 
			(videoDetails.video?.videoSources == null || videoDetails.video.videoSources.length == 0) &&
			(!videoDetails.datetime || videoDetails.datetime < (((new Date()).getTime() / 1000) - 60 * 60))) {
			if(isNewCipher) {
				log("Unavailable video found with new cipher, clearing cipher");
				clearCipher(jsUrl);
			}
			if(!simplify)
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
		if(USE_IOS_FALLBACK && videoDetails.hls && videoDetails.hls.url && !simplify) {
			const iosDataResp = (batchIOS > 0) ?
				resps[batchIOS] : 
				requestIOSStreamingData(videoDetails.id.value);
				
			if(iosDataResp.isOk) {
				const iosData = JSON.parse(iosDataResp.body);
				if(IS_TESTING)
					console.log("IOS Streaming Data", iosData);
				if(iosData?.streamingData?.hlsManifestUrl) {
					log("Using iOS HLS substitute");
					const existingUrl = videoDetails.hls.url;
					videoDetails.hls.name = "HLS (IOS)";
					videoDetails.hls.url = iosData.streamingData.hlsManifestUrl;
					if(existingUrl == videoDetails.live?.url) {
						videoDetails.live.name = "HLS (IOS)";
						videoDetails.live.url = iosData.streamingData.hlsManifestUrl;
					}
				}
			}
			else
				bridge.toast("Failed to get iOS stream data");
		}
		else if(USE_IOS_VIDEOS_FALLBACK && !USE_ABR_VIDEOS && !simplify) {
			const iosDataResp = (batchIOS > 0) ?
				resps[batchIOS] : 
				requestIOSStreamingData(videoDetails.id.value);
			if(iosDataResp.isOk) {
				const iosData = JSON.parse(iosDataResp.body);
				if(IS_TESTING)
					console.log("IOS Streaming Data", iosData);

				if(iosData?.streamingData?.adaptiveFormats) {
					if(!!_settings["showVerboseToasts"])
					bridge.toast("Using iOS sources fallback (" + (batchIOS > 0 ? "cached" : "lazily") + ")");
					let newDescriptor = extractAdaptiveFormats_VideoDescriptor(iosData.streamingData.adaptiveFormats, jsUrl, creationData, "IOS ");
					videoDetails.video = newDescriptor;
				}
				else {
					log("Failed to get iOS stream data, fallback to UMP")
					bridge.toast("Failed to get iOS stream data, fallback to UMP");
					videoDetails.video = extractABR_VideoDescriptor(initialPlayerData, jsUrl) ?? new VideoSourceDescriptor([]);
				}
			}
			else {
				log("Failed to get iOS stream data, fallback to UMP (" + iosDataResp?.code + ")")
				bridge.toast("Failed to get iOS stream data, fallback to UMP");
				videoDetails.video = extractABR_VideoDescriptor(initialPlayerData, jsUrl) ?? new VideoSourceDescriptor([]);
			}
		}

		if(batchYoutubeDislikesIndex > 0) {
			try {
				const youtubeDislikeInfoResponse = resps[batchYoutubeDislikesIndex]
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
		finalResult.__initialData = initialData;
		if(!!_settings["youtubeActivity"] && useLogin) {
			finalResult.__playerData = initialPlayerData;
			finalResult.getPlaybackTracker = function(url) {
				return source.getPlaybackTracker(url, initialPlayerData)
			};
		}
		finalResult.getContentChapters = function() {
			return source.getContentChapters(url, finalResult.__initialData);
		};

		finalResult.getContentRecommendations = function() {
			const initialData = finalResult.__initialData;
			if(!initialData)
				return new VideoPager([], false);
			return source.getContentRecommendations(url, initialData);
		}

		return finalResult;
	};
}

source.getContentChapters = function(url, initialData) {
    //return [];
    if(REGEX_VIDEO_URL_CLIP.test(url)) {
		const videoPage = http.GET(url, getRequestHeaders({}), false);

		if(videoPage.isOk && throwIfCaptcha(videoPage)) {
		    const initialData = getInitialData(videoPage.body);
		    const playerData = getInitialPlayerData(videoPage.body);

		    console.log("Clip data", playerData?.clipConfig);
		    const clipConfig = playerData?.clipConfig;
		    if(clipConfig?.endTimeMs && clipConfig?.startTimeMs) {
		        const startTime = parseInt(clipConfig.startTimeMs) / 1000;
		        const endTime = parseInt(clipConfig.endTimeMs) / 1000;
		        return [
		            {
                        name: "Non-Clip",
                        timeStart: 0,
                        timeEnd: startTime,
                        type: Type.Chapter.SKIPPABLE
                    },
		            {
                        name: "Clip",
                        timeStart: startTime,
                        timeEnd: endTime,
                        type: Type.Chapter.NORMAL
                    },
		            {
                        name: "Non-Clip",
                        timeStart: endTime,
                        timeEnd: 99999999,
                        type: Type.Chapter.SKIPPABLE
                    },
		        ];
		    }
		    else
		        return [];
		}
		else return [];
    }

    const videoId = extractVideoIDFromUrl(url);

    let sbResp = null;
    const sbChapters = [];

	if(initialData == null) {
		const reqs = http.batch()
		    .GET(url, getRequestHeaders({}), false);

        if(_settings["sponsorBlock"] && videoId) {
			const cats = [
				(!!_settings["sponsorBlockCat_Sponsor"]) ? "sponsor" : null,
				(!!_settings["sponsorBlockCat_Intro"]) ? "intro" : null,
				(!!_settings["sponsorBlockCat_Outro"]) ? "outro" : null,
				(!!_settings["sponsorBlockCat_Self"]) ? "selfpromo" : null,
				(!!_settings["sponsorBlockCat_Offtopic"]) ? "music_offtopic" : null,
				(!!_settings["sponsorBlockCat_Preview"]) ? "preview" : null,
				(!!_settings["sponsorBlockCat_Filler"]) ? "filler" : null
			].filter(x=>!!x);
			const catsArg = "&categories=[" + cats.map(x=>"\"" + x + "\"").join(",") + "]";
            reqs.GET(URL_YOUTUBE_SPONSORBLOCK + videoId + catsArg, {}, false);

		}

        const resps = reqs.execute();

		if(resps[0].isOk && throwIfCaptcha(resps[0]))
		    initialData = getInitialData(resps[0].body);
		else
		    throw ScriptException("Failed to get chapters (" + resps[0].code + ")");

        if(_settings["sponsorBlock"] && videoId)
            sbResp = resps[1];
	}
	else if(_settings["sponsorBlock"] && videoId)
	    sbResp = http.GET(URL_YOUTUBE_SPONSORBLOCK + videoId, {}, false);

	if(sbResp && sbResp.isOk) {
	    try {
	        const allowNoVoteSkip = !!(_settings["sponsorBlockNoVotes"]);
	        const skipType = (_settings["sponsorBlockType"]) ? Type.Chapter.SKIP : Type.Chapter.SKIPPABLE;
	        const sbData = JSON.parse(sbResp.body);
	        for(let block of sbData) {
	            if(block.actionType == "skip" &&
	                block.segment && block.segment.length == 2 &&
	                (allowNoVoteSkip || block.votes >= 1)) {
	                sbChapters.push({
	                    name: block.category,
	                    timeStart: parseFloat(block.segment[0]),
	                    timeEnd: parseFloat(block.segment[1]),
	                    type: skipType
	                });
	            }
	        }
	    }
	    catch(ex) {
	        //SB Failed
	        log("SB Failed (" + sbResp.code + "): " + ex);
	    }
	}

	let videoChapters = [];

    const queryParams = parseQueryString(url);
    if(Type.Chapter.SKIPONCE && queryParams["t"]) {
        const initialSkip = parseInt(queryParams["t"]);
        if(!isNaN(initialSkip)) {
            videoChapters.push({
                name: "InitialSkip",
                timeStart: parseFloat(-1),
                timeEnd: parseFloat(initialSkip),
                type: Type.Chapter.SKIPONCE
            });
        }
    }

	try {
	    videoChapters = videoChapters.concat(extractVideoChapters(initialData) ?? []);
	}
	catch(ex) {
	    //Chapters failed
	}

    //Merge chapters
	if(videoChapters.length > 0 && sbChapters.length > 0)
	    return mergeSBChapters(videoChapters, sbChapters);
	else if(videoChapters.length > 0)
	    return videoChapters;
	else if(sbChapters.length > 0)
	    return sbChapters;
	else
	    return [];
}
function mergeSBChapters(videoChapters, sbChapters) {
    let newChapters = [];
	for(let videoChapter of videoChapters) {
	    const sponsors = sbChapters.filter(x=>
	        x.timeStart >= videoChapter.timeStart &&
	        x.timeStart <= videoChapter.timeEnd);
	    if(sponsors.length > 0) {
	        let startTime = videoChapter.timeStart;
	        let skip = false;
	        for(let sponsorI = 0; sponsorI < sponsors.length && !skip; sponsorI++) {
	            const sponsor = sponsors[sponsorI];
	            const nextSponsor = (sponsorI + 1 < sponsors.length) ? sponsors[sponsorI + 1] : null;

                const videoChapterBefore = {
                    name: videoChapter.name,
                    timeStart: startTime,
                    timeEnd: sponsor.timeStart,
                    type: videoChapter.type
                };
                const videoChapterAfter = {
                    name: videoChapter.name,
                    timeStart: sponsor.timeEnd,
                    timeEnd: (nextSponsor != null) ? nextSponsor.timeStart :  videoChapter.timeEnd,
                    type: videoChapter.type
                };

                if(sponsor.timeStart <= startTime && sponsor.timeEnd <= videoChapter.timeEnd) {
                    newChapters.push(sponsor);
                    skip = true;
                }
                else if(sponsor.timeStart <= startTime) {
                    newChapters.push(sponsor);
                    newChapters.push(videoChapterAfter);
                    startTime = videoChapterAfter.timeEnd;
                }
                else {
                    newChapters.push(videoChapterBefore);
                    newChapters.push(sponsor);
                    if(videoChapterAfter.timeStart < videoChapterAfter.timeEnd) {
                        newChapters.push(videoChapterAfter);
                        startTime = videoChapterAfter.timeEnd;
                    }
                    else startTime = videoChapterAfter.timeStart;
                }
	        }
	    }
	    else
	        newChapters.push(videoChapter);
    }
    return newChapters;
}
function extractVideoChapters(initialData) {
	let rawObjects = initialData?.playerOverlays?.playerOverlayRenderer?.decoratedPlayerBarRenderer;
	if(rawObjects?.decoratedPlayerBarRenderer)
	    rawObjects = rawObjects.decoratedPlayerBarRenderer?.playerBar?.multiMarkersPlayerBarRenderer?.markersMap;
	else
	    rawObjects = rawObjects.playerBar?.multiMarkersPlayerBarRenderer?.markersMap;

	if(!rawObjects || rawObjects.length == 0)
		return [];

    const chapters = rawObjects.find(x=>x.key == "DESCRIPTION_CHAPTERS") ?? rawObjects.find(x=>x.key == "AUTO_CHAPTERS");
    if(chapters?.value?.chapters == null)
        return [];

    let result = [];
    const validChapters = chapters.value.chapters.filter(x=> x.chapterRenderer &&  x.chapterRenderer.title && (x.chapterRenderer.timeRangeStartMillis || x.chapterRenderer.timeRangeStartMillis === 0))
    for(let i = 0; i < validChapters.length; i++) {
        const chapter = validChapters[i]?.chapterRenderer;
        const chapterNext = (i + 1 < validChapters.length) ? validChapters[i + 1]?.chapterRenderer : null;

        const resultChapter = {
            name: extractText_String(chapter.title),
            timeStart: parseInt(chapter.timeRangeStartMillis / 1000),
            timeEnd: (chapterNext?.timeRangeStartMillis) ? parseInt(chapterNext.timeRangeStartMillis / 1000) : 999999, //Easier than re-parsing video end,
            type: Type.Chapter.NORMAL
        };
        result.push(resultChapter);
    }

    return result;
}
function getVideoDetailsHtml(url, useLogin) {
	const shouldUseLogin = useLogin && bridge.isLoggedIn();

	const headersUsed = (shouldUseLogin) ? getAuthContextHeaders(false) : {};
	headersUsed["Accept-Language"] = "en-US";

	const result = http.GET(url, headersUsed, shouldUseLogin);
	if(result.isOk)
	    return result.body;
	else
	    throw new ScriptException("Failed to get video details [" + url + "] (" + result.code + ")");
}
source.getLiveChatWindow = function(url) {
	const id = extractVideoIDFromUrl(url);
	if(!id)
		throw new ScriptException("No valid id found");

	let chatUrl = URL_LIVE_CHAT_HTML + "?v=" + id;
    if(bridge.isLoggedIn()) {
        try {
            //Try live version
            const html = getVideoDetailsHtml(url, true);
            const initialData = getInitialData(html)

            const continuations = initialData?.contents?.twoColumnWatchNextResults?.conversationBar?.liveChatRenderer?.continuations;
            if(continuations) {
                const continuation = continuations.find(x=>x.reloadContinuationData?.continuation);
                if(continuation) {
                    chatUrl = URL_LIVE_CHAT_HTML + "?continuation=" + continuation.reloadContinuationData?.continuation;

                }
            }
        }
        catch(ex) {
            log("Failed to get live chat window continuation, fallback to standard\n" + ex)
        }
    }


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

	const chatHtmlResp = http.GET(URL_LIVE_CHAT_HTML + "?v=" + id, {}, false);
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
		const video = source.getContentDetails(url, true, true);
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
    url = convertIfOtherUrl(url);
	const useLogin = (!!_settings?.authDetails) && bridge.isLoggedIn();
	if(useLogin)
		log("USING AUTH FOR COMMENTS");
	if(useLogin && url.indexOf("/www.") >= 0)
		url = url.replace("www", "m");

	//const html = requestPage(url, {}, useLogin);
	const initialData = requestInitialData(url, useLogin, useLogin);
	const contents = initialData.contents;
	const result = contents.twoColumnWatchNextResults?.results?.results?.contents ??
		contents.singleColumnWatchNextResults?.results?.results?.contents ??
		null;	//Add any alternative containers
	if(!result)
		return new CommentPager([], false);
	const engagementPanels = initialData.engagementPanels ?? [];
	return extractTwoColumnWatchNextResultContents_CommentsPager(url, result, useLogin, engagementPanels);
};
source.getSubComments = (comment) => {
	if(typeof comment === 'string')
		comment = JSON.parse(comment);
	if(comment.context?.replyContinuation) {
		return requestCommentPager(comment.contextUrl, comment.context.replyContinuation, comment?.context?.useLogin == 'true', comment?.context?.useMobile == 'true');
	}
	else
		return new CommentPager([], false);
};

source.getContentRecommendations = (url, initialData) => {
	const useAuth = !!_settings?.authDetails;
	url = convertIfOtherUrl(url);

	if(!initialData) {
		const videoId = extractVideoIDFromUrl(url);
		if(IS_TESTING)
			console.log("VideoID:", videoId);

		const useLogin = useAuth && bridge.isLoggedIn();

		const headersUsed = (useLogin) ? getAuthContextHeaders(false) : {};
		headersUsed["Accept-Language"] = "en-US";
		headersUsed["Cookie"] = "PREF=hl=en&gl=US"

		const resp = http.GET(url, headersUsed, useLogin);

		throwIfCaptcha(resp);
		if(!resp.isOk) {
			throw new ScriptException("Failed to request page [" + resp.code + "]");
		}

		const html = resp.body;//requestPage(url);
		initialData = getInitialData(html);
	}

	const contents = initialData.contents;
	let watchNextFeed = contents.twoColumnWatchNextResults?.secondaryResults?.secondaryResults ?? null;
	//log("Recommendations twoColumnWatchNextResults: " + !!contents.twoColumnWatchNextResults);
	if(!watchNextFeed) 
		return new VideoPager([], false);
	//log("Recommendations watchNextFeed: " + !!watchNextFeed + "\n" + JSON.stringify(watchNextFeed));
	const originalItems = watchNextFeed.results;
	if(watchNextFeed.targetId != 'watch-next-feed' && watchNextFeed.results)
		watchNextFeed = watchNextFeed.results.find(x=>x.targetId == 'watch-next-feed' || x.itemSectionRenderer?.targetId == 'watch-next-feed');
	if(!watchNextFeed) {
		log("No videos found?\n" + originalItems.map(x=>JSON.stringify(x)).join("\n\n"));
		return new VideoPager([], false);
	}
	if(watchNextFeed.itemSectionRenderer?.targetId == 'watch-next-feed') {
		log("Recommendations in sub-section renderer");
		watchNextFeed = watchNextFeed.itemSectionRenderer;
	}
	
	const itemSectionRenderer = extractItemSectionRenderer_Shelves(watchNextFeed);

	//TODO: pages
	return new VideoPager(itemSectionRenderer?.videos ?? [], false);
};

//Channel
source.isChannelUrl = (url) => {
	return REGEX_VIDEO_CHANNEL_URL.test(url) || 
		REGEX_VIDEO_CHANNEL_URL2.test(url) || 
		REGEX_VIDEO_CHANNEL_URL3.test(url) ||
		REGEX_VIDEO_CHANNEL_URL4.test(url);
};
source.getChannel = (url) => {
	const initialData = requestInitialData(url);
	if(!initialData)
	    throw new ScriptException("No channel data found for: " + url);
	return extractChannel_PlatformChannel(initialData, url);
};

source.getChannelCapabilities = () => {
	return {
		types: [Type.Feed.Videos, Type.Feed.Streams],
		sorts: [Type.Order.Chronological, "Popular"]
	};
}
function filterChannelUrl(url) {
	url = removeQuery(url);
	//Filter out known suffixes..prob need something better
	const channelSuffixes = [
		"featured",
		"videos",
		"shorts",
		"streams",
		"podcasts",
		"playlists",
		"community"
	];
	for(let suffix of channelSuffixes) {
		if(url.endsWith("/" + suffix)) {
			url = url.substring(0, url.length - suffix.length + 1);
			break;
		}
	}
	return url;
}
source.getChannelContents = (url, type, order, filters) => {
	let targetTab = null;
	url = filterChannelUrl(url);

	log("GetChannelContents - " + type);
	switch(type) {
		case undefined:
		case null:
		case "":
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

	const initialData = requestInitialData(url, useAuth, useAuth);
	if(!initialData)
	    throw new ScriptException("No channel data found for: " + url);
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
	log("Channel Result Count: " + tab?.videos?.length)
	return new RichGridPager(tab, contextData, useAuth, useAuth);
};

source.getChannelPlaylists = (url) => {

	const targetTab = "Playlists";
	const useAuth = bridge.isLoggedIn() && !!_settings?.authChannels;
	if(useAuth)
		log("USING AUTH FOR CHANNEL");

	const initialData = requestInitialData(url + URL_CHANNEL_PLAYLISTS, useAuth, useAuth);
	if(!initialData)
	    throw new ScriptException("No channel data found for: " + url);
	const channel = extractChannel_PlatformChannel(initialData, url);
	const contextData = {
		authorLink: new PlatformAuthorLink(new PlatformID(PLATFORM, channel.id.value, config.id, PLATFORM_CLAIMTYPE), channel.name, channel.url, channel.thumbnail)
	};
	const tabs = extractPage_Tabs(initialData, contextData);
	
	const tab = tabs.find(x=>x.title == targetTab);
	if(!tab) 
		return new PlaylistPager([], false);

	return new RichGridPlaylistPager(tab, contextData, useAuth, useAuth);
}

source.getPeekChannelTypes = () => {
	return [Type.Feed.Videos, Type.Feed.Mixed];
}
source.peekChannelContents = function(url, type) {
    if(type != Type.Feed.Mixed && type != Type.Feed.Videos)
        return [];

    const match = url.match(REGEX_VIDEO_CHANNEL_URL);
    if(!match || match.length != 3)
        return {};
    const id = removeQuery(match[2]);
    if(!id)
        return {};
    const rssUrl = URL_YOUTUBE_RSS + id;

    const xmlResp = http.GET(rssUrl, {});

    if(!xmlResp.isOk)
        return null;

    const xml = domParser.parseFromString(xmlResp.body).querySelector("feed");
    const xmlTree = JSON.parse(xml.toNodeTreeJson())?.children;
    console.log(xmlTree);
    if(!xmlTree || xmlTree.length <= 0)
        return {};
    const authorNode = xmlTree?.find(x=>x.name == "author");
    const entryNodes = xmlTree?.filter(x=>x.name == "entry") ?? [];
    const videos = [];

    const author = new PlatformAuthorLink(
        new PlatformID(PLATFORM, null, id, PLATFORM_CLAIMTYPE),
        authorNode.children.find(x=>x.name == "name").value,
        authorNode.children.find(x=>x.name == "uri").value,
        ""
    )

    for(let entry of entryNodes) {
        const group = entry.children.find(x=>x.name == 'media:group');
        const community = group.children.find(x=>x.name == "media:community");

        videos.push(new PlatformVideo({
			id: new PlatformID(PLATFORM, entry.children.find(x=>x.name == 'yt:videoid').value, config.id),
			name: escapeUnicode(group.children.find(x=>x.name == 'media:title').value),
			thumbnails: new Thumbnails([
			    new Thumbnail(group.children.find(x=>x.name == 'media:thumbnail')?.attributes["url"], 1)
			]),
			author: author,
			uploadDate: parseInt(new Date(entry.children.find(x=>x.name == "updated").value).getTime() / 1000),
			duration: 0,
			viewCount: parseInt(community.children.find(x=>x.name == "media:statistics").attributes["views"]) ?? 0,
			url: entry.children.find(x=>x.name == "link").attributes["href"],
			isLive: false
		}));
    }

    return videos;
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

    const playlistHeaderRenderer1 = initialData?.header?.playlistHeaderRenderer;
	const playlistHeaderRenderer2 = initialData?.header?.pageHeaderRenderer;
	let author = undefined;
	let title = undefined;
	let videoCount = undefined;
	let playlistId = undefined;
    if(playlistHeaderRenderer1) {
		title = extractText_String(playlistHeaderRenderer1.title);
		author = extractRuns_AuthorLink(playlistHeaderRenderer1?.ownerText?.runs);
		videoCount = extractFirstNumber_Integer(extractText_String(playlistHeaderRenderer1?.numVideosText));
		playlistId = playlistHeaderRenderer1?.playlistId;
    }
	else if(playlistHeaderRenderer2) {
		title = playlistHeaderRenderer2.pageTitle

		const actions = playlistHeaderRenderer2?.pageHeaderViewModel?.actions?.flexibleActionsViewModel?.actionsRows;
		if(actions) {
			for(let action of actions){
				for(let subAction of action.actions) {
					if(subAction.buttonViewModel?.onTap?.innertubeCommand?.watchEndpoint?.playlistId) {
						playlistId = subAction.buttonViewModel?.onTap?.innertubeCommand?.watchEndpoint?.playlistId;
					}
					if(playlistId)
						break;
				}
				if(playlistId)
					break;
			}
		}

		const metaDataRows = playlistHeaderRenderer2?.content?.pageHeaderViewModel?.metadata?.contentMetadataViewModel?.metadataRows;
		if(!metaDataRows)
			throw new ScriptException("No playlist header found");
			
		for(let row of metaDataRows) {
			if(row.metadataParts) {
				for(let part of row.metadataParts) {
					if(part.avatarStack?.avatarStackViewModel) {
						let model = part.avatarStack?.avatarStackViewModel
						let authorName = model?.text?.content?.trim();
						let authorThumbnail = 
							(model.avatars && model.avatars.length > 0) ?
								model.avatars[0].avatarViewModel?.image?.sources[0].url :
								undefined;
						let authorId = 
							(model.text.commandRuns && model.text.commandRuns.length > 0) ?
								model.text.commandRuns[0].onTap?.innertubeCommand?.browseEndpoint?.browseId :
								undefined;
						let authorUrl = authorId ? URL_CHANNEL_BASE + authorId : undefined;
						
						author = new PlatformAuthorLink(new PlatformID(PLATFORM, null, config?.id, PLATFORM_CLAIMTYPE), authorName, authorUrl, authorThumbnail);
							
						if(author)
							break;
					}
					else if(part.text) {
						const partText = part.text.content;
						if(partText && !videoCount && /[0-9]+ videos?/.test(partText)) {
							videoCount = extractFirstNumber_Integer(partText);
						}
					}
				}
			}
			if(author && videoCount)
				break;
		}
	}
	else 
		throw new ScriptException("No playlist header found");


	if(IS_TESTING)
	    console.log("initialData", initialData);

    const renderer = initialData?.contents?.singleColumnBrowseResultsRenderer ?? initialData?.contents?.twoColumnBrowseResultsRenderer;
    if(renderer) {
        if(!renderer.tabs) {
            throw new ScriptException("No tabs found");
            return null;
        }
        const tab = renderer.tabs[0];
        const tabRenderer = tab.tabRenderer;
        const playlistList = findRenderer(tab, "playlistVideoListRenderer");
        if(!playlistList || !playlistList.contents) {
            throw new ScriptException("playlistVideoListRenderer not found");
            return null;
		}
		
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

		//Fallback for old apps
		if(!bridge.buildVersion || bridge.buildVersion < 245) {
			log("Using legacy remote playlist (all videos first page)");
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
		}

		let thumbnail = null;
		if(videos && videos.length > 0 && 
			videos[0].thumbnails?.sources && 
			videos[0].thumbnails.sources.length > 0)
			thumbnail = videos[0].thumbnails.sources[videos[0].thumbnails.sources.length - 1].url;
			
		if(!author && videos && videos.length > 0 && videos.filter(x=>x.author.url != videos[0].author.url).length == 0) {
			//Assume author = video owner if all videos by same & author null
			author = videos[0].author;
		}
		
        return new PlatformPlaylistDetails({
            url: url,
			id: new PlatformID(PLATFORM, playlistId, config.id),
			author: author,
            name: title,
            thumbnail: thumbnail,
            videoCount: videoCount,
            contents: new PlaylistVideoPager(videos, continuationToken)
        });
    }
	else
		throw new ScriptException("No playlist renderer found?");
    return null;
};

class PlaylistVideoPager extends VideoPager {
	constructor(videos, continuation, useMobile = false, useAuth = false) {
		super(videos, !!continuation);
		this.continuation = continuation;
		this.useMobile = useMobile;
		this.useAuth = useAuth;
	}
	
	nextPage() {
		if(!this.continuation) {
			this.hasMore = false;
			this.results = [];
			return this;
		}
		const newData = validateContinuation(()=>requestBrowse({
			continuation: this.continuation
		}, USE_MOBILE_PAGES, true));

		if (newData.length < 1) {
			this.hasMore = false;
			this.results = [];
			return this;
		}
		this.continuation = null;
		let me = this;
		let videos = [];
		for(let playlistRenderer of newData) {
			switchKey(playlistRenderer, {
				playlistVideoRenderer(renderer) {
					const video = extractPlaylistVideoRenderer_Video(renderer);
					if(video)
						videos.push(video);
				},
				continuationItemRenderer(continueRenderer) {
					me.continuation = continueRenderer?.continuationEndpoint?.continuationCommand?.token;
				}
			});
		}
		this.results = videos;
		this.hasMore = !!this.continuation;
		return this;
	}
}
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
		throw new ScriptException("Not logged in");
	}
	
	let subsPage = requestPage(URL_SUB_CHANNELS_M, { "User-Agent": USER_AGENT_PHONE }, true);
	let result = getInitialData(subsPage);

	if(!result) {
	    log(subsPage);
		throw new ScriptException("No initial data found or page unavailable");
    }
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

function throwIfCaptcha(resp) {
    if (resp != null && resp.code === 429 && resp.body != null && resp.body.includes("captcha")) {
        throw new CaptchaRequiredException(resp.url, resp.body);
    }
    return true;
}


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
    constructor(obj, originalUrl) {
		super(obj);
		this.originalUrl = originalUrl;
    }

    getRequestModifier() {
        return new YTRequestModifier(this.originalUrl);
    }
}

class YTABRVideoSource extends DashManifestRawSource {
    constructor(obj, url, sourceObj, ustreamerConfig) {
		super(obj);
		this.url = url;
		this.abrUrl = url;
		this.ustreamerConfig = ustreamerConfig;
		this.sourceObj = sourceObj;
		this.manifest = "";
		this.lastHeaderData = {};
		this.width = obj.width;
		this.height = obj.height;
    }

	generate() {
		if(this.lastDash)
			return this.lastDash;
		log("Generating ABR Video Dash");
		getMediaReusableVideoBuffers()?.freeAll();
		let [dash, umpResp, fileHeader] = generateDash(this.sourceObj, this.ustreamerConfig, this.abrUrl, this.sourceObj.itag);
		this.initialHeader = fileHeader;
		this.initialUMP = umpResp;
		this.lastDash = dash;

		this.initStart = 0;
		this.initEnd = fileHeader.indexRangeStart - 1;
		this.indexStart = fileHeader.indexRangeStart;
		this.indexEnd = fileHeader.indexRangeEnd;

		return dash;
	}
	getRequestExecutor() {
		return new YTABRExecutor(this.abrUrl, this.sourceObj, this.ustreamerConfig, 
			this.initialHeader,
			this.initialUMP);
	}
}
class YTABRAudioSource extends DashManifestRawAudioSource {
    constructor(obj, url, sourceObj, ustreamerConfig) {
		super(obj);
		this.url = url;
		this.abrUrl = url;
		this.ustreamerConfig = ustreamerConfig;
		this.sourceObj = sourceObj;
		this.manifest = "";
		this.initialHeader = {};
    }

	generate() {
		if(this.lastDash)
			return this.lastDash;
		log("Generating ABR Audio Dash");
		getMediaReusableAudioBuffers()?.freeAll();
		let [dash, umpResp, fileHeader] = generateDash(this.sourceObj, this.ustreamerConfig, this.abrUrl, this.sourceObj.itag);
		this.initialHeader = fileHeader;
		this.initialUMP = umpResp;
		this.lastDash = dash;

		this.initStart = 0;
		this.initEnd = fileHeader.indexRangeStart - 1;
		this.indexStart = fileHeader.indexRangeStart;
		this.indexEnd = fileHeader.indexRangeEnd;
		
		return dash;
	}
	getRequestExecutor() {
		return new YTABRExecutor(this.abrUrl, this.sourceObj, this.ustreamerConfig,
			this.initialHeader,
			this.initialUMP);
	}
}
function generateDash(sourceObj, ustreamerConfig, abrUrl, itag) {
	const now = (new Date()).getTime();
	const lastAction = (new Date()).getTime() - (Math.random() * 5000);
	const initialReq = getVideoPlaybackRequest(sourceObj, ustreamerConfig, 0, 0, 0, lastAction, now);
	const postData = initialReq.serializeBinary();
	let initialResp = http.POST(abrUrl, postData, {
		"Origin": "https://www.youtube.com",
		"Accept": "*/*",
		"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
	}, false, true);
	if(!initialResp.isOk)
		throw new ScriptException("Failed initial stream request [ " + initialResp.code + "]");

	const data = initialResp.body;
	let byteArray = undefined;
	if(data instanceof ArrayBuffer)
		byteArray = new Uint8Array(data);
	else
		byteArray = Uint8Array.from(data);

	const isVideo = sourceObj.mimeType.startsWith("video/");
	const reusableBuffer = (useReusableBuffers) ?
		((isVideo) ? getMediaReusableVideoBuffers() : getMediaReusableAudioBuffers()) :
		undefined;

	let umpResp = undefined;

	const maxRedirect = 3;
	for(let i = 0; i < maxRedirect; i++) {
		umpResp = new UMPResponse(byteArray, reusableBuffer);
		if(!umpResp)
			throw new ScriptException("Invalid UMP response found");
		if(!umpResp.streams[0]?.data) {
			if(umpResp.redirectUrl && i < maxRedirect - 1) {
				bridge.toast("UMP Redirect..");
				abrUrl = umpResp.redirectUrl;
				log("UMP Redirecting to:\n" + umpResp.redirectUrl);
				initialResp = http.POST(abrUrl, postData, {
					"Origin": "https://www.youtube.com",
					"Accept": "*/*",
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
				}, false, true);
				if(!initialResp.isOk)
					throw new ScriptException("Failed initial stream request [ " + initialResp.code + "]");
			
				const data = initialResp.body;
				let byteArray = undefined;
				if(data instanceof ArrayBuffer)
					byteArray = new Uint8Array(data);
				else
					byteArray = Uint8Array.from(data);
			}
			else {
				log("No stream data in initial UMP Response:\n" + JSON.stringify(umpResp));
				log("Failed to load UMP, try restarting plugin/app.\n" + umpResp.opcodes.map(x=>x.opcode + ":" + x.length).join(", "));
				bridge.toast("Failed to load UMP, try restarting plugin/app.\n" + umpResp.opcodes.map(x=>x.opcode + ":" + x.length).join(", "));
				throw new ScriptException("No stream data in initial UMP response");
			}
		}
	}

	let streams = [];
	for(let key in umpResp.streams) {
		const stream = umpResp.streams[key];
		if(!itag || stream.itag == itag)
			streams.push(stream);
	}

	const webmHeaderData = streams[0].data;
	const webmHeader = new WEBMHeader(webmHeaderData, 
		sourceObj.mimeType.split(";")[0],
		/codecs=\"(.+)\"/.exec(sourceObj.mimeType)[1],
		sourceObj.width, 
		sourceObj.height);
	const urlPrefix = (isVideo) ?
		"https://grayjay.internal/video" :
		"https://grayjay.internal/audio";
	const dash = generateWEBMDash(webmHeader, 
		urlPrefix + "/internal/segment.webm?segIndex=$Number$", 
		urlPrefix + "/internal/init.webm");
	
	return [dash, umpResp, webmHeader];
}

function generateWEBMDash(webm, templateUrl, initUrl) {
	const duration = splitMS(webm.duration);
	const durationFormatted = `PT${duration.hours}H${duration.minutes}M${duration.seconds}.${((duration.miliseconds + "").padStart(3, '0'))}S`;

	let repCounter = 1;
	let mpd = `<?xml version="1.0" encoding="UTF-8"?>\n`;
	mpd += xmlTag("MPD", {
		"xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
		"xmlns": "urn:mpeg:dash:schema:mpd:2011",
		"xsi:schemaLocation": "urn:mpeg:dash:schema:mpd:2011 DASH-MPD.xsd",
		"profiles": "urn:mpeg:dash:profile:isoff-live:2011",
		"minBufferTime": "PT1.5S",
		"type": "static",
		"mediaPresentationDuration": durationFormatted
	}, (indent)=>
		xmlTag("Period", {id: "0", duration: durationFormatted}, (indent) =>
			xmlTag("AdaptationSet", {segmentAlignment: "true"}, (indent)=>
				xmlTag("Representation", 
					(webm.mimeType.startsWith("video/")) ? 
						{id: "1", mimeType: webm.mimeType, codecs: webm.codec, startWithSAP: "1", bandwidth: "800000", width: webm.width, height: webm.height}:
						{id: "2", mimeType: webm.mimeType, codecs: webm.codec, startWithSAP: "1", bandwidth: "800000", audioSamplingRate: webm.samplingFrequency},(indent)=>
						xmlTag("SegmentTemplate", {timescale: webm.timescale / 1000, startNumber: "1", 
								media: templateUrl, 
								duration: webm.duration,
								initialization: initUrl} , (indent)=>
							xmlTag("SegmentTimeline", {}, (indent)=>
								webm.cues.map((cue, i)=>
									xmlTag("S", {t: cue, d: (webm.cues.length > i + 1) ? webm.cues[i + 1] - cue : webm.durationCueTimescale - cue}, undefined, indent + " ")
								).join("")
							,indent + " ")
						,indent + " ")
				,indent + " ")
			, indent + " ")
		, indent + " ")
	, "");

	return mpd;
}
function splitMS(ms) {
	const hours = Math.floor(ms / (60 * 60 * 1000));
	ms -= hours * (60 * 60 * 1000);
	const minutes = Math.floor(ms / (60 * 1000));
	ms -= minutes * (60 * 1000);
	const seconds = Math.floor(ms / 1000);
	ms -= seconds * 1000;
	return {
		hours: hours,
		minutes: minutes,
		seconds: seconds,
		miliseconds: ms
	};
}
function xmlTag(tag, attributes, nested, indent) {
	indent = indent ?? "";
	let prefix = indent + "<" + tag;
	const attrKeys = (attributes) ? Object.keys(attributes) : [];
	if(attrKeys && attrKeys.length > 0) {
		prefix += " " + attrKeys.map(x=>x + "=\"" + attributes[x] + "\"").join(" ");
	}
	if(!!nested) {
		return prefix + ">\n" + 
			nested(indent + " ") + 
			indent + "</" + tag + ">\n";
	}
	else
		return prefix + "/>\n";
}

class TestYTABRVideoSource extends DashManifestRawSource {
    constructor(obj, url, sourceObj) {
		super(obj);
		this.url = url;
		this.url = "https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd";
		this.abrUrl = url;
		this.sourceObj = sourceObj;
    }

	generate() {
		const dash = http.GET("https://dash.akamaized.net/akamai/bbb_30fps/bbb_30fps.mpd", {});
		return dash.body;
	}
	getRequestExecutor() {
		return new YTABRExecutor(this.abrUrl, this.sourceObj);
	}

}

const KB_SIZE = 1000;
const MB_SIZE = 1000 * KB_SIZE;
const GB_SIZE = 1000 * MB_SIZE;
class ReusableBuffers {
	constructor(size, count) {
		this.maxSize = size;
		this.maxCount = count;
		this.buffers = [];
	}

	freeAll() {
		for(let buffer of this.buffers) {
			buffer.data = undefined;
			buffer.tag = undefined;
		}
	}
	freeTag(tag) {
		const buffers = this.buffers.filter(x=>x.tag == tag);
		for(let buffer of buffers) {
			buffer.data = undefined;
			buffer.tag = undefined;
		}
	}
	free(toFree) {
		const buffer = this.buffers.find(x=>x.data == toFree);
		if(buffer) {
			buffer.data = undefined;
			buffer.tag = undefined;
		}
	}

	getBuffer(size, tag) {
		log("Reusable Buffer [" + size + "]");
		if(size > this.maxSize)
			throw new ScriptException("Requested reusable buffer above the max buffer size (" + size + " > " + this.maxSize + ")");
		
		for(let buffer of this.buffers) {
			if(!buffer.data) {
				buffer.data = new Uint8Array(buffer.buffer, 0, size);
				buffer.tag = tag;
				return buffer.data;
			}
		}
		if(this.buffers.length < this.maxCount) {
			log("Allocated new resuable buffer (total: " + ((this.buffers.length + 1) * this.maxSize)/MB_SIZE + "MB)");
			const newBuffer = new ArrayBuffer(this.maxSize);
			const newData = new Uint8Array(newBuffer, 0, size);
			this.buffers.push({
				buffer: newBuffer,
				data: newData,
				tag: tag
			});
			return newData;
		}
		throw new ScriptException("Ran out of reusable memory (" + this.maxCount + ")");
	}
}

let _reusableBufferVideo = undefined;
let _reusableBufferAudio = undefined;
function getMediaReusableVideoBuffers() {
	if(!_reusableBufferVideo)
		_reusableBufferVideo = new ReusableBuffers(20 * MB_SIZE, 10);
	return _reusableBufferVideo;
}
function getMediaReusableAudioBuffers() {
	if(!_reusableBufferAudio)
		_reusableBufferAudio = new ReusableBuffers(2 * MB_SIZE, 10);
	return _reusableBufferAudio;
}
const useReusableBuffers = false;

let executorCounter = 0;
let _executorsVideo = [];
let _executorsAudio = [];
class YTABRExecutor {
	constructor(url, source, ustreamerConfig, header, initialUmp) {
		this.executorId = executorCounter++;
		this.source = source;
		this.itag = source.itag;
		this.header = header;
		this.initialUmp = initialUmp;
		this.abrUrl = url;
		this.ustreamerConfig = ustreamerConfig;
		this.lastRequest = 0;
		this.requestStarted = (new Date()).getTime();
		this.lastAction = (new Date()).getTime() - (Math.random() * 1000 * 5);
		this.segmentOffsets = undefined;
		log("UMP New executor: " + source.name + " - " + source.mimeType + " (segments: " + header?.cues?.length + ")");
		log("UMP Cues: " + header?.cues?.join(", "));
		this.isVideo = source.mimeType.startsWith("video/");
		if(source.mimeType.startsWith("video/")) {
			this.urlPrefix = "https://grayjay.internal/video";
			this.reusableBuffer = (useReusableBuffers) ? 
				getMediaReusableVideoBuffers() : undefined;
			this.type = "video";
			_executorsVideo.push(this);
			if(_executorsVideo.length > 2) {
				log("LEAKED EXECUTOR DETECTED?");
			}
		}
		else {
			this.urlPrefix = "https://grayjay.internal/audio";
			this.reusableBuffer = (useReusableBuffers) ? 
				getMediaReusableAudioBuffers() : undefined;
			this.type = "audio";
			_executorsAudio.push(this);
		}
		this.segments = {};
		if(initialUmp)
		{
			for(let segment of Object.keys(initialUmp.streams)) {
				const stream = initialUmp.streams[segment];
				if(stream.itag == this.itag) {
					log(`Caching initial Segment: itag:${stream.itag}, segmentIndex: ${stream.segmentIndex}, segmentLength: ${stream.segmentSize}, completed: ${stream.completed}`)
					this.cacheSegment(initialUmp.streams[segment]);
				}
			}
		}
	}
	getOffset(index) {
		if(this.segmentOffset && this.segmentOffset.actual <= index)
			return this.segmentOffset.offset;
		return 0;
	}
	registerOffset(index, found) {
		this.segmentOffset = {index: index, actual: found, offset: found - index};
	}
	findSegmentTime(index) {
		if(this.header && this.header.cues) {
			if(this.header.cues.length > index) {
				const time = this.header.cues[index];
				if(index > 0 && time == 0) {
					log("UMP Cues: " + this.header.cues.join(", "));
					throw new ScriptException("Zero time for non-zero segment?");
				}
				return time;
			}
			else
				throw new ScriptException("UMP: Segment index out of bound? " + this.header.cues.length + " > " + index)
		}
		throw new ScriptException("Missing initialHeader?");
	}

	cacheSegment(segment) {
		this.segments[segment.segmentIndex - this.getOffset(segment.segmentIndex)] = segment;
	}
	getCachedSegmentCount() {
		return Object.keys(this.segments).length;
	}
	getCachedSegment(index) {
		return this.segments[index];
	}
	freeOldSegments(index) {
		index = parseInt(index);
		const reusable = this.reusableBuffer;
		for(let key of Object.keys(this.segments)) {
			key = parseInt(key);

			if(key < index || key > index + 7) {
				log("UMP [" + this.type + "]: disposing segment " + key + " (<" + index + " || >" + (index + 6) + ")");
				reusable?.free(this.segments[key].data);
				const segment = this.segments[key];
				if(segment) {
					delete segment.data;
				}
				delete this.segments[key];
			}
		}
	}
	freeAllSegments() {
		const reusable = this.reusableBuffer;
		for(let key of Object.keys(this.segments)) {
			reusable?.free(this.segments[key].data);
			delete this.segments[key];
		}
	}

	cleanup() {
		log("UMP: Cleaning up!");
		this.initialUmp = undefined;
		this.header = undefined;
		if(this.type == "video") {
			const index = _executorsVideo.indexOf(this);
			const removed = _executorsVideo.splice(index, 1);
			if(removed)
				log("Remaining video executors: " + _executorsVideo.length);
		}
		else {
			const index = _executorsAudio.indexOf(this);
			_executorsVideo.splice(index, 1);
			log("Remaining audio executors: " + _executorsAudio.length);
		}
		this.freeAllSegments();
	}

	executeRequest(url, headers, retryCount, overrideSegment) {
		if(!retryCount)
			retryCount = 0;
		log("UMP: " + url + "");
		const u = new URL(url);
		const isInternal = u.pathname.startsWith('/internal');
		const isInit = u.pathname.startsWith('/internal/init');
		let segment = u.searchParams.has("segIndex") ? u.searchParams.get("segIndex") : 0;
		let time = (segment > 0) ? this.findSegmentTime(segment - 1) : 0;
		if(overrideSegment && overrideSegment > 0) {
			const oldTime = time;
			time = this.findSegmentTime(overrideSegment - 1);
			log("UMP [" + this.type + "], overriding timestamp " + oldTime + " => " + time);
		}

		this.freeOldSegments(segment);
		const cached = this.getCachedSegment(segment);
		if(cached) {
			if(cached.data) {
				log("UMP [" + this.type + "] Cached segment " + segment + " (" + this.getCachedSegmentCount() + " remaining)");
				return cached.data;
			}
			else
				log("UMP [" + this.type + "] Cached segment " + segment + " was undefined, refetching");
		}

		log("UMP [" + this.type + "] requesting segment: " + segment + ", time: " + time + ", itag: " + this.itag);
		if(overrideSegment)
			log("UMP [" + this.type + "] requesting with overrided segment: " + overrideSegment)
		const now = (new Date()).getTime();
		const initialReq = getVideoPlaybackRequest(this.source, this.ustreamerConfig, time, (overrideSegment) ? overrideSegment : segment, this.lastRequest, this.lastAction, now, undefined, -6);
		const postData = initialReq.serializeBinary();
		const initialResp = http.POST(this.abrUrl, postData, {
			"Origin": "https://www.youtube.com",
			"Accept": "*/*",
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
		}, false, true);
		if(!initialResp.isOk)
			throw new ScriptException("Failed initial stream request [ " + initialResp.code + "]");

		const data = initialResp.body;
		let byteArray = undefined;
		if(data instanceof ArrayBuffer)
			byteArray = new Uint8Array(data);
		else if(data instanceof Int8Array)
			byteArray = new Uint8Array(data.buffer);
		else {
			byteArray = Uint8Array.from(data);
		}

		const umpResp = new UMPResponse(byteArray, this.reusableBuffer);
		
		let streamsArr = [];
		for(let key of Object.keys(umpResp.streams)) {
			const stream = umpResp.streams[key]
			if(stream.itag == this.itag && stream.segmentIndex >= segment)
				streamsArr.push(stream);
			else
				log(`IGNORING itag:${stream.itag}, segmentIndex: ${stream.segmentIndex}, segmentLength: ${stream.segmentSize}, completed: ${stream.completed}`)
		}
		log("UMP [" + this.type + "] stream resps: \n" + streamsArr
			.map(x=>`itag:${x.itag}, segmentIndex: ${x.segmentIndex}, segmentLength: ${x.segmentSize}, completed: ${x.completed}`)
			.join("\n"));

		this.lastRequest = (new Date()).getTime();


		const stream = streamsArr[0];
		if(!stream)
			throw new ScriptException("No streams for requesting segment " + segment + ((overrideSegment && overrideSegment > 0) ? (", override: " + overrideSegment) : ""));
		const expectedSegment = parseInt(segment) + parseInt(this.getOffset(stream.segmentIndex));
		log("Expected segment " + expectedSegment + " got " + stream.segmentIndex);
		if(stream && stream.segmentIndex != expectedSegment) {
			log("Retrieved wrong segment: " + stream.segmentIndex + " != " + segment + ", retrying (" + (retryCount + 1) + ")") 
			if(true) {
				let diff = stream.segmentIndex - segment;
				if(diff < 0)
					throw new ScriptException("Illegal negative offset");
				else {
					const doBackrequests = false;
					if(!doBackrequests) {
						log("Segment offset detected of " + diff + " (" + stream.segmentIndex + " - " + segment + ")");
						this.registerOffset(parseInt(segment), parseInt(stream.segmentIndex));
					}
					else {
						log("Requesting older data using offset (" + diff + ")");
						if(retryCount == 0) {
							for(let stream of streamsArr) {
								log("Caching future segment " + stream.segmentIndex);
								if(stream.completed)
									this.cacheSegment(stream);
							}
						}
						if(retryCount < 3) {
							return this.executeRequest(url, headers, retryCount + 1, (parseInt(segment) - diff));
						}
						else {
							throw new ScriptException("Too many back-requests");
						}
					}
				}
			}
			else {
				if(true || retryCount >= 2)
					throw new ScriptException("Retrieved wrong segment: " + stream.segmentIndex + " != " + segment + " (" + retryCount + " attempts)");
				else { //Disabled retry for now, doesnt make a diff.
					log("Retrieved wrong segment: " + stream.segmentIndex + " != " + segment + ", retrying (" + (retryCount + 1) + ")");
					return this.executeRequest(url, headers, retryCount + 1);
				}
			}
		}

		for(let stream of streamsArr) {
			if(stream.completed)
				this.cacheSegment(stream);
		}

		if(data instanceof ArrayBuffer) {
			log("Clearing POST ArrayBuffer?");
		}
		
		if(!stream || !stream.data)
			throw new ScriptException("NO STREAMDATA FOUND (" + Object.keys(umpResp.streams).join(", ") + "): " + !!umpResp.streams[0]?.data);
		
		log("UMP [" + this.type + "]: segment " + segment + " - " + stream.data?.length);
		return stream.data;
	}
}
function getVideoPlaybackRequest(source, ustreamerConfig, playerPosMs, segmentIndex, lastRequest, lastAction, requestStarted, playbackCookie) {
	const vidReq = new pb.VideoPlaybackRequest_pb.VideoPlaybackRequest();
	const ustreamerBytes = Uint8Array.from(atob(ustreamerConfig.replaceAll("_", "/").replaceAll("-", "+")), c => c.charCodeAt(0))
	vidReq.setVideoplaybackustreamerconfig(ustreamerBytes);
	
	const clientInfo = new pb.VideoPlaybackRequest_pb.ClientInfo();
	clientInfo.setClientname(1);
	clientInfo.setClientversion("2.20240808.00.00");
	clientInfo.setOsname("Windows");
	clientInfo.setOsversion("10.0");

	//Info
	const info = new pb.VideoPlaybackRequest_pb.VideoPlaybackRequestInfo();
	if(source.width) {
		info.setDesiredwidth(source.width);
		info.setDesiredheight(source.height);
		info.setVideoheightmaybe(source.height);
		info.setVideoheight2maybe(source.height);
		info.setSelectedqualityheight(source.height);
	}
	info.setG7(8613683);
	info.setCurrentvideopositionms(playerPosMs);
	if(lastRequest > 0)
		info.setTimesincelastrequestms((new Date().getTime() - lastRequest));
	info.setTimesincelastactionms(Math.floor((new Date()).getTime() - lastAction));
	info.setDynamicrangecompression(true);
	info.setLatencymsmaybe(Math.floor(Math.random() * 90 + 7));
	info.setLastmanualdirection(0);
	info.setTimesincelastmanualformatselectionms(requestStarted);
	info.setVisibility(0);
	info.setVp9(false);
	vidReq.setInfo(info);

	//SessionInfo
	const sessionInfo = new pb.VideoPlaybackRequest_pb.SessionInfo();
	sessionInfo.setClientinfo(clientInfo);
	//TODO: sessionInfo.setPot();
	if(playbackCookie)
		sessionInfo.setPlaybackcookie(playbackCookie);
	vidReq.setSessioninfo(sessionInfo);

	//Formats
	const format = new pb.VideoPlaybackRequest_pb.FormatId();
	format.setItag(source.itag);
	format.setLmt(source.lastModified);
	if(source.xtags)
		format.setXtags(source.xtags);

	if(segmentIndex > 0) {
		const bufferedStream = new pb.VideoPlaybackRequest_pb.BufferedStreamInfo()
		bufferedStream.setFormatid(format);
		//TODO: bufferedStream.setBuffereddurationms();
		bufferedStream.setBufferedsegmentstartindex(1);
		bufferedStream.setBufferedsegmentendindex(segmentIndex - 1);
		bufferedStream.setBufferedstarttimems(0);
		//bufferedStream.setBuffereddurationms(playerPosMs);
		vidReq.setBufferedstreamsList[bufferedStream];
		vidReq.setDesiredstreamsList([format]);
	}
	if(source.mimeType.startsWith("video/")) {
		vidReq.setSupportedvideostreamsList([format]);
		info.setMediatypeflags(pb.VideoPlaybackRequest_pb.MediaType.VIDEO);
	}
	else if(source.mimeType.startsWith("audio/")) {
		vidReq.setSupportedaudiostreamsList([format]);
		info.setMediatypeflags(pb.VideoPlaybackRequest_pb.MediaType.AUDIO);
	}
	else throw new ScriptException("Unknown source format?");

	return vidReq;
}

class YTAudioSource extends AudioUrlRangeSource {
    constructor(obj, originalUrl) {
		super(obj);
		this.originalUrl = originalUrl;
    }

    getRequestModifier() {
        return new YTRequestModifier(this.originalUrl);
    }
}

class YTRequestModifier extends RequestModifier {
	constructor(originalUrl) {
		super({ allowByteSkip: false });
        this.requestNumber = 0;
		this.originalUrl = originalUrl;
		this.newUrl = null;
		this.newUrlCount = 0;
    }

	/**
	 * Modifies the request
	 * @param {string} url The URL string used
	 * @param {{[key: string]: string}} headers The headers used
	 * @returns {Request}
	 */
	modifyRequest(url, headers) {
		const u = new URL(url);
		const actualUrl = (this.newUrl) ? new URL(this.newUrl) : u;
		const isVideoPlaybackUrl = u.pathname.startsWith('/videoplayback');

		if (isVideoPlaybackUrl && !u.searchParams.has("rn")) {
			actualUrl.searchParams.set("rn", this.requestNumber.toString());
		}
		this.requestNumber++;

		if(this.newUrl) {
			log("BYPASS: Using NewURL For sources");
			log("BYPASS: OldUrl: " + u.toString());
			log("BYPASS: NewUrl: " + actualUrl.toString());
			log("BYPASS: Headers: " + JSON.stringify(headers));
		}
		

		let removedRangeHeader = undefined;
		if (headers["Range"] && !u.searchParams.has("range")) {
			let range = headers["Range"];
			if (range.startsWith("bytes=")) {
				range = range.substring("bytes=".length);
			}
			removedRangeHeader = headers["Range"];
			delete headers["Range"];
			actualUrl.searchParams.set("range", range);
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
		
		
		//I hate this
		//Workaround for seemingly active blocking
		/*
		const isValid = refetchClient.request("HEAD", actualUrl.toString(), headers);
		if(isValid.code == 403 && this.newUrlCount < 3) {
			const itag = actualUrl.searchParams.get("itag");
			bridge.toast("Youtube block detected (" + (this.newUrlCount + 1) + "), bypassing..");
			log("Detected 403, attempting bypass");
			try {
				const newDetailsResp = source.getContentDetails(this.originalUrl, false, true);
				if(newDetailsResp) {
					let source = newDetailsResp.video.videoSources.find(x=>x.itagId == itag);
					if(!source)
						source = newDetailsResp.video.audioSources.find(x=>x.itagId == itag);
					if(source) {
						this.newUrl = source.url;
						this.newUrlCount++;
						this.requestNumber = 0;
						log("Injecting new source url[" + source.name + "]: " + source.url);
						bridge.toast("Injecting new source url");
						if(removedRangeHeader)
							headers["Range"] = removedRangeHeader;
						return this.modifyRequest(url, headers);
					}
				}
				else
					bridge.toast("Bypass failed, couldn't reload [" + newDetailsResp.code + "]");
			}
			catch(ex) {
				bridge.toast("Bypass failed\n" + ex);
			}
		}
		*/

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
            url: actualUrl.toString(),
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
	constructor(comments, continuation, contextUrl, useLogin, useMobile) {
		super(comments, continuation != null, contextUrl);
		this.useLogin = !!useLogin;
		this.useMobile = !!useMobile;
		this.continuation = continuation;
	}
	nextPage() {
		if(!this.continuation)
			return new CommentPager([], false);
		return requestCommentPager(this.context, this.continuation, this.useLogin, this.useMobile) ?? new CommentPager([], false);
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

				if(newItemSection.videos && newItemSection.videos.length == 0 && newItemSection.shelves && newItemSection.shelves.length > 0) {
				    if(IS_TESTING)
				        console.log("No videos in root found, checking shelves", newItemSection);
				    let vids = [];
				    for(let i = 0; i < newItemSection.shelves.length; i++) {
				        const shelf = newItemSection.shelves[i];
                        vids = vids.concat(shelf.videos);
				    }
				    newItemSection.videos = vids;
				}

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
class RichGridPlaylistPager extends PlaylistPager {
	constructor(tab, context, useMobile = false, useAuth = false) {
		super(tab.playlists, tab.videos.length > 0 && !!tab.continuation, context);
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

				if(newItemSection.playlists && newItemSection.playlists.length == 0 && newItemSection.shelves && newItemSection.shelves.length > 0) {
				    if(IS_TESTING)
				        console.log("No playlists in root found, checking shelves", newItemSection);
				    let vids = [];
				    for(let i = 0; i < newItemSection.shelves.length; i++) {
				        const shelf = newItemSection.shelves[i];
                        vids = vids.concat(shelf.playlists);
				    }
				    newItemSection.playlists = vids;
				}

				if(newItemSection.playlists)
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
function requestNext(body, useAuth = false, useMobile = false) {
	const clientContext = getClientContext(useAuth);
	if(!clientContext || !clientContext.INNERTUBE_CONTEXT || !clientContext.INNERTUBE_API_KEY)
		throw new ScriptException("Missing client context");
	body.context = clientContext.INNERTUBE_CONTEXT;
	const baseUrl = (useMobile) ? URL_NEXT_MOBILE : URL_NEXT;
	const url = baseUrl + "?key=" + clientContext.INNERTUBE_API_KEY + "&prettyPrint=false";
	let headers = (!bridge.isLoggedIn() && useAuth) ? {} : getAuthContextHeaders(useMobile);
	headers["Content-Type"] = "application/json";
	if(useMobile) {
		headers["User-Agent"] = USER_AGENT_TABLET;
	}
	if(useAuth) {
		headers["x-goog-authuser"] = clientContext.SESSION_INDEX ?? "0";
	}
	const resp = http.POST(url, JSON.stringify(body), headers, useAuth);
	if(!resp.isOk) {
		log("Fail Url: " + url + "\nFail Body:\n" + JSON.stringify(body));
		throw new ScriptException("Failed to next [" + resp.code + "]");
	}
	return JSON.parse(resp.body);
}
function requestBrowse(body, useMobile = false, useAuth = false, attempt = 0) {
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
	    if((resp.code == 408 || resp.code == 500) && attempt < 1) {
	        return requestBrowse(body, useMobile, useAuth, attempt + 1);
	    }

		log("Fail Url: " + url + "\nFail Body:\n" + JSON.stringify(body));

		if(resp.code != 500 || !bridge.isLoggedIn())
		    throw new ScriptException("Failed to browse [" + resp.code + "]");
		else {
		    throw new ScriptLoginRequiredException("Failed to browse [" + resp.code + "]\nLogin might have expired, try logging in again");
		}
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

function getRequestHeaders(additionalHeaders) {
	const headers = additionalHeaders ?? {};
	return Object.assign(headers, {"Accept-Language": "en-US"});
}
function requestPage(url, headers, useAuth = false) {
	const resp = http.GET(url, getRequestHeaders(headers), useAuth);
	throwIfCaptcha(resp);

	if(resp.isOk)
		return resp.body;
	else throw new ScriptException("Failed to request page [" + resp.code + "]");
}
function requestInitialData(url, useMobile = false, useAuth = false) {
	let headers = {"Accept-Language": "en-US", "Cookie": "PREF=hl=en&gl=US" };
	if(useMobile)
		headers["User-Agent"] = USER_AGENT_TABLET;


	const resp = http.GET(url, headers, useAuth);
	throwIfCaptcha(resp);
	if(resp.isOk) {
		let html = resp.body;

		if(html.indexOf("<form action=\"https://consent.youtube.com/save\"") > 0) {
		    log("Consent form required");
		    const consentData = "gl=US&m=0&app=0&pc=yt&continue=" + encodeURIComponent(url) + "&x=6&bl=boq_identityfrontenduiserver_20231017.04_p0&hl=en&src=1&cm=2&set_eom=true";
		    const respConsent = http.POST("https://consent.youtube.com/save", consentData,
		    {
		        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
		        "Accept-Language": "en-US",
		        "Content-Type": "application/x-www-form-urlencoded"
		    }, useAuth);
            throwIfCaptcha(respConsent);
		    if(respConsent.isOk) {
                const body = respConsent.body;
                if(respConsent.body.indexOf("<form action=\"https://consent.youtube.com/save\"") > 0)
                    throw new CriticalException("Failed to refuse Google consent [" + respConsent.code + "]")
                else
                    html = respConsent.body;
		    }
		    else throw new CriticalException("Failed to refuse Google consent [" + resp.code + "]");
		}

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
	if(!resp.isOk) throw new ScriptException("Failed to request context requestClientConfig");
	return getClientConfig(resp.body);
}

function requestIOSStreamingData(videoId, batch) {
	const body = {
		videoId: videoId,
		cpn: "" + randomString(16),
		contentCheckOk: "true",
		racyCheckOn: "true",
		context: {
			client: {
				"clientName": "IOS",
             	"clientVersion": IOS_APP_VERSION,//"17.31.4",^M
				"deviceMake": "Apple",
				"deviceModel": IOS_DEVICE_VERSION,//"iPhone14,5",^M
				"platform": "MOBILE",
				"osName": "iOS",
				"osVersion": IOS_OS_VERSION_DETAILED,//"15.6.0.19G71",^M
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

	if(batch) {
		batch.POST(url, JSON.stringify(body), headers, false);
		return null;
	}
	else {
		const resp = http.POST(url, JSON.stringify(body), headers, false);
		return resp;
	}
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

	//TODO: Fix regex instead of this temporary workaround.
	/*
	const startIndex = html.indexOf("var ytInitialData = ");
	const endIndex = html.indexOf(";</script>", startIndex);
	if(startIndex > 0 && endIndex > 0) {
	    const raw = html.substring(startIndex + 20, endIndex);
	    const initialDataRaw = raw.startsWith("'") && raw.endsWith("'") ?
            decodeHexEncodedString(raw.substring(1, raw.length - 1))
                //TODO: Find proper decoding strat
                .replaceAll("\\\\\"", "\\\"") :
            raw;
		let initialData = null;
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
	}*/

	const match = html.match(REGEX_INITIAL_DATA);
	if(match) {
		const initialDataRaw = match[1].startsWith("'") && match[1].endsWith("'") ?
			decodeHexEncodedString(match[1].substring(1, match[1].length - 1))
				//TODO: Find proper decoding strat
				.replaceAll("\\\\\"", "\\\"") : 
			match[1];
		let initialData = null;
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
	//if(initialData == null)
	//    log(html);

	return null;
}
function getInitialPlayerData(html) {
	let match = html.match(REGEX_INITIAL_PLAYER_DATA);
	if(match) {
		let initialDataRaw = match[1];
		try {
			return JSON.parse(initialDataRaw);
		}
		catch(ex) {
			//Fallback approach
			match = html.match(REGEX_INITIAL_PLAYER_DATA_FALLBACK);
			if(match) {
				initialDataRaw = match[1];
				return JSON.parse(initialDataRaw);
			}
		}
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
    if(initialData?.header?.c4TabbedHeaderRenderer) {
        const headerRenderer = initialData?.header?.c4TabbedHeaderRenderer;

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
    else if(initialData?.header?.pageHeaderRenderer) {
        log("New channel model");
        const headerRenderer = initialData?.header?.pageHeaderRenderer;

        if(IS_TESTING)
            console.log("Initial Data (New Model)", initialData);

        const thumbnailTargetWidth = 200;
        const thumbnails = headerRenderer?.content?.pageHeaderViewModel?.image?.decoratedAvatarViewModel?.avatar?.avatarViewModel?.image?.sources;
        const thumbnail = (thumbnails && thumbnails.length > 0) ? thumbnails.sort((a,b)=>Math.abs(a.width - thumbnailTargetWidth) - Math.abs(b.width - thumbnailTargetWidth))[0] : { url: "" };
        const banners = headerRenderer?.content?.pageHeaderViewModel?.banner?.imageBannerViewModel?.image?.sources;
        const bannerTargetWidth = 1080;
        const banner = (banners && banners.length > 0) ? banners.sort((a,b)=>Math.abs(a.width - bannerTargetWidth) - Math.abs(b.width - bannerTargetWidth))[0] : { url: "" };

        const id = initialData?.metadata?.channelMetadataRenderer?.externalId;
        if(!id) {
            log("ID not found in new channel viewmodel:" + JSON.stringify(id, null, "   "));
	        if(bridge.devSubmit) bridge.devSubmit("extractChannel_PlatformChannel - ID Not found in new channel view model", JSON.stringify(initialData));
            throw new ScriptException("ID Not found in new channel view model");
        }


        const idUrl = id ?
            URL_BASE + "/channel/" + id:
            null;
        const canonicalUrl = initialData?.metadata?.channelMetadataRenderer?.vanityChannelUrl ?
            initialData?.metadata?.channelMetadataRenderer?.vanityChannelUrl :
            null;

        let subCount = 0;
        const metadataRows = headerRenderer?.content?.pageHeaderViewModel?.metadata?.contentMetadataViewModel?.metadataRows;
        for(let row of metadataRows) {
            const subsStr = row.metadataParts.find(x=>x.text?.content?.indexOf("subscribers") > 0)?.text?.content;
            if(!subsStr)
                continue;
            const subsNum = extractHumanNumber_Integer(extractText_String(subsStr));
            if(!isNaN(subsNum) && subsNum > 0) {
               subCount = subsNum;
                break;
            }
        }

        return new PlatformChannel({
            id: new PlatformID(PLATFORM, id, config.id, PLATFORM_CLAIMTYPE),
            name: initialData?.metadata?.channelMetadataRenderer?.title ?? "",
            thumbnail: thumbnail.url,
            banner: banner.url,
            subscribers: Math.max(0, subCount),
            description: initialData?.metadata?.channelMetadataRenderer?.description,
            url: idUrl,
            urlAlternatives: [idUrl, canonicalUrl].filter(x=>x != null),
            links: {}
        });
    }
    else {
        log("Missing header: (" + sourceUrl + ")\n" + JSON.stringify(initialData, null, "   "));
	    if(bridge.devSubmit) bridge.devSubmit("extractChannel_PlatformChannel - No header for " + sourceUrl, JSON.stringify(initialData));
        throw new ScriptException("No header for " + sourceUrl);
    }
}
/**
 * Extracts multiple tabs from a page that contains a tab rendering
 * @param initialData Initial data from a page with a TwoColumnBrowseResultsRenderer
 * @param contextData Any context values used to fill out data for resulting objects
 * @returns 
 */
function extractPage_Tabs(initialData, contextData) {
	const content = initialData.contents;
	if(!content) {
	    if(bridge.devSubmit) bridge.devSubmit("extractPage_Tabs - Missing contents", JSON.stringify(initialData));
	    throw new ScriptException("Missing contents");
	}

	return switchKey(content, {
		twoColumnBrowseResultsRenderer(renderer) {
			return extractTwoColumnBrowseResultsRenderer_Tabs(renderer, contextData);
		},
		singleColumnBrowseResultsRenderer(renderer) {
			return extractSingleColumnBrowseResultsRenderer_Tabs(renderer, contextData);
		},
		default(name) {
	        if(bridge.devSubmit) bridge.devSubmit("extractPage_Tabs - Unknown renderer type: " + name, JSON.stringify(content));
			throw new ScriptException("Unknown renderer type: " + name);
		}
	});
}
//#endregion


//#region Layout Extractors
function extractVideoPage_VideoDetails(initialData, initialPlayerData, contextData, jsUrl, useLogin, useAbr) {
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

	const abrStreamingUrl = (initialPlayerData.streamingData.serverAbrStreamingUrl) ? 
		decryptUrlN(initialPlayerData.streamingData.serverAbrStreamingUrl, jsUrl, false) : undefined;
	useAbr = abrStreamingUrl && (!!useAbr || USE_ABR_VIDEOS);
	const video = {
		id: new PlatformID(PLATFORM, videoDetails.videoId, config.id),
		name: videoDetails.title,
		thumbnails: new Thumbnails(videoDetails.thumbnail?.thumbnails.map(x=>new Thumbnail(escapeUnicode(x.url), x.height)) ?? []),
		author: new PlatformAuthorLink(new PlatformID(PLATFORM, videoDetails.channelId, config.id, PLATFORM_CLAIMTYPE), videoDetails.author, URL_BASE + "/channel/" + videoDetails.channelId, null, null),
		duration: parseInt(videoDetails.lengthSeconds),
		viewCount: parseInt(videoDetails.viewCount),
		url: contextData.url,
		isLive: videoDetails?.isLive ?? false,
		description: videoDetails.shortDescription,
		hls: (videoDetails?.isLive ?? false) ? hlsSource : null,
		dash: (videoDetails?.isLive ?? false) ? dashSource : null,
		live: (videoDetails?.isLive ?? false) ? (hlsSource ?? dashSource) : null,
		video: 
			((!useAbr) ?
				extractAdaptiveFormats_VideoDescriptor(initialPlayerData?.streamingData?.adaptiveFormats, jsUrl, contextData, "") :
				extractABR_VideoDescriptor(initialPlayerData, jsUrl)
			)
			?? new VideoSourceDescriptor([]),
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
								let end = start + dur;
								const text = decodeHtml(lineParsed[3]);

								const nextLine = (i + 1 < lines.length) ? lines[i + 1] : null;
								if(nextLine) {
									const lineParsedNext = /<text .*?start="(.*?)" .*?dur="(.*?)".*?>(.*?)<\/text>/gms.exec(nextLine);
									const startNext = parseFloat(lineParsedNext[1]);
									const durNext = parseFloat(lineParsedNext[2]);
									const endNext = startNext + durNext;
									if(startNext && startNext < end)
										end = startNext;
								}

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

	//Adds HLS stream if any other format is not yet available, mostly relevant for recently ended livestreams.
	if(video.video.videoSources !== null && video.video.videoSources.length == 0 && initialPlayerData?.streamingData?.hlsManifestUrl)
	    video.video.videoSources.push(new HLSSource({url: initialPlayerData.streamingData.hlsManifestUrl}));


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
							},
							segmentedLikeDislikeButtonViewModel(renderer) {
							    if(IS_TESTING)
							        console.log("Found new likes model:", renderer);
							    let likeButtonViewModel = renderer?.likeButtonViewModel;
							    if(likeButtonViewModel.likeButtonViewModel) //Youtube double nested, not sure if a bug on their end which may be removed
							        likeButtonViewModel = likeButtonViewModel.likeButtonViewModel;
							    let toggleButtonViewModel = likeButtonViewModel?.toggleButtonViewModel;
							    if(toggleButtonViewModel.toggleButtonViewModel) //Youtube double nested, not sure if a bug on their end which may be removed
							        toggleButtonViewModel = toggleButtonViewModel.toggleButtonViewModel;

							    const buttonViewModel = toggleButtonViewModel?.defaultButtonViewModel?.buttonViewModel;
							    if(buttonViewModel?.title) {
							        let num = parseInt(buttonViewModel.title);
							        if(!isNaN(num))
							            video.rating = new RatingLikes(num);
                                    num = extractHumanNumber_Integer(buttonViewModel.title);
                                    if(!isNaN(num) && num >= 0)
                                        video.rating = new RatingLikes(num);
                                    else if(buttonViewModel.title?.toLowerCase() == "like")
                                        video.rating = new RatingLikes(0);
                                    else {
	                                    if(bridge.devSubmit) bridge.devSubmit("extractVideoPage_VideoDetails - Found unknown likes model", JSON.stringify(buttonViewModel));
                                        throw new ScriptException("Found unknown likes model, please report to dev:\n" + JSON.stringify(buttonViewModel.title));
                                    }
							    }
							    else
							        log("UNKNOWN LIKES MODEL:\n" + JSON.stringify(renderer, null, "   "));
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
	if(!useLogin){
		result.getComments = function() {
			return extractTwoColumnWatchNextResultContents_CommentsPager(contextData.url, contentsContainer?.contents, useLogin)
		};
	}
    return result;
}

function extractABR_VideoDescriptor(initialPlayerData, jsUrl) {
	
	const abrStreamingUrl = (initialPlayerData.streamingData.serverAbrStreamingUrl) ? 
		decryptUrlN(initialPlayerData.streamingData.serverAbrStreamingUrl, jsUrl, false) : undefined;
	if(!abrStreamingUrl)
		return undefined;

	return new UnMuxVideoSourceDescriptor(
		(initialPlayerData.streamingData.adaptiveFormats
			.filter(x => x.mimeType.startsWith("video/webm"))
			.map(y => {
				const codecs = y.mimeType.substring(y.mimeType.indexOf('codecs=\"') + 8).slice(0, -1);
				const container = y.mimeType.substring(0, y.mimeType.indexOf(';'));
				if (codecs.startsWith("av01"))
					return null; //AV01 is unsupported.

				const duration = parseInt(parseInt(y.approxDurationMs) / 1000) ?? 0;
				if (isNaN(duration))
					return null;
				return new YTABRVideoSource({
					name: "UMP " + y.height + "p" + (y.fps ? y.fps : "") + " " + container,
					url: abrStreamingUrl,
					width: y.width,
					height: y.height,
					duration: (!isNaN(duration)) ? duration : 0,
					container: y.mimeType.substring(0, y.mimeType.indexOf(';')),
					codec: codecs,
					bitrate: y.bitrate,
				}, abrStreamingUrl, y, initialPlayerData.playerConfig.mediaCommonConfig.mediaUstreamerRequestConfig.videoPlaybackUstreamerConfig);
			})).filter(x => x != null),
		//Audio
		(initialPlayerData.streamingData.adaptiveFormats
			.filter(x => x.mimeType.startsWith("audio/webm"))
			.map(y => {
				const codecs = y.mimeType.substring(y.mimeType.indexOf('codecs=\"') + 8).slice(0, -1);
				const container = y.mimeType.substring(0, y.mimeType.indexOf(';'));
				if (codecs.startsWith("av01"))
					return null; //AV01 is unsupported.

				const duration = parseInt(parseInt(y.approxDurationMs) / 1000) ?? 0;
				if (isNaN(duration))
					return null;
				return new YTABRAudioSource({
					name: "UMP " + (y.audioTrack?.displayName ? y.audioTrack.displayName : codecs),
					url: abrStreamingUrl,
					width: y.width,
					height: y.height,
					duration: (!isNaN(duration)) ? duration : 0,
					container: y.mimeType.substring(0, y.mimeType.indexOf(';')),
					codec: codecs,
					bitrate: y.bitrate,
					audioChannels: y.audioChannels,
					language: ytLangIdToLanguage(y.audioTrack?.id)
				}, abrStreamingUrl, y, initialPlayerData.playerConfig.mediaCommonConfig.mediaUstreamerRequestConfig.videoPlaybackUstreamerConfig);
			})).filter(x => x != null)
	);
}

function extractAdaptiveFormats_VideoDescriptor(adaptiveSources, jsUrl, contextData, prefix) {   
	const nonce = randomString(16);   
	return adaptiveSources ? new UnMuxVideoSourceDescriptor(   
			adaptiveSources.filter(x=>x.mimeType.startsWith("video/") && (x.url || x.cipher || x.signatureCipher)).map(y=>{   
					const codecs = y.mimeType.substring(y.mimeType.indexOf('codecs=\"') + 8).slice(0, -1);   
					const container = y.mimeType.substring(0, y.mimeType.indexOf(';'));   
					if(codecs.startsWith("av01"))   
							return null; //AV01 is unsupported.   

					const logItag = y.itag ==  134;   
					if(logItag) {   
							//log(videoDetails.title + " || Format " + container + " - " + y.itag + " - " + y.width);   
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
							name: prefix + y.height + "p" + (y.fps ? y.fps : "") + " " + container,   
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
					}, contextData.url);   
			}).filter(x=>x != null),   
			adaptiveSources.filter(x=>x.mimeType.startsWith("audio/") && (x.url || x.cipher || x.signatureCipher)).map(y=>{   
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
							name: prefix + (y.audioTrack?.displayName ? y.audioTrack.displayName : codecs),   
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
					}, contextData.url);   
			}).filter(x=>x!=null),   
	) : new VideoSourceDescriptor([])   
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
	const id = renderer?.navigationEndpoint?.browseEndpoint?.browseId;
    const url = (!id) ? extractRuns_Url(renderer.title.runs) : URL_BASE + "/channel/" + id;

    const hasMembership = !!(renderer?.membershipButton?.buttonRenderer)
    let membershipUrl = (hasMembership) ? url + "/join" : null;

	let bestThumbnail = null;
	if(renderer.thumbnail?.thumbnails)
		bestThumbnail = renderer.thumbnail.thumbnails[renderer.thumbnail.thumbnails.length - 1].url;

	let subscribers = null;
	if(renderer.subscriberCountText)
		subscribers = extractHumanNumber_Integer(extractText_String(renderer.subscriberCountText));

	return new PlatformAuthorLink(new PlatformID(PLATFORM, id, config.id, PLATFORM_CLAIMTYPE), 
		extractRuns_String(renderer.title.runs),
		url,
		bestThumbnail,
		subscribers, membershipUrl);
}
function extractTwoColumnWatchNextResultContents_CommentsPager(contextUrl, contents, useLogin, engagementPanels) {
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
							const commentCount = extractText_String(renderer.commentCount);
							if(commentCount) {
								totalComments = parseInt(commentCount);
							}
						},
						continuationItemRenderer(continueRenderer) {
							if(itemSectionRenderer.targetId == 'comments-section' && continueRenderer?.continuationEndpoint?.continuationCommand) {
								commentsToken = continueRenderer.continuationEndpoint.continuationCommand.token;
							}
						}
					});
			}
		});
	}
	const commentSectionPanel = engagementPanels?.find(x=>x?.engagementPanelSectionListRenderer?.panelIdentifier == "engagement-panel-comments-section");
	const altContinuation = commentSectionPanel?.engagementPanelSectionListRenderer?.content?.sectionListRenderer?.contents
		?.find(y=>true)?.itemSectionRenderer;
	if(altContinuation != null && !commentsToken && altContinuation.sectionIdentifier == "comment-item-section") {
		const continuationRenderer = altContinuation?.contents?.find(y=>true)?.continuationItemRenderer;
		const altToken = continuationRenderer?.continuationEndpoint?.continuationCommand?.token;
		if(altToken)
			commentsToken = altToken;
	}

	if(!commentsToken)
		return new CommentPager([], false);
	return requestCommentPager(contextUrl, commentsToken, useLogin, useLogin) ??  new CommentPager([], false);
}
function requestCommentPager(contextUrl, continuationToken, useLogin, useMobile) {
	const data = requestNext({
		continuation: continuationToken
	}, useLogin, useMobile);
	if(IS_TESTING)
	    console.log("data", data);
	const endpoints = data?.onResponseReceivedCommands ?? data?.onResponseReceivedActions ?? data?.onResponseReceivedEndpoints;
	if(!endpoints) {
	    log("Comment object:\n" + JSON.stringify(data, null, "   "));
	    if(bridge.devSubmit) bridge.devSubmit("requestCommentPager - No comment endpoints", JSON.stringify(data));
	    throw new ScriptException("No comment endpoints provided by Youtube");
	}
	let commentsContinuation = null;
	for(let i = 0; i < endpoints.length; i++) {
		const endpoint = endpoints[i];
		const continuationItems = endpoint.reloadContinuationItemsCommand?.continuationItems ??
			endpoint.appendContinuationItemsAction?.continuationItems;
		if(continuationItems && continuationItems.length > 0) {
			let comments = [];

			if(continuationItems && continuationItems.length > 0) {
				for(let continuationItem of continuationItems) {
					switchKey(continuationItem, {
						commentThreadRenderer(renderer) {
							const commentRenderer = renderer?.comment?.commentRenderer;
							if(!commentRenderer)
								return;

							const replyCount = (commentRenderer.replyCount ? commentRenderer?.replyCount : 0);
							let replyContinuation = renderer.replies?.commentRepliesRenderer?.contents?.length == 1 ?
								(renderer.replies.commentRepliesRenderer.contents[0]?.continuationItemRenderer?.continuationEndpoint?.continuationCommand?.token
									?? renderer.replies.commentRepliesRenderer.contents[0]?.continuationItemRenderer?.button?.buttonRenderer?.command?.continuationCommand?.token) :
								null;
							comments.push(extractCommentRenderer_Comment(contextUrl, commentRenderer, replyCount, replyContinuation, useLogin, useMobile));
						},
						commentRenderer(renderer) {
							comments.push(extractCommentRenderer_Comment(contextUrl, renderer, 0, null, useLogin, useMobile));
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
					return new YTCommentPager(comments, commentsContinuation, contextUrl, useLogin, useMobile);
				}
			}
		}
	}

	if(data?.frameworkUpdates?.entityBatchUpdate?.mutations) {
		log("New comments model");
		const mutations = data.frameworkUpdates.entityBatchUpdate.mutations;
		if(mutations.length > 0) {
			const comments = [];
			
			let parentItems = [];
			for(let i = 0; i < endpoints.length; i++)
				parentItems.push(...(endpoints[i].reloadContinuationItemsCommand?.continuationItems ??
					endpoints[i].appendContinuationItemsAction?.continuationItems ?? 
					[]));
			parentItems = parentItems.filter(x=>x.commentThreadRenderer);
			const commentObjects = mutations.filter(x=>x?.payload?.commentEntityPayload);

			for(let commentObject of commentObjects) {
				const cobj = commentObject?.payload?.commentEntityPayload ?? {};
				const parent = parentItems.find(x=>x.commentThreadRenderer?.commentViewModel?.commentViewModel?.commentKey == commentObject.entityKey);
				const replyContents = parent?.commentThreadRenderer?.replies?.commentRepliesRenderer?.contents;
				const replyContinuation = ((replyContents?.length ?? 0) > 0) ? 
					(replyContents[0].continuationItemRenderer?.continuationEndpoint?.continuationCommand?.token ??
						replyContents[0].continuationItemRenderer?.button?.buttonRenderer?.command?.continuationCommand?.token) : 
					null;
				
				const authorEndpoint = cobj.author?.channelCommand?.innertubeCommand?.commandMetadata?.webCommandMetadata?.url;
				comments.push(new YTComment({
					contextUrl: contextUrl,
					author: new PlatformAuthorLink(new PlatformID(PLATFORM, cobj?.author?.displayName, config.id, PLATFORM_CLAIMTYPE), cobj.author.displayName, (authorEndpoint) ? URL_BASE + authorEndpoint : "", cobj.author.avatarThumbnailUrl),
					message: cobj.properties?.content?.content ?? "",
					rating: new RatingLikes(extractHumanNumber_Integer(cobj.toolbar?.likeCountLiked) ?? 0),
					date: (extractAgoTextRuns_Timestamp(cobj?.properties?.publishedTime) ?? 0),
					replyCount: extractFirstNumber_Integer(cobj?.toolbar?.replyCount) ?? 0,
					context: { replyContinuation: replyContinuation, useLogin: useLogin + "", useMobile: useMobile + "" }
				}));
			}
			

			if(comments.length > 0) {
				return new YTCommentPager(comments, commentsContinuation, contextUrl, useLogin, useMobile);
			}
		}
	}


	log("Comment object:\n" + JSON.stringify(data, null, "   "));
    if(bridge.devSubmit) bridge.devSubmit("requestCommentPager - No comment endpoints", JSON.stringify(data));
	throw new ScriptException("No valid comment endpoint provided by Youtube");
}

function extractSingleColumnBrowseResultsRenderer_Tabs(renderer, contextData) {
	const tabs = [];
	if(!renderer.tabs) {
	    if(bridge.devSubmit) bridge.devSubmit("extractSingleColumnBrowseResultsRenderer_Tabs - No tabs found", JSON.stringify(renderer));
	    throw new ScriptException("No tabs found");
	}

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
			    if(bridge.devSubmit) bridge.devSubmit("extractSingleColumnBrowseResultsRenderer_Tabs - Unknown tab renderer: " + tabContentRendererName, JSON.stringify(content));
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
	if(!renderer.tabs)
	{
	    if(bridge.devSubmit) bridge.devSubmit("extractTwoColumnBrowseResultsRenderer_Tabs - No tabs found", JSON.stringify(renderer));
	    throw new ScriptException("No tabs found");
	}

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
	            if(bridge.devSubmit) bridge.devSubmit("extractTwoColumnBrowseResultsRenderer_Tabs - Unknown tab renderer: " + tabContentRendererName, JSON.stringify(renderer));
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

	let shelves = [];
	let videos = [];

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
			itemSectionRenderer(renderer) {
		        const items = extractItemSectionRenderer_Shelves(renderer, contextData);

		        if(items.shelves)
		            shelves = shelves.concat(items.shelves);
		        if(items.videos)
		            videos = videos.concat(items.videos);
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
				const items = extractItemSectionRenderer_Shelves(renderer, contextData);
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
	const contents = itemSectionRenderer.contents ?? itemSectionRenderer.results;
	let shelves = [];
	let videos = [];
	let channels = [];
	let playlists = [];
	let continuationToken = undefined;

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
			shelfRenderer(renderer) {
			    const shelf = extractShelfRenderer_Shelf(renderer);
			    if(shelf)
				    shelves.push(shelf);
			},
			gridRenderer(renderer) {
				const shelf = extractGridRenderer_Shelf(renderer, contextData);
				if(shelf.playlists.length > 0)
					playlists.push(...shelf.playlists);
			},
			continuationItemRenderer(renderer) {
				const token = renderer?.continuationEndpoint?.continuationCommand?.token
				if(token)
					continuationToken = token;
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
		playlists: playlists.filter(x=>x != null),
		continuation: continuationToken
	};
}
function extractGridRenderer_Shelf(gridRenderer, contextData) {
	const contents = gridRenderer.items;
	let shelves = [];
	let videos = [];
	let channels = [];
	let playlists = [];

	contents.forEach((item)=>{
		switchKey(item, {
			gridPlaylistRenderer(renderer) {
			    const playlist = extractPlaylistRenderer_Playlist(renderer, contextData);
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
    let name = extractText_String(shelfRenderer.title);
    return switchKey(shelfRenderer.content, {
        expandedShelfContentsRenderer(renderer) {
            return {
                name: name,
                type: "Shelf",
                videos: switchKeyVideos(renderer.items)
            };
        },
        default() {
            return null;
        }
    });
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
		x.thumbnailOverlayTimeStatusRenderer?.style == "LIVE" ||
		x.thumbnailOverlayTimeStatusRenderer?.accessibility?.accessibilityData?.label == "LIVE");
	let isLive = liveBadges != null && liveBadges.length > 0;

	isLive = isLive || ((videoRenderer.badges?.filter(x=>x.metadataBadgeRenderer?.style == "BADGE_STYLE_TYPE_LIVE_NOW")?.length ?? 0) > 0)

	let plannedDate = null;
	if(videoRenderer.upcomingEventData?.startTime)
		plannedDate = parseInt(videoRenderer.upcomingEventData.startTime);
	isLive = isLive || !!plannedDate
	//if(!isLive && !videoRenderer.publishedTimeText?.simpleText)
	//	return  null; //Not a normal video


	const author = (contextData && contextData.authorLink) ?
		contextData.authorLink : extractVideoWithContextRenderer_AuthorLink(videoRenderer);

	if(IS_TESTING)
		;//console.log(videoRenderer);

	//if(!videoRenderer?.lengthText?.runs || !videoRenderer.publishedTimeText?.runs)
	//	isLive = true; //If no length, live after all?

    let viewCount = 0;
    if(videoRenderer?.shortViewCountText)
        viewCount = extractHumanNumber_Integer(extractText_String(videoRenderer.shortViewCountText));
    else log("No viewcount found on video " + videoRenderer.videoId);

	const title = (videoRenderer.headline) ? extractText_String(videoRenderer.headline) : extractText_String(videoRenderer.title);

	if (isLive) {
		return new PlatformVideo({
			id: new PlatformID(PLATFORM, videoRenderer.videoId, config.id),
			name: escapeUnicode(title),
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
			name: escapeUnicode(title),
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
	
	isLive = isLive || ((videoRenderer.badges?.filter(x=>x.metadataBadgeRenderer?.style == "BADGE_STYLE_TYPE_LIVE_NOW")?.length ?? 0) > 0)

	if(!isLive && !videoRenderer.publishedTimeText?.simpleText)
		return  null; //Not a normal video



	const author = (contextData && contextData.authorLink) ?
		contextData.authorLink : extractVideoRenderer_AuthorLink(videoRenderer);

	if(IS_TESTING)
		console.log(videoRenderer);

//	if(!videoRenderer?.lengthText?.simpleText)
//		isLive = true; //If no length, live after all?

	if(isLive)
		return new PlatformVideo({
			id: new PlatformID(PLATFORM, videoRenderer.videoId, config.id),
			name: escapeUnicode(extractRuns_String(videoRenderer.title.runs)),
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
			name: escapeUnicode(extractRuns_String(videoRenderer.title.runs)),
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
		name: escapeUnicode(extractRuns_String(videoRenderer.title.runs)),
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

	let thumbnail = (playlistRenderer.thumbnails && playlistRenderer.thumbnails.length > 0) ? extractThumbnail_BestUrl(playlistRenderer.thumbnails[0]) : null;
	if(!thumbnail && playlistRenderer.thumbnail)
		thumbnail = extractThumbnail_BestUrl(playlistRenderer.thumbnail);

    return new PlatformPlaylist({
		id: new PlatformID(PLATFORM, playlistRenderer.playlistId, config.id),
		author: author,
        name: extractText_String(playlistRenderer.title),
        thumbnail: thumbnail,
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
	return new Thumbnails(thumbnail.thumbnails.map(x=>new Thumbnail(escapeUnicode(x.url), x.height)));
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
	const name = extractText_String(videoRenderer.ownerText)//extractRuns_String(videoRenderer.ownerText.runs);
	const channelIcon = videoRenderer.channelThumbnailSupportedRenderers.channelThumbnailWithLinkRenderer;
	const thumbUrl = channelIcon.thumbnail.thumbnails[0].url;
	const channelUrl = (!id) ? extractRuns_Url(videoRenderer.ownerText.runs) : URL_BASE + "/channel/" + id;

	return new PlatformAuthorLink(new PlatformID(PLATFORM, id, config.id, PLATFORM_CLAIMTYPE), name, channelUrl, thumbUrl);
}
function extractCommentRenderer_Comment(contextUrl, commentRenderer, replyCount, replyContinuation, useLogin, useMobile) {
	const authorName = extractText_String(commentRenderer.authorText) ?? "";
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
		context: { replyContinuation: replyContinuation, useLogin: useLogin + "", useMobile: useMobile + "" }
	})
}
//#endregion

function convertIfOtherUrl(url) {
    url = convertIfShortUrl(url);
    url = convertIfEmbedUrl(url);
    url = convertIfMusicUrl(url);
    return url;
}
function convertIfMusicUrl(url) {
    const musicMatch = url.match(REGEX_VIDEO_URL_DESKTOP);
    if(musicMatch && musicMatch.length == 3 && musicMatch[1]?.toLowerCase() == "music")
        url = URL_BASE + "/watch?v=" + musicMatch[1];
    return url;
}
function convertIfEmbedUrl(url) {
    const embedMatch = url.match(REGEX_VIDEO_URL_EMBED);
    if(embedMatch && embedMatch.length == 3) {
        let id = embedMatch[2];
        if(id.indexOf("?") > 0)
            id = id.substring(0, id.indexOf("?"));
        url = URL_BASE + "/watch?v=" + id;
    }
    return url;
}
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
	const runStr = (typeof runs === "string") ? runs : extractRuns_String(runs);
	return extractAgoText_Timestamp(runStr);
}
function extractAgoText_Timestamp(str) {
	if(!str)
		return 0;
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
	        if(bridge.devSubmit) bridge.devSubmit("extractAgoText_Timestamp - Unknown time type: " + match[2], match[2]);
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
	if(!str)
		return 0;
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

function escapeUnicode(str) {
	if(!str)
		return str;
	return str.replace("\\u0026", "&");
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
	let langPart = (langParts && langParts.length > 0) ? langParts[0] : "";
	if(ytLangMap[langPart])
	    return ytLangMap[langPart]; //Backwards compat
	if(langPart.indexOf("-") > 0)
	   langPart = langPart.split("-")[0].trim();
	if(ytLangMap[langPart])
	    return ytLangMap[langPart]; //Backwards compat
	if(langPart && langPart.length > 0)
	    return langPart.trim();
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
const REGEX_DECRYPT_N_VARIANTS = [
	/\.get\(\"n\"\)\)&&\([a-zA-Z0-9$_]=([a-zA-Z0-9$_]+)(?:\[(\d+)])?\([a-zA-Z0-9$_]\)/,
	/[a-zA-Z0-9$_]+=String\.fromCharCode\(110\),[a-zA-Z0-9$_]+=[a-zA-Z0-9$_]+\.get\([a-zA-Z0-9$_]+\)\)&&\([a-zA-Z0-9$_]=([a-zA-Z0-9$_]+)(?:\[(\d+)])?\([a-zA-Z0-9$_]\)/,
	/[a-zA-Z]+="[n]+"\[.+\],[a-zA-Z0-9$_]+=[a-zA-Z0-9$_]+\.get\([a-zA-Z0-9$_]+\)\)&&\([a-zA-Z0-9$_]=([a-zA-Z0-9$_]+)(?:\[(\d+)])?\([a-zA-Z0-9$_]\)/,
	/\/file\/index\.m3u8.+?[a-zA-Z0-9$_]=([a-zA-Z0-9$_]+)(?:\[(\d+)])?\([a-zA-Z0-9$_]\)/
];
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
function testCipher(hash) {
	const jsUrl = CIPHER_TEST_PREFIX + hash + CIPHER_TEST_SUFFIX;
	try{
		const result = prepareCipher(jsUrl);
		clearCipher(jsUrl);
		return {
			success: result,
			exception: ""
		};
	}
	catch(ex) {
		return {
			success: false,
			exception: ex
		};
	}
}
source.testCipher = testCipher;
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
		if(!playerCodeResp.isOk) {
	        if(bridge.devSubmit) bridge.devSubmit("prepareCipher - Failed to get player js", jsUrl);
			throw new ScriptException("Failed to get player js");
	    }
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
        if(bridge.devSubmit) bridge.devSubmit("prepareCipher - Failed to get Cipher due to: " + ex, jsUrl);
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
	let nDecryptFunctionArrNameMatch = undefined;
	for(let i = 0; i < REGEX_DECRYPT_N_VARIANTS.length; i++) {
		nDecryptFunctionArrNameMatch = REGEX_DECRYPT_N_VARIANTS[i].exec(code);
		if(!nDecryptFunctionArrNameMatch) {
			console.log("NDecryptor failed, trying fallback to [" + i + 2 + "]");
		}
		else
			break;
	}
	if(!nDecryptFunctionArrNameMatch) {
        if(bridge.devSubmit) bridge.devSubmit("getNDecryptorFunctionCode - Failed to find n decryptor (name)", jsUrl);
		throw new ScriptException("Failed to find n decryptor (name)\n" + jsUrl);
    }
	const nDecryptFunctionArrName = nDecryptFunctionArrNameMatch[1];
	const nDecryptFunctionArrIndex = parseInt(nDecryptFunctionArrNameMatch[2]);
	
	const nDecryptFunctionNameMatch = code.match(escapeRegex(nDecryptFunctionArrName) + "\\s*=\\s*\\[([$a-zA-Z0-9,\\(,\\)\\.]+?)]");
	if(!nDecryptFunctionNameMatch) {
        if(bridge.devSubmit) bridge.devSubmit("getNDecryptorFunctionCode - Failed to find n decryptor (array)", jsUrl);
		throw new ScriptException("Failed to find n decryptor (array)\n" + jsUrl);
	}
	const nDecryptArray = nDecryptFunctionNameMatch[1].split(",");
	if(nDecryptArray.length <= nDecryptFunctionArrIndex) {
        if(bridge.devSubmit) bridge.devSubmit("getNDecryptorFunctionCode - Failed to find n decryptor (index)", jsUrl);
		throw new ScriptException("Failed to find n decryptor (index)\n" + jsUrl);
	}
	const nDecryptFunctionName = nDecryptArray[nDecryptFunctionArrIndex]
	
	const nDecryptFunctionCodeMatches = [
		escapeRegex(nDecryptFunctionName) + "=function\\(a\\)\\{[\\s\\S]*?join\\(\\\"\\\"\\)};",
		escapeRegex(nDecryptFunctionName) + "=function\\(a\\)\\{[\\s\\S]*?join\\.call\\([a-zA-Z$_]+,\\\"\\\"\\)};",
		new RegExp(escapeRegex(nDecryptFunctionName) + "=function\\(a\\)\\{[\\s\\S]*?join\\.call\\(.*?\\).*?};", "s")
	]
	let nDecryptFunctionCodeMatch = undefined;
	for(let functionRegex of nDecryptFunctionCodeMatches) {
		const match = code.match(functionRegex);
		if(match && match.length > 0 && (!nDecryptFunctionCodeMatch || nDecryptFunctionCodeMatch.length > match[0].length))
			nDecryptFunctionCodeMatch = match[0];
	}
	if(!nDecryptFunctionCodeMatch) {
        if(bridge.devSubmit) bridge.devSubmit("getNDecryptorFunctionCode - Failed to find n decryptor (code)", jsUrl, code);
		throw new ScriptException("Failed to find n decryptor (code)\n" + jsUrl);
	}
	
	return "(function(){" + 
		"var " + nDecryptFunctionCodeMatch + "\n" +
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
	if(!cipherFunctionName)	{
        if(bridge.devSubmit) bridge.devSubmit("getCipherFunctionCode - Failed to find cipher (name)", jsUrl);
		throw new ScriptException("Failed to find cipher (name)\n" + jsUrl);
	}
	const cipherFunctionCodeMatch = playerCode.match("(" + escapeRegex(cipherFunctionName) + "=function\\([a-zA-Z0-9_]+\\)\\{.+?\\})");
	if(!cipherFunctionCodeMatch) {
		if(IS_TESTING)
			console.log("Failed to find cipher function in: ", playerCode);
        if(bridge.devSubmit) bridge.devSubmit("getCipherFunctionCode - Failed to find cipher (function)", jsUrl);
		throw new ScriptException("Failed to find cipher (function)\n" + jsUrl);
	}
	const cipherFunctionCode = cipherFunctionCodeMatch[1];
	const cipherFunctionCodeVar = "var " + cipherFunctionCode;
	const helperObjNameMatch = cipherFunctionCode.match(";([A-Za-z0-9_\\$]{2,3})\\...\\(");
	if(!helperObjNameMatch) {
		if(IS_TESTING)
			console.log("Failed to find helper name in: ", playerCode);
        if(bridge.devSubmit) bridge.devSubmit("getCipherFunctionCode - Failed to find helper (name)", jsUrl);
		throw new ScriptException("Failed to find helper (name)\n" + jsUrl);
	}
	if(IS_TESTING)
		console.log("Cipher Code: ", cipherFunctionCode);
	const helperObjName = helperObjNameMatch[1];
	const helperObjMatch = playerCode.match("(var " + escapeRegex(helperObjName) + "=\\{[\\s\\S]*?\\};)");
	if(!helperObjMatch) {
		if(IS_TESTING)
			console.log("Failed to find helper method [" + helperObjName + "] in: ", playerCode);
        if(bridge.devSubmit) bridge.devSubmit("getCipherFunctionCode - Failed to find helper (methods)", jsUrl);
		throw new ScriptException("Failed to extract helper (methods)\n" + jsUrl);
	}
	const helperObj = helperObjMatch[1];
	const functionCode = "return function decodeCipher(str){ return " + cipherFunctionName + "(str); }";

	return "(function(){" + helperObj + "\n" + 
		cipherFunctionCodeVar + "\n" +
		functionCode + "})()";
}
function escapeRegex(str) {
	return str?.replace("$", "\\$");
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



//#region UMP

class UMPResponse {

	constructor(bytes, reusableBuffer) {
		this.opcodes = [];
		this.streams = {};
		this.streamCount = 0;

		const pointer = {index: 0};
		while(pointer.index < bytes.length) {
			const opcode = binaryReadEncodedInt(bytes, pointer);
			const length = binaryReadEncodedInt(bytes, pointer);
			let segment = [];
			if(pointer.index + length <= bytes.length) {
				segment = binaryReadBytes(bytes, pointer, length);
				this.opcodes.push({opcode: opcode, length: length});
				switch(opcode) {
					case 20: //InitStream
						this.streamCount++;
						const opCode20 = pb.Opcode20_pb.Opcode20.deserializeBinary(segment);
						const buff = new ArrayBuffer(opCode20.getSegmentsize());
						this.streams[opCode20.getStreamindex()] = {
							completed: false,
							segmentIndex: opCode20.getSegmentindex(),
							itag: opCode20.getItag(),
							lmt: opCode20.getLmt(),
							xtags: opCode20.getXtags(),
							segmentSize: opCode20.getSegmentsize(),
							data: (reusableBuffer) ? 
								reusableBuffer.getBuffer(opCode20.getSegmentsize()) :
								new Uint8Array(buff, 0, opCode20.getSegmentsize()),//opCode20.getSegmentsize()),
							offset: 0
						};
					break;
					case 21://AddStreamData
						const streamId21 = binaryReadByte(segment, {index: 0});
						const stream21 = this.streams[streamId21];
						if(stream21) {
							const partData = binaryReadBytes(segment, {index: 1}, segment.length - 1);
							stream21.data.set(partData, stream21.offset);
							stream21.offset += partData.length;
						}
					break;
					case 22://onStreamEnd
						const streamId22 = binaryReadByte(segment, {index: 0});
						const stream22 = this.streams[streamId22];
						if(stream22)
							stream22.completed = true;
					break;
					case 43://Message
						const opCode43 = pb.Opcode43_pb.Opcode43.deserializeBinary(segment);
						this.redirectUrl = opCode43?.getRedirecturl();
				}
			}
			else {
				log("Incompleted UMP Response");
				this.isIncomplete = true;
				this.remainder = binaryReadBytes(bytes, pointer, bytes.length - pointer.index);
			}
		}
		if(this.streamCount == 0) {
			log("UMP: No streams found?");
			if(bytes.length < 200) {
				log("UMP Resp: " + bytes.join(" ") + "\nOpcodes: " + this.opcodes.map(x=>`${x.opcode}:${x.length}`).join(", "));
				return undefined;
			}
		}
	}
}

function binaryReadByte(bytes, pointer) {
	const byt = bytes[pointer.index];
	pointer.index++;
	if(byt < 0)
		return byt + 256;
	return byt;
}
function binaryReadBytes(bytes, pointer, length) {
	const result = bytes.subarray(pointer.index, pointer.index + length);
	pointer.index += length;
	return result;
}
function binaryReadEncodedInt(bytes, pointer) {
	const index = pointer.index;
	
	const initialPosition = index;

	const firstByte = binaryReadByte(bytes, pointer);
	const byteCount = firstByte < 128 ? 1 : firstByte < 192 ? 2 : firstByte < 224 ? 3 : firstByte < 240 ? 4 : 5;

	if(firstByte < 1 || !(initialPosition + byteCount <= bytes.length))
		return -1;
	let secondByte = 0;
	let thirdByte = 0;
	let fourthByte = 0;
	let fifthByte = 0;
	switch(byteCount) {
		case 1:
			return firstByte;
		case 2:
			secondByte = binaryReadByte(bytes, pointer);
			return (firstByte & 63) + 64 * secondByte;
		case 3:
			secondByte = binaryReadByte(bytes, pointer);
			thirdByte = binaryReadByte(bytes, pointer);
			return (firstByte & 31) + 32 * (secondByte + 256 * thirdByte);
		case 4:
			secondByte = binaryReadByte(bytes, pointer);
			thirdByte = binaryReadByte(bytes, pointer);
			fourthByte = binaryReadByte(bytes, pointer);
			return (firstByte & 15) + 16 * (secondByte + 256 * (thirdByte + 256 * fourthByte));
		default:
			secondByte = binaryReadByte(bytes, pointer);
			thirdByte = binaryReadByte(bytes, pointer);
			fourthByte = binaryReadByte(bytes, pointer);
			fifthByte = binaryReadByte(bytes, pointer);
			pointer.index += 4;
			return secondByte + 256 * (thirdByte + 256 * (fourthByte + 256 * fifthByte));
	}
}

function binaryReadVariableInt(bytes, pointer) {
	let c = binaryReadByte(bytes, pointer);
	if(c == 1) {
		c = 0;
		for(let i = 0; i < 7; i++) {
			c = c * 256 + binaryReadByte(bytes, pointer);
		}
		return c;
	}
	let d = 128;
	for(let e = 0; e < 6 && d > c; e++) {
		c = c * 256 + binaryReadByte(bytes, pointer);
		d *= 128;
	}
	return c - d;
}
function binaryReadVariableUInt(bytes, pointer) {
	let c = binaryReadByte(bytes, pointer);
	if(c == 1) {
		c = 0;
		for(let i = 0; i < 7; i++) {
			c = c * 256 + binaryReadByte(bytes, pointer);
		}
		return c;
	}
	let d = 128;
	for(let e = 0; e < 6 && d > c; e++) {
		c = c * 256 + binaryReadByte(bytes, pointer);
		d *= 128;
	}
	return c;
}
function binaryReadUInt(bytes, pointer, size) {
	if(!size)
		size = binaryReadVariableInt(bytes, pointer);
	
	let value = 0;
	for(let i = size; i > 0; i--) {
		const read = binaryReadByte(bytes, pointer);
		value = (value << 8) | read;
	}
	return value;
}
function binaryReadFloat(bytes, pointer, size) {
	if(!size)
		size = binaryReadVariableInt(bytes, pointer);
	let resultBytes;
	switch(size) {
		case 4:
			const arr4 = binaryReadBytes(bytes, pointer, 4);
			return (new DataView(arr4.buffer, arr4.byteOffset, arr4.byteLength)).getFloat32(0);
		case 8:
			const arr8 = binaryReadBytes(bytes, pointer, 8);
			return (new DataView(arr8.buffer, arr8.byteOffset, arr8.byteLength)).getFloat64(0);
		default:
			throw new ScriptException("Invalid float bytes detected, should be 4 or 8 bytes.");
	}
}

//#endregion


//#region MP4

class MP4Header {
	constructor(bytes) {

	}
}

//#endregion


let pb = {};
source.testProtobuf = function() {
	let test2 = new pb.VideoPlaybackRequest_pb.VideoPlaybackRequestInfo();
	test2.setDesiredheight(1234);

	log("Protobuf test array: " + JSON.stringify(test2.serializeBinary()));
	log("Protobuf test string" + test2.toString());
};
let lastTestExecutor = undefined;
source.testing = function(url) {
	USE_ABR_VIDEOS = true;
	const content = this.getContentDetails(url);
	const video = content.video.videoSources.find(x=>x.name.startsWith("UMP") && x.container == "video/webm" && x.height == 720);
	const generated = video.generate();

	const executor = video.getRequestExecutor();
	/*
	const resp = executor.executeRequest("https://grayjay.app/internal/video?segIndex=2", {});
	console.log("Executor", executor);
	console.log("Resp", resp);
	const resp2 = executor.executeRequest("https://grayjay.app/internal/video?segIndex=3", {});
	console.log("Executor", executor);
	console.log("Resp", resp2);
	*/
	for(let i = 0; i < 3; i++) {
		executor.executeRequest("https://grayjay.app/internal/video?segIndex=" + i, {});
	}
	lastTestExecutor = executor;
	let totalSize = 0;
	for(let key of Object.keys(executor.segments))
		totalSize += executor.segments[key].data.buffer.byteLength;
	console.log("Remaining cached in (" + (totalSize/MB_SIZE) + "MB): " + Object.keys(executor.segments));
	return generated;
}


console.log("LOADED");


//#region WEBM
class WEBMHeader {
	constructor(bytes, mimeType, codec, width, height) {
		this.timescale = 0;
		this.duration = 0;
		this.cues = [];

		this.mimeType = mimeType;
		this.codec = codec;
		this.width = width;
		this.height = height;
		this.samplingFrequency = 48000;

		let pointer = {index: 0};

		while(pointer.index < bytes.length) {
			const fieldId = binaryReadVariableUInt(bytes, pointer);
			const fieldSize = binaryReadVariableInt(bytes, pointer);

			switch(fieldId) {
				case 0x18538067: //Segment
					console.log("Found segment");
					const startOffset = pointer.index;
					while(pointer.index - startOffset < fieldSize && pointer.index < bytes.length) {
						const subFieldOffset = pointer.index;
						const subFieldId = binaryReadVariableUInt(bytes, pointer);
						const subFieldSize = binaryReadVariableInt(bytes, pointer);
		
						switch(subFieldId) {
							case 0x1549A966: //Info
								console.log("Found info in segment");
								let infoStartOffset = pointer.index;
								while(pointer.index - infoStartOffset < subFieldSize && pointer.index < bytes.length) {
									const infoFieldId = binaryReadVariableUInt(bytes, pointer);
									const infoFieldSize = binaryReadVariableInt(bytes, pointer);
		
									switch(infoFieldId) {
										case 0x2AD7B1:
											console.log("found timescale in info");
											this.timescale = binaryReadUInt(bytes, pointer, infoFieldSize);
											log("Timescale: " + this.timescale);
											break;
										case 0x4489:
											console.log("Found duration in info");
											this.duration = binaryReadFloat(bytes, pointer, infoFieldSize);
											break;
										default:
											pointer.index += infoFieldSize;
											break;
									}
								}
								if(pointer.index - infoStartOffset > subFieldSize)
									throw new ScriptException("Corrupt WEBM segment");
		
								break;
							case 0x1C53BB6B: //Cues
								console.log("Found Cues in segment");
								const cuesStartOffset = pointer.index;
								this.indexRangeStart = subFieldOffset;
								this.indexRangeEnd = cuesStartOffset + subFieldSize;
								while(pointer.index - cuesStartOffset < subFieldSize && pointer.index < bytes.length) {
									const cuesFieldId = binaryReadVariableUInt(bytes, pointer);
									if(cuesFieldId != 0xBB)
										throw new ScriptException("Expected cue point");
		
									const cuePointSize = binaryReadVariableInt(bytes, pointer);
									const cuePointStartOffset = pointer.index;
		
									let cueTime = -1;
									while(pointer.index - cuePointStartOffset < cuePointSize && pointer.index < bytes.length) {
										const cuePointFieldId = binaryReadVariableUInt(bytes, pointer);
										const cuePointFieldSize = binaryReadVariableInt(bytes, pointer);
										switch(cuePointFieldId) {
											case 0xB3:
												cueTime = binaryReadUInt(bytes, pointer, cuePointFieldSize);
												break;
											default:
												pointer.index += cuePointFieldSize;
												break;
										}
									}
		
									if(pointer.index - cuePointStartOffset > cuePointSize)
										throw new ScriptException("Corrupt cue point");
									if(cueTime < 0)
										throw new ScriptException("Expected cue time to be set.");
		
									this.cues.push(cueTime);
								}
								break;
							default:
								pointer.index += subFieldSize;
								break;
						}
					}
					if(pointer.index - startOffset > fieldSize)
						throw new ScriptException("Corrupt segment");
					break;
					default:
						pointer.index += fieldSize;
			}
		}
		this.durationSeconds = this.duration / (this.timescale / 1000);
		this.durationCueTimescale = this.duration;
		this.cueTimeScale = this.timescale / 1000;
	}
}


//#endregion

var REGEX_SPACE_CHARACTERS = /<%= spaceCharacters %>/g;
var btoa_TABLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
var atob = function(input) {
	input = String(input)
		.replace(REGEX_SPACE_CHARACTERS, '');
	var length = input.length;
	if (length % 4 == 0) {
		input = input.replace(/==?$/, '');
		length = input.length;
	}
	if (
		length % 4 == 1 ||
		// http://whatwg.org/C#alphanumeric-ascii-characters
		/[^+a-zA-Z0-9/]/.test(input)
	) {
		error(
			'Invalid character: the string to be decoded is not correctly encoded.'
		);
	}
	var bitCounter = 0;
	var bitStorage;
	var buffer;
	var output = '';
	var position = -1;
	while (++position < length) {
		buffer = btoa_TABLE.indexOf(input.charAt(position));
		bitStorage = bitCounter % 4 ? bitStorage * 64 + buffer : buffer;
		// Unless this is the first of a group of 4 characters…
		if (bitCounter++ % 4) {
			// …convert the first 8 bits to a single ASCII character.
			output += String.fromCharCode(
				0xFF & bitStorage >> (-2 * bitCounter & 6)
			);
		}
	}
	return output;
};

//#region Protobuf_UMP
(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
	var jspb=require("./google-protobuf.min.js");var goog=jspb;var global=typeof globalThis!=="undefined"&&globalThis||typeof window!=="undefined"&&window||typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||function(){return this}.call(null)||Function("return this")();goog.exportSymbol("proto.Format",null,global);proto.Format=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.Format,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Format.displayName="proto.Format"}if(jspb.Message.GENERATE_TO_OBJECT){proto.Format.prototype.toObject=function(opt_includeInstance){return proto.Format.toObject(opt_includeInstance,this)};proto.Format.toObject=function(includeInstance,msg){var f,obj={itag:jspb.Message.getFieldWithDefault(msg,1,0),lmt:jspb.Message.getFieldWithDefault(msg,2,0),xtags:jspb.Message.getFieldWithDefault(msg,3,"")};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Format.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Format;return proto.Format.deserializeBinaryFromReader(msg,reader)};proto.Format.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt32();msg.setItag(value);break;case 2:var value=reader.readUint64();msg.setLmt(value);break;case 3:var value=reader.readString();msg.setXtags(value);break;default:reader.skipField();break}}return msg};proto.Format.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Format.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Format.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getItag();if(f!==0){writer.writeInt32(1,f)}f=message.getLmt();if(f!==0){writer.writeUint64(2,f)}f=message.getXtags();if(f.length>0){writer.writeString(3,f)}};proto.Format.prototype.getItag=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.Format.prototype.setItag=function(value){return jspb.Message.setProto3IntField(this,1,value)};proto.Format.prototype.getLmt=function(){return jspb.Message.getFieldWithDefault(this,2,0)};proto.Format.prototype.setLmt=function(value){return jspb.Message.setProto3IntField(this,2,value)};proto.Format.prototype.getXtags=function(){return jspb.Message.getFieldWithDefault(this,3,"")};proto.Format.prototype.setXtags=function(value){return jspb.Message.setProto3StringField(this,3,value)};goog.object.extend(exports,proto);
	
	},{"./google-protobuf.min.js":21}],2:[function(require,module,exports){
	var jspb=require("./google-protobuf.min.js");var goog=jspb;var global=typeof globalThis!=="undefined"&&globalThis||typeof window!=="undefined"&&window||typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||function(){return this}.call(null)||Function("return this")();goog.exportSymbol("proto.Opcode20",null,global);goog.exportSymbol("proto.TimeRange",null,global);proto.Opcode20=function(opt_data){jspb.Message.initialize(this,opt_data,0,500,null,null)};goog.inherits(proto.Opcode20,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Opcode20.displayName="proto.Opcode20"}proto.TimeRange=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.TimeRange,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.TimeRange.displayName="proto.TimeRange"}if(jspb.Message.GENERATE_TO_OBJECT){proto.Opcode20.prototype.toObject=function(opt_includeInstance){return proto.Opcode20.toObject(opt_includeInstance,this)};proto.Opcode20.toObject=function(includeInstance,msg){var f,obj={streamindex:jspb.Message.getFieldWithDefault(msg,1,0),videoid:jspb.Message.getFieldWithDefault(msg,2,""),itag:jspb.Message.getFieldWithDefault(msg,3,0),lmt:jspb.Message.getFieldWithDefault(msg,4,0),xtags:jspb.Message.getFieldWithDefault(msg,5,""),byteoffset:jspb.Message.getFieldWithDefault(msg,6,0),isinitial:jspb.Message.getBooleanFieldWithDefault(msg,8,false),segmentindex:jspb.Message.getFieldWithDefault(msg,9,0),hna:jspb.Message.getFieldWithDefault(msg,10,0),startms:jspb.Message.getFieldWithDefault(msg,11,0),durationms:jspb.Message.getFieldWithDefault(msg,12,0),segmentsize:jspb.Message.getFieldWithDefault(msg,14,0),timerange:(f=msg.getTimerange())&&proto.TimeRange.toObject(includeInstance,f),uj:jspb.Message.getFieldWithDefault(msg,16,0),zl:jspb.Message.getFieldWithDefault(msg,17,0),clipid:jspb.Message.getFieldWithDefault(msg,1e3,"")};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Opcode20.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Opcode20;return proto.Opcode20.deserializeBinaryFromReader(msg,reader)};proto.Opcode20.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt32();msg.setStreamindex(value);break;case 2:var value=reader.readString();msg.setVideoid(value);break;case 3:var value=reader.readInt32();msg.setItag(value);break;case 4:var value=reader.readUint64();msg.setLmt(value);break;case 5:var value=reader.readString();msg.setXtags(value);break;case 6:var value=reader.readInt32();msg.setByteoffset(value);break;case 8:var value=reader.readBool();msg.setIsinitial(value);break;case 9:var value=reader.readInt32();msg.setSegmentindex(value);break;case 10:var value=reader.readInt32();msg.setHna(value);break;case 11:var value=reader.readInt32();msg.setStartms(value);break;case 12:var value=reader.readInt32();msg.setDurationms(value);break;case 14:var value=reader.readInt32();msg.setSegmentsize(value);break;case 15:var value=new proto.TimeRange;reader.readMessage(value,proto.TimeRange.deserializeBinaryFromReader);msg.setTimerange(value);break;case 16:var value=reader.readInt32();msg.setUj(value);break;case 17:var value=reader.readInt32();msg.setZl(value);break;case 1e3:var value=reader.readString();msg.setClipid(value);break;default:reader.skipField();break}}return msg};proto.Opcode20.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Opcode20.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Opcode20.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getStreamindex();if(f!==0){writer.writeInt32(1,f)}f=message.getVideoid();if(f.length>0){writer.writeString(2,f)}f=message.getItag();if(f!==0){writer.writeInt32(3,f)}f=message.getLmt();if(f!==0){writer.writeUint64(4,f)}f=message.getXtags();if(f.length>0){writer.writeString(5,f)}f=message.getByteoffset();if(f!==0){writer.writeInt32(6,f)}f=message.getIsinitial();if(f){writer.writeBool(8,f)}f=message.getSegmentindex();if(f!==0){writer.writeInt32(9,f)}f=message.getHna();if(f!==0){writer.writeInt32(10,f)}f=message.getStartms();if(f!==0){writer.writeInt32(11,f)}f=message.getDurationms();if(f!==0){writer.writeInt32(12,f)}f=message.getSegmentsize();if(f!==0){writer.writeInt32(14,f)}f=message.getTimerange();if(f!=null){writer.writeMessage(15,f,proto.TimeRange.serializeBinaryToWriter)}f=message.getUj();if(f!==0){writer.writeInt32(16,f)}f=message.getZl();if(f!==0){writer.writeInt32(17,f)}f=message.getClipid();if(f.length>0){writer.writeString(1e3,f)}};proto.Opcode20.prototype.getStreamindex=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.Opcode20.prototype.setStreamindex=function(value){return jspb.Message.setProto3IntField(this,1,value)};proto.Opcode20.prototype.getVideoid=function(){return jspb.Message.getFieldWithDefault(this,2,"")};proto.Opcode20.prototype.setVideoid=function(value){return jspb.Message.setProto3StringField(this,2,value)};proto.Opcode20.prototype.getItag=function(){return jspb.Message.getFieldWithDefault(this,3,0)};proto.Opcode20.prototype.setItag=function(value){return jspb.Message.setProto3IntField(this,3,value)};proto.Opcode20.prototype.getLmt=function(){return jspb.Message.getFieldWithDefault(this,4,0)};proto.Opcode20.prototype.setLmt=function(value){return jspb.Message.setProto3IntField(this,4,value)};proto.Opcode20.prototype.getXtags=function(){return jspb.Message.getFieldWithDefault(this,5,"")};proto.Opcode20.prototype.setXtags=function(value){return jspb.Message.setProto3StringField(this,5,value)};proto.Opcode20.prototype.getByteoffset=function(){return jspb.Message.getFieldWithDefault(this,6,0)};proto.Opcode20.prototype.setByteoffset=function(value){return jspb.Message.setProto3IntField(this,6,value)};proto.Opcode20.prototype.getIsinitial=function(){return jspb.Message.getBooleanFieldWithDefault(this,8,false)};proto.Opcode20.prototype.setIsinitial=function(value){return jspb.Message.setProto3BooleanField(this,8,value)};proto.Opcode20.prototype.getSegmentindex=function(){return jspb.Message.getFieldWithDefault(this,9,0)};proto.Opcode20.prototype.setSegmentindex=function(value){return jspb.Message.setProto3IntField(this,9,value)};proto.Opcode20.prototype.getHna=function(){return jspb.Message.getFieldWithDefault(this,10,0)};proto.Opcode20.prototype.setHna=function(value){return jspb.Message.setProto3IntField(this,10,value)};proto.Opcode20.prototype.getStartms=function(){return jspb.Message.getFieldWithDefault(this,11,0)};proto.Opcode20.prototype.setStartms=function(value){return jspb.Message.setProto3IntField(this,11,value)};proto.Opcode20.prototype.getDurationms=function(){return jspb.Message.getFieldWithDefault(this,12,0)};proto.Opcode20.prototype.setDurationms=function(value){return jspb.Message.setProto3IntField(this,12,value)};proto.Opcode20.prototype.getSegmentsize=function(){return jspb.Message.getFieldWithDefault(this,14,0)};proto.Opcode20.prototype.setSegmentsize=function(value){return jspb.Message.setProto3IntField(this,14,value)};proto.Opcode20.prototype.getTimerange=function(){return jspb.Message.getWrapperField(this,proto.TimeRange,15)};proto.Opcode20.prototype.setTimerange=function(value){return jspb.Message.setWrapperField(this,15,value)};proto.Opcode20.prototype.clearTimerange=function(){return this.setTimerange(undefined)};proto.Opcode20.prototype.hasTimerange=function(){return jspb.Message.getField(this,15)!=null};proto.Opcode20.prototype.getUj=function(){return jspb.Message.getFieldWithDefault(this,16,0)};proto.Opcode20.prototype.setUj=function(value){return jspb.Message.setProto3IntField(this,16,value)};proto.Opcode20.prototype.getZl=function(){return jspb.Message.getFieldWithDefault(this,17,0)};proto.Opcode20.prototype.setZl=function(value){return jspb.Message.setProto3IntField(this,17,value)};proto.Opcode20.prototype.getClipid=function(){return jspb.Message.getFieldWithDefault(this,1e3,"")};proto.Opcode20.prototype.setClipid=function(value){return jspb.Message.setProto3StringField(this,1e3,value)};if(jspb.Message.GENERATE_TO_OBJECT){proto.TimeRange.prototype.toObject=function(opt_includeInstance){return proto.TimeRange.toObject(opt_includeInstance,this)};proto.TimeRange.toObject=function(includeInstance,msg){var f,obj={time:jspb.Message.getFieldWithDefault(msg,1,0),duration:jspb.Message.getFieldWithDefault(msg,2,0),timescale:jspb.Message.getFieldWithDefault(msg,3,0)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.TimeRange.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.TimeRange;return proto.TimeRange.deserializeBinaryFromReader(msg,reader)};proto.TimeRange.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt32();msg.setTime(value);break;case 2:var value=reader.readInt32();msg.setDuration(value);break;case 3:var value=reader.readInt32();msg.setTimescale(value);break;default:reader.skipField();break}}return msg};proto.TimeRange.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.TimeRange.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.TimeRange.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getTime();if(f!==0){writer.writeInt32(1,f)}f=message.getDuration();if(f!==0){writer.writeInt32(2,f)}f=message.getTimescale();if(f!==0){writer.writeInt32(3,f)}};proto.TimeRange.prototype.getTime=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.TimeRange.prototype.setTime=function(value){return jspb.Message.setProto3IntField(this,1,value)};proto.TimeRange.prototype.getDuration=function(){return jspb.Message.getFieldWithDefault(this,2,0)};proto.TimeRange.prototype.setDuration=function(value){return jspb.Message.setProto3IntField(this,2,value)};proto.TimeRange.prototype.getTimescale=function(){return jspb.Message.getFieldWithDefault(this,3,0)};proto.TimeRange.prototype.setTimescale=function(value){return jspb.Message.setProto3IntField(this,3,value)};goog.object.extend(exports,proto);
	
	},{"./google-protobuf.min.js":21}],3:[function(require,module,exports){
	var jspb=require("./google-protobuf.min.js");var goog=jspb;var global=typeof globalThis!=="undefined"&&globalThis||typeof window!=="undefined"&&window||typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||function(){return this}.call(null)||Function("return this")();goog.exportSymbol("proto.Opcode31",null,global);proto.Opcode31=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.Opcode31,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Opcode31.displayName="proto.Opcode31"}if(jspb.Message.GENERATE_TO_OBJECT){proto.Opcode31.prototype.toObject=function(opt_includeInstance){return proto.Opcode31.toObject(opt_includeInstance,this)};proto.Opcode31.toObject=function(includeInstance,msg){var f,obj={fk:jspb.Message.getFieldWithDefault(msg,3,0),gk:jspb.Message.getFieldWithDefault(msg,4,0),qda:jspb.Message.getBooleanFieldWithDefault(msg,8,false),boa:jspb.Message.getFieldWithDefault(msg,10,0),y:jspb.Message.getFieldWithDefault(msg,12,0),z:jspb.Message.getFieldWithDefault(msg,13,0),l:jspb.Message.getFieldWithDefault(msg,14,0),m:jspb.Message.getFieldWithDefault(msg,15,0)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Opcode31.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Opcode31;return proto.Opcode31.deserializeBinaryFromReader(msg,reader)};proto.Opcode31.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 3:var value=reader.readInt32();msg.setFk(value);break;case 4:var value=reader.readInt32();msg.setGk(value);break;case 8:var value=reader.readBool();msg.setQda(value);break;case 10:var value=reader.readInt32();msg.setBoa(value);break;case 12:var value=reader.readInt32();msg.setY(value);break;case 13:var value=reader.readInt32();msg.setZ(value);break;case 14:var value=reader.readInt32();msg.setL(value);break;case 15:var value=reader.readInt32();msg.setM(value);break;default:reader.skipField();break}}return msg};proto.Opcode31.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Opcode31.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Opcode31.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getFk();if(f!==0){writer.writeInt32(3,f)}f=message.getGk();if(f!==0){writer.writeInt32(4,f)}f=message.getQda();if(f){writer.writeBool(8,f)}f=message.getBoa();if(f!==0){writer.writeInt32(10,f)}f=message.getY();if(f!==0){writer.writeInt32(12,f)}f=message.getZ();if(f!==0){writer.writeInt32(13,f)}f=message.getL();if(f!==0){writer.writeInt32(14,f)}f=message.getM();if(f!==0){writer.writeInt32(15,f)}};proto.Opcode31.prototype.getFk=function(){return jspb.Message.getFieldWithDefault(this,3,0)};proto.Opcode31.prototype.setFk=function(value){return jspb.Message.setProto3IntField(this,3,value)};proto.Opcode31.prototype.getGk=function(){return jspb.Message.getFieldWithDefault(this,4,0)};proto.Opcode31.prototype.setGk=function(value){return jspb.Message.setProto3IntField(this,4,value)};proto.Opcode31.prototype.getQda=function(){return jspb.Message.getBooleanFieldWithDefault(this,8,false)};proto.Opcode31.prototype.setQda=function(value){return jspb.Message.setProto3BooleanField(this,8,value)};proto.Opcode31.prototype.getBoa=function(){return jspb.Message.getFieldWithDefault(this,10,0)};proto.Opcode31.prototype.setBoa=function(value){return jspb.Message.setProto3IntField(this,10,value)};proto.Opcode31.prototype.getY=function(){return jspb.Message.getFieldWithDefault(this,12,0)};proto.Opcode31.prototype.setY=function(value){return jspb.Message.setProto3IntField(this,12,value)};proto.Opcode31.prototype.getZ=function(){return jspb.Message.getFieldWithDefault(this,13,0)};proto.Opcode31.prototype.setZ=function(value){return jspb.Message.setProto3IntField(this,13,value)};proto.Opcode31.prototype.getL=function(){return jspb.Message.getFieldWithDefault(this,14,0)};proto.Opcode31.prototype.setL=function(value){return jspb.Message.setProto3IntField(this,14,value)};proto.Opcode31.prototype.getM=function(){return jspb.Message.getFieldWithDefault(this,15,0)};proto.Opcode31.prototype.setM=function(value){return jspb.Message.setProto3IntField(this,15,value)};goog.object.extend(exports,proto);
	
	},{"./google-protobuf.min.js":21}],4:[function(require,module,exports){
	var jspb=require("./google-protobuf.min.js");var goog=jspb;var global=typeof globalThis!=="undefined"&&globalThis||typeof window!=="undefined"&&window||typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||function(){return this}.call(null)||Function("return this")();goog.exportSymbol("proto.Opcode35",null,global);proto.Opcode35=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.Opcode35,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Opcode35.displayName="proto.Opcode35"}if(jspb.Message.GENERATE_TO_OBJECT){proto.Opcode35.prototype.toObject=function(opt_includeInstance){return proto.Opcode35.toObject(opt_includeInstance,this)};proto.Opcode35.toObject=function(includeInstance,msg){var f,obj={targetaudioreadaheadms:jspb.Message.getFieldWithDefault(msg,1,0),targetvideoreadaheadms:jspb.Message.getFieldWithDefault(msg,2,0),backofftimems:jspb.Message.getFieldWithDefault(msg,4,0),playbackcookie:msg.getPlaybackcookie_asB64(),videoid:jspb.Message.getFieldWithDefault(msg,8,"")};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Opcode35.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Opcode35;return proto.Opcode35.deserializeBinaryFromReader(msg,reader)};proto.Opcode35.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt32();msg.setTargetaudioreadaheadms(value);break;case 2:var value=reader.readInt32();msg.setTargetvideoreadaheadms(value);break;case 4:var value=reader.readInt32();msg.setBackofftimems(value);break;case 7:var value=reader.readBytes();msg.setPlaybackcookie(value);break;case 8:var value=reader.readString();msg.setVideoid(value);break;default:reader.skipField();break}}return msg};proto.Opcode35.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Opcode35.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Opcode35.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getTargetaudioreadaheadms();if(f!==0){writer.writeInt32(1,f)}f=message.getTargetvideoreadaheadms();if(f!==0){writer.writeInt32(2,f)}f=message.getBackofftimems();if(f!==0){writer.writeInt32(4,f)}f=message.getPlaybackcookie_asU8();if(f.length>0){writer.writeBytes(7,f)}f=message.getVideoid();if(f.length>0){writer.writeString(8,f)}};proto.Opcode35.prototype.getTargetaudioreadaheadms=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.Opcode35.prototype.setTargetaudioreadaheadms=function(value){return jspb.Message.setProto3IntField(this,1,value)};proto.Opcode35.prototype.getTargetvideoreadaheadms=function(){return jspb.Message.getFieldWithDefault(this,2,0)};proto.Opcode35.prototype.setTargetvideoreadaheadms=function(value){return jspb.Message.setProto3IntField(this,2,value)};proto.Opcode35.prototype.getBackofftimems=function(){return jspb.Message.getFieldWithDefault(this,4,0)};proto.Opcode35.prototype.setBackofftimems=function(value){return jspb.Message.setProto3IntField(this,4,value)};proto.Opcode35.prototype.getPlaybackcookie=function(){return jspb.Message.getFieldWithDefault(this,7,"")};proto.Opcode35.prototype.getPlaybackcookie_asB64=function(){return jspb.Message.bytesAsB64(this.getPlaybackcookie())};proto.Opcode35.prototype.getPlaybackcookie_asU8=function(){return jspb.Message.bytesAsU8(this.getPlaybackcookie())};proto.Opcode35.prototype.setPlaybackcookie=function(value){return jspb.Message.setProto3BytesField(this,7,value)};proto.Opcode35.prototype.getVideoid=function(){return jspb.Message.getFieldWithDefault(this,8,"")};proto.Opcode35.prototype.setVideoid=function(value){return jspb.Message.setProto3StringField(this,8,value)};goog.object.extend(exports,proto);
	
	},{"./google-protobuf.min.js":21}],5:[function(require,module,exports){
	var jspb=require("./google-protobuf.min.js");var goog=jspb;var global=typeof globalThis!=="undefined"&&globalThis||typeof window!=="undefined"&&window||typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||function(){return this}.call(null)||Function("return this")();var Protos_Common_pb=require("./Common_pb.min.js");goog.object.extend(proto,Protos_Common_pb);goog.exportSymbol("proto.MPDetails",null,global);goog.exportSymbol("proto.Opcode42",null,global);goog.exportSymbol("proto.Range",null,global);proto.Opcode42=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.Opcode42,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Opcode42.displayName="proto.Opcode42"}proto.Range=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.Range,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Range.displayName="proto.Range"}proto.MPDetails=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.MPDetails,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.MPDetails.displayName="proto.MPDetails"}if(jspb.Message.GENERATE_TO_OBJECT){proto.Opcode42.prototype.toObject=function(opt_includeInstance){return proto.Opcode42.toObject(opt_includeInstance,this)};proto.Opcode42.toObject=function(includeInstance,msg){var f,obj={videoid:jspb.Message.getFieldWithDefault(msg,1,""),formatid:(f=msg.getFormatid())&&Protos_Common_pb.Format.toObject(includeInstance,f),endtimems:jspb.Message.getFieldWithDefault(msg,3,0),lna:jspb.Message.getFieldWithDefault(msg,4,0),mimetype:jspb.Message.getFieldWithDefault(msg,5,""),nz:(f=msg.getNz())&&proto.Range.toObject(includeInstance,f),indexrange:(f=msg.getIndexrange())&&proto.Range.toObject(includeInstance,f),mp:(f=msg.getMp())&&proto.MPDetails.toObject(includeInstance,f)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Opcode42.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Opcode42;return proto.Opcode42.deserializeBinaryFromReader(msg,reader)};proto.Opcode42.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readString();msg.setVideoid(value);break;case 2:var value=new Protos_Common_pb.Format;reader.readMessage(value,Protos_Common_pb.Format.deserializeBinaryFromReader);msg.setFormatid(value);break;case 3:var value=reader.readInt32();msg.setEndtimems(value);break;case 4:var value=reader.readInt32();msg.setLna(value);break;case 5:var value=reader.readString();msg.setMimetype(value);break;case 6:var value=new proto.Range;reader.readMessage(value,proto.Range.deserializeBinaryFromReader);msg.setNz(value);break;case 7:var value=new proto.Range;reader.readMessage(value,proto.Range.deserializeBinaryFromReader);msg.setIndexrange(value);break;case 8:var value=new proto.MPDetails;reader.readMessage(value,proto.MPDetails.deserializeBinaryFromReader);msg.setMp(value);break;default:reader.skipField();break}}return msg};proto.Opcode42.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Opcode42.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Opcode42.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getVideoid();if(f.length>0){writer.writeString(1,f)}f=message.getFormatid();if(f!=null){writer.writeMessage(2,f,Protos_Common_pb.Format.serializeBinaryToWriter)}f=message.getEndtimems();if(f!==0){writer.writeInt32(3,f)}f=message.getLna();if(f!==0){writer.writeInt32(4,f)}f=message.getMimetype();if(f.length>0){writer.writeString(5,f)}f=message.getNz();if(f!=null){writer.writeMessage(6,f,proto.Range.serializeBinaryToWriter)}f=message.getIndexrange();if(f!=null){writer.writeMessage(7,f,proto.Range.serializeBinaryToWriter)}f=message.getMp();if(f!=null){writer.writeMessage(8,f,proto.MPDetails.serializeBinaryToWriter)}};proto.Opcode42.prototype.getVideoid=function(){return jspb.Message.getFieldWithDefault(this,1,"")};proto.Opcode42.prototype.setVideoid=function(value){return jspb.Message.setProto3StringField(this,1,value)};proto.Opcode42.prototype.getFormatid=function(){return jspb.Message.getWrapperField(this,Protos_Common_pb.Format,2)};proto.Opcode42.prototype.setFormatid=function(value){return jspb.Message.setWrapperField(this,2,value)};proto.Opcode42.prototype.clearFormatid=function(){return this.setFormatid(undefined)};proto.Opcode42.prototype.hasFormatid=function(){return jspb.Message.getField(this,2)!=null};proto.Opcode42.prototype.getEndtimems=function(){return jspb.Message.getFieldWithDefault(this,3,0)};proto.Opcode42.prototype.setEndtimems=function(value){return jspb.Message.setProto3IntField(this,3,value)};proto.Opcode42.prototype.getLna=function(){return jspb.Message.getFieldWithDefault(this,4,0)};proto.Opcode42.prototype.setLna=function(value){return jspb.Message.setProto3IntField(this,4,value)};proto.Opcode42.prototype.getMimetype=function(){return jspb.Message.getFieldWithDefault(this,5,"")};proto.Opcode42.prototype.setMimetype=function(value){return jspb.Message.setProto3StringField(this,5,value)};proto.Opcode42.prototype.getNz=function(){return jspb.Message.getWrapperField(this,proto.Range,6)};proto.Opcode42.prototype.setNz=function(value){return jspb.Message.setWrapperField(this,6,value)};proto.Opcode42.prototype.clearNz=function(){return this.setNz(undefined)};proto.Opcode42.prototype.hasNz=function(){return jspb.Message.getField(this,6)!=null};proto.Opcode42.prototype.getIndexrange=function(){return jspb.Message.getWrapperField(this,proto.Range,7)};proto.Opcode42.prototype.setIndexrange=function(value){return jspb.Message.setWrapperField(this,7,value)};proto.Opcode42.prototype.clearIndexrange=function(){return this.setIndexrange(undefined)};proto.Opcode42.prototype.hasIndexrange=function(){return jspb.Message.getField(this,7)!=null};proto.Opcode42.prototype.getMp=function(){return jspb.Message.getWrapperField(this,proto.MPDetails,8)};proto.Opcode42.prototype.setMp=function(value){return jspb.Message.setWrapperField(this,8,value)};proto.Opcode42.prototype.clearMp=function(){return this.setMp(undefined)};proto.Opcode42.prototype.hasMp=function(){return jspb.Message.getField(this,8)!=null};if(jspb.Message.GENERATE_TO_OBJECT){proto.Range.prototype.toObject=function(opt_includeInstance){return proto.Range.toObject(opt_includeInstance,this)};proto.Range.toObject=function(includeInstance,msg){var f,obj={start:jspb.Message.getFieldWithDefault(msg,1,0),end:jspb.Message.getFieldWithDefault(msg,2,0)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Range.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Range;return proto.Range.deserializeBinaryFromReader(msg,reader)};proto.Range.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt32();msg.setStart(value);break;case 2:var value=reader.readInt32();msg.setEnd(value);break;default:reader.skipField();break}}return msg};proto.Range.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Range.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Range.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getStart();if(f!==0){writer.writeInt32(1,f)}f=message.getEnd();if(f!==0){writer.writeInt32(2,f)}};proto.Range.prototype.getStart=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.Range.prototype.setStart=function(value){return jspb.Message.setProto3IntField(this,1,value)};proto.Range.prototype.getEnd=function(){return jspb.Message.getFieldWithDefault(this,2,0)};proto.Range.prototype.setEnd=function(value){return jspb.Message.setProto3IntField(this,2,value)};if(jspb.Message.GENERATE_TO_OBJECT){proto.MPDetails.prototype.toObject=function(opt_includeInstance){return proto.MPDetails.toObject(opt_includeInstance,this)};proto.MPDetails.toObject=function(includeInstance,msg){var f,obj={bitrate:jspb.Message.getFieldWithDefault(msg,6,0),width:jspb.Message.getFieldWithDefault(msg,7,0),height:jspb.Message.getFieldWithDefault(msg,8,0),fps:jspb.Message.getFieldWithDefault(msg,25,0),averagebitrate:jspb.Message.getFieldWithDefault(msg,31,0),audiosamplerate:jspb.Message.getFieldWithDefault(msg,45,0),audiochannels:jspb.Message.getFieldWithDefault(msg,46,0)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.MPDetails.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.MPDetails;return proto.MPDetails.deserializeBinaryFromReader(msg,reader)};proto.MPDetails.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 6:var value=reader.readInt32();msg.setBitrate(value);break;case 7:var value=reader.readInt32();msg.setWidth(value);break;case 8:var value=reader.readInt32();msg.setHeight(value);break;case 25:var value=reader.readInt32();msg.setFps(value);break;case 31:var value=reader.readInt32();msg.setAveragebitrate(value);break;case 45:var value=reader.readInt32();msg.setAudiosamplerate(value);break;case 46:var value=reader.readInt32();msg.setAudiochannels(value);break;default:reader.skipField();break}}return msg};proto.MPDetails.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.MPDetails.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.MPDetails.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getBitrate();if(f!==0){writer.writeInt32(6,f)}f=message.getWidth();if(f!==0){writer.writeInt32(7,f)}f=message.getHeight();if(f!==0){writer.writeInt32(8,f)}f=message.getFps();if(f!==0){writer.writeInt32(25,f)}f=message.getAveragebitrate();if(f!==0){writer.writeInt32(31,f)}f=message.getAudiosamplerate();if(f!==0){writer.writeInt32(45,f)}f=message.getAudiochannels();if(f!==0){writer.writeInt32(46,f)}};proto.MPDetails.prototype.getBitrate=function(){return jspb.Message.getFieldWithDefault(this,6,0)};proto.MPDetails.prototype.setBitrate=function(value){return jspb.Message.setProto3IntField(this,6,value)};proto.MPDetails.prototype.getWidth=function(){return jspb.Message.getFieldWithDefault(this,7,0)};proto.MPDetails.prototype.setWidth=function(value){return jspb.Message.setProto3IntField(this,7,value)};proto.MPDetails.prototype.getHeight=function(){return jspb.Message.getFieldWithDefault(this,8,0)};proto.MPDetails.prototype.setHeight=function(value){return jspb.Message.setProto3IntField(this,8,value)};proto.MPDetails.prototype.getFps=function(){return jspb.Message.getFieldWithDefault(this,25,0)};proto.MPDetails.prototype.setFps=function(value){return jspb.Message.setProto3IntField(this,25,value)};proto.MPDetails.prototype.getAveragebitrate=function(){return jspb.Message.getFieldWithDefault(this,31,0)};proto.MPDetails.prototype.setAveragebitrate=function(value){return jspb.Message.setProto3IntField(this,31,value)};proto.MPDetails.prototype.getAudiosamplerate=function(){return jspb.Message.getFieldWithDefault(this,45,0)};proto.MPDetails.prototype.setAudiosamplerate=function(value){return jspb.Message.setProto3IntField(this,45,value)};proto.MPDetails.prototype.getAudiochannels=function(){return jspb.Message.getFieldWithDefault(this,46,0)};proto.MPDetails.prototype.setAudiochannels=function(value){return jspb.Message.setProto3IntField(this,46,value)};goog.object.extend(exports,proto);
	
	},{"./Common_pb.min.js":1,"./google-protobuf.min.js":21}],6:[function(require,module,exports){
	var jspb=require("./google-protobuf.min.js");var goog=jspb;var global=typeof globalThis!=="undefined"&&globalThis||typeof window!=="undefined"&&window||typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||function(){return this}.call(null)||Function("return this")();goog.exportSymbol("proto.Opcode43",null,global);proto.Opcode43=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.Opcode43,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Opcode43.displayName="proto.Opcode43"}if(jspb.Message.GENERATE_TO_OBJECT){proto.Opcode43.prototype.toObject=function(opt_includeInstance){return proto.Opcode43.toObject(opt_includeInstance,this)};proto.Opcode43.toObject=function(includeInstance,msg){var f,obj={redirecturl:jspb.Message.getFieldWithDefault(msg,1,"")};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Opcode43.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Opcode43;return proto.Opcode43.deserializeBinaryFromReader(msg,reader)};proto.Opcode43.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readString();msg.setRedirecturl(value);break;default:reader.skipField();break}}return msg};proto.Opcode43.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Opcode43.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Opcode43.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getRedirecturl();if(f.length>0){writer.writeString(1,f)}};proto.Opcode43.prototype.getRedirecturl=function(){return jspb.Message.getFieldWithDefault(this,1,"")};proto.Opcode43.prototype.setRedirecturl=function(value){return jspb.Message.setProto3StringField(this,1,value)};goog.object.extend(exports,proto);
	
	},{"./google-protobuf.min.js":21}],7:[function(require,module,exports){
	var jspb=require("./google-protobuf.min.js");var goog=jspb;var global=typeof globalThis!=="undefined"&&globalThis||typeof window!=="undefined"&&window||typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||function(){return this}.call(null)||Function("return this")();goog.exportSymbol("proto.ActionDetails",null,global);goog.exportSymbol("proto.Opcode44",null,global);proto.Opcode44=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.Opcode44.repeatedFields_,null)};goog.inherits(proto.Opcode44,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Opcode44.displayName="proto.Opcode44"}proto.ActionDetails=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.ActionDetails,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.ActionDetails.displayName="proto.ActionDetails"}proto.Opcode44.repeatedFields_=[3];if(jspb.Message.GENERATE_TO_OBJECT){proto.Opcode44.prototype.toObject=function(opt_includeInstance){return proto.Opcode44.toObject(opt_includeInstance,this)};proto.Opcode44.toObject=function(includeInstance,msg){var f,obj={bda:jspb.Message.getFieldWithDefault(msg,1,""),action:jspb.Message.getFieldWithDefault(msg,2,0),o2List:jspb.Message.toObjectList(msg.getO2List(),proto.ActionDetails.toObject,includeInstance)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Opcode44.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Opcode44;return proto.Opcode44.deserializeBinaryFromReader(msg,reader)};proto.Opcode44.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readString();msg.setBda(value);break;case 2:var value=reader.readInt32();msg.setAction(value);break;case 3:var value=new proto.ActionDetails;reader.readMessage(value,proto.ActionDetails.deserializeBinaryFromReader);msg.addO2(value);break;default:reader.skipField();break}}return msg};proto.Opcode44.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Opcode44.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Opcode44.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getBda();if(f.length>0){writer.writeString(1,f)}f=message.getAction();if(f!==0){writer.writeInt32(2,f)}f=message.getO2List();if(f.length>0){writer.writeRepeatedMessage(3,f,proto.ActionDetails.serializeBinaryToWriter)}};proto.Opcode44.prototype.getBda=function(){return jspb.Message.getFieldWithDefault(this,1,"")};proto.Opcode44.prototype.setBda=function(value){return jspb.Message.setProto3StringField(this,1,value)};proto.Opcode44.prototype.getAction=function(){return jspb.Message.getFieldWithDefault(this,2,0)};proto.Opcode44.prototype.setAction=function(value){return jspb.Message.setProto3IntField(this,2,value)};proto.Opcode44.prototype.getO2List=function(){return jspb.Message.getRepeatedWrapperField(this,proto.ActionDetails,3)};proto.Opcode44.prototype.setO2List=function(value){return jspb.Message.setRepeatedWrapperField(this,3,value)};proto.Opcode44.prototype.addO2=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,3,opt_value,proto.ActionDetails,opt_index)};proto.Opcode44.prototype.clearO2List=function(){return this.setO2List([])};if(jspb.Message.GENERATE_TO_OBJECT){proto.ActionDetails.prototype.toObject=function(opt_includeInstance){return proto.ActionDetails.toObject(opt_includeInstance,this)};proto.ActionDetails.toObject=function(includeInstance,msg){var f,obj={vp:jspb.Message.getFieldWithDefault(msg,1,0)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.ActionDetails.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.ActionDetails;return proto.ActionDetails.deserializeBinaryFromReader(msg,reader)};proto.ActionDetails.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt32();msg.setVp(value);break;default:reader.skipField();break}}return msg};proto.ActionDetails.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.ActionDetails.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.ActionDetails.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getVp();if(f!==0){writer.writeInt32(1,f)}};proto.ActionDetails.prototype.getVp=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.ActionDetails.prototype.setVp=function(value){return jspb.Message.setProto3IntField(this,1,value)};goog.object.extend(exports,proto);
	
	},{"./google-protobuf.min.js":21}],8:[function(require,module,exports){
	var jspb=require("./google-protobuf.min.js");var goog=jspb;var global=typeof globalThis!=="undefined"&&globalThis||typeof window!=="undefined"&&window||typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||function(){return this}.call(null)||Function("return this")();goog.exportSymbol("proto.Opcode45",null,global);proto.Opcode45=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.Opcode45,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Opcode45.displayName="proto.Opcode45"}if(jspb.Message.GENERATE_TO_OBJECT){proto.Opcode45.prototype.toObject=function(opt_includeInstance){return proto.Opcode45.toObject(opt_includeInstance,this)};proto.Opcode45.toObject=function(includeInstance,msg){var f,obj={ct:jspb.Message.getFieldWithDefault(msg,1,0),dt:jspb.Message.getFieldWithDefault(msg,2,0),seeksource:jspb.Message.getFieldWithDefault(msg,3,0)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Opcode45.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Opcode45;return proto.Opcode45.deserializeBinaryFromReader(msg,reader)};proto.Opcode45.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt32();msg.setCt(value);break;case 2:var value=reader.readInt32();msg.setDt(value);break;case 3:var value=reader.readInt32();msg.setSeeksource(value);break;default:reader.skipField();break}}return msg};proto.Opcode45.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Opcode45.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Opcode45.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getCt();if(f!==0){writer.writeInt32(1,f)}f=message.getDt();if(f!==0){writer.writeInt32(2,f)}f=message.getSeeksource();if(f!==0){writer.writeInt32(3,f)}};proto.Opcode45.prototype.getCt=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.Opcode45.prototype.setCt=function(value){return jspb.Message.setProto3IntField(this,1,value)};proto.Opcode45.prototype.getDt=function(){return jspb.Message.getFieldWithDefault(this,2,0)};proto.Opcode45.prototype.setDt=function(value){return jspb.Message.setProto3IntField(this,2,value)};proto.Opcode45.prototype.getSeeksource=function(){return jspb.Message.getFieldWithDefault(this,3,0)};proto.Opcode45.prototype.setSeeksource=function(value){return jspb.Message.setProto3IntField(this,3,value)};goog.object.extend(exports,proto);
	
	},{"./google-protobuf.min.js":21}],9:[function(require,module,exports){
	var jspb=require("./google-protobuf.min.js");var goog=jspb;var global=typeof globalThis!=="undefined"&&globalThis||typeof window!=="undefined"&&window||typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||function(){return this}.call(null)||Function("return this")();goog.exportSymbol("proto.MinReadaheadPolicy",null,global);goog.exportSymbol("proto.Opcode47",null,global);proto.Opcode47=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.Opcode47.repeatedFields_,null)};goog.inherits(proto.Opcode47,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Opcode47.displayName="proto.Opcode47"}proto.MinReadaheadPolicy=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.MinReadaheadPolicy,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.MinReadaheadPolicy.displayName="proto.MinReadaheadPolicy"}proto.Opcode47.repeatedFields_=[1,2];if(jspb.Message.GENERATE_TO_OBJECT){proto.Opcode47.prototype.toObject=function(opt_includeInstance){return proto.Opcode47.toObject(opt_includeInstance,this)};proto.Opcode47.toObject=function(includeInstance,msg){var f,obj={startminreadaheadpolicyList:jspb.Message.toObjectList(msg.getStartminreadaheadpolicyList(),proto.MinReadaheadPolicy.toObject,includeInstance),resumeminreadaheadpolicyList:jspb.Message.toObjectList(msg.getResumeminreadaheadpolicyList(),proto.MinReadaheadPolicy.toObject,includeInstance)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Opcode47.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Opcode47;return proto.Opcode47.deserializeBinaryFromReader(msg,reader)};proto.Opcode47.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=new proto.MinReadaheadPolicy;reader.readMessage(value,proto.MinReadaheadPolicy.deserializeBinaryFromReader);msg.addStartminreadaheadpolicy(value);break;case 2:var value=new proto.MinReadaheadPolicy;reader.readMessage(value,proto.MinReadaheadPolicy.deserializeBinaryFromReader);msg.addResumeminreadaheadpolicy(value);break;default:reader.skipField();break}}return msg};proto.Opcode47.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Opcode47.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Opcode47.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getStartminreadaheadpolicyList();if(f.length>0){writer.writeRepeatedMessage(1,f,proto.MinReadaheadPolicy.serializeBinaryToWriter)}f=message.getResumeminreadaheadpolicyList();if(f.length>0){writer.writeRepeatedMessage(2,f,proto.MinReadaheadPolicy.serializeBinaryToWriter)}};proto.Opcode47.prototype.getStartminreadaheadpolicyList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.MinReadaheadPolicy,1)};proto.Opcode47.prototype.setStartminreadaheadpolicyList=function(value){return jspb.Message.setRepeatedWrapperField(this,1,value)};proto.Opcode47.prototype.addStartminreadaheadpolicy=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,1,opt_value,proto.MinReadaheadPolicy,opt_index)};proto.Opcode47.prototype.clearStartminreadaheadpolicyList=function(){return this.setStartminreadaheadpolicyList([])};proto.Opcode47.prototype.getResumeminreadaheadpolicyList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.MinReadaheadPolicy,2)};proto.Opcode47.prototype.setResumeminreadaheadpolicyList=function(value){return jspb.Message.setRepeatedWrapperField(this,2,value)};proto.Opcode47.prototype.addResumeminreadaheadpolicy=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.MinReadaheadPolicy,opt_index)};proto.Opcode47.prototype.clearResumeminreadaheadpolicyList=function(){return this.setResumeminreadaheadpolicyList([])};if(jspb.Message.GENERATE_TO_OBJECT){proto.MinReadaheadPolicy.prototype.toObject=function(opt_includeInstance){return proto.MinReadaheadPolicy.toObject(opt_includeInstance,this)};proto.MinReadaheadPolicy.toObject=function(includeInstance,msg){var f,obj={minbandwidthbytespersec:jspb.Message.getFieldWithDefault(msg,1,0),minreadaheadms:jspb.Message.getFieldWithDefault(msg,2,0)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.MinReadaheadPolicy.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.MinReadaheadPolicy;return proto.MinReadaheadPolicy.deserializeBinaryFromReader(msg,reader)};proto.MinReadaheadPolicy.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt32();msg.setMinbandwidthbytespersec(value);break;case 2:var value=reader.readInt32();msg.setMinreadaheadms(value);break;default:reader.skipField();break}}return msg};proto.MinReadaheadPolicy.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.MinReadaheadPolicy.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.MinReadaheadPolicy.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getMinbandwidthbytespersec();if(f!==0){writer.writeInt32(1,f)}f=message.getMinreadaheadms();if(f!==0){writer.writeInt32(2,f)}};proto.MinReadaheadPolicy.prototype.getMinbandwidthbytespersec=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.MinReadaheadPolicy.prototype.setMinbandwidthbytespersec=function(value){return jspb.Message.setProto3IntField(this,1,value)};proto.MinReadaheadPolicy.prototype.getMinreadaheadms=function(){return jspb.Message.getFieldWithDefault(this,2,0)};proto.MinReadaheadPolicy.prototype.setMinreadaheadms=function(value){return jspb.Message.setProto3IntField(this,2,value)};goog.object.extend(exports,proto);
	
	},{"./google-protobuf.min.js":21}],10:[function(require,module,exports){
	var jspb=require("./google-protobuf.min.js");var goog=jspb;var global=typeof globalThis!=="undefined"&&globalThis||typeof window!=="undefined"&&window||typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||function(){return this}.call(null)||Function("return this")();goog.exportSymbol("proto.Opcode49",null,global);proto.Opcode49=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.Opcode49,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Opcode49.displayName="proto.Opcode49"}if(jspb.Message.GENERATE_TO_OBJECT){proto.Opcode49.prototype.toObject=function(opt_includeInstance){return proto.Opcode49.toObject(opt_includeInstance,this)};proto.Opcode49.toObject=function(includeInstance,msg){var f,obj={eo:jspb.Message.getFieldWithDefault(msg,1,0)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Opcode49.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Opcode49;return proto.Opcode49.deserializeBinaryFromReader(msg,reader)};proto.Opcode49.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt32();msg.setEo(value);break;default:reader.skipField();break}}return msg};proto.Opcode49.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Opcode49.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Opcode49.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getEo();if(f!==0){writer.writeInt32(1,f)}};proto.Opcode49.prototype.getEo=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.Opcode49.prototype.setEo=function(value){return jspb.Message.setProto3IntField(this,1,value)};goog.object.extend(exports,proto);
	
	},{"./google-protobuf.min.js":21}],11:[function(require,module,exports){
	var jspb=require("./google-protobuf.min.js");var goog=jspb;var global=typeof globalThis!=="undefined"&&globalThis||typeof window!=="undefined"&&window||typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||function(){return this}.call(null)||Function("return this")();goog.exportSymbol("proto.Opcode50",null,global);proto.Opcode50=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.Opcode50,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Opcode50.displayName="proto.Opcode50"}if(jspb.Message.GENERATE_TO_OBJECT){proto.Opcode50.prototype.toObject=function(opt_includeInstance){return proto.Opcode50.toObject(opt_includeInstance,this)};proto.Opcode50.toObject=function(includeInstance,msg){var f,obj={eo:jspb.Message.getFieldWithDefault(msg,1,0)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Opcode50.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Opcode50;return proto.Opcode50.deserializeBinaryFromReader(msg,reader)};proto.Opcode50.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt32();msg.setEo(value);break;default:reader.skipField();break}}return msg};proto.Opcode50.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Opcode50.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Opcode50.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getEo();if(f!==0){writer.writeInt32(1,f)}};proto.Opcode50.prototype.getEo=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.Opcode50.prototype.setEo=function(value){return jspb.Message.setProto3IntField(this,1,value)};goog.object.extend(exports,proto);
	
	},{"./google-protobuf.min.js":21}],12:[function(require,module,exports){
	var jspb=require("./google-protobuf.min.js");var goog=jspb;var global=typeof globalThis!=="undefined"&&globalThis||typeof window!=="undefined"&&window||typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||function(){return this}.call(null)||Function("return this")();var Protos_Common_pb=require("./Common_pb.min.js");goog.object.extend(proto,Protos_Common_pb);goog.exportSymbol("proto.Opcode51",null,global);proto.Opcode51=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.Opcode51.repeatedFields_,null)};goog.inherits(proto.Opcode51,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Opcode51.displayName="proto.Opcode51"}proto.Opcode51.repeatedFields_=[1,2];if(jspb.Message.GENERATE_TO_OBJECT){proto.Opcode51.prototype.toObject=function(opt_includeInstance){return proto.Opcode51.toObject(opt_includeInstance,this)};proto.Opcode51.toObject=function(includeInstance,msg){var f,obj={cpaList:jspb.Message.toObjectList(msg.getCpaList(),Protos_Common_pb.Format.toObject,includeInstance),bpaList:jspb.Message.toObjectList(msg.getBpaList(),Protos_Common_pb.Format.toObject,includeInstance)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Opcode51.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Opcode51;return proto.Opcode51.deserializeBinaryFromReader(msg,reader)};proto.Opcode51.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=new Protos_Common_pb.Format;reader.readMessage(value,Protos_Common_pb.Format.deserializeBinaryFromReader);msg.addCpa(value);break;case 2:var value=new Protos_Common_pb.Format;reader.readMessage(value,Protos_Common_pb.Format.deserializeBinaryFromReader);msg.addBpa(value);break;default:reader.skipField();break}}return msg};proto.Opcode51.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Opcode51.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Opcode51.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getCpaList();if(f.length>0){writer.writeRepeatedMessage(1,f,Protos_Common_pb.Format.serializeBinaryToWriter)}f=message.getBpaList();if(f.length>0){writer.writeRepeatedMessage(2,f,Protos_Common_pb.Format.serializeBinaryToWriter)}};proto.Opcode51.prototype.getCpaList=function(){return jspb.Message.getRepeatedWrapperField(this,Protos_Common_pb.Format,1)};proto.Opcode51.prototype.setCpaList=function(value){return jspb.Message.setRepeatedWrapperField(this,1,value)};proto.Opcode51.prototype.addCpa=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,1,opt_value,proto.Format,opt_index)};proto.Opcode51.prototype.clearCpaList=function(){return this.setCpaList([])};proto.Opcode51.prototype.getBpaList=function(){return jspb.Message.getRepeatedWrapperField(this,Protos_Common_pb.Format,2)};proto.Opcode51.prototype.setBpaList=function(value){return jspb.Message.setRepeatedWrapperField(this,2,value)};proto.Opcode51.prototype.addBpa=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.Format,opt_index)};proto.Opcode51.prototype.clearBpaList=function(){return this.setBpaList([])};goog.object.extend(exports,proto);
	
	},{"./Common_pb.min.js":1,"./google-protobuf.min.js":21}],13:[function(require,module,exports){
	var jspb=require("./google-protobuf.min.js");var goog=jspb;var global=typeof globalThis!=="undefined"&&globalThis||typeof window!=="undefined"&&window||typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||function(){return this}.call(null)||Function("return this")();goog.exportSymbol("proto.Opcode52",null,global);proto.Opcode52=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.Opcode52,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Opcode52.displayName="proto.Opcode52"}if(jspb.Message.GENERATE_TO_OBJECT){proto.Opcode52.prototype.toObject=function(opt_includeInstance){return proto.Opcode52.toObject(opt_includeInstance,this)};proto.Opcode52.toObject=function(includeInstance,msg){var f,obj={token:jspb.Message.getFieldWithDefault(msg,1,""),videoid:jspb.Message.getFieldWithDefault(msg,2,"")};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Opcode52.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Opcode52;return proto.Opcode52.deserializeBinaryFromReader(msg,reader)};proto.Opcode52.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readString();msg.setToken(value);break;case 2:var value=reader.readString();msg.setVideoid(value);break;default:reader.skipField();break}}return msg};proto.Opcode52.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Opcode52.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Opcode52.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getToken();if(f.length>0){writer.writeString(1,f)}f=message.getVideoid();if(f.length>0){writer.writeString(2,f)}};proto.Opcode52.prototype.getToken=function(){return jspb.Message.getFieldWithDefault(this,1,"")};proto.Opcode52.prototype.setToken=function(value){return jspb.Message.setProto3StringField(this,1,value)};proto.Opcode52.prototype.getVideoid=function(){return jspb.Message.getFieldWithDefault(this,2,"")};proto.Opcode52.prototype.setVideoid=function(value){return jspb.Message.setProto3StringField(this,2,value)};goog.object.extend(exports,proto);
	
	},{"./google-protobuf.min.js":21}],14:[function(require,module,exports){
	var jspb=require("./google-protobuf.min.js");var goog=jspb;var global=typeof globalThis!=="undefined"&&globalThis||typeof window!=="undefined"&&window||typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||function(){return this}.call(null)||Function("return this")();goog.exportSymbol("proto.Item",null,global);goog.exportSymbol("proto.Opcode53",null,global);proto.Opcode53=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.Opcode53.repeatedFields_,null)};goog.inherits(proto.Opcode53,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Opcode53.displayName="proto.Opcode53"}proto.Item=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.Item,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Item.displayName="proto.Item"}proto.Opcode53.repeatedFields_=[2];if(jspb.Message.GENERATE_TO_OBJECT){proto.Opcode53.prototype.toObject=function(opt_includeInstance){return proto.Opcode53.toObject(opt_includeInstance,this)};proto.Opcode53.toObject=function(includeInstance,msg){var f,obj={a1:jspb.Message.getFieldWithDefault(msg,1,0),itemsList:jspb.Message.toObjectList(msg.getItemsList(),proto.Item.toObject,includeInstance),xq:jspb.Message.getFieldWithDefault(msg,3,0)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Opcode53.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Opcode53;return proto.Opcode53.deserializeBinaryFromReader(msg,reader)};proto.Opcode53.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt32();msg.setA1(value);break;case 2:var value=new proto.Item;reader.readMessage(value,proto.Item.deserializeBinaryFromReader);msg.addItems(value);break;case 3:var value=reader.readInt32();msg.setXq(value);break;default:reader.skipField();break}}return msg};proto.Opcode53.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Opcode53.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Opcode53.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getA1();if(f!==0){writer.writeInt32(1,f)}f=message.getItemsList();if(f.length>0){writer.writeRepeatedMessage(2,f,proto.Item.serializeBinaryToWriter)}f=message.getXq();if(f!==0){writer.writeInt32(3,f)}};proto.Opcode53.prototype.getA1=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.Opcode53.prototype.setA1=function(value){return jspb.Message.setProto3IntField(this,1,value)};proto.Opcode53.prototype.getItemsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.Item,2)};proto.Opcode53.prototype.setItemsList=function(value){return jspb.Message.setRepeatedWrapperField(this,2,value)};proto.Opcode53.prototype.addItems=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.Item,opt_index)};proto.Opcode53.prototype.clearItemsList=function(){return this.setItemsList([])};proto.Opcode53.prototype.getXq=function(){return jspb.Message.getFieldWithDefault(this,3,0)};proto.Opcode53.prototype.setXq=function(value){return jspb.Message.setProto3IntField(this,3,value)};if(jspb.Message.GENERATE_TO_OBJECT){proto.Item.prototype.toObject=function(opt_includeInstance){return proto.Item.toObject(opt_includeInstance,this)};proto.Item.toObject=function(includeInstance,msg){var f,obj={hr:jspb.Message.getFieldWithDefault(msg,1,0),pl:jspb.Message.getFieldWithDefault(msg,2,0),minreadaheadms:jspb.Message.getFieldWithDefault(msg,3,0)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Item.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Item;return proto.Item.deserializeBinaryFromReader(msg,reader)};proto.Item.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt32();msg.setHr(value);break;case 2:var value=reader.readInt32();msg.setPl(value);break;case 3:var value=reader.readInt32();msg.setMinreadaheadms(value);break;default:reader.skipField();break}}return msg};proto.Item.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Item.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Item.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getHr();if(f!==0){writer.writeInt32(1,f)}f=message.getPl();if(f!==0){writer.writeInt32(2,f)}f=message.getMinreadaheadms();if(f!==0){writer.writeInt32(3,f)}};proto.Item.prototype.getHr=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.Item.prototype.setHr=function(value){return jspb.Message.setProto3IntField(this,1,value)};proto.Item.prototype.getPl=function(){return jspb.Message.getFieldWithDefault(this,2,0)};proto.Item.prototype.setPl=function(value){return jspb.Message.setProto3IntField(this,2,value)};proto.Item.prototype.getMinreadaheadms=function(){return jspb.Message.getFieldWithDefault(this,3,0)};proto.Item.prototype.setMinreadaheadms=function(value){return jspb.Message.setProto3IntField(this,3,value)};goog.object.extend(exports,proto);
	
	},{"./google-protobuf.min.js":21}],15:[function(require,module,exports){
	var jspb=require("./google-protobuf.min.js");var goog=jspb;var global=typeof globalThis!=="undefined"&&globalThis||typeof window!=="undefined"&&window||typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||function(){return this}.call(null)||Function("return this")();goog.exportSymbol("proto.Clip",null,global);goog.exportSymbol("proto.JrDetails",null,global);goog.exportSymbol("proto.Opcode55",null,global);goog.exportSymbol("proto.SrDetails",null,global);goog.exportSymbol("proto.Timeline",null,global);goog.exportSymbol("proto.YdaDetails",null,global);proto.Opcode55=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.Opcode55.repeatedFields_,null)};goog.inherits(proto.Opcode55,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Opcode55.displayName="proto.Opcode55"}proto.Timeline=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.Timeline.repeatedFields_,null)};goog.inherits(proto.Timeline,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Timeline.displayName="proto.Timeline"}proto.Clip=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.Clip,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Clip.displayName="proto.Clip"}proto.JrDetails=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.JrDetails,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.JrDetails.displayName="proto.JrDetails"}proto.SrDetails=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.SrDetails,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.SrDetails.displayName="proto.SrDetails"}proto.YdaDetails=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.YdaDetails,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.YdaDetails.displayName="proto.YdaDetails"}proto.Opcode55.repeatedFields_=[2];if(jspb.Message.GENERATE_TO_OBJECT){proto.Opcode55.prototype.toObject=function(opt_includeInstance){return proto.Opcode55.toObject(opt_includeInstance,this)};proto.Opcode55.toObject=function(includeInstance,msg){var f,obj={timeline:(f=msg.getTimeline())&&proto.Timeline.toObject(includeInstance,f),ydaList:jspb.Message.toObjectList(msg.getYdaList(),proto.YdaDetails.toObject,includeInstance)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Opcode55.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Opcode55;return proto.Opcode55.deserializeBinaryFromReader(msg,reader)};proto.Opcode55.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=new proto.Timeline;reader.readMessage(value,proto.Timeline.deserializeBinaryFromReader);msg.setTimeline(value);break;case 2:var value=new proto.YdaDetails;reader.readMessage(value,proto.YdaDetails.deserializeBinaryFromReader);msg.addYda(value);break;default:reader.skipField();break}}return msg};proto.Opcode55.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Opcode55.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Opcode55.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getTimeline();if(f!=null){writer.writeMessage(1,f,proto.Timeline.serializeBinaryToWriter)}f=message.getYdaList();if(f.length>0){writer.writeRepeatedMessage(2,f,proto.YdaDetails.serializeBinaryToWriter)}};proto.Opcode55.prototype.getTimeline=function(){return jspb.Message.getWrapperField(this,proto.Timeline,1)};proto.Opcode55.prototype.setTimeline=function(value){return jspb.Message.setWrapperField(this,1,value)};proto.Opcode55.prototype.clearTimeline=function(){return this.setTimeline(undefined)};proto.Opcode55.prototype.hasTimeline=function(){return jspb.Message.getField(this,1)!=null};proto.Opcode55.prototype.getYdaList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.YdaDetails,2)};proto.Opcode55.prototype.setYdaList=function(value){return jspb.Message.setRepeatedWrapperField(this,2,value)};proto.Opcode55.prototype.addYda=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.YdaDetails,opt_index)};proto.Opcode55.prototype.clearYdaList=function(){return this.setYdaList([])};proto.Timeline.repeatedFields_=[1];if(jspb.Message.GENERATE_TO_OBJECT){proto.Timeline.prototype.toObject=function(opt_includeInstance){return proto.Timeline.toObject(opt_includeInstance,this)};proto.Timeline.toObject=function(includeInstance,msg){var f,obj={r3List:jspb.Message.toObjectList(msg.getR3List(),proto.Clip.toObject,includeInstance),dea:jspb.Message.getFieldWithDefault(msg,2,"")};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Timeline.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Timeline;return proto.Timeline.deserializeBinaryFromReader(msg,reader)};proto.Timeline.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=new proto.Clip;reader.readMessage(value,proto.Clip.deserializeBinaryFromReader);msg.addR3(value);break;case 2:var value=reader.readString();msg.setDea(value);break;default:reader.skipField();break}}return msg};proto.Timeline.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Timeline.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Timeline.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getR3List();if(f.length>0){writer.writeRepeatedMessage(1,f,proto.Clip.serializeBinaryToWriter)}f=message.getDea();if(f.length>0){writer.writeString(2,f)}};proto.Timeline.prototype.getR3List=function(){return jspb.Message.getRepeatedWrapperField(this,proto.Clip,1)};proto.Timeline.prototype.setR3List=function(value){return jspb.Message.setRepeatedWrapperField(this,1,value)};proto.Timeline.prototype.addR3=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,1,opt_value,proto.Clip,opt_index)};proto.Timeline.prototype.clearR3List=function(){return this.setR3List([])};proto.Timeline.prototype.getDea=function(){return jspb.Message.getFieldWithDefault(this,2,"")};proto.Timeline.prototype.setDea=function(value){return jspb.Message.setProto3StringField(this,2,value)};if(jspb.Message.GENERATE_TO_OBJECT){proto.Clip.prototype.toObject=function(opt_includeInstance){return proto.Clip.toObject(opt_includeInstance,this)};proto.Clip.toObject=function(includeInstance,msg){var f,obj={clipid:jspb.Message.getFieldWithDefault(msg,1,""),jr:(f=msg.getJr())&&proto.JrDetails.toObject(includeInstance,f),sr:(f=msg.getSr())&&proto.SrDetails.toObject(includeInstance,f)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Clip.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Clip;return proto.Clip.deserializeBinaryFromReader(msg,reader)};proto.Clip.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readString();msg.setClipid(value);break;case 2:var value=new proto.JrDetails;reader.readMessage(value,proto.JrDetails.deserializeBinaryFromReader);msg.setJr(value);break;case 3:var value=new proto.SrDetails;reader.readMessage(value,proto.SrDetails.deserializeBinaryFromReader);msg.setSr(value);break;default:reader.skipField();break}}return msg};proto.Clip.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Clip.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Clip.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getClipid();if(f.length>0){writer.writeString(1,f)}f=message.getJr();if(f!=null){writer.writeMessage(2,f,proto.JrDetails.serializeBinaryToWriter)}f=message.getSr();if(f!=null){writer.writeMessage(3,f,proto.SrDetails.serializeBinaryToWriter)}};proto.Clip.prototype.getClipid=function(){return jspb.Message.getFieldWithDefault(this,1,"")};proto.Clip.prototype.setClipid=function(value){return jspb.Message.setProto3StringField(this,1,value)};proto.Clip.prototype.getJr=function(){return jspb.Message.getWrapperField(this,proto.JrDetails,2)};proto.Clip.prototype.setJr=function(value){return jspb.Message.setWrapperField(this,2,value)};proto.Clip.prototype.clearJr=function(){return this.setJr(undefined)};proto.Clip.prototype.hasJr=function(){return jspb.Message.getField(this,2)!=null};proto.Clip.prototype.getSr=function(){return jspb.Message.getWrapperField(this,proto.SrDetails,3)};proto.Clip.prototype.setSr=function(value){return jspb.Message.setWrapperField(this,3,value)};proto.Clip.prototype.clearSr=function(){return this.setSr(undefined)};proto.Clip.prototype.hasSr=function(){return jspb.Message.getField(this,3)!=null};if(jspb.Message.GENERATE_TO_OBJECT){proto.JrDetails.prototype.toObject=function(opt_includeInstance){return proto.JrDetails.toObject(opt_includeInstance,this)};proto.JrDetails.toObject=function(includeInstance,msg){var f,obj={o4:jspb.Message.getFieldWithDefault(msg,1,""),w1:jspb.Message.getFieldWithDefault(msg,2,0),nd:jspb.Message.getFieldWithDefault(msg,3,0),a:jspb.Message.getFieldWithDefault(msg,4,0),b:jspb.Message.getFieldWithDefault(msg,5,0),z1:jspb.Message.getFieldWithDefault(msg,6,0)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.JrDetails.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.JrDetails;return proto.JrDetails.deserializeBinaryFromReader(msg,reader)};proto.JrDetails.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readString();msg.setO4(value);break;case 2:var value=reader.readInt32();msg.setW1(value);break;case 3:var value=reader.readInt32();msg.setNd(value);break;case 4:var value=reader.readInt32();msg.setA(value);break;case 5:var value=reader.readInt32();msg.setB(value);break;case 6:var value=reader.readInt32();msg.setZ1(value);break;default:reader.skipField();break}}return msg};proto.JrDetails.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.JrDetails.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.JrDetails.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getO4();if(f.length>0){writer.writeString(1,f)}f=message.getW1();if(f!==0){writer.writeInt32(2,f)}f=message.getNd();if(f!==0){writer.writeInt32(3,f)}f=message.getA();if(f!==0){writer.writeInt32(4,f)}f=message.getB();if(f!==0){writer.writeInt32(5,f)}f=message.getZ1();if(f!==0){writer.writeInt32(6,f)}};proto.JrDetails.prototype.getO4=function(){return jspb.Message.getFieldWithDefault(this,1,"")};proto.JrDetails.prototype.setO4=function(value){return jspb.Message.setProto3StringField(this,1,value)};proto.JrDetails.prototype.getW1=function(){return jspb.Message.getFieldWithDefault(this,2,0)};proto.JrDetails.prototype.setW1=function(value){return jspb.Message.setProto3IntField(this,2,value)};proto.JrDetails.prototype.getNd=function(){return jspb.Message.getFieldWithDefault(this,3,0)};proto.JrDetails.prototype.setNd=function(value){return jspb.Message.setProto3IntField(this,3,value)};proto.JrDetails.prototype.getA=function(){return jspb.Message.getFieldWithDefault(this,4,0)};proto.JrDetails.prototype.setA=function(value){return jspb.Message.setProto3IntField(this,4,value)};proto.JrDetails.prototype.getB=function(){return jspb.Message.getFieldWithDefault(this,5,0)};proto.JrDetails.prototype.setB=function(value){return jspb.Message.setProto3IntField(this,5,value)};proto.JrDetails.prototype.getZ1=function(){return jspb.Message.getFieldWithDefault(this,6,0)};proto.JrDetails.prototype.setZ1=function(value){return jspb.Message.setProto3IntField(this,6,value)};if(jspb.Message.GENERATE_TO_OBJECT){proto.SrDetails.prototype.toObject=function(opt_includeInstance){return proto.SrDetails.toObject(opt_includeInstance,this)};proto.SrDetails.toObject=function(includeInstance,msg){var f,obj={fl:jspb.Message.getFieldWithDefault(msg,1,0)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.SrDetails.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.SrDetails;return proto.SrDetails.deserializeBinaryFromReader(msg,reader)};proto.SrDetails.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt32();msg.setFl(value);break;default:reader.skipField();break}}return msg};proto.SrDetails.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.SrDetails.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.SrDetails.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getFl();if(f!==0){writer.writeInt32(1,f)}};proto.SrDetails.prototype.getFl=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.SrDetails.prototype.setFl=function(value){return jspb.Message.setProto3IntField(this,1,value)};if(jspb.Message.GENERATE_TO_OBJECT){proto.YdaDetails.prototype.toObject=function(opt_includeInstance){return proto.YdaDetails.toObject(opt_includeInstance,this)};proto.YdaDetails.toObject=function(includeInstance,msg){var f,obj={type:jspb.Message.getFieldWithDefault(msg,1,0),scope:jspb.Message.getFieldWithDefault(msg,2,0),value:msg.getValue_asB64(),sendbydefault:jspb.Message.getBooleanFieldWithDefault(msg,4,false)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.YdaDetails.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.YdaDetails;return proto.YdaDetails.deserializeBinaryFromReader(msg,reader)};proto.YdaDetails.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt32();msg.setType(value);break;case 2:var value=reader.readInt32();msg.setScope(value);break;case 3:var value=reader.readBytes();msg.setValue(value);break;case 4:var value=reader.readBool();msg.setSendbydefault(value);break;default:reader.skipField();break}}return msg};proto.YdaDetails.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.YdaDetails.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.YdaDetails.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getType();if(f!==0){writer.writeInt32(1,f)}f=message.getScope();if(f!==0){writer.writeInt32(2,f)}f=message.getValue_asU8();if(f.length>0){writer.writeBytes(3,f)}f=message.getSendbydefault();if(f){writer.writeBool(4,f)}};proto.YdaDetails.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.YdaDetails.prototype.setType=function(value){return jspb.Message.setProto3IntField(this,1,value)};proto.YdaDetails.prototype.getScope=function(){return jspb.Message.getFieldWithDefault(this,2,0)};proto.YdaDetails.prototype.setScope=function(value){return jspb.Message.setProto3IntField(this,2,value)};proto.YdaDetails.prototype.getValue=function(){return jspb.Message.getFieldWithDefault(this,3,"")};proto.YdaDetails.prototype.getValue_asB64=function(){return jspb.Message.bytesAsB64(this.getValue())};proto.YdaDetails.prototype.getValue_asU8=function(){return jspb.Message.bytesAsU8(this.getValue())};proto.YdaDetails.prototype.setValue=function(value){return jspb.Message.setProto3BytesField(this,3,value)};proto.YdaDetails.prototype.getSendbydefault=function(){return jspb.Message.getBooleanFieldWithDefault(this,4,false)};proto.YdaDetails.prototype.setSendbydefault=function(value){return jspb.Message.setProto3BooleanField(this,4,value)};goog.object.extend(exports,proto);
	
	},{"./google-protobuf.min.js":21}],16:[function(require,module,exports){
	var jspb=require("./google-protobuf.min.js");var goog=jspb;var global=typeof globalThis!=="undefined"&&globalThis||typeof window!=="undefined"&&window||typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||function(){return this}.call(null)||Function("return this")();goog.exportSymbol("proto.Opcode57",null,global);proto.Opcode57=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.Opcode57,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Opcode57.displayName="proto.Opcode57"}if(jspb.Message.GENERATE_TO_OBJECT){proto.Opcode57.prototype.toObject=function(opt_includeInstance){return proto.Opcode57.toObject(opt_includeInstance,this)};proto.Opcode57.toObject=function(includeInstance,msg){var f,obj={type:jspb.Message.getFieldWithDefault(msg,1,0),scope:jspb.Message.getFieldWithDefault(msg,2,0),value:msg.getValue_asB64(),sendbydefault:jspb.Message.getBooleanFieldWithDefault(msg,4,false)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Opcode57.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Opcode57;return proto.Opcode57.deserializeBinaryFromReader(msg,reader)};proto.Opcode57.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt32();msg.setType(value);break;case 2:var value=reader.readInt32();msg.setScope(value);break;case 3:var value=reader.readBytes();msg.setValue(value);break;case 4:var value=reader.readBool();msg.setSendbydefault(value);break;default:reader.skipField();break}}return msg};proto.Opcode57.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Opcode57.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Opcode57.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getType();if(f!==0){writer.writeInt32(1,f)}f=message.getScope();if(f!==0){writer.writeInt32(2,f)}f=message.getValue_asU8();if(f.length>0){writer.writeBytes(3,f)}f=message.getSendbydefault();if(f){writer.writeBool(4,f)}};proto.Opcode57.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.Opcode57.prototype.setType=function(value){return jspb.Message.setProto3IntField(this,1,value)};proto.Opcode57.prototype.getScope=function(){return jspb.Message.getFieldWithDefault(this,2,0)};proto.Opcode57.prototype.setScope=function(value){return jspb.Message.setProto3IntField(this,2,value)};proto.Opcode57.prototype.getValue=function(){return jspb.Message.getFieldWithDefault(this,3,"")};proto.Opcode57.prototype.getValue_asB64=function(){return jspb.Message.bytesAsB64(this.getValue())};proto.Opcode57.prototype.getValue_asU8=function(){return jspb.Message.bytesAsU8(this.getValue())};proto.Opcode57.prototype.setValue=function(value){return jspb.Message.setProto3BytesField(this,3,value)};proto.Opcode57.prototype.getSendbydefault=function(){return jspb.Message.getBooleanFieldWithDefault(this,4,false)};proto.Opcode57.prototype.setSendbydefault=function(value){return jspb.Message.setProto3BooleanField(this,4,value)};goog.object.extend(exports,proto);
	
	},{"./google-protobuf.min.js":21}],17:[function(require,module,exports){
	var jspb=require("./google-protobuf.min.js");var goog=jspb;var global=typeof globalThis!=="undefined"&&globalThis||typeof window!=="undefined"&&window||typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||function(){return this}.call(null)||Function("return this")();goog.exportSymbol("proto.Opcode58",null,global);proto.Opcode58=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.Opcode58,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Opcode58.displayName="proto.Opcode58"}if(jspb.Message.GENERATE_TO_OBJECT){proto.Opcode58.prototype.toObject=function(opt_includeInstance){return proto.Opcode58.toObject(opt_includeInstance,this)};proto.Opcode58.toObject=function(includeInstance,msg){var f,obj={rj:jspb.Message.getFieldWithDefault(msg,1,0),v1:jspb.Message.getFieldWithDefault(msg,2,0)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Opcode58.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Opcode58;return proto.Opcode58.deserializeBinaryFromReader(msg,reader)};proto.Opcode58.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt32();msg.setRj(value);break;case 2:var value=reader.readInt32();msg.setV1(value);break;default:reader.skipField();break}}return msg};proto.Opcode58.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Opcode58.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Opcode58.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getRj();if(f!==0){writer.writeInt32(1,f)}f=message.getV1();if(f!==0){writer.writeInt32(2,f)}};proto.Opcode58.prototype.getRj=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.Opcode58.prototype.setRj=function(value){return jspb.Message.setProto3IntField(this,1,value)};proto.Opcode58.prototype.getV1=function(){return jspb.Message.getFieldWithDefault(this,2,0)};proto.Opcode58.prototype.setV1=function(value){return jspb.Message.setProto3IntField(this,2,value)};goog.object.extend(exports,proto);
	
	},{"./google-protobuf.min.js":21}],18:[function(require,module,exports){
	var jspb=require("./google-protobuf.min.js");var goog=jspb;var global=typeof globalThis!=="undefined"&&globalThis||typeof window!=="undefined"&&window||typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||function(){return this}.call(null)||Function("return this")();goog.exportSymbol("proto.Opcode59",null,global);proto.Opcode59=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.Opcode59.repeatedFields_,null)};goog.inherits(proto.Opcode59,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Opcode59.displayName="proto.Opcode59"}proto.Opcode59.repeatedFields_=[1,2,3];if(jspb.Message.GENERATE_TO_OBJECT){proto.Opcode59.prototype.toObject=function(opt_includeInstance){return proto.Opcode59.toObject(opt_includeInstance,this)};proto.Opcode59.toObject=function(includeInstance,msg){var f,obj={field1List:(f=jspb.Message.getRepeatedField(msg,1))==null?undefined:f,field2List:(f=jspb.Message.getRepeatedField(msg,2))==null?undefined:f,field3List:(f=jspb.Message.getRepeatedField(msg,3))==null?undefined:f};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Opcode59.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Opcode59;return proto.Opcode59.deserializeBinaryFromReader(msg,reader)};proto.Opcode59.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var values=reader.isDelimited()?reader.readPackedInt32():[reader.readInt32()];for(var i=0;i<values.length;i++){msg.addField1(values[i])}break;case 2:var values=reader.isDelimited()?reader.readPackedInt32():[reader.readInt32()];for(var i=0;i<values.length;i++){msg.addField2(values[i])}break;case 3:var values=reader.isDelimited()?reader.readPackedInt32():[reader.readInt32()];for(var i=0;i<values.length;i++){msg.addField3(values[i])}break;default:reader.skipField();break}}return msg};proto.Opcode59.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Opcode59.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Opcode59.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getField1List();if(f.length>0){writer.writePackedInt32(1,f)}f=message.getField2List();if(f.length>0){writer.writePackedInt32(2,f)}f=message.getField3List();if(f.length>0){writer.writePackedInt32(3,f)}};proto.Opcode59.prototype.getField1List=function(){return jspb.Message.getRepeatedField(this,1)};proto.Opcode59.prototype.setField1List=function(value){return jspb.Message.setField(this,1,value||[])};proto.Opcode59.prototype.addField1=function(value,opt_index){return jspb.Message.addToRepeatedField(this,1,value,opt_index)};proto.Opcode59.prototype.clearField1List=function(){return this.setField1List([])};proto.Opcode59.prototype.getField2List=function(){return jspb.Message.getRepeatedField(this,2)};proto.Opcode59.prototype.setField2List=function(value){return jspb.Message.setField(this,2,value||[])};proto.Opcode59.prototype.addField2=function(value,opt_index){return jspb.Message.addToRepeatedField(this,2,value,opt_index)};proto.Opcode59.prototype.clearField2List=function(){return this.setField2List([])};proto.Opcode59.prototype.getField3List=function(){return jspb.Message.getRepeatedField(this,3)};proto.Opcode59.prototype.setField3List=function(value){return jspb.Message.setField(this,3,value||[])};proto.Opcode59.prototype.addField3=function(value,opt_index){return jspb.Message.addToRepeatedField(this,3,value,opt_index)};proto.Opcode59.prototype.clearField3List=function(){return this.setField3List([])};goog.object.extend(exports,proto);
	
	},{"./google-protobuf.min.js":21}],19:[function(require,module,exports){
	var jspb=require("./google-protobuf.min.js");var goog=jspb;var global=typeof globalThis!=="undefined"&&globalThis||typeof window!=="undefined"&&window||typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||function(){return this}.call(null)||Function("return this")();var Protos_Common_pb=require("./Common_pb.min.js");goog.object.extend(proto,Protos_Common_pb);goog.exportSymbol("proto.OCaDetails",null,global);goog.exportSymbol("proto.Opcode66",null,global);goog.exportSymbol("proto.PCaDetails",null,global);goog.exportSymbol("proto.UZDetails",null,global);proto.Opcode66=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.Opcode66,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.Opcode66.displayName="proto.Opcode66"}proto.UZDetails=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.UZDetails.repeatedFields_,null)};goog.inherits(proto.UZDetails,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.UZDetails.displayName="proto.UZDetails"}proto.PCaDetails=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.PCaDetails.repeatedFields_,null)};goog.inherits(proto.PCaDetails,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.PCaDetails.displayName="proto.PCaDetails"}proto.OCaDetails=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.OCaDetails,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.OCaDetails.displayName="proto.OCaDetails"}if(jspb.Message.GENERATE_TO_OBJECT){proto.Opcode66.prototype.toObject=function(opt_includeInstance){return proto.Opcode66.toObject(opt_includeInstance,this)};proto.Opcode66.toObject=function(includeInstance,msg){var f,obj={uz:(f=msg.getUz())&&proto.UZDetails.toObject(includeInstance,f)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.Opcode66.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.Opcode66;return proto.Opcode66.deserializeBinaryFromReader(msg,reader)};proto.Opcode66.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=new proto.UZDetails;reader.readMessage(value,proto.UZDetails.deserializeBinaryFromReader);msg.setUz(value);break;default:reader.skipField();break}}return msg};proto.Opcode66.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.Opcode66.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.Opcode66.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getUz();if(f!=null){writer.writeMessage(1,f,proto.UZDetails.serializeBinaryToWriter)}};proto.Opcode66.prototype.getUz=function(){return jspb.Message.getWrapperField(this,proto.UZDetails,1)};proto.Opcode66.prototype.setUz=function(value){return jspb.Message.setWrapperField(this,1,value)};proto.Opcode66.prototype.clearUz=function(){return this.setUz(undefined)};proto.Opcode66.prototype.hasUz=function(){return jspb.Message.getField(this,1)!=null};proto.UZDetails.repeatedFields_=[1];if(jspb.Message.GENERATE_TO_OBJECT){proto.UZDetails.prototype.toObject=function(opt_includeInstance){return proto.UZDetails.toObject(opt_includeInstance,this)};proto.UZDetails.toObject=function(includeInstance,msg){var f,obj={x8List:jspb.Message.toObjectList(msg.getX8List(),proto.PCaDetails.toObject,includeInstance)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.UZDetails.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.UZDetails;return proto.UZDetails.deserializeBinaryFromReader(msg,reader)};proto.UZDetails.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=new proto.PCaDetails;reader.readMessage(value,proto.PCaDetails.deserializeBinaryFromReader);msg.addX8(value);break;default:reader.skipField();break}}return msg};proto.UZDetails.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.UZDetails.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.UZDetails.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getX8List();if(f.length>0){writer.writeRepeatedMessage(1,f,proto.PCaDetails.serializeBinaryToWriter)}};proto.UZDetails.prototype.getX8List=function(){return jspb.Message.getRepeatedWrapperField(this,proto.PCaDetails,1)};proto.UZDetails.prototype.setX8List=function(value){return jspb.Message.setRepeatedWrapperField(this,1,value)};proto.UZDetails.prototype.addX8=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,1,opt_value,proto.PCaDetails,opt_index)};proto.UZDetails.prototype.clearX8List=function(){return this.setX8List([])};proto.PCaDetails.repeatedFields_=[3];if(jspb.Message.GENERATE_TO_OBJECT){proto.PCaDetails.prototype.toObject=function(opt_includeInstance){return proto.PCaDetails.toObject(opt_includeInstance,this)};proto.PCaDetails.toObject=function(includeInstance,msg){var f,obj={videoid:jspb.Message.getFieldWithDefault(msg,1,""),formatid:(f=msg.getFormatid())&&Protos_Common_pb.Format.toObject(includeInstance,f),debuginfoList:jspb.Message.toObjectList(msg.getDebuginfoList(),proto.OCaDetails.toObject,includeInstance)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.PCaDetails.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.PCaDetails;return proto.PCaDetails.deserializeBinaryFromReader(msg,reader)};proto.PCaDetails.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readString();msg.setVideoid(value);break;case 2:var value=new Protos_Common_pb.Format;reader.readMessage(value,Protos_Common_pb.Format.deserializeBinaryFromReader);msg.setFormatid(value);break;case 3:var value=new proto.OCaDetails;reader.readMessage(value,proto.OCaDetails.deserializeBinaryFromReader);msg.addDebuginfo(value);break;default:reader.skipField();break}}return msg};proto.PCaDetails.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.PCaDetails.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.PCaDetails.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getVideoid();if(f.length>0){writer.writeString(1,f)}f=message.getFormatid();if(f!=null){writer.writeMessage(2,f,Protos_Common_pb.Format.serializeBinaryToWriter)}f=message.getDebuginfoList();if(f.length>0){writer.writeRepeatedMessage(3,f,proto.OCaDetails.serializeBinaryToWriter)}};proto.PCaDetails.prototype.getVideoid=function(){return jspb.Message.getFieldWithDefault(this,1,"")};proto.PCaDetails.prototype.setVideoid=function(value){return jspb.Message.setProto3StringField(this,1,value)};proto.PCaDetails.prototype.getFormatid=function(){return jspb.Message.getWrapperField(this,Protos_Common_pb.Format,2)};proto.PCaDetails.prototype.setFormatid=function(value){return jspb.Message.setWrapperField(this,2,value)};proto.PCaDetails.prototype.clearFormatid=function(){return this.setFormatid(undefined)};proto.PCaDetails.prototype.hasFormatid=function(){return jspb.Message.getField(this,2)!=null};proto.PCaDetails.prototype.getDebuginfoList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.OCaDetails,3)};proto.PCaDetails.prototype.setDebuginfoList=function(value){return jspb.Message.setRepeatedWrapperField(this,3,value)};proto.PCaDetails.prototype.addDebuginfo=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,3,opt_value,proto.OCaDetails,opt_index)};proto.PCaDetails.prototype.clearDebuginfoList=function(){return this.setDebuginfoList([])};if(jspb.Message.GENERATE_TO_OBJECT){proto.OCaDetails.prototype.toObject=function(opt_includeInstance){return proto.OCaDetails.toObject(opt_includeInstance,this)};proto.OCaDetails.toObject=function(includeInstance,msg){var f,obj={label:jspb.Message.getFieldWithDefault(msg,1,""),text:jspb.Message.getFieldWithDefault(msg,2,"")};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.OCaDetails.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.OCaDetails;return proto.OCaDetails.deserializeBinaryFromReader(msg,reader)};proto.OCaDetails.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readString();msg.setLabel(value);break;case 2:var value=reader.readString();msg.setText(value);break;default:reader.skipField();break}}return msg};proto.OCaDetails.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.OCaDetails.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.OCaDetails.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getLabel();if(f.length>0){writer.writeString(1,f)}f=message.getText();if(f.length>0){writer.writeString(2,f)}};proto.OCaDetails.prototype.getLabel=function(){return jspb.Message.getFieldWithDefault(this,1,"")};proto.OCaDetails.prototype.setLabel=function(value){return jspb.Message.setProto3StringField(this,1,value)};proto.OCaDetails.prototype.getText=function(){return jspb.Message.getFieldWithDefault(this,2,"")};proto.OCaDetails.prototype.setText=function(value){return jspb.Message.setProto3StringField(this,2,value)};goog.object.extend(exports,proto);
	
	},{"./Common_pb.min.js":1,"./google-protobuf.min.js":21}],20:[function(require,module,exports){
	var jspb=require("./google-protobuf.min.js");var goog=jspb;var global=typeof globalThis!=="undefined"&&globalThis||typeof window!=="undefined"&&window||typeof global!=="undefined"&&global||typeof self!=="undefined"&&self||function(){return this}.call(null)||Function("return this")();goog.exportSymbol("proto.AudioFormatCapabilities",null,global);goog.exportSymbol("proto.BufferedStreamInfo",null,global);goog.exportSymbol("proto.ClientInfo",null,global);goog.exportSymbol("proto.FormatId",null,global);goog.exportSymbol("proto.MediaCapabilities",null,global);goog.exportSymbol("proto.MediaType",null,global);goog.exportSymbol("proto.SessionInfo",null,global);goog.exportSymbol("proto.VK",null,global);goog.exportSymbol("proto.VideoFormatCapabilities",null,global);goog.exportSymbol("proto.VideoPlaybackRequest",null,global);goog.exportSymbol("proto.VideoPlaybackRequestInfo",null,global);goog.exportSymbol("proto.dCa",null,global);goog.exportSymbol("proto.fCa",null,global);goog.exportSymbol("proto.lCa",null,global);goog.exportSymbol("proto.mCa",null,global);goog.exportSymbol("proto.nCa",null,global);goog.exportSymbol("proto.oCa",null,global);goog.exportSymbol("proto.pCa",null,global);goog.exportSymbol("proto.vCa",null,global);goog.exportSymbol("proto.wCa",null,global);goog.exportSymbol("proto.xCa",null,global);proto.VideoPlaybackRequest=function(opt_data){jspb.Message.initialize(this,opt_data,0,500,proto.VideoPlaybackRequest.repeatedFields_,null)};goog.inherits(proto.VideoPlaybackRequest,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.VideoPlaybackRequest.displayName="proto.VideoPlaybackRequest"}proto.VideoPlaybackRequestInfo=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.VideoPlaybackRequestInfo,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.VideoPlaybackRequestInfo.displayName="proto.VideoPlaybackRequestInfo"}proto.MediaCapabilities=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.MediaCapabilities.repeatedFields_,null)};goog.inherits(proto.MediaCapabilities,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.MediaCapabilities.displayName="proto.MediaCapabilities"}proto.VideoFormatCapabilities=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.VideoFormatCapabilities,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.VideoFormatCapabilities.displayName="proto.VideoFormatCapabilities"}proto.AudioFormatCapabilities=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.AudioFormatCapabilities,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.AudioFormatCapabilities.displayName="proto.AudioFormatCapabilities"}proto.FormatId=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.FormatId,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.FormatId.displayName="proto.FormatId"}proto.fCa=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.fCa,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.fCa.displayName="proto.fCa"}proto.dCa=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.dCa.repeatedFields_,null)};goog.inherits(proto.dCa,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.dCa.displayName="proto.dCa"}proto.VK=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.VK,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.VK.displayName="proto.VK"}proto.SessionInfo=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.SessionInfo.repeatedFields_,null)};goog.inherits(proto.SessionInfo,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.SessionInfo.displayName="proto.SessionInfo"}proto.ClientInfo=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.ClientInfo,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.ClientInfo.displayName="proto.ClientInfo"}proto.lCa=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.lCa,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.lCa.displayName="proto.lCa"}proto.mCa=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.mCa,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.mCa.displayName="proto.mCa"}proto.oCa=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.oCa,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.oCa.displayName="proto.oCa"}proto.pCa=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.pCa,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.pCa.displayName="proto.pCa"}proto.nCa=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.nCa,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.nCa.displayName="proto.nCa"}proto.wCa=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.wCa.repeatedFields_,null)};goog.inherits(proto.wCa,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.wCa.displayName="proto.wCa"}proto.xCa=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,proto.xCa.repeatedFields_,null)};goog.inherits(proto.xCa,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.xCa.displayName="proto.xCa"}proto.BufferedStreamInfo=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.BufferedStreamInfo,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.BufferedStreamInfo.displayName="proto.BufferedStreamInfo"}proto.vCa=function(opt_data){jspb.Message.initialize(this,opt_data,0,-1,null,null)};goog.inherits(proto.vCa,jspb.Message);if(goog.DEBUG&&!COMPILED){proto.vCa.displayName="proto.vCa"}proto.VideoPlaybackRequest.repeatedFields_=[2,3,6,16,17,1e3];if(jspb.Message.GENERATE_TO_OBJECT){proto.VideoPlaybackRequest.prototype.toObject=function(opt_includeInstance){return proto.VideoPlaybackRequest.toObject(opt_includeInstance,this)};proto.VideoPlaybackRequest.toObject=function(includeInstance,msg){var f,obj={info:(f=msg.getInfo())&&proto.VideoPlaybackRequestInfo.toObject(includeInstance,f),desiredstreamsList:jspb.Message.toObjectList(msg.getDesiredstreamsList(),proto.FormatId.toObject,includeInstance),bufferedstreamsList:jspb.Message.toObjectList(msg.getBufferedstreamsList(),proto.BufferedStreamInfo.toObject,includeInstance),videoplaybackustreamerconfig:msg.getVideoplaybackustreamerconfig_asB64(),toList:jspb.Message.toObjectList(msg.getToList(),proto.vCa.toObject,includeInstance),supportedaudiostreamsList:jspb.Message.toObjectList(msg.getSupportedaudiostreamsList(),proto.FormatId.toObject,includeInstance),supportedvideostreamsList:jspb.Message.toObjectList(msg.getSupportedvideostreamsList(),proto.FormatId.toObject,includeInstance),sessioninfo:(f=msg.getSessioninfo())&&proto.SessionInfo.toObject(includeInstance,f),jn:(f=msg.getJn())&&proto.wCa.toObject(includeInstance,f),zk:jspb.Message.getFieldWithDefault(msg,22,0),wk:jspb.Message.getFieldWithDefault(msg,23,0),whList:jspb.Message.toObjectList(msg.getWhList(),proto.xCa.toObject,includeInstance)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.VideoPlaybackRequest.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.VideoPlaybackRequest;return proto.VideoPlaybackRequest.deserializeBinaryFromReader(msg,reader)};proto.VideoPlaybackRequest.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=new proto.VideoPlaybackRequestInfo;reader.readMessage(value,proto.VideoPlaybackRequestInfo.deserializeBinaryFromReader);msg.setInfo(value);break;case 2:var value=new proto.FormatId;reader.readMessage(value,proto.FormatId.deserializeBinaryFromReader);msg.addDesiredstreams(value);break;case 3:var value=new proto.BufferedStreamInfo;reader.readMessage(value,proto.BufferedStreamInfo.deserializeBinaryFromReader);msg.addBufferedstreams(value);break;case 5:var value=reader.readBytes();msg.setVideoplaybackustreamerconfig(value);break;case 6:var value=new proto.vCa;reader.readMessage(value,proto.vCa.deserializeBinaryFromReader);msg.addTo(value);break;case 16:var value=new proto.FormatId;reader.readMessage(value,proto.FormatId.deserializeBinaryFromReader);msg.addSupportedaudiostreams(value);break;case 17:var value=new proto.FormatId;reader.readMessage(value,proto.FormatId.deserializeBinaryFromReader);msg.addSupportedvideostreams(value);break;case 19:var value=new proto.SessionInfo;reader.readMessage(value,proto.SessionInfo.deserializeBinaryFromReader);msg.setSessioninfo(value);break;case 21:var value=new proto.wCa;reader.readMessage(value,proto.wCa.deserializeBinaryFromReader);msg.setJn(value);break;case 22:var value=reader.readInt64();msg.setZk(value);break;case 23:var value=reader.readInt64();msg.setWk(value);break;case 1e3:var value=new proto.xCa;reader.readMessage(value,proto.xCa.deserializeBinaryFromReader);msg.addWh(value);break;default:reader.skipField();break}}return msg};proto.VideoPlaybackRequest.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.VideoPlaybackRequest.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.VideoPlaybackRequest.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getInfo();if(f!=null){writer.writeMessage(1,f,proto.VideoPlaybackRequestInfo.serializeBinaryToWriter)}f=message.getDesiredstreamsList();if(f.length>0){writer.writeRepeatedMessage(2,f,proto.FormatId.serializeBinaryToWriter)}f=message.getBufferedstreamsList();if(f.length>0){writer.writeRepeatedMessage(3,f,proto.BufferedStreamInfo.serializeBinaryToWriter)}f=message.getVideoplaybackustreamerconfig_asU8();if(f.length>0){writer.writeBytes(5,f)}f=message.getToList();if(f.length>0){writer.writeRepeatedMessage(6,f,proto.vCa.serializeBinaryToWriter)}f=message.getSupportedaudiostreamsList();if(f.length>0){writer.writeRepeatedMessage(16,f,proto.FormatId.serializeBinaryToWriter)}f=message.getSupportedvideostreamsList();if(f.length>0){writer.writeRepeatedMessage(17,f,proto.FormatId.serializeBinaryToWriter)}f=message.getSessioninfo();if(f!=null){writer.writeMessage(19,f,proto.SessionInfo.serializeBinaryToWriter)}f=message.getJn();if(f!=null){writer.writeMessage(21,f,proto.wCa.serializeBinaryToWriter)}f=message.getZk();if(f!==0){writer.writeInt64(22,f)}f=message.getWk();if(f!==0){writer.writeInt64(23,f)}f=message.getWhList();if(f.length>0){writer.writeRepeatedMessage(1e3,f,proto.xCa.serializeBinaryToWriter)}};proto.VideoPlaybackRequest.prototype.getInfo=function(){return jspb.Message.getWrapperField(this,proto.VideoPlaybackRequestInfo,1)};proto.VideoPlaybackRequest.prototype.setInfo=function(value){return jspb.Message.setWrapperField(this,1,value)};proto.VideoPlaybackRequest.prototype.clearInfo=function(){return this.setInfo(undefined)};proto.VideoPlaybackRequest.prototype.hasInfo=function(){return jspb.Message.getField(this,1)!=null};proto.VideoPlaybackRequest.prototype.getDesiredstreamsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.FormatId,2)};proto.VideoPlaybackRequest.prototype.setDesiredstreamsList=function(value){return jspb.Message.setRepeatedWrapperField(this,2,value)};proto.VideoPlaybackRequest.prototype.addDesiredstreams=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.FormatId,opt_index)};proto.VideoPlaybackRequest.prototype.clearDesiredstreamsList=function(){return this.setDesiredstreamsList([])};proto.VideoPlaybackRequest.prototype.getBufferedstreamsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.BufferedStreamInfo,3)};proto.VideoPlaybackRequest.prototype.setBufferedstreamsList=function(value){return jspb.Message.setRepeatedWrapperField(this,3,value)};proto.VideoPlaybackRequest.prototype.addBufferedstreams=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,3,opt_value,proto.BufferedStreamInfo,opt_index)};proto.VideoPlaybackRequest.prototype.clearBufferedstreamsList=function(){return this.setBufferedstreamsList([])};proto.VideoPlaybackRequest.prototype.getVideoplaybackustreamerconfig=function(){return jspb.Message.getFieldWithDefault(this,5,"")};proto.VideoPlaybackRequest.prototype.getVideoplaybackustreamerconfig_asB64=function(){return jspb.Message.bytesAsB64(this.getVideoplaybackustreamerconfig())};proto.VideoPlaybackRequest.prototype.getVideoplaybackustreamerconfig_asU8=function(){return jspb.Message.bytesAsU8(this.getVideoplaybackustreamerconfig())};proto.VideoPlaybackRequest.prototype.setVideoplaybackustreamerconfig=function(value){return jspb.Message.setProto3BytesField(this,5,value)};proto.VideoPlaybackRequest.prototype.getToList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.vCa,6)};proto.VideoPlaybackRequest.prototype.setToList=function(value){return jspb.Message.setRepeatedWrapperField(this,6,value)};proto.VideoPlaybackRequest.prototype.addTo=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,6,opt_value,proto.vCa,opt_index)};proto.VideoPlaybackRequest.prototype.clearToList=function(){return this.setToList([])};proto.VideoPlaybackRequest.prototype.getSupportedaudiostreamsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.FormatId,16)};proto.VideoPlaybackRequest.prototype.setSupportedaudiostreamsList=function(value){return jspb.Message.setRepeatedWrapperField(this,16,value)};proto.VideoPlaybackRequest.prototype.addSupportedaudiostreams=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,16,opt_value,proto.FormatId,opt_index)};proto.VideoPlaybackRequest.prototype.clearSupportedaudiostreamsList=function(){return this.setSupportedaudiostreamsList([])};proto.VideoPlaybackRequest.prototype.getSupportedvideostreamsList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.FormatId,17)};proto.VideoPlaybackRequest.prototype.setSupportedvideostreamsList=function(value){return jspb.Message.setRepeatedWrapperField(this,17,value)};proto.VideoPlaybackRequest.prototype.addSupportedvideostreams=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,17,opt_value,proto.FormatId,opt_index)};proto.VideoPlaybackRequest.prototype.clearSupportedvideostreamsList=function(){return this.setSupportedvideostreamsList([])};proto.VideoPlaybackRequest.prototype.getSessioninfo=function(){return jspb.Message.getWrapperField(this,proto.SessionInfo,19)};proto.VideoPlaybackRequest.prototype.setSessioninfo=function(value){return jspb.Message.setWrapperField(this,19,value)};proto.VideoPlaybackRequest.prototype.clearSessioninfo=function(){return this.setSessioninfo(undefined)};proto.VideoPlaybackRequest.prototype.hasSessioninfo=function(){return jspb.Message.getField(this,19)!=null};proto.VideoPlaybackRequest.prototype.getJn=function(){return jspb.Message.getWrapperField(this,proto.wCa,21)};proto.VideoPlaybackRequest.prototype.setJn=function(value){return jspb.Message.setWrapperField(this,21,value)};proto.VideoPlaybackRequest.prototype.clearJn=function(){return this.setJn(undefined)};proto.VideoPlaybackRequest.prototype.hasJn=function(){return jspb.Message.getField(this,21)!=null};proto.VideoPlaybackRequest.prototype.getZk=function(){return jspb.Message.getFieldWithDefault(this,22,0)};proto.VideoPlaybackRequest.prototype.setZk=function(value){return jspb.Message.setProto3IntField(this,22,value)};proto.VideoPlaybackRequest.prototype.getWk=function(){return jspb.Message.getFieldWithDefault(this,23,0)};proto.VideoPlaybackRequest.prototype.setWk=function(value){return jspb.Message.setProto3IntField(this,23,value)};proto.VideoPlaybackRequest.prototype.getWhList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.xCa,1e3)};proto.VideoPlaybackRequest.prototype.setWhList=function(value){return jspb.Message.setRepeatedWrapperField(this,1e3,value)};proto.VideoPlaybackRequest.prototype.addWh=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,1e3,opt_value,proto.xCa,opt_index)};proto.VideoPlaybackRequest.prototype.clearWhList=function(){return this.setWhList([])};if(jspb.Message.GENERATE_TO_OBJECT){proto.VideoPlaybackRequestInfo.prototype.toObject=function(opt_includeInstance){return proto.VideoPlaybackRequestInfo.toObject(opt_includeInstance,this)};proto.VideoPlaybackRequestInfo.toObject=function(includeInstance,msg){var f,obj={timesincelastmanualformatselectionms:jspb.Message.getFieldWithDefault(msg,13,0),lastmanualdirection:jspb.Message.getFieldWithDefault(msg,14,0),videoheightmaybe:jspb.Message.getFieldWithDefault(msg,16,0),detailednetworktype:jspb.Message.getFieldWithDefault(msg,17,0),desiredwidth:jspb.Message.getFieldWithDefault(msg,18,0),desiredheight:jspb.Message.getFieldWithDefault(msg,19,0),selectedqualityheight:jspb.Message.getFieldWithDefault(msg,21,0),g7:jspb.Message.getFieldWithDefault(msg,23,0),currentvideopositionms:(f=jspb.Message.getField(msg,28))==null?undefined:f,timesincelastseekms:jspb.Message.getFieldWithDefault(msg,29,0),visibility:(f=jspb.Message.getField(msg,34))==null?undefined:f,playbackrate:jspb.Message.getFloatingPointFieldWithDefault(msg,285,0),timesincelastrequestms:jspb.Message.getFieldWithDefault(msg,36,0),mediacapabilities:(f=msg.getMediacapabilities())&&proto.MediaCapabilities.toObject(includeInstance,f),timesincelastactionms:jspb.Message.getFieldWithDefault(msg,39,0),mediatypeflags:jspb.Message.getFieldWithDefault(msg,40,0),playerstate:jspb.Message.getFieldWithDefault(msg,44,0),dynamicrangecompression:jspb.Message.getBooleanFieldWithDefault(msg,46,false),qy:jspb.Message.getFieldWithDefault(msg,48,0),nw:jspb.Message.getFieldWithDefault(msg,50,0),bz:jspb.Message.getFieldWithDefault(msg,51,0),sabrreportrequestcancellationinfo:jspb.Message.getFieldWithDefault(msg,54,0),eaa:jspb.Message.getBooleanFieldWithDefault(msg,56,false),latencymsmaybe:jspb.Message.getFieldWithDefault(msg,57,0),vp9:(f=jspb.Message.getBooleanField(msg,58))==null?undefined:f,videoheight2maybe:jspb.Message.getFieldWithDefault(msg,59,0),gy:jspb.Message.getFieldWithDefault(msg,60,0),isprefetch:jspb.Message.getBooleanFieldWithDefault(msg,61,false),sabrsupportqualityconstraints:jspb.Message.getFieldWithDefault(msg,62,0),sabrlicenseconstraint:msg.getSabrlicenseconstraint_asB64(),allowproximalivelatency:jspb.Message.getFieldWithDefault(msg,64,0),sabrforceproxima:jspb.Message.getFieldWithDefault(msg,66,0),voa:jspb.Message.getFieldWithDefault(msg,67,0),sabrforcemaximumnetworkinterruptiondurationms:jspb.Message.getFieldWithDefault(msg,68,0)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.VideoPlaybackRequestInfo.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.VideoPlaybackRequestInfo;return proto.VideoPlaybackRequestInfo.deserializeBinaryFromReader(msg,reader)};proto.VideoPlaybackRequestInfo.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 13:var value=reader.readInt64();msg.setTimesincelastmanualformatselectionms(value);break;case 14:var value=reader.readInt32();msg.setLastmanualdirection(value);break;case 16:var value=reader.readInt64();msg.setVideoheightmaybe(value);break;case 17:var value=reader.readInt64();msg.setDetailednetworktype(value);break;case 18:var value=reader.readInt64();msg.setDesiredwidth(value);break;case 19:var value=reader.readInt64();msg.setDesiredheight(value);break;case 21:var value=reader.readInt64();msg.setSelectedqualityheight(value);break;case 23:var value=reader.readInt64();msg.setG7(value);break;case 28:var value=reader.readInt64();msg.setCurrentvideopositionms(value);break;case 29:var value=reader.readInt64();msg.setTimesincelastseekms(value);break;case 34:var value=reader.readInt64();msg.setVisibility(value);break;case 285:var value=reader.readFloat();msg.setPlaybackrate(value);break;case 36:var value=reader.readInt64();msg.setTimesincelastrequestms(value);break;case 38:var value=new proto.MediaCapabilities;reader.readMessage(value,proto.MediaCapabilities.deserializeBinaryFromReader);msg.setMediacapabilities(value);break;case 39:var value=reader.readInt64();msg.setTimesincelastactionms(value);break;case 40:var value=reader.readEnum();msg.setMediatypeflags(value);break;case 44:var value=reader.readInt64();msg.setPlayerstate(value);break;case 46:var value=reader.readBool();msg.setDynamicrangecompression(value);break;case 48:var value=reader.readInt64();msg.setQy(value);break;case 50:var value=reader.readInt64();msg.setNw(value);break;case 51:var value=reader.readInt64();msg.setBz(value);break;case 54:var value=reader.readInt64();msg.setSabrreportrequestcancellationinfo(value);break;case 56:var value=reader.readBool();msg.setEaa(value);break;case 57:var value=reader.readInt64();msg.setLatencymsmaybe(value);break;case 58:var value=reader.readBool();msg.setVp9(value);break;case 59:var value=reader.readInt64();msg.setVideoheight2maybe(value);break;case 60:var value=reader.readInt64();msg.setGy(value);break;case 61:var value=reader.readBool();msg.setIsprefetch(value);break;case 62:var value=reader.readInt64();msg.setSabrsupportqualityconstraints(value);break;case 63:var value=reader.readBytes();msg.setSabrlicenseconstraint(value);break;case 64:var value=reader.readInt64();msg.setAllowproximalivelatency(value);break;case 66:var value=reader.readInt64();msg.setSabrforceproxima(value);break;case 67:var value=reader.readInt64();msg.setVoa(value);break;case 68:var value=reader.readInt64();msg.setSabrforcemaximumnetworkinterruptiondurationms(value);break;default:reader.skipField();break}}return msg};proto.VideoPlaybackRequestInfo.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.VideoPlaybackRequestInfo.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.VideoPlaybackRequestInfo.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getTimesincelastmanualformatselectionms();if(f!==0){writer.writeInt64(13,f)}f=message.getLastmanualdirection();if(f!==0){writer.writeInt32(14,f)}f=message.getVideoheightmaybe();if(f!==0){writer.writeInt64(16,f)}f=message.getDetailednetworktype();if(f!==0){writer.writeInt64(17,f)}f=message.getDesiredwidth();if(f!==0){writer.writeInt64(18,f)}f=message.getDesiredheight();if(f!==0){writer.writeInt64(19,f)}f=message.getSelectedqualityheight();if(f!==0){writer.writeInt64(21,f)}f=message.getG7();if(f!==0){writer.writeInt64(23,f)}f=jspb.Message.getField(message,28);if(f!=null){writer.writeInt64(28,f)}f=message.getTimesincelastseekms();if(f!==0){writer.writeInt64(29,f)}f=jspb.Message.getField(message,34);if(f!=null){writer.writeInt64(34,f)}f=message.getPlaybackrate();if(f!==0){writer.writeFloat(285,f)}f=message.getTimesincelastrequestms();if(f!==0){writer.writeInt64(36,f)}f=message.getMediacapabilities();if(f!=null){writer.writeMessage(38,f,proto.MediaCapabilities.serializeBinaryToWriter)}f=message.getTimesincelastactionms();if(f!==0){writer.writeInt64(39,f)}f=message.getMediatypeflags();if(f!==0){writer.writeEnum(40,f)}f=message.getPlayerstate();if(f!==0){writer.writeInt64(44,f)}f=message.getDynamicrangecompression();if(f){writer.writeBool(46,f)}f=message.getQy();if(f!==0){writer.writeInt64(48,f)}f=message.getNw();if(f!==0){writer.writeInt64(50,f)}f=message.getBz();if(f!==0){writer.writeInt64(51,f)}f=message.getSabrreportrequestcancellationinfo();if(f!==0){writer.writeInt64(54,f)}f=message.getEaa();if(f){writer.writeBool(56,f)}f=message.getLatencymsmaybe();if(f!==0){writer.writeInt64(57,f)}f=jspb.Message.getField(message,58);if(f!=null){writer.writeBool(58,f)}f=message.getVideoheight2maybe();if(f!==0){writer.writeInt64(59,f)}f=message.getGy();if(f!==0){writer.writeInt64(60,f)}f=message.getIsprefetch();if(f){writer.writeBool(61,f)}f=message.getSabrsupportqualityconstraints();if(f!==0){writer.writeInt64(62,f)}f=message.getSabrlicenseconstraint_asU8();if(f.length>0){writer.writeBytes(63,f)}f=message.getAllowproximalivelatency();if(f!==0){writer.writeInt64(64,f)}f=message.getSabrforceproxima();if(f!==0){writer.writeInt64(66,f)}f=message.getVoa();if(f!==0){writer.writeInt64(67,f)}f=message.getSabrforcemaximumnetworkinterruptiondurationms();if(f!==0){writer.writeInt64(68,f)}};proto.VideoPlaybackRequestInfo.prototype.getTimesincelastmanualformatselectionms=function(){return jspb.Message.getFieldWithDefault(this,13,0)};proto.VideoPlaybackRequestInfo.prototype.setTimesincelastmanualformatselectionms=function(value){return jspb.Message.setProto3IntField(this,13,value)};proto.VideoPlaybackRequestInfo.prototype.getLastmanualdirection=function(){return jspb.Message.getFieldWithDefault(this,14,0)};proto.VideoPlaybackRequestInfo.prototype.setLastmanualdirection=function(value){return jspb.Message.setProto3IntField(this,14,value)};proto.VideoPlaybackRequestInfo.prototype.getVideoheightmaybe=function(){return jspb.Message.getFieldWithDefault(this,16,0)};proto.VideoPlaybackRequestInfo.prototype.setVideoheightmaybe=function(value){return jspb.Message.setProto3IntField(this,16,value)};proto.VideoPlaybackRequestInfo.prototype.getDetailednetworktype=function(){return jspb.Message.getFieldWithDefault(this,17,0)};proto.VideoPlaybackRequestInfo.prototype.setDetailednetworktype=function(value){return jspb.Message.setProto3IntField(this,17,value)};proto.VideoPlaybackRequestInfo.prototype.getDesiredwidth=function(){return jspb.Message.getFieldWithDefault(this,18,0)};proto.VideoPlaybackRequestInfo.prototype.setDesiredwidth=function(value){return jspb.Message.setProto3IntField(this,18,value)};proto.VideoPlaybackRequestInfo.prototype.getDesiredheight=function(){return jspb.Message.getFieldWithDefault(this,19,0)};proto.VideoPlaybackRequestInfo.prototype.setDesiredheight=function(value){return jspb.Message.setProto3IntField(this,19,value)};proto.VideoPlaybackRequestInfo.prototype.getSelectedqualityheight=function(){return jspb.Message.getFieldWithDefault(this,21,0)};proto.VideoPlaybackRequestInfo.prototype.setSelectedqualityheight=function(value){return jspb.Message.setProto3IntField(this,21,value)};proto.VideoPlaybackRequestInfo.prototype.getG7=function(){return jspb.Message.getFieldWithDefault(this,23,0)};proto.VideoPlaybackRequestInfo.prototype.setG7=function(value){return jspb.Message.setProto3IntField(this,23,value)};proto.VideoPlaybackRequestInfo.prototype.getCurrentvideopositionms=function(){return jspb.Message.getFieldWithDefault(this,28,0)};proto.VideoPlaybackRequestInfo.prototype.setCurrentvideopositionms=function(value){return jspb.Message.setField(this,28,value)};proto.VideoPlaybackRequestInfo.prototype.clearCurrentvideopositionms=function(){return jspb.Message.setField(this,28,undefined)};proto.VideoPlaybackRequestInfo.prototype.hasCurrentvideopositionms=function(){return jspb.Message.getField(this,28)!=null};proto.VideoPlaybackRequestInfo.prototype.getTimesincelastseekms=function(){return jspb.Message.getFieldWithDefault(this,29,0)};proto.VideoPlaybackRequestInfo.prototype.setTimesincelastseekms=function(value){return jspb.Message.setProto3IntField(this,29,value)};proto.VideoPlaybackRequestInfo.prototype.getVisibility=function(){return jspb.Message.getFieldWithDefault(this,34,0)};proto.VideoPlaybackRequestInfo.prototype.setVisibility=function(value){return jspb.Message.setField(this,34,value)};proto.VideoPlaybackRequestInfo.prototype.clearVisibility=function(){return jspb.Message.setField(this,34,undefined)};proto.VideoPlaybackRequestInfo.prototype.hasVisibility=function(){return jspb.Message.getField(this,34)!=null};proto.VideoPlaybackRequestInfo.prototype.getPlaybackrate=function(){return jspb.Message.getFloatingPointFieldWithDefault(this,285,0)};proto.VideoPlaybackRequestInfo.prototype.setPlaybackrate=function(value){return jspb.Message.setProto3FloatField(this,285,value)};proto.VideoPlaybackRequestInfo.prototype.getTimesincelastrequestms=function(){return jspb.Message.getFieldWithDefault(this,36,0)};proto.VideoPlaybackRequestInfo.prototype.setTimesincelastrequestms=function(value){return jspb.Message.setProto3IntField(this,36,value)};proto.VideoPlaybackRequestInfo.prototype.getMediacapabilities=function(){return jspb.Message.getWrapperField(this,proto.MediaCapabilities,38)};proto.VideoPlaybackRequestInfo.prototype.setMediacapabilities=function(value){return jspb.Message.setWrapperField(this,38,value)};proto.VideoPlaybackRequestInfo.prototype.clearMediacapabilities=function(){return this.setMediacapabilities(undefined)};proto.VideoPlaybackRequestInfo.prototype.hasMediacapabilities=function(){return jspb.Message.getField(this,38)!=null};proto.VideoPlaybackRequestInfo.prototype.getTimesincelastactionms=function(){return jspb.Message.getFieldWithDefault(this,39,0)};proto.VideoPlaybackRequestInfo.prototype.setTimesincelastactionms=function(value){return jspb.Message.setProto3IntField(this,39,value)};proto.VideoPlaybackRequestInfo.prototype.getMediatypeflags=function(){return jspb.Message.getFieldWithDefault(this,40,0)};proto.VideoPlaybackRequestInfo.prototype.setMediatypeflags=function(value){return jspb.Message.setProto3EnumField(this,40,value)};proto.VideoPlaybackRequestInfo.prototype.getPlayerstate=function(){return jspb.Message.getFieldWithDefault(this,44,0)};proto.VideoPlaybackRequestInfo.prototype.setPlayerstate=function(value){return jspb.Message.setProto3IntField(this,44,value)};proto.VideoPlaybackRequestInfo.prototype.getDynamicrangecompression=function(){return jspb.Message.getBooleanFieldWithDefault(this,46,false)};proto.VideoPlaybackRequestInfo.prototype.setDynamicrangecompression=function(value){return jspb.Message.setProto3BooleanField(this,46,value)};proto.VideoPlaybackRequestInfo.prototype.getQy=function(){return jspb.Message.getFieldWithDefault(this,48,0)};proto.VideoPlaybackRequestInfo.prototype.setQy=function(value){return jspb.Message.setProto3IntField(this,48,value)};proto.VideoPlaybackRequestInfo.prototype.getNw=function(){return jspb.Message.getFieldWithDefault(this,50,0)};proto.VideoPlaybackRequestInfo.prototype.setNw=function(value){return jspb.Message.setProto3IntField(this,50,value)};proto.VideoPlaybackRequestInfo.prototype.getBz=function(){return jspb.Message.getFieldWithDefault(this,51,0)};proto.VideoPlaybackRequestInfo.prototype.setBz=function(value){return jspb.Message.setProto3IntField(this,51,value)};proto.VideoPlaybackRequestInfo.prototype.getSabrreportrequestcancellationinfo=function(){return jspb.Message.getFieldWithDefault(this,54,0)};proto.VideoPlaybackRequestInfo.prototype.setSabrreportrequestcancellationinfo=function(value){return jspb.Message.setProto3IntField(this,54,value)};proto.VideoPlaybackRequestInfo.prototype.getEaa=function(){return jspb.Message.getBooleanFieldWithDefault(this,56,false)};proto.VideoPlaybackRequestInfo.prototype.setEaa=function(value){return jspb.Message.setProto3BooleanField(this,56,value)};proto.VideoPlaybackRequestInfo.prototype.getLatencymsmaybe=function(){return jspb.Message.getFieldWithDefault(this,57,0)};proto.VideoPlaybackRequestInfo.prototype.setLatencymsmaybe=function(value){return jspb.Message.setProto3IntField(this,57,value)};proto.VideoPlaybackRequestInfo.prototype.getVp9=function(){return jspb.Message.getBooleanFieldWithDefault(this,58,false)};proto.VideoPlaybackRequestInfo.prototype.setVp9=function(value){return jspb.Message.setField(this,58,value)};proto.VideoPlaybackRequestInfo.prototype.clearVp9=function(){return jspb.Message.setField(this,58,undefined)};proto.VideoPlaybackRequestInfo.prototype.hasVp9=function(){return jspb.Message.getField(this,58)!=null};proto.VideoPlaybackRequestInfo.prototype.getVideoheight2maybe=function(){return jspb.Message.getFieldWithDefault(this,59,0)};proto.VideoPlaybackRequestInfo.prototype.setVideoheight2maybe=function(value){return jspb.Message.setProto3IntField(this,59,value)};proto.VideoPlaybackRequestInfo.prototype.getGy=function(){return jspb.Message.getFieldWithDefault(this,60,0)};proto.VideoPlaybackRequestInfo.prototype.setGy=function(value){return jspb.Message.setProto3IntField(this,60,value)};proto.VideoPlaybackRequestInfo.prototype.getIsprefetch=function(){return jspb.Message.getBooleanFieldWithDefault(this,61,false)};proto.VideoPlaybackRequestInfo.prototype.setIsprefetch=function(value){return jspb.Message.setProto3BooleanField(this,61,value)};proto.VideoPlaybackRequestInfo.prototype.getSabrsupportqualityconstraints=function(){return jspb.Message.getFieldWithDefault(this,62,0)};proto.VideoPlaybackRequestInfo.prototype.setSabrsupportqualityconstraints=function(value){return jspb.Message.setProto3IntField(this,62,value)};proto.VideoPlaybackRequestInfo.prototype.getSabrlicenseconstraint=function(){return jspb.Message.getFieldWithDefault(this,63,"")};proto.VideoPlaybackRequestInfo.prototype.getSabrlicenseconstraint_asB64=function(){return jspb.Message.bytesAsB64(this.getSabrlicenseconstraint())};proto.VideoPlaybackRequestInfo.prototype.getSabrlicenseconstraint_asU8=function(){return jspb.Message.bytesAsU8(this.getSabrlicenseconstraint())};proto.VideoPlaybackRequestInfo.prototype.setSabrlicenseconstraint=function(value){return jspb.Message.setProto3BytesField(this,63,value)};proto.VideoPlaybackRequestInfo.prototype.getAllowproximalivelatency=function(){return jspb.Message.getFieldWithDefault(this,64,0)};proto.VideoPlaybackRequestInfo.prototype.setAllowproximalivelatency=function(value){return jspb.Message.setProto3IntField(this,64,value)};proto.VideoPlaybackRequestInfo.prototype.getSabrforceproxima=function(){return jspb.Message.getFieldWithDefault(this,66,0)};proto.VideoPlaybackRequestInfo.prototype.setSabrforceproxima=function(value){return jspb.Message.setProto3IntField(this,66,value)};proto.VideoPlaybackRequestInfo.prototype.getVoa=function(){return jspb.Message.getFieldWithDefault(this,67,0)};proto.VideoPlaybackRequestInfo.prototype.setVoa=function(value){return jspb.Message.setProto3IntField(this,67,value)};proto.VideoPlaybackRequestInfo.prototype.getSabrforcemaximumnetworkinterruptiondurationms=function(){return jspb.Message.getFieldWithDefault(this,68,0)};proto.VideoPlaybackRequestInfo.prototype.setSabrforcemaximumnetworkinterruptiondurationms=function(value){return jspb.Message.setProto3IntField(this,68,value)};proto.MediaCapabilities.repeatedFields_=[1,2];if(jspb.Message.GENERATE_TO_OBJECT){proto.MediaCapabilities.prototype.toObject=function(opt_includeInstance){return proto.MediaCapabilities.toObject(opt_includeInstance,this)};proto.MediaCapabilities.toObject=function(includeInstance,msg){var f,obj={videoformatcapabilitiesList:jspb.Message.toObjectList(msg.getVideoformatcapabilitiesList(),proto.VideoFormatCapabilities.toObject,includeInstance),audioformatcapabilitiesList:jspb.Message.toObjectList(msg.getAudioformatcapabilitiesList(),proto.AudioFormatCapabilities.toObject,includeInstance),hdrmodebitmask:jspb.Message.getFieldWithDefault(msg,5,0)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.MediaCapabilities.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.MediaCapabilities;return proto.MediaCapabilities.deserializeBinaryFromReader(msg,reader)};proto.MediaCapabilities.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=new proto.VideoFormatCapabilities;reader.readMessage(value,proto.VideoFormatCapabilities.deserializeBinaryFromReader);msg.addVideoformatcapabilities(value);break;case 2:var value=new proto.AudioFormatCapabilities;reader.readMessage(value,proto.AudioFormatCapabilities.deserializeBinaryFromReader);msg.addAudioformatcapabilities(value);break;case 5:var value=reader.readInt64();msg.setHdrmodebitmask(value);break;default:reader.skipField();break}}return msg};proto.MediaCapabilities.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.MediaCapabilities.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.MediaCapabilities.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getVideoformatcapabilitiesList();if(f.length>0){writer.writeRepeatedMessage(1,f,proto.VideoFormatCapabilities.serializeBinaryToWriter)}f=message.getAudioformatcapabilitiesList();if(f.length>0){writer.writeRepeatedMessage(2,f,proto.AudioFormatCapabilities.serializeBinaryToWriter)}f=message.getHdrmodebitmask();if(f!==0){writer.writeInt64(5,f)}};proto.MediaCapabilities.prototype.getVideoformatcapabilitiesList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.VideoFormatCapabilities,1)};proto.MediaCapabilities.prototype.setVideoformatcapabilitiesList=function(value){return jspb.Message.setRepeatedWrapperField(this,1,value)};proto.MediaCapabilities.prototype.addVideoformatcapabilities=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,1,opt_value,proto.VideoFormatCapabilities,opt_index)};proto.MediaCapabilities.prototype.clearVideoformatcapabilitiesList=function(){return this.setVideoformatcapabilitiesList([])};proto.MediaCapabilities.prototype.getAudioformatcapabilitiesList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.AudioFormatCapabilities,2)};proto.MediaCapabilities.prototype.setAudioformatcapabilitiesList=function(value){return jspb.Message.setRepeatedWrapperField(this,2,value)};proto.MediaCapabilities.prototype.addAudioformatcapabilities=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.AudioFormatCapabilities,opt_index)};proto.MediaCapabilities.prototype.clearAudioformatcapabilitiesList=function(){return this.setAudioformatcapabilitiesList([])};proto.MediaCapabilities.prototype.getHdrmodebitmask=function(){return jspb.Message.getFieldWithDefault(this,5,0)};proto.MediaCapabilities.prototype.setHdrmodebitmask=function(value){return jspb.Message.setProto3IntField(this,5,value)};if(jspb.Message.GENERATE_TO_OBJECT){proto.VideoFormatCapabilities.prototype.toObject=function(opt_includeInstance){return proto.VideoFormatCapabilities.toObject(opt_includeInstance,this)};proto.VideoFormatCapabilities.toObject=function(includeInstance,msg){var f,obj={videocodec:jspb.Message.getFieldWithDefault(msg,1,0),maxheight:jspb.Message.getFieldWithDefault(msg,3,0),maxwidth:jspb.Message.getFieldWithDefault(msg,4,0),maxframerate:jspb.Message.getFieldWithDefault(msg,11,0),maxbitratebps:jspb.Message.getFieldWithDefault(msg,12,0),is10bitsupported:jspb.Message.getBooleanFieldWithDefault(msg,15,false)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.VideoFormatCapabilities.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.VideoFormatCapabilities;return proto.VideoFormatCapabilities.deserializeBinaryFromReader(msg,reader)};proto.VideoFormatCapabilities.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt64();msg.setVideocodec(value);break;case 3:var value=reader.readInt64();msg.setMaxheight(value);break;case 4:var value=reader.readInt64();msg.setMaxwidth(value);break;case 11:var value=reader.readInt64();msg.setMaxframerate(value);break;case 12:var value=reader.readInt64();msg.setMaxbitratebps(value);break;case 15:var value=reader.readBool();msg.setIs10bitsupported(value);break;default:reader.skipField();break}}return msg};proto.VideoFormatCapabilities.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.VideoFormatCapabilities.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.VideoFormatCapabilities.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getVideocodec();if(f!==0){writer.writeInt64(1,f)}f=message.getMaxheight();if(f!==0){writer.writeInt64(3,f)}f=message.getMaxwidth();if(f!==0){writer.writeInt64(4,f)}f=message.getMaxframerate();if(f!==0){writer.writeInt64(11,f)}f=message.getMaxbitratebps();if(f!==0){writer.writeInt64(12,f)}f=message.getIs10bitsupported();if(f){writer.writeBool(15,f)}};proto.VideoFormatCapabilities.prototype.getVideocodec=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.VideoFormatCapabilities.prototype.setVideocodec=function(value){return jspb.Message.setProto3IntField(this,1,value)};proto.VideoFormatCapabilities.prototype.getMaxheight=function(){return jspb.Message.getFieldWithDefault(this,3,0)};proto.VideoFormatCapabilities.prototype.setMaxheight=function(value){return jspb.Message.setProto3IntField(this,3,value)};proto.VideoFormatCapabilities.prototype.getMaxwidth=function(){return jspb.Message.getFieldWithDefault(this,4,0)};proto.VideoFormatCapabilities.prototype.setMaxwidth=function(value){return jspb.Message.setProto3IntField(this,4,value)};proto.VideoFormatCapabilities.prototype.getMaxframerate=function(){return jspb.Message.getFieldWithDefault(this,11,0)};proto.VideoFormatCapabilities.prototype.setMaxframerate=function(value){return jspb.Message.setProto3IntField(this,11,value)};proto.VideoFormatCapabilities.prototype.getMaxbitratebps=function(){return jspb.Message.getFieldWithDefault(this,12,0)};proto.VideoFormatCapabilities.prototype.setMaxbitratebps=function(value){return jspb.Message.setProto3IntField(this,12,value)};proto.VideoFormatCapabilities.prototype.getIs10bitsupported=function(){return jspb.Message.getBooleanFieldWithDefault(this,15,false)};proto.VideoFormatCapabilities.prototype.setIs10bitsupported=function(value){return jspb.Message.setProto3BooleanField(this,15,value)};if(jspb.Message.GENERATE_TO_OBJECT){proto.AudioFormatCapabilities.prototype.toObject=function(opt_includeInstance){return proto.AudioFormatCapabilities.toObject(opt_includeInstance,this)};proto.AudioFormatCapabilities.toObject=function(includeInstance,msg){var f,obj={audiocodec:jspb.Message.getFieldWithDefault(msg,1,0),numchannels:jspb.Message.getFieldWithDefault(msg,2,0),maxbitratebps:jspb.Message.getFieldWithDefault(msg,3,0),spatialcapabilitybitmask:jspb.Message.getFieldWithDefault(msg,6,0)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.AudioFormatCapabilities.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.AudioFormatCapabilities;return proto.AudioFormatCapabilities.deserializeBinaryFromReader(msg,reader)};proto.AudioFormatCapabilities.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt64();msg.setAudiocodec(value);break;case 2:var value=reader.readInt64();msg.setNumchannels(value);break;case 3:var value=reader.readInt64();msg.setMaxbitratebps(value);break;case 6:var value=reader.readInt64();msg.setSpatialcapabilitybitmask(value);break;default:reader.skipField();break}}return msg};proto.AudioFormatCapabilities.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.AudioFormatCapabilities.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.AudioFormatCapabilities.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getAudiocodec();if(f!==0){writer.writeInt64(1,f)}f=message.getNumchannels();if(f!==0){writer.writeInt64(2,f)}f=message.getMaxbitratebps();if(f!==0){writer.writeInt64(3,f)}f=message.getSpatialcapabilitybitmask();if(f!==0){writer.writeInt64(6,f)}};proto.AudioFormatCapabilities.prototype.getAudiocodec=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.AudioFormatCapabilities.prototype.setAudiocodec=function(value){return jspb.Message.setProto3IntField(this,1,value)};proto.AudioFormatCapabilities.prototype.getNumchannels=function(){return jspb.Message.getFieldWithDefault(this,2,0)};proto.AudioFormatCapabilities.prototype.setNumchannels=function(value){return jspb.Message.setProto3IntField(this,2,value)};proto.AudioFormatCapabilities.prototype.getMaxbitratebps=function(){return jspb.Message.getFieldWithDefault(this,3,0)};proto.AudioFormatCapabilities.prototype.setMaxbitratebps=function(value){return jspb.Message.setProto3IntField(this,3,value)};proto.AudioFormatCapabilities.prototype.getSpatialcapabilitybitmask=function(){return jspb.Message.getFieldWithDefault(this,6,0)};proto.AudioFormatCapabilities.prototype.setSpatialcapabilitybitmask=function(value){return jspb.Message.setProto3IntField(this,6,value)};if(jspb.Message.GENERATE_TO_OBJECT){proto.FormatId.prototype.toObject=function(opt_includeInstance){return proto.FormatId.toObject(opt_includeInstance,this)};proto.FormatId.toObject=function(includeInstance,msg){var f,obj={itag:jspb.Message.getFieldWithDefault(msg,1,0),lmt:jspb.Message.getFieldWithDefault(msg,2,0),xtags:(f=jspb.Message.getField(msg,3))==null?undefined:f};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.FormatId.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.FormatId;return proto.FormatId.deserializeBinaryFromReader(msg,reader)};proto.FormatId.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt64();msg.setItag(value);break;case 2:var value=reader.readUint64();msg.setLmt(value);break;case 3:var value=reader.readString();msg.setXtags(value);break;default:reader.skipField();break}}return msg};proto.FormatId.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.FormatId.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.FormatId.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getItag();if(f!==0){writer.writeInt64(1,f)}f=message.getLmt();if(f!==0){writer.writeUint64(2,f)}f=jspb.Message.getField(message,3);if(f!=null){writer.writeString(3,f)}};proto.FormatId.prototype.getItag=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.FormatId.prototype.setItag=function(value){return jspb.Message.setProto3IntField(this,1,value)};proto.FormatId.prototype.getLmt=function(){return jspb.Message.getFieldWithDefault(this,2,0)};proto.FormatId.prototype.setLmt=function(value){return jspb.Message.setProto3IntField(this,2,value)};proto.FormatId.prototype.getXtags=function(){return jspb.Message.getFieldWithDefault(this,3,"")};proto.FormatId.prototype.setXtags=function(value){return jspb.Message.setField(this,3,value)};proto.FormatId.prototype.clearXtags=function(){return jspb.Message.setField(this,3,undefined)};proto.FormatId.prototype.hasXtags=function(){return jspb.Message.getField(this,3)!=null};if(jspb.Message.GENERATE_TO_OBJECT){proto.fCa.prototype.toObject=function(opt_includeInstance){return proto.fCa.toObject(opt_includeInstance,this)};proto.fCa.toObject=function(includeInstance,msg){var f,obj={videoid:jspb.Message.getFieldWithDefault(msg,1,""),lmt:jspb.Message.getFieldWithDefault(msg,2,0)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.fCa.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.fCa;return proto.fCa.deserializeBinaryFromReader(msg,reader)};proto.fCa.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readString();msg.setVideoid(value);break;case 2:var value=reader.readUint64();msg.setLmt(value);break;default:reader.skipField();break}}return msg};proto.fCa.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.fCa.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.fCa.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getVideoid();if(f.length>0){writer.writeString(1,f)}f=message.getLmt();if(f!==0){writer.writeUint64(2,f)}};proto.fCa.prototype.getVideoid=function(){return jspb.Message.getFieldWithDefault(this,1,"")};proto.fCa.prototype.setVideoid=function(value){return jspb.Message.setProto3StringField(this,1,value)};proto.fCa.prototype.getLmt=function(){return jspb.Message.getFieldWithDefault(this,2,0)};proto.fCa.prototype.setLmt=function(value){return jspb.Message.setProto3IntField(this,2,value)};proto.dCa.repeatedFields_=[1];if(jspb.Message.GENERATE_TO_OBJECT){proto.dCa.prototype.toObject=function(opt_includeInstance){return proto.dCa.toObject(opt_includeInstance,this)};proto.dCa.toObject=function(includeInstance,msg){var f,obj={axList:jspb.Message.toObjectList(msg.getAxList(),proto.fCa.toObject,includeInstance)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.dCa.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.dCa;return proto.dCa.deserializeBinaryFromReader(msg,reader)};proto.dCa.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=new proto.fCa;reader.readMessage(value,proto.fCa.deserializeBinaryFromReader);msg.addAx(value);break;default:reader.skipField();break}}return msg};proto.dCa.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.dCa.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.dCa.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getAxList();if(f.length>0){writer.writeRepeatedMessage(1,f,proto.fCa.serializeBinaryToWriter)}};proto.dCa.prototype.getAxList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.fCa,1)};proto.dCa.prototype.setAxList=function(value){return jspb.Message.setRepeatedWrapperField(this,1,value)};proto.dCa.prototype.addAx=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,1,opt_value,proto.fCa,opt_index)};proto.dCa.prototype.clearAxList=function(){return this.setAxList([])};if(jspb.Message.GENERATE_TO_OBJECT){proto.VK.prototype.toObject=function(opt_includeInstance){return proto.VK.toObject(opt_includeInstance,this)};proto.VK.toObject=function(includeInstance,msg){var f,obj={tg:jspb.Message.getFieldWithDefault(msg,1,0),se:jspb.Message.getFieldWithDefault(msg,2,0),vs:jspb.Message.getFieldWithDefault(msg,3,0)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.VK.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.VK;return proto.VK.deserializeBinaryFromReader(msg,reader)};proto.VK.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt64();msg.setTg(value);break;case 2:var value=reader.readInt64();msg.setSe(value);break;case 3:var value=reader.readInt64();msg.setVs(value);break;default:reader.skipField();break}}return msg};proto.VK.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.VK.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.VK.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getTg();if(f!==0){writer.writeInt64(1,f)}f=message.getSe();if(f!==0){writer.writeInt64(2,f)}f=message.getVs();if(f!==0){writer.writeInt64(3,f)}};proto.VK.prototype.getTg=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.VK.prototype.setTg=function(value){return jspb.Message.setProto3IntField(this,1,value)};proto.VK.prototype.getSe=function(){return jspb.Message.getFieldWithDefault(this,2,0)};proto.VK.prototype.setSe=function(value){return jspb.Message.setProto3IntField(this,2,value)};proto.VK.prototype.getVs=function(){return jspb.Message.getFieldWithDefault(this,3,0)};proto.VK.prototype.setVs=function(value){return jspb.Message.setProto3IntField(this,3,value)};proto.SessionInfo.repeatedFields_=[5,6];if(jspb.Message.GENERATE_TO_OBJECT){proto.SessionInfo.prototype.toObject=function(opt_includeInstance){return proto.SessionInfo.toObject(opt_includeInstance,this)};proto.SessionInfo.toObject=function(includeInstance,msg){var f,obj={clientinfo:(f=msg.getClientinfo())&&proto.ClientInfo.toObject(includeInstance,f),pot:msg.getPot_asB64(),playbackcookie:msg.getPlaybackcookie_asB64(),qp:msg.getQp_asB64(),zmList:jspb.Message.toObjectList(msg.getZmList(),proto.lCa.toObject,includeInstance),fnList:(f=jspb.Message.getRepeatedField(msg,6))==null?undefined:f,bea:jspb.Message.getFieldWithDefault(msg,7,""),rb:(f=msg.getRb())&&proto.mCa.toObject(includeInstance,f)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.SessionInfo.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.SessionInfo;return proto.SessionInfo.deserializeBinaryFromReader(msg,reader)};proto.SessionInfo.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=new proto.ClientInfo;reader.readMessage(value,proto.ClientInfo.deserializeBinaryFromReader);msg.setClientinfo(value);break;case 2:var value=reader.readBytes();msg.setPot(value);break;case 3:var value=reader.readBytes();msg.setPlaybackcookie(value);break;case 4:var value=reader.readBytes();msg.setQp(value);break;case 5:var value=new proto.lCa;reader.readMessage(value,proto.lCa.deserializeBinaryFromReader);msg.addZm(value);break;case 6:var values=reader.isDelimited()?reader.readPackedInt64():[reader.readInt64()];for(var i=0;i<values.length;i++){msg.addFn(values[i])}break;case 7:var value=reader.readString();msg.setBea(value);break;case 8:var value=new proto.mCa;reader.readMessage(value,proto.mCa.deserializeBinaryFromReader);msg.setRb(value);break;default:reader.skipField();break}}return msg};proto.SessionInfo.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.SessionInfo.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.SessionInfo.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getClientinfo();if(f!=null){writer.writeMessage(1,f,proto.ClientInfo.serializeBinaryToWriter)}f=message.getPot_asU8();if(f.length>0){writer.writeBytes(2,f)}f=message.getPlaybackcookie_asU8();if(f.length>0){writer.writeBytes(3,f)}f=message.getQp_asU8();if(f.length>0){writer.writeBytes(4,f)}f=message.getZmList();if(f.length>0){writer.writeRepeatedMessage(5,f,proto.lCa.serializeBinaryToWriter)}f=message.getFnList();if(f.length>0){writer.writePackedInt64(6,f)}f=message.getBea();if(f.length>0){writer.writeString(7,f)}f=message.getRb();if(f!=null){writer.writeMessage(8,f,proto.mCa.serializeBinaryToWriter)}};proto.SessionInfo.prototype.getClientinfo=function(){return jspb.Message.getWrapperField(this,proto.ClientInfo,1)};proto.SessionInfo.prototype.setClientinfo=function(value){return jspb.Message.setWrapperField(this,1,value)};proto.SessionInfo.prototype.clearClientinfo=function(){return this.setClientinfo(undefined)};proto.SessionInfo.prototype.hasClientinfo=function(){return jspb.Message.getField(this,1)!=null};proto.SessionInfo.prototype.getPot=function(){return jspb.Message.getFieldWithDefault(this,2,"")};proto.SessionInfo.prototype.getPot_asB64=function(){return jspb.Message.bytesAsB64(this.getPot())};proto.SessionInfo.prototype.getPot_asU8=function(){return jspb.Message.bytesAsU8(this.getPot())};proto.SessionInfo.prototype.setPot=function(value){return jspb.Message.setProto3BytesField(this,2,value)};proto.SessionInfo.prototype.getPlaybackcookie=function(){return jspb.Message.getFieldWithDefault(this,3,"")};proto.SessionInfo.prototype.getPlaybackcookie_asB64=function(){return jspb.Message.bytesAsB64(this.getPlaybackcookie())};proto.SessionInfo.prototype.getPlaybackcookie_asU8=function(){return jspb.Message.bytesAsU8(this.getPlaybackcookie())};proto.SessionInfo.prototype.setPlaybackcookie=function(value){return jspb.Message.setProto3BytesField(this,3,value)};proto.SessionInfo.prototype.getQp=function(){return jspb.Message.getFieldWithDefault(this,4,"")};proto.SessionInfo.prototype.getQp_asB64=function(){return jspb.Message.bytesAsB64(this.getQp())};proto.SessionInfo.prototype.getQp_asU8=function(){return jspb.Message.bytesAsU8(this.getQp())};proto.SessionInfo.prototype.setQp=function(value){return jspb.Message.setProto3BytesField(this,4,value)};proto.SessionInfo.prototype.getZmList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.lCa,5)};proto.SessionInfo.prototype.setZmList=function(value){return jspb.Message.setRepeatedWrapperField(this,5,value)};proto.SessionInfo.prototype.addZm=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,5,opt_value,proto.lCa,opt_index)};proto.SessionInfo.prototype.clearZmList=function(){return this.setZmList([])};proto.SessionInfo.prototype.getFnList=function(){return jspb.Message.getRepeatedField(this,6)};proto.SessionInfo.prototype.setFnList=function(value){return jspb.Message.setField(this,6,value||[])};proto.SessionInfo.prototype.addFn=function(value,opt_index){return jspb.Message.addToRepeatedField(this,6,value,opt_index)};proto.SessionInfo.prototype.clearFnList=function(){return this.setFnList([])};proto.SessionInfo.prototype.getBea=function(){return jspb.Message.getFieldWithDefault(this,7,"")};proto.SessionInfo.prototype.setBea=function(value){return jspb.Message.setProto3StringField(this,7,value)};proto.SessionInfo.prototype.getRb=function(){return jspb.Message.getWrapperField(this,proto.mCa,8)};proto.SessionInfo.prototype.setRb=function(value){return jspb.Message.setWrapperField(this,8,value)};proto.SessionInfo.prototype.clearRb=function(){return this.setRb(undefined)};proto.SessionInfo.prototype.hasRb=function(){return jspb.Message.getField(this,8)!=null};if(jspb.Message.GENERATE_TO_OBJECT){proto.ClientInfo.prototype.toObject=function(opt_includeInstance){return proto.ClientInfo.toObject(opt_includeInstance,this)};proto.ClientInfo.toObject=function(includeInstance,msg){var f,obj={devicemake:jspb.Message.getFieldWithDefault(msg,12,""),devicemodel:jspb.Message.getFieldWithDefault(msg,13,""),clientname:jspb.Message.getFieldWithDefault(msg,16,0),clientversion:jspb.Message.getFieldWithDefault(msg,17,""),osname:jspb.Message.getFieldWithDefault(msg,18,""),osversion:jspb.Message.getFieldWithDefault(msg,19,"")};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.ClientInfo.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.ClientInfo;return proto.ClientInfo.deserializeBinaryFromReader(msg,reader)};proto.ClientInfo.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 12:var value=reader.readString();msg.setDevicemake(value);break;case 13:var value=reader.readString();msg.setDevicemodel(value);break;case 16:var value=reader.readInt64();msg.setClientname(value);break;case 17:var value=reader.readString();msg.setClientversion(value);break;case 18:var value=reader.readString();msg.setOsname(value);break;case 19:var value=reader.readString();msg.setOsversion(value);break;default:reader.skipField();break}}return msg};proto.ClientInfo.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.ClientInfo.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.ClientInfo.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getDevicemake();if(f.length>0){writer.writeString(12,f)}f=message.getDevicemodel();if(f.length>0){writer.writeString(13,f)}f=message.getClientname();if(f!==0){writer.writeInt64(16,f)}f=message.getClientversion();if(f.length>0){writer.writeString(17,f)}f=message.getOsname();if(f.length>0){writer.writeString(18,f)}f=message.getOsversion();if(f.length>0){writer.writeString(19,f)}};proto.ClientInfo.prototype.getDevicemake=function(){return jspb.Message.getFieldWithDefault(this,12,"")};proto.ClientInfo.prototype.setDevicemake=function(value){return jspb.Message.setProto3StringField(this,12,value)};proto.ClientInfo.prototype.getDevicemodel=function(){return jspb.Message.getFieldWithDefault(this,13,"")};proto.ClientInfo.prototype.setDevicemodel=function(value){return jspb.Message.setProto3StringField(this,13,value)};proto.ClientInfo.prototype.getClientname=function(){return jspb.Message.getFieldWithDefault(this,16,0)};proto.ClientInfo.prototype.setClientname=function(value){return jspb.Message.setProto3IntField(this,16,value)};proto.ClientInfo.prototype.getClientversion=function(){return jspb.Message.getFieldWithDefault(this,17,"")};proto.ClientInfo.prototype.setClientversion=function(value){return jspb.Message.setProto3StringField(this,17,value)};proto.ClientInfo.prototype.getOsname=function(){return jspb.Message.getFieldWithDefault(this,18,"")};proto.ClientInfo.prototype.setOsname=function(value){return jspb.Message.setProto3StringField(this,18,value)};proto.ClientInfo.prototype.getOsversion=function(){return jspb.Message.getFieldWithDefault(this,19,"")};proto.ClientInfo.prototype.setOsversion=function(value){return jspb.Message.setProto3StringField(this,19,value)};if(jspb.Message.GENERATE_TO_OBJECT){proto.lCa.prototype.toObject=function(opt_includeInstance){return proto.lCa.toObject(opt_includeInstance,this)};proto.lCa.toObject=function(includeInstance,msg){var f,obj={type:jspb.Message.getFieldWithDefault(msg,1,0),value:msg.getValue_asB64()};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.lCa.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.lCa;return proto.lCa.deserializeBinaryFromReader(msg,reader)};proto.lCa.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt64();msg.setType(value);break;case 2:var value=reader.readBytes();msg.setValue(value);break;default:reader.skipField();break}}return msg};proto.lCa.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.lCa.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.lCa.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getType();if(f!==0){writer.writeInt64(1,f)}f=message.getValue_asU8();if(f.length>0){writer.writeBytes(2,f)}};proto.lCa.prototype.getType=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.lCa.prototype.setType=function(value){return jspb.Message.setProto3IntField(this,1,value)};proto.lCa.prototype.getValue=function(){return jspb.Message.getFieldWithDefault(this,2,"")};proto.lCa.prototype.getValue_asB64=function(){return jspb.Message.bytesAsB64(this.getValue())};proto.lCa.prototype.getValue_asU8=function(){return jspb.Message.bytesAsU8(this.getValue())};proto.lCa.prototype.setValue=function(value){return jspb.Message.setProto3BytesField(this,2,value)};if(jspb.Message.GENERATE_TO_OBJECT){proto.mCa.prototype.toObject=function(opt_includeInstance){return proto.mCa.toObject(opt_includeInstance,this)};proto.mCa.toObject=function(includeInstance,msg){var f,obj={gda:msg.getGda_asB64(),fda:(f=msg.getFda())&&proto.oCa.toObject(includeInstance,f),coldstartinfo:(f=msg.getColdstartinfo())&&proto.pCa.toObject(includeInstance,f)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.mCa.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.mCa;return proto.mCa.deserializeBinaryFromReader(msg,reader)};proto.mCa.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readBytes();msg.setGda(value);break;case 2:var value=new proto.oCa;reader.readMessage(value,proto.oCa.deserializeBinaryFromReader);msg.setFda(value);break;case 3:var value=new proto.pCa;reader.readMessage(value,proto.pCa.deserializeBinaryFromReader);msg.setColdstartinfo(value);break;default:reader.skipField();break}}return msg};proto.mCa.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.mCa.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.mCa.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getGda_asU8();if(f.length>0){writer.writeBytes(1,f)}f=message.getFda();if(f!=null){writer.writeMessage(2,f,proto.oCa.serializeBinaryToWriter)}f=message.getColdstartinfo();if(f!=null){writer.writeMessage(3,f,proto.pCa.serializeBinaryToWriter)}};proto.mCa.prototype.getGda=function(){return jspb.Message.getFieldWithDefault(this,1,"")};proto.mCa.prototype.getGda_asB64=function(){return jspb.Message.bytesAsB64(this.getGda())};proto.mCa.prototype.getGda_asU8=function(){return jspb.Message.bytesAsU8(this.getGda())};proto.mCa.prototype.setGda=function(value){return jspb.Message.setProto3BytesField(this,1,value)};proto.mCa.prototype.getFda=function(){return jspb.Message.getWrapperField(this,proto.oCa,2)};proto.mCa.prototype.setFda=function(value){return jspb.Message.setWrapperField(this,2,value)};proto.mCa.prototype.clearFda=function(){return this.setFda(undefined)};proto.mCa.prototype.hasFda=function(){return jspb.Message.getField(this,2)!=null};proto.mCa.prototype.getColdstartinfo=function(){return jspb.Message.getWrapperField(this,proto.pCa,3)};proto.mCa.prototype.setColdstartinfo=function(value){return jspb.Message.setWrapperField(this,3,value)};proto.mCa.prototype.clearColdstartinfo=function(){return this.setColdstartinfo(undefined)};proto.mCa.prototype.hasColdstartinfo=function(){return jspb.Message.getField(this,3)!=null};if(jspb.Message.GENERATE_TO_OBJECT){proto.oCa.prototype.toObject=function(opt_includeInstance){return proto.oCa.toObject(opt_includeInstance,this)};proto.oCa.toObject=function(includeInstance,msg){var f,obj={code:jspb.Message.getFieldWithDefault(msg,8,0),message:jspb.Message.getFieldWithDefault(msg,2,"")};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.oCa.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.oCa;return proto.oCa.deserializeBinaryFromReader(msg,reader)};proto.oCa.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 8:var value=reader.readInt32();msg.setCode(value);break;case 2:var value=reader.readString();msg.setMessage(value);break;default:reader.skipField();break}}return msg};proto.oCa.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.oCa.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.oCa.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getCode();if(f!==0){writer.writeInt32(8,f)}f=message.getMessage();if(f.length>0){writer.writeString(2,f)}};proto.oCa.prototype.getCode=function(){return jspb.Message.getFieldWithDefault(this,8,0)};proto.oCa.prototype.setCode=function(value){return jspb.Message.setProto3IntField(this,8,value)};proto.oCa.prototype.getMessage=function(){return jspb.Message.getFieldWithDefault(this,2,"")};proto.oCa.prototype.setMessage=function(value){return jspb.Message.setProto3StringField(this,2,value)};if(jspb.Message.GENERATE_TO_OBJECT){proto.pCa.prototype.toObject=function(opt_includeInstance){return proto.pCa.toObject(opt_includeInstance,this)};proto.pCa.toObject=function(includeInstance,msg){var f,obj={clientstate:jspb.Message.getFieldWithDefault(msg,1,0),xoa:(f=msg.getXoa())&&proto.nCa.toObject(includeInstance,f)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.pCa.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.pCa;return proto.pCa.deserializeBinaryFromReader(msg,reader)};proto.pCa.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt64();msg.setClientstate(value);break;case 2:var value=new proto.nCa;reader.readMessage(value,proto.nCa.deserializeBinaryFromReader);msg.setXoa(value);break;default:reader.skipField();break}}return msg};proto.pCa.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.pCa.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.pCa.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getClientstate();if(f!==0){writer.writeInt64(1,f)}f=message.getXoa();if(f!=null){writer.writeMessage(2,f,proto.nCa.serializeBinaryToWriter)}};proto.pCa.prototype.getClientstate=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.pCa.prototype.setClientstate=function(value){return jspb.Message.setProto3IntField(this,1,value)};proto.pCa.prototype.getXoa=function(){return jspb.Message.getWrapperField(this,proto.nCa,2)};proto.pCa.prototype.setXoa=function(value){return jspb.Message.setWrapperField(this,2,value)};proto.pCa.prototype.clearXoa=function(){return this.setXoa(undefined)};proto.pCa.prototype.hasXoa=function(){return jspb.Message.getField(this,2)!=null};if(jspb.Message.GENERATE_TO_OBJECT){proto.nCa.prototype.toObject=function(opt_includeInstance){return proto.nCa.toObject(opt_includeInstance,this)};proto.nCa.toObject=function(includeInstance,msg){var f,obj={noa:jspb.Message.getFieldWithDefault(msg,1,0),woa:jspb.Message.getFieldWithDefault(msg,2,0)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.nCa.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.nCa;return proto.nCa.deserializeBinaryFromReader(msg,reader)};proto.nCa.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readInt64();msg.setNoa(value);break;case 2:var value=reader.readInt64();msg.setWoa(value);break;default:reader.skipField();break}}return msg};proto.nCa.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.nCa.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.nCa.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getNoa();if(f!==0){writer.writeInt64(1,f)}f=message.getWoa();if(f!==0){writer.writeInt64(2,f)}};proto.nCa.prototype.getNoa=function(){return jspb.Message.getFieldWithDefault(this,1,0)};proto.nCa.prototype.setNoa=function(value){return jspb.Message.setProto3IntField(this,1,value)};proto.nCa.prototype.getWoa=function(){return jspb.Message.getFieldWithDefault(this,2,0)};proto.nCa.prototype.setWoa=function(value){return jspb.Message.setProto3IntField(this,2,value)};proto.wCa.repeatedFields_=[1];if(jspb.Message.GENERATE_TO_OBJECT){proto.wCa.prototype.toObject=function(opt_includeInstance){return proto.wCa.toObject(opt_includeInstance,this)};proto.wCa.toObject=function(includeInstance,msg){var f,obj={uiList:(f=jspb.Message.getRepeatedField(msg,1))==null?undefined:f,fx:msg.getFx_asB64(),ot:jspb.Message.getFieldWithDefault(msg,3,""),ku:jspb.Message.getFieldWithDefault(msg,4,0),z3:jspb.Message.getFieldWithDefault(msg,5,0),a4:jspb.Message.getFieldWithDefault(msg,6,"")};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.wCa.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.wCa;return proto.wCa.deserializeBinaryFromReader(msg,reader)};proto.wCa.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=reader.readString();msg.addUi(value);break;case 2:var value=reader.readBytes();msg.setFx(value);break;case 3:var value=reader.readString();msg.setOt(value);break;case 4:var value=reader.readInt64();msg.setKu(value);break;case 5:var value=reader.readInt64();msg.setZ3(value);break;case 6:var value=reader.readString();msg.setA4(value);break;default:reader.skipField();break}}return msg};proto.wCa.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.wCa.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.wCa.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getUiList();if(f.length>0){writer.writeRepeatedString(1,f)}f=message.getFx_asU8();if(f.length>0){writer.writeBytes(2,f)}f=message.getOt();if(f.length>0){writer.writeString(3,f)}f=message.getKu();if(f!==0){writer.writeInt64(4,f)}f=message.getZ3();if(f!==0){writer.writeInt64(5,f)}f=message.getA4();if(f.length>0){writer.writeString(6,f)}};proto.wCa.prototype.getUiList=function(){return jspb.Message.getRepeatedField(this,1)};proto.wCa.prototype.setUiList=function(value){return jspb.Message.setField(this,1,value||[])};proto.wCa.prototype.addUi=function(value,opt_index){return jspb.Message.addToRepeatedField(this,1,value,opt_index)};proto.wCa.prototype.clearUiList=function(){return this.setUiList([])};proto.wCa.prototype.getFx=function(){return jspb.Message.getFieldWithDefault(this,2,"")};proto.wCa.prototype.getFx_asB64=function(){return jspb.Message.bytesAsB64(this.getFx())};proto.wCa.prototype.getFx_asU8=function(){return jspb.Message.bytesAsU8(this.getFx())};proto.wCa.prototype.setFx=function(value){return jspb.Message.setProto3BytesField(this,2,value)};proto.wCa.prototype.getOt=function(){return jspb.Message.getFieldWithDefault(this,3,"")};proto.wCa.prototype.setOt=function(value){return jspb.Message.setProto3StringField(this,3,value)};proto.wCa.prototype.getKu=function(){return jspb.Message.getFieldWithDefault(this,4,0)};proto.wCa.prototype.setKu=function(value){return jspb.Message.setProto3IntField(this,4,value)};proto.wCa.prototype.getZ3=function(){return jspb.Message.getFieldWithDefault(this,5,0)};proto.wCa.prototype.setZ3=function(value){return jspb.Message.setProto3IntField(this,5,value)};proto.wCa.prototype.getA4=function(){return jspb.Message.getFieldWithDefault(this,6,"")};proto.wCa.prototype.setA4=function(value){return jspb.Message.setProto3StringField(this,6,value)};proto.xCa.repeatedFields_=[1,2];if(jspb.Message.GENERATE_TO_OBJECT){proto.xCa.prototype.toObject=function(opt_includeInstance){return proto.xCa.toObject(opt_includeInstance,this)};proto.xCa.toObject=function(includeInstance,msg){var f,obj={exList:jspb.Message.toObjectList(msg.getExList(),proto.FormatId.toObject,includeInstance),kdList:jspb.Message.toObjectList(msg.getKdList(),proto.BufferedStreamInfo.toObject,includeInstance),clipid:jspb.Message.getFieldWithDefault(msg,3,"")};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.xCa.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.xCa;return proto.xCa.deserializeBinaryFromReader(msg,reader)};proto.xCa.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=new proto.FormatId;reader.readMessage(value,proto.FormatId.deserializeBinaryFromReader);msg.addEx(value);break;case 2:var value=new proto.BufferedStreamInfo;reader.readMessage(value,proto.BufferedStreamInfo.deserializeBinaryFromReader);msg.addKd(value);break;case 3:var value=reader.readString();msg.setClipid(value);break;default:reader.skipField();break}}return msg};proto.xCa.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.xCa.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.xCa.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getExList();if(f.length>0){writer.writeRepeatedMessage(1,f,proto.FormatId.serializeBinaryToWriter)}f=message.getKdList();if(f.length>0){writer.writeRepeatedMessage(2,f,proto.BufferedStreamInfo.serializeBinaryToWriter)}f=message.getClipid();if(f.length>0){writer.writeString(3,f)}};proto.xCa.prototype.getExList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.FormatId,1)};proto.xCa.prototype.setExList=function(value){return jspb.Message.setRepeatedWrapperField(this,1,value)};proto.xCa.prototype.addEx=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,1,opt_value,proto.FormatId,opt_index)};proto.xCa.prototype.clearExList=function(){return this.setExList([])};proto.xCa.prototype.getKdList=function(){return jspb.Message.getRepeatedWrapperField(this,proto.BufferedStreamInfo,2)};proto.xCa.prototype.setKdList=function(value){return jspb.Message.setRepeatedWrapperField(this,2,value)};proto.xCa.prototype.addKd=function(opt_value,opt_index){return jspb.Message.addToRepeatedWrapperField(this,2,opt_value,proto.BufferedStreamInfo,opt_index)};proto.xCa.prototype.clearKdList=function(){return this.setKdList([])};proto.xCa.prototype.getClipid=function(){return jspb.Message.getFieldWithDefault(this,3,"")};proto.xCa.prototype.setClipid=function(value){return jspb.Message.setProto3StringField(this,3,value)};if(jspb.Message.GENERATE_TO_OBJECT){proto.BufferedStreamInfo.prototype.toObject=function(opt_includeInstance){return proto.BufferedStreamInfo.toObject(opt_includeInstance,this)};proto.BufferedStreamInfo.toObject=function(includeInstance,msg){var f,obj={formatid:(f=msg.getFormatid())&&proto.FormatId.toObject(includeInstance,f),bufferedstarttimems:jspb.Message.getFieldWithDefault(msg,2,0),buffereddurationms:jspb.Message.getFieldWithDefault(msg,3,0),bufferedsegmentstartindex:jspb.Message.getFieldWithDefault(msg,4,0),bufferedsegmentendindex:jspb.Message.getFieldWithDefault(msg,5,0),nma:(f=msg.getNma())&&proto.dCa.toObject(includeInstance,f),mpa:(f=msg.getMpa())&&proto.VK.toObject(includeInstance,f),ps:(f=msg.getPs())&&proto.VK.toObject(includeInstance,f)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.BufferedStreamInfo.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.BufferedStreamInfo;return proto.BufferedStreamInfo.deserializeBinaryFromReader(msg,reader)};proto.BufferedStreamInfo.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=new proto.FormatId;reader.readMessage(value,proto.FormatId.deserializeBinaryFromReader);msg.setFormatid(value);break;case 2:var value=reader.readInt64();msg.setBufferedstarttimems(value);break;case 3:var value=reader.readInt64();msg.setBuffereddurationms(value);break;case 4:var value=reader.readInt64();msg.setBufferedsegmentstartindex(value);break;case 5:var value=reader.readInt64();msg.setBufferedsegmentendindex(value);break;case 9:var value=new proto.dCa;reader.readMessage(value,proto.dCa.deserializeBinaryFromReader);msg.setNma(value);break;case 11:var value=new proto.VK;reader.readMessage(value,proto.VK.deserializeBinaryFromReader);msg.setMpa(value);break;case 12:var value=new proto.VK;reader.readMessage(value,proto.VK.deserializeBinaryFromReader);msg.setPs(value);break;default:reader.skipField();break}}return msg};proto.BufferedStreamInfo.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.BufferedStreamInfo.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.BufferedStreamInfo.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getFormatid();if(f!=null){writer.writeMessage(1,f,proto.FormatId.serializeBinaryToWriter)}f=message.getBufferedstarttimems();if(f!==0){writer.writeInt64(2,f)}f=message.getBuffereddurationms();if(f!==0){writer.writeInt64(3,f)}f=message.getBufferedsegmentstartindex();if(f!==0){writer.writeInt64(4,f)}f=message.getBufferedsegmentendindex();if(f!==0){writer.writeInt64(5,f)}f=message.getNma();if(f!=null){writer.writeMessage(9,f,proto.dCa.serializeBinaryToWriter)}f=message.getMpa();if(f!=null){writer.writeMessage(11,f,proto.VK.serializeBinaryToWriter)}f=message.getPs();if(f!=null){writer.writeMessage(12,f,proto.VK.serializeBinaryToWriter)}};proto.BufferedStreamInfo.prototype.getFormatid=function(){return jspb.Message.getWrapperField(this,proto.FormatId,1)};proto.BufferedStreamInfo.prototype.setFormatid=function(value){return jspb.Message.setWrapperField(this,1,value)};proto.BufferedStreamInfo.prototype.clearFormatid=function(){return this.setFormatid(undefined)};proto.BufferedStreamInfo.prototype.hasFormatid=function(){return jspb.Message.getField(this,1)!=null};proto.BufferedStreamInfo.prototype.getBufferedstarttimems=function(){return jspb.Message.getFieldWithDefault(this,2,0)};proto.BufferedStreamInfo.prototype.setBufferedstarttimems=function(value){return jspb.Message.setProto3IntField(this,2,value)};proto.BufferedStreamInfo.prototype.getBuffereddurationms=function(){return jspb.Message.getFieldWithDefault(this,3,0)};proto.BufferedStreamInfo.prototype.setBuffereddurationms=function(value){return jspb.Message.setProto3IntField(this,3,value)};proto.BufferedStreamInfo.prototype.getBufferedsegmentstartindex=function(){return jspb.Message.getFieldWithDefault(this,4,0)};proto.BufferedStreamInfo.prototype.setBufferedsegmentstartindex=function(value){return jspb.Message.setProto3IntField(this,4,value)};proto.BufferedStreamInfo.prototype.getBufferedsegmentendindex=function(){return jspb.Message.getFieldWithDefault(this,5,0)};proto.BufferedStreamInfo.prototype.setBufferedsegmentendindex=function(value){return jspb.Message.setProto3IntField(this,5,value)};proto.BufferedStreamInfo.prototype.getNma=function(){return jspb.Message.getWrapperField(this,proto.dCa,9)};proto.BufferedStreamInfo.prototype.setNma=function(value){return jspb.Message.setWrapperField(this,9,value)};proto.BufferedStreamInfo.prototype.clearNma=function(){return this.setNma(undefined)};proto.BufferedStreamInfo.prototype.hasNma=function(){return jspb.Message.getField(this,9)!=null};proto.BufferedStreamInfo.prototype.getMpa=function(){return jspb.Message.getWrapperField(this,proto.VK,11)};proto.BufferedStreamInfo.prototype.setMpa=function(value){return jspb.Message.setWrapperField(this,11,value)};proto.BufferedStreamInfo.prototype.clearMpa=function(){return this.setMpa(undefined)};proto.BufferedStreamInfo.prototype.hasMpa=function(){return jspb.Message.getField(this,11)!=null};proto.BufferedStreamInfo.prototype.getPs=function(){return jspb.Message.getWrapperField(this,proto.VK,12)};proto.BufferedStreamInfo.prototype.setPs=function(value){return jspb.Message.setWrapperField(this,12,value)};proto.BufferedStreamInfo.prototype.clearPs=function(){return this.setPs(undefined)};proto.BufferedStreamInfo.prototype.hasPs=function(){return jspb.Message.getField(this,12)!=null};if(jspb.Message.GENERATE_TO_OBJECT){proto.vCa.prototype.toObject=function(opt_includeInstance){return proto.vCa.toObject(opt_includeInstance,this)};proto.vCa.toObject=function(includeInstance,msg){var f,obj={formatid:(f=msg.getFormatid())&&proto.FormatId.toObject(includeInstance,f),tj:jspb.Message.getFieldWithDefault(msg,2,0),sequencenumber:jspb.Message.getFieldWithDefault(msg,3,0),uj:(f=msg.getUj())&&proto.VK.toObject(includeInstance,f),s:jspb.Message.getFieldWithDefault(msg,5,0),i8:jspb.Message.getFieldWithDefault(msg,6,0)};if(includeInstance){obj.$jspbMessageInstance=msg}return obj}}proto.vCa.deserializeBinary=function(bytes){var reader=new jspb.BinaryReader(bytes);var msg=new proto.vCa;return proto.vCa.deserializeBinaryFromReader(msg,reader)};proto.vCa.deserializeBinaryFromReader=function(msg,reader){while(reader.nextField()){if(reader.isEndGroup()){break}var field=reader.getFieldNumber();switch(field){case 1:var value=new proto.FormatId;reader.readMessage(value,proto.FormatId.deserializeBinaryFromReader);msg.setFormatid(value);break;case 2:var value=reader.readInt64();msg.setTj(value);break;case 3:var value=reader.readInt64();msg.setSequencenumber(value);break;case 4:var value=new proto.VK;reader.readMessage(value,proto.VK.deserializeBinaryFromReader);msg.setUj(value);break;case 5:var value=reader.readInt64();msg.setS(value);break;case 6:var value=reader.readInt64();msg.setI8(value);break;default:reader.skipField();break}}return msg};proto.vCa.prototype.serializeBinary=function(){var writer=new jspb.BinaryWriter;proto.vCa.serializeBinaryToWriter(this,writer);return writer.getResultBuffer()};proto.vCa.serializeBinaryToWriter=function(message,writer){var f=undefined;f=message.getFormatid();if(f!=null){writer.writeMessage(1,f,proto.FormatId.serializeBinaryToWriter)}f=message.getTj();if(f!==0){writer.writeInt64(2,f)}f=message.getSequencenumber();if(f!==0){writer.writeInt64(3,f)}f=message.getUj();if(f!=null){writer.writeMessage(4,f,proto.VK.serializeBinaryToWriter)}f=message.getS();if(f!==0){writer.writeInt64(5,f)}f=message.getI8();if(f!==0){writer.writeInt64(6,f)}};proto.vCa.prototype.getFormatid=function(){return jspb.Message.getWrapperField(this,proto.FormatId,1)};proto.vCa.prototype.setFormatid=function(value){return jspb.Message.setWrapperField(this,1,value)};proto.vCa.prototype.clearFormatid=function(){return this.setFormatid(undefined)};proto.vCa.prototype.hasFormatid=function(){return jspb.Message.getField(this,1)!=null};proto.vCa.prototype.getTj=function(){return jspb.Message.getFieldWithDefault(this,2,0)};proto.vCa.prototype.setTj=function(value){return jspb.Message.setProto3IntField(this,2,value)};proto.vCa.prototype.getSequencenumber=function(){return jspb.Message.getFieldWithDefault(this,3,0)};proto.vCa.prototype.setSequencenumber=function(value){return jspb.Message.setProto3IntField(this,3,value)};proto.vCa.prototype.getUj=function(){return jspb.Message.getWrapperField(this,proto.VK,4)};proto.vCa.prototype.setUj=function(value){return jspb.Message.setWrapperField(this,4,value)};proto.vCa.prototype.clearUj=function(){return this.setUj(undefined)};proto.vCa.prototype.hasUj=function(){return jspb.Message.getField(this,4)!=null};proto.vCa.prototype.getS=function(){return jspb.Message.getFieldWithDefault(this,5,0)};proto.vCa.prototype.setS=function(value){return jspb.Message.setProto3IntField(this,5,value)};proto.vCa.prototype.getI8=function(){return jspb.Message.getFieldWithDefault(this,6,0)};proto.vCa.prototype.setI8=function(value){return jspb.Message.setProto3IntField(this,6,value)};proto.MediaType={NONE:0,AUDIO:1,VIDEO:2,AUDIO_VIDEO:3};goog.object.extend(exports,proto);
	
	},{"./google-protobuf.min.js":21}],21:[function(require,module,exports){
	(function (global){(function (){
	/**
	 * Skipped minification because the original files appears to be already minified.
	 * Original file: /npm/google-protobuf@3.21.4/google-protobuf.js
	 *
	 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
	 */
	/*
	
	 Copyright The Closure Library Authors.
	 SPDX-License-Identifier: Apache-2.0
	*/
	var aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},e="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function ba(a,b){if(b){var c=e;a=a.split(".");for(var d=0;d<a.length-1;d++){var f=a[d];f in c||(c[f]={});c=c[f]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
	function ca(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}function da(){da=function(){};e.Symbol||(e.Symbol=ea)}function fa(a,b){this.a=a;aa(this,"description",{configurable:!0,writable:!0,value:b})}fa.prototype.toString=function(){return this.a};var ea=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new fa("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();
	function ha(){da();var a=e.Symbol.iterator;a||(a=e.Symbol.iterator=e.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(ca(this))}});ha=function(){}}function ia(a){ha();a={next:a};a[e.Symbol.iterator]=function(){return this};return a}
	function ja(a,b){ha();a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d.next=function(){return{done:!0,value:void 0}};return d.next()}};d[Symbol.iterator]=function(){return d};return d}ba("Array.prototype.entries",function(a){return a?a:function(){return ja(this,function(b,c){return[b,c]})}});var ka=this||self;
	function g(a,b,c){a=a.split(".");c=c||ka;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
	function k(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
	else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function la(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ma(a,b,c){g(a,b,c)}function na(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var oa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pa(a,b){for(var c,d,f=1;f<arguments.length;f++){d=arguments[f];for(c in d)a[c]=d[c];for(var h=0;h<oa.length;h++)c=oa[h],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var qa=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in d&&b.call(void 0,d[f],f,a)},l=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),f="string"===typeof a?a.split(""):a,h=0;h<c;h++)h in f&&(d[h]=b.call(void 0,f[h],h,a));return d};
	function ra(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)};function sa(a,b,c,d){var f="Assertion failed";if(c){f+=": "+c;var h=d}else a&&(f+=": "+a,h=b);throw Error(f,h||[]);}function n(a,b,c){for(var d=[],f=2;f<arguments.length;++f)d[f-2]=arguments[f];a||sa("",null,b,d);return a}function ta(a,b,c){for(var d=[],f=2;f<arguments.length;++f)d[f-2]=arguments[f];"string"!==typeof a&&sa("Expected string but got %s: %s.",[k(a),a],b,d)}
	function ua(a,b,c){for(var d=[],f=2;f<arguments.length;++f)d[f-2]=arguments[f];Array.isArray(a)||sa("Expected array but got %s: %s.",[k(a),a],b,d)}function p(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];throw Error("Failure"+(a?": "+a:""),c);}function q(a,b,c,d){for(var f=[],h=3;h<arguments.length;++h)f[h-3]=arguments[h];a instanceof b||sa("Expected instanceof %s but got %s.",[va(b),va(a)],c,f)}
	function va(a){return a instanceof Function?a.displayName||a.name||"unknown type name":a instanceof Object?a.constructor.displayName||a.constructor.name||Object.prototype.toString.call(a):null===a?"null":typeof a};function r(a,b){this.c=a;this.b=b;this.a={};this.arrClean=!0;if(0<this.c.length){for(a=0;a<this.c.length;a++){b=this.c[a];var c=b[0];this.a[c.toString()]=new wa(c,b[1])}this.arrClean=!0}}g("jspb.Map",r,void 0);
	r.prototype.g=function(){if(this.arrClean){if(this.b){var a=this.a,b;for(b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b].a;c&&c.g()}}}else{this.c.length=0;a=u(this);a.sort();for(b=0;b<a.length;b++){var d=this.a[a[b]];(c=d.a)&&c.g();this.c.push([d.key,d.value])}this.arrClean=!0}return this.c};r.prototype.toArray=r.prototype.g;
	r.prototype.Mc=function(a,b){for(var c=this.g(),d=[],f=0;f<c.length;f++){var h=this.a[c[f][0].toString()];v(this,h);var m=h.a;m?(n(b),d.push([h.key,b(a,m)])):d.push([h.key,h.value])}return d};r.prototype.toObject=r.prototype.Mc;r.fromObject=function(a,b,c){b=new r([],b);for(var d=0;d<a.length;d++){var f=a[d][0],h=c(a[d][1]);b.set(f,h)}return b};function w(a){this.a=0;this.b=a}w.prototype.next=function(){return this.a<this.b.length?{done:!1,value:this.b[this.a++]}:{done:!0,value:void 0}};
	"undefined"!=typeof Symbol&&(w.prototype[Symbol.iterator]=function(){return this});r.prototype.Jb=function(){return u(this).length};r.prototype.getLength=r.prototype.Jb;r.prototype.clear=function(){this.a={};this.arrClean=!1};r.prototype.clear=r.prototype.clear;r.prototype.Cb=function(a){a=a.toString();var b=this.a.hasOwnProperty(a);delete this.a[a];this.arrClean=!1;return b};r.prototype.del=r.prototype.Cb;
	r.prototype.Eb=function(){var a=[],b=u(this);b.sort();for(var c=0;c<b.length;c++){var d=this.a[b[c]];a.push([d.key,d.value])}return a};r.prototype.getEntryList=r.prototype.Eb;r.prototype.entries=function(){var a=[],b=u(this);b.sort();for(var c=0;c<b.length;c++){var d=this.a[b[c]];a.push([d.key,v(this,d)])}return new w(a)};r.prototype.entries=r.prototype.entries;r.prototype.keys=function(){var a=[],b=u(this);b.sort();for(var c=0;c<b.length;c++)a.push(this.a[b[c]].key);return new w(a)};
	r.prototype.keys=r.prototype.keys;r.prototype.values=function(){var a=[],b=u(this);b.sort();for(var c=0;c<b.length;c++)a.push(v(this,this.a[b[c]]));return new w(a)};r.prototype.values=r.prototype.values;r.prototype.forEach=function(a,b){var c=u(this);c.sort();for(var d=0;d<c.length;d++){var f=this.a[c[d]];a.call(b,v(this,f),f.key,this)}};r.prototype.forEach=r.prototype.forEach;
	r.prototype.set=function(a,b){var c=new wa(a);this.b?(c.a=b,c.value=b.g()):c.value=b;this.a[a.toString()]=c;this.arrClean=!1;return this};r.prototype.set=r.prototype.set;function v(a,b){return a.b?(b.a||(b.a=new a.b(b.value)),b.a):b.value}r.prototype.get=function(a){if(a=this.a[a.toString()])return v(this,a)};r.prototype.get=r.prototype.get;r.prototype.has=function(a){return a.toString()in this.a};r.prototype.has=r.prototype.has;
	r.prototype.Jc=function(a,b,c,d,f){var h=u(this);h.sort();for(var m=0;m<h.length;m++){var t=this.a[h[m]];b.Va(a);c.call(b,1,t.key);this.b?d.call(b,2,v(this,t),f):d.call(b,2,t.value);b.Ya()}};r.prototype.serializeBinary=r.prototype.Jc;r.deserializeBinary=function(a,b,c,d,f,h,m){for(;b.oa()&&!b.bb();){var t=b.c;1==t?h=c.call(b):2==t&&(a.b?(n(f),m||(m=new a.b),d.call(b,m,f)):m=d.call(b))}n(void 0!=h);n(void 0!=m);a.set(h,m)};
	function u(a){a=a.a;var b=[],c;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.push(c);return b}function wa(a,b){this.key=a;this.value=b;this.a=void 0};function xa(a){if(8192>=a.length)return String.fromCharCode.apply(null,a);for(var b="",c=0;c<a.length;c+=8192)b+=String.fromCharCode.apply(null,ra(a,c,c+8192));return b};var ya={"\x00":"\\0","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\x0B",'"':'\\"',"\\":"\\\\","<":"\\u003C"},za={"'":"\\'"};var Aa={},x=null;function Ba(a,b){void 0===b&&(b=0);Ca();b=Aa[b];for(var c=[],d=0;d<a.length;d+=3){var f=a[d],h=d+1<a.length,m=h?a[d+1]:0,t=d+2<a.length,B=t?a[d+2]:0,M=f>>2;f=(f&3)<<4|m>>4;m=(m&15)<<2|B>>6;B&=63;t||(B=64,h||(m=64));c.push(b[M],b[f],b[m]||"",b[B]||"")}return c.join("")}function Da(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),f=0;Ea(a,function(h){d[f++]=h});return d.subarray(0,f)}
	function Ea(a,b){function c(B){for(;d<a.length;){var M=a.charAt(d++),La=x[M];if(null!=La)return La;if(!/^[\s\xa0]*$/.test(M))throw Error("Unknown base64 encoding at char: "+M);}return B}Ca();for(var d=0;;){var f=c(-1),h=c(0),m=c(64),t=c(64);if(64===t&&-1===f)break;b(f<<2|h>>4);64!=m&&(b(h<<4&240|m>>2),64!=t&&b(m<<6&192|t))}}
	function Ca(){if(!x){x={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Aa[c]=d;for(var f=0;f<d.length;f++){var h=d[f];void 0===x[h]&&(x[h]=f)}}}};g("jspb.ConstBinaryMessage",function(){},void 0);g("jspb.BinaryMessage",function(){},void 0);g("jspb.BinaryConstants.FieldType",{yb:-1,ee:1,FLOAT:2,ke:3,te:4,je:5,xb:6,wb:7,BOOL:8,re:9,ie:10,le:11,ce:12,se:13,ge:14,me:15,ne:16,oe:17,pe:18,he:30,ve:31},void 0);g("jspb.BinaryConstants.WireType",{yb:-1,ue:0,xb:1,de:2,qe:3,fe:4,wb:5},void 0);
	g("jspb.BinaryConstants.FieldTypeToWireType",function(a){switch(a){case 5:case 3:case 13:case 4:case 17:case 18:case 8:case 14:case 31:return 0;case 1:case 6:case 16:case 30:return 1;case 9:case 11:case 12:return 2;case 2:case 7:case 15:return 5;default:return-1}},void 0);g("jspb.BinaryConstants.INVALID_FIELD_NUMBER",-1,void 0);g("jspb.BinaryConstants.FLOAT32_EPS",1.401298464324817E-45,void 0);g("jspb.BinaryConstants.FLOAT32_MIN",1.1754943508222875E-38,void 0);
	g("jspb.BinaryConstants.FLOAT32_MAX",3.4028234663852886E38,void 0);g("jspb.BinaryConstants.FLOAT64_EPS",4.9E-324,void 0);g("jspb.BinaryConstants.FLOAT64_MIN",2.2250738585072014E-308,void 0);g("jspb.BinaryConstants.FLOAT64_MAX",1.7976931348623157E308,void 0);g("jspb.BinaryConstants.TWO_TO_20",1048576,void 0);g("jspb.BinaryConstants.TWO_TO_23",8388608,void 0);g("jspb.BinaryConstants.TWO_TO_31",2147483648,void 0);g("jspb.BinaryConstants.TWO_TO_32",4294967296,void 0);
	g("jspb.BinaryConstants.TWO_TO_52",4503599627370496,void 0);g("jspb.BinaryConstants.TWO_TO_63",0x7fffffffffffffff,void 0);g("jspb.BinaryConstants.TWO_TO_64",1.8446744073709552E19,void 0);g("jspb.BinaryConstants.ZERO_HASH","\x00\x00\x00\x00\x00\x00\x00\x00",void 0);var y=0,z=0;g("jspb.utils.getSplit64Low",function(){return y},void 0);g("jspb.utils.getSplit64High",function(){return z},void 0);function Fa(a){var b=a>>>0;a=Math.floor((a-b)/4294967296)>>>0;y=b;z=a}g("jspb.utils.splitUint64",Fa,void 0);function A(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);a>>>=0;b&&(a=~a>>>0,c=(~c>>>0)+1,4294967295<c&&(c=0,a++,4294967295<a&&(a=0)));y=c;z=a}g("jspb.utils.splitInt64",A,void 0);
	function Ga(a){var b=0>a;a=2*Math.abs(a);Fa(a);a=y;var c=z;b&&(0==a?0==c?c=a=4294967295:(c--,a=4294967295):a--);y=a;z=c}g("jspb.utils.splitZigzag64",Ga,void 0);
	function Ha(a){var b=0>a?1:0;a=b?-a:a;if(0===a)0<1/a?y=z=0:(z=0,y=2147483648);else if(isNaN(a))z=0,y=2147483647;else if(3.4028234663852886E38<a)z=0,y=(b<<31|2139095040)>>>0;else if(1.1754943508222875E-38>a)a=Math.round(a/Math.pow(2,-149)),z=0,y=(b<<31|a)>>>0;else{var c=Math.floor(Math.log(a)/Math.LN2);a*=Math.pow(2,-c);a=Math.round(8388608*a);16777216<=a&&++c;z=0;y=(b<<31|c+127<<23|a&8388607)>>>0}}g("jspb.utils.splitFloat32",Ha,void 0);
	function Ia(a){var b=0>a?1:0;a=b?-a:a;if(0===a)z=0<1/a?0:2147483648,y=0;else if(isNaN(a))z=2147483647,y=4294967295;else if(1.7976931348623157E308<a)z=(b<<31|2146435072)>>>0,y=0;else if(2.2250738585072014E-308>a)a/=Math.pow(2,-1074),z=(b<<31|a/4294967296)>>>0,y=a>>>0;else{var c=a,d=0;if(2<=c)for(;2<=c&&1023>d;)d++,c/=2;else for(;1>c&&-1022<d;)c*=2,d--;a*=Math.pow(2,-d);z=(b<<31|d+1023<<20|1048576*a&1048575)>>>0;y=4503599627370496*a>>>0}}g("jspb.utils.splitFloat64",Ia,void 0);
	function C(a){var b=a.charCodeAt(4),c=a.charCodeAt(5),d=a.charCodeAt(6),f=a.charCodeAt(7);y=a.charCodeAt(0)+(a.charCodeAt(1)<<8)+(a.charCodeAt(2)<<16)+(a.charCodeAt(3)<<24)>>>0;z=b+(c<<8)+(d<<16)+(f<<24)>>>0}g("jspb.utils.splitHash64",C,void 0);function D(a,b){return 4294967296*b+(a>>>0)}g("jspb.utils.joinUint64",D,void 0);function E(a,b){var c=b&2147483648;c&&(a=~a+1>>>0,b=~b>>>0,0==a&&(b=b+1>>>0));a=D(a,b);return c?-a:a}g("jspb.utils.joinInt64",E,void 0);
	function Ja(a,b,c){var d=b>>31;return c(a<<1^d,(b<<1|a>>>31)^d)}g("jspb.utils.toZigzag64",Ja,void 0);function Ka(a,b){return Ma(a,b,E)}g("jspb.utils.joinZigzag64",Ka,void 0);function Ma(a,b,c){var d=-(a&1);return c((a>>>1|b<<31)^d,b>>>1^d)}g("jspb.utils.fromZigzag64",Ma,void 0);function Na(a){var b=2*(a>>31)+1,c=a>>>23&255;a&=8388607;return 255==c?a?NaN:Infinity*b:0==c?b*Math.pow(2,-149)*a:b*Math.pow(2,c-150)*(a+Math.pow(2,23))}g("jspb.utils.joinFloat32",Na,void 0);
	function Oa(a,b){var c=2*(b>>31)+1,d=b>>>20&2047;a=4294967296*(b&1048575)+a;return 2047==d?a?NaN:Infinity*c:0==d?c*Math.pow(2,-1074)*a:c*Math.pow(2,d-1075)*(a+4503599627370496)}g("jspb.utils.joinFloat64",Oa,void 0);function Pa(a,b){return String.fromCharCode(a>>>0&255,a>>>8&255,a>>>16&255,a>>>24&255,b>>>0&255,b>>>8&255,b>>>16&255,b>>>24&255)}g("jspb.utils.joinHash64",Pa,void 0);g("jspb.utils.DIGITS","0123456789abcdef".split(""),void 0);
	function F(a,b){function c(f,h){f=f?String(f):"";return h?"0000000".slice(f.length)+f:f}if(2097151>=b)return""+D(a,b);var d=(a>>>24|b<<8)>>>0&16777215;b=b>>16&65535;a=(a&16777215)+6777216*d+6710656*b;d+=8147497*b;b*=2;1E7<=a&&(d+=Math.floor(a/1E7),a%=1E7);1E7<=d&&(b+=Math.floor(d/1E7),d%=1E7);return c(b,0)+c(d,b)+c(a,1)}g("jspb.utils.joinUnsignedDecimalString",F,void 0);function G(a,b){var c=b&2147483648;c&&(a=~a+1>>>0,b=~b+(0==a?1:0)>>>0);a=F(a,b);return c?"-"+a:a}
	g("jspb.utils.joinSignedDecimalString",G,void 0);function Qa(a,b){C(a);a=y;var c=z;return b?G(a,c):F(a,c)}g("jspb.utils.hash64ToDecimalString",Qa,void 0);g("jspb.utils.hash64ArrayToDecimalStrings",function(a,b){for(var c=Array(a.length),d=0;d<a.length;d++)c[d]=Qa(a[d],b);return c},void 0);
	function H(a){function b(m,t){for(var B=0;8>B&&(1!==m||0<t);B++)t=m*f[B]+t,f[B]=t&255,t>>>=8}function c(){for(var m=0;8>m;m++)f[m]=~f[m]&255}n(0<a.length);var d=!1;"-"===a[0]&&(d=!0,a=a.slice(1));for(var f=[0,0,0,0,0,0,0,0],h=0;h<a.length;h++)b(10,a.charCodeAt(h)-48);d&&(c(),b(1,1));return xa(f)}g("jspb.utils.decimalStringToHash64",H,void 0);g("jspb.utils.splitDecimalString",function(a){C(H(a))},void 0);function Ra(a){return String.fromCharCode(10>a?48+a:87+a)}
	function Sa(a){return 97<=a?a-97+10:a-48}g("jspb.utils.hash64ToHexString",function(a){var b=Array(18);b[0]="0";b[1]="x";for(var c=0;8>c;c++){var d=a.charCodeAt(7-c);b[2*c+2]=Ra(d>>4);b[2*c+3]=Ra(d&15)}return b.join("")},void 0);g("jspb.utils.hexStringToHash64",function(a){a=a.toLowerCase();n(18==a.length);n("0"==a[0]);n("x"==a[1]);for(var b="",c=0;8>c;c++)b=String.fromCharCode(16*Sa(a.charCodeAt(2*c+2))+Sa(a.charCodeAt(2*c+3)))+b;return b},void 0);
	g("jspb.utils.hash64ToNumber",function(a,b){C(a);a=y;var c=z;return b?E(a,c):D(a,c)},void 0);g("jspb.utils.numberToHash64",function(a){A(a);return Pa(y,z)},void 0);g("jspb.utils.countVarints",function(a,b,c){for(var d=0,f=b;f<c;f++)d+=a[f]>>7;return c-b-d},void 0);
	g("jspb.utils.countVarintFields",function(a,b,c,d){var f=0;d*=8;if(128>d)for(;b<c&&a[b++]==d;)for(f++;;){var h=a[b++];if(0==(h&128))break}else for(;b<c;){for(h=d;128<h;){if(a[b]!=(h&127|128))return f;b++;h>>=7}if(a[b++]!=h)break;for(f++;h=a[b++],0!=(h&128););}return f},void 0);function Ta(a,b,c,d,f){var h=0;if(128>d)for(;b<c&&a[b++]==d;)h++,b+=f;else for(;b<c;){for(var m=d;128<m;){if(a[b++]!=(m&127|128))return h;m>>=7}if(a[b++]!=m)break;h++;b+=f}return h}
	g("jspb.utils.countFixed32Fields",function(a,b,c,d){return Ta(a,b,c,8*d+5,4)},void 0);g("jspb.utils.countFixed64Fields",function(a,b,c,d){return Ta(a,b,c,8*d+1,8)},void 0);g("jspb.utils.countDelimitedFields",function(a,b,c,d){var f=0;for(d=8*d+2;b<c;){for(var h=d;128<h;){if(a[b++]!=(h&127|128))return f;h>>=7}if(a[b++]!=h)break;f++;for(var m=0,t=1;h=a[b++],m+=(h&127)*t,t*=128,0!=(h&128););b+=m}return f},void 0);
	g("jspb.utils.debugBytesToTextFormat",function(a){var b='"';if(a){a=Ua(a);for(var c=0;c<a.length;c++)b+="\\x",16>a[c]&&(b+="0"),b+=a[c].toString(16)}return b+'"'},void 0);
	g("jspb.utils.debugScalarToTextFormat",function(a){if("string"===typeof a){a=String(a);for(var b=['"'],c=0;c<a.length;c++){var d=a.charAt(c),f=d.charCodeAt(0),h=c+1,m;if(!(m=ya[d])){if(!(31<f&&127>f))if(f=d,f in za)d=za[f];else if(f in ya)d=za[f]=ya[f];else{m=f.charCodeAt(0);if(31<m&&127>m)d=f;else{if(256>m){if(d="\\x",16>m||256<m)d+="0"}else d="\\u",4096>m&&(d+="0");d+=m.toString(16).toUpperCase()}d=za[f]=d}m=d}b[h]=m}b.push('"');a=b.join("")}else a=a.toString();return a},void 0);
	g("jspb.utils.stringToByteArray",function(a){for(var b=new Uint8Array(a.length),c=0;c<a.length;c++){var d=a.charCodeAt(c);if(255<d)throw Error("Conversion error: string contains codepoint outside of byte range");b[c]=d}return b},void 0);
	function Ua(a){if(a.constructor===Uint8Array)return a;if(a.constructor===ArrayBuffer)return new Uint8Array(a);if(a.constructor===Array)return new Uint8Array(a);if(a.constructor===String)return Da(a);if(a instanceof Uint8Array)return new Uint8Array(a.buffer,a.byteOffset,a.byteLength);p("Type not convertible to Uint8Array.");return new Uint8Array(0)}g("jspb.utils.byteSourceToUint8Array",Ua,void 0);function I(a,b,c){this.b=null;this.a=this.c=this.h=0;this.v=!1;a&&this.H(a,b,c)}g("jspb.BinaryDecoder",I,void 0);var Va=[];I.getInstanceCacheLength=function(){return Va.length};function Wa(a,b,c){if(Va.length){var d=Va.pop();a&&d.H(a,b,c);return d}return new I(a,b,c)}I.alloc=Wa;I.prototype.Ca=function(){this.clear();100>Va.length&&Va.push(this)};I.prototype.free=I.prototype.Ca;I.prototype.clone=function(){return Wa(this.b,this.h,this.c-this.h)};I.prototype.clone=I.prototype.clone;
	I.prototype.clear=function(){this.b=null;this.a=this.c=this.h=0;this.v=!1};I.prototype.clear=I.prototype.clear;I.prototype.Y=function(){return this.b};I.prototype.getBuffer=I.prototype.Y;I.prototype.H=function(a,b,c){this.b=Ua(a);this.h=void 0!==b?b:0;this.c=void 0!==c?this.h+c:this.b.length;this.a=this.h};I.prototype.setBlock=I.prototype.H;I.prototype.Db=function(){return this.c};I.prototype.getEnd=I.prototype.Db;I.prototype.setEnd=function(a){this.c=a};I.prototype.setEnd=I.prototype.setEnd;
	I.prototype.reset=function(){this.a=this.h};I.prototype.reset=I.prototype.reset;I.prototype.B=function(){return this.a};I.prototype.getCursor=I.prototype.B;I.prototype.Ma=function(a){this.a=a};I.prototype.setCursor=I.prototype.Ma;I.prototype.advance=function(a){this.a+=a;n(this.a<=this.c)};I.prototype.advance=I.prototype.advance;I.prototype.ya=function(){return this.a==this.c};I.prototype.atEnd=I.prototype.ya;I.prototype.Qb=function(){return this.a>this.c};I.prototype.pastEnd=I.prototype.Qb;
	I.prototype.getError=function(){return this.v||0>this.a||this.a>this.c};I.prototype.getError=I.prototype.getError;I.prototype.w=function(a){for(var b=128,c=0,d=0,f=0;4>f&&128<=b;f++)b=this.b[this.a++],c|=(b&127)<<7*f;128<=b&&(b=this.b[this.a++],c|=(b&127)<<28,d|=(b&127)>>4);if(128<=b)for(f=0;5>f&&128<=b;f++)b=this.b[this.a++],d|=(b&127)<<7*f+3;if(128>b)return a(c>>>0,d>>>0);p("Failed to read varint, encoding is invalid.");this.v=!0};I.prototype.readSplitVarint64=I.prototype.w;
	I.prototype.ea=function(a){return this.w(function(b,c){return Ma(b,c,a)})};I.prototype.readSplitZigzagVarint64=I.prototype.ea;I.prototype.ta=function(a){var b=this.b,c=this.a;this.a+=8;for(var d=0,f=0,h=c+7;h>=c;h--)d=d<<8|b[h],f=f<<8|b[h+4];return a(d,f)};I.prototype.readSplitFixed64=I.prototype.ta;I.prototype.kb=function(){for(;this.b[this.a]&128;)this.a++;this.a++};I.prototype.skipVarint=I.prototype.kb;I.prototype.mb=function(a){for(;128<a;)this.a--,a>>>=7;this.a--};I.prototype.unskipVarint=I.prototype.mb;
	I.prototype.o=function(){var a=this.b;var b=a[this.a];var c=b&127;if(128>b)return this.a+=1,n(this.a<=this.c),c;b=a[this.a+1];c|=(b&127)<<7;if(128>b)return this.a+=2,n(this.a<=this.c),c;b=a[this.a+2];c|=(b&127)<<14;if(128>b)return this.a+=3,n(this.a<=this.c),c;b=a[this.a+3];c|=(b&127)<<21;if(128>b)return this.a+=4,n(this.a<=this.c),c;b=a[this.a+4];c|=(b&15)<<28;if(128>b)return this.a+=5,n(this.a<=this.c),c>>>0;this.a+=5;128<=a[this.a++]&&128<=a[this.a++]&&128<=a[this.a++]&&128<=a[this.a++]&&128<=
	a[this.a++]&&n(!1);n(this.a<=this.c);return c};I.prototype.readUnsignedVarint32=I.prototype.o;I.prototype.da=function(){return~~this.o()};I.prototype.readSignedVarint32=I.prototype.da;I.prototype.O=function(){return this.o().toString()};I.prototype.Ea=function(){return this.da().toString()};I.prototype.readSignedVarint32String=I.prototype.Ea;I.prototype.Ia=function(){var a=this.o();return a>>>1^-(a&1)};I.prototype.readZigzagVarint32=I.prototype.Ia;I.prototype.Ga=function(){return this.w(D)};
	I.prototype.readUnsignedVarint64=I.prototype.Ga;I.prototype.Ha=function(){return this.w(F)};I.prototype.readUnsignedVarint64String=I.prototype.Ha;I.prototype.sa=function(){return this.w(E)};I.prototype.readSignedVarint64=I.prototype.sa;I.prototype.Fa=function(){return this.w(G)};I.prototype.readSignedVarint64String=I.prototype.Fa;I.prototype.Ja=function(){return this.w(Ka)};I.prototype.readZigzagVarint64=I.prototype.Ja;I.prototype.fb=function(){return this.ea(Pa)};
	I.prototype.readZigzagVarintHash64=I.prototype.fb;I.prototype.Ka=function(){return this.ea(G)};I.prototype.readZigzagVarint64String=I.prototype.Ka;I.prototype.Gc=function(){var a=this.b[this.a];this.a+=1;n(this.a<=this.c);return a};I.prototype.readUint8=I.prototype.Gc;I.prototype.Ec=function(){var a=this.b[this.a],b=this.b[this.a+1];this.a+=2;n(this.a<=this.c);return a<<0|b<<8};I.prototype.readUint16=I.prototype.Ec;
	I.prototype.m=function(){var a=this.b[this.a],b=this.b[this.a+1],c=this.b[this.a+2],d=this.b[this.a+3];this.a+=4;n(this.a<=this.c);return(a<<0|b<<8|c<<16|d<<24)>>>0};I.prototype.readUint32=I.prototype.m;I.prototype.ga=function(){var a=this.m(),b=this.m();return D(a,b)};I.prototype.readUint64=I.prototype.ga;I.prototype.ha=function(){var a=this.m(),b=this.m();return F(a,b)};I.prototype.readUint64String=I.prototype.ha;
	I.prototype.Xb=function(){var a=this.b[this.a];this.a+=1;n(this.a<=this.c);return a<<24>>24};I.prototype.readInt8=I.prototype.Xb;I.prototype.Vb=function(){var a=this.b[this.a],b=this.b[this.a+1];this.a+=2;n(this.a<=this.c);return(a<<0|b<<8)<<16>>16};I.prototype.readInt16=I.prototype.Vb;I.prototype.P=function(){var a=this.b[this.a],b=this.b[this.a+1],c=this.b[this.a+2],d=this.b[this.a+3];this.a+=4;n(this.a<=this.c);return a<<0|b<<8|c<<16|d<<24};I.prototype.readInt32=I.prototype.P;
	I.prototype.ba=function(){var a=this.m(),b=this.m();return E(a,b)};I.prototype.readInt64=I.prototype.ba;I.prototype.ca=function(){var a=this.m(),b=this.m();return G(a,b)};I.prototype.readInt64String=I.prototype.ca;I.prototype.aa=function(){var a=this.m();return Na(a,0)};I.prototype.readFloat=I.prototype.aa;I.prototype.Z=function(){var a=this.m(),b=this.m();return Oa(a,b)};I.prototype.readDouble=I.prototype.Z;I.prototype.pa=function(){return!!this.b[this.a++]};I.prototype.readBool=I.prototype.pa;
	I.prototype.ra=function(){return this.da()};I.prototype.readEnum=I.prototype.ra;
	I.prototype.fa=function(a){var b=this.b,c=this.a;a=c+a;for(var d=[],f="";c<a;){var h=b[c++];if(128>h)d.push(h);else if(192>h)continue;else if(224>h){var m=b[c++];d.push((h&31)<<6|m&63)}else if(240>h){m=b[c++];var t=b[c++];d.push((h&15)<<12|(m&63)<<6|t&63)}else if(248>h){m=b[c++];t=b[c++];var B=b[c++];h=(h&7)<<18|(m&63)<<12|(t&63)<<6|B&63;h-=65536;d.push((h>>10&1023)+55296,(h&1023)+56320)}8192<=d.length&&(f+=String.fromCharCode.apply(null,d),d.length=0)}f+=xa(d);this.a=c;return f};
	I.prototype.readString=I.prototype.fa;I.prototype.Dc=function(){var a=this.o();return this.fa(a)};I.prototype.readStringWithLength=I.prototype.Dc;I.prototype.qa=function(a){if(0>a||this.a+a>this.b.length)return this.v=!0,p("Invalid byte length!"),new Uint8Array(0);var b=this.b.subarray(this.a,this.a+a);this.a+=a;n(this.a<=this.c);return b};I.prototype.readBytes=I.prototype.qa;I.prototype.ia=function(){return this.w(Pa)};I.prototype.readVarintHash64=I.prototype.ia;
	I.prototype.$=function(){var a=this.b,b=this.a,c=a[b],d=a[b+1],f=a[b+2],h=a[b+3],m=a[b+4],t=a[b+5],B=a[b+6];a=a[b+7];this.a+=8;return String.fromCharCode(c,d,f,h,m,t,B,a)};I.prototype.readFixedHash64=I.prototype.$;function J(a,b,c){this.a=Wa(a,b,c);this.O=this.a.B();this.b=this.c=-1;this.h=!1;this.v=null}g("jspb.BinaryReader",J,void 0);var K=[];J.clearInstanceCache=function(){K=[]};J.getInstanceCacheLength=function(){return K.length};function Xa(a,b,c){if(K.length){var d=K.pop();a&&d.a.H(a,b,c);return d}return new J(a,b,c)}J.alloc=Xa;J.prototype.zb=Xa;J.prototype.alloc=J.prototype.zb;J.prototype.Ca=function(){this.a.clear();this.b=this.c=-1;this.h=!1;this.v=null;100>K.length&&K.push(this)};
	J.prototype.free=J.prototype.Ca;J.prototype.Fb=function(){return this.O};J.prototype.getFieldCursor=J.prototype.Fb;J.prototype.B=function(){return this.a.B()};J.prototype.getCursor=J.prototype.B;J.prototype.Y=function(){return this.a.Y()};J.prototype.getBuffer=J.prototype.Y;J.prototype.Hb=function(){return this.c};J.prototype.getFieldNumber=J.prototype.Hb;J.prototype.Lb=function(){return this.b};J.prototype.getWireType=J.prototype.Lb;J.prototype.Mb=function(){return 2==this.b};
	J.prototype.isDelimited=J.prototype.Mb;J.prototype.bb=function(){return 4==this.b};J.prototype.isEndGroup=J.prototype.bb;J.prototype.getError=function(){return this.h||this.a.getError()};J.prototype.getError=J.prototype.getError;J.prototype.H=function(a,b,c){this.a.H(a,b,c);this.b=this.c=-1};J.prototype.setBlock=J.prototype.H;J.prototype.reset=function(){this.a.reset();this.b=this.c=-1};J.prototype.reset=J.prototype.reset;J.prototype.advance=function(a){this.a.advance(a)};J.prototype.advance=J.prototype.advance;
	J.prototype.oa=function(){if(this.a.ya())return!1;if(this.getError())return p("Decoder hit an error"),!1;this.O=this.a.B();var a=this.a.o(),b=a>>>3;a&=7;if(0!=a&&5!=a&&1!=a&&2!=a&&3!=a&&4!=a)return p("Invalid wire type: %s (at position %s)",a,this.O),this.h=!0,!1;this.c=b;this.b=a;return!0};J.prototype.nextField=J.prototype.oa;J.prototype.Oa=function(){this.a.mb(this.c<<3|this.b)};J.prototype.unskipHeader=J.prototype.Oa;
	J.prototype.Lc=function(){var a=this.c;for(this.Oa();this.oa()&&this.c==a;)this.C();this.a.ya()||this.Oa()};J.prototype.skipMatchingFields=J.prototype.Lc;J.prototype.lb=function(){0!=this.b?(p("Invalid wire type for skipVarintField"),this.C()):this.a.kb()};J.prototype.skipVarintField=J.prototype.lb;J.prototype.gb=function(){if(2!=this.b)p("Invalid wire type for skipDelimitedField"),this.C();else{var a=this.a.o();this.a.advance(a)}};J.prototype.skipDelimitedField=J.prototype.gb;
	J.prototype.hb=function(){5!=this.b?(p("Invalid wire type for skipFixed32Field"),this.C()):this.a.advance(4)};J.prototype.skipFixed32Field=J.prototype.hb;J.prototype.ib=function(){1!=this.b?(p("Invalid wire type for skipFixed64Field"),this.C()):this.a.advance(8)};J.prototype.skipFixed64Field=J.prototype.ib;J.prototype.jb=function(){var a=this.c;do{if(!this.oa()){p("Unmatched start-group tag: stream EOF");this.h=!0;break}if(4==this.b){this.c!=a&&(p("Unmatched end-group tag"),this.h=!0);break}this.C()}while(1)};
	J.prototype.skipGroup=J.prototype.jb;J.prototype.C=function(){switch(this.b){case 0:this.lb();break;case 1:this.ib();break;case 2:this.gb();break;case 5:this.hb();break;case 3:this.jb();break;default:p("Invalid wire encoding for field.")}};J.prototype.skipField=J.prototype.C;J.prototype.Hc=function(a,b){null===this.v&&(this.v={});n(!this.v[a]);this.v[a]=b};J.prototype.registerReadCallback=J.prototype.Hc;J.prototype.Ic=function(a){n(null!==this.v);a=this.v[a];n(a);return a(this)};
	J.prototype.runReadCallback=J.prototype.Ic;J.prototype.Yb=function(a,b){n(2==this.b);var c=this.a.c,d=this.a.o();d=this.a.B()+d;this.a.setEnd(d);b(a,this);this.a.Ma(d);this.a.setEnd(c)};J.prototype.readMessage=J.prototype.Yb;J.prototype.Ub=function(a,b,c){n(3==this.b);n(this.c==a);c(b,this);this.h||4==this.b||(p("Group submessage did not end with an END_GROUP tag"),this.h=!0)};J.prototype.readGroup=J.prototype.Ub;
	J.prototype.Gb=function(){n(2==this.b);var a=this.a.o(),b=this.a.B(),c=b+a;a=Wa(this.a.Y(),b,a);this.a.Ma(c);return a};J.prototype.getFieldDecoder=J.prototype.Gb;J.prototype.P=function(){n(0==this.b);return this.a.da()};J.prototype.readInt32=J.prototype.P;J.prototype.Wb=function(){n(0==this.b);return this.a.Ea()};J.prototype.readInt32String=J.prototype.Wb;J.prototype.ba=function(){n(0==this.b);return this.a.sa()};J.prototype.readInt64=J.prototype.ba;J.prototype.ca=function(){n(0==this.b);return this.a.Fa()};
	J.prototype.readInt64String=J.prototype.ca;J.prototype.m=function(){n(0==this.b);return this.a.o()};J.prototype.readUint32=J.prototype.m;J.prototype.Fc=function(){n(0==this.b);return this.a.O()};J.prototype.readUint32String=J.prototype.Fc;J.prototype.ga=function(){n(0==this.b);return this.a.Ga()};J.prototype.readUint64=J.prototype.ga;J.prototype.ha=function(){n(0==this.b);return this.a.Ha()};J.prototype.readUint64String=J.prototype.ha;J.prototype.zc=function(){n(0==this.b);return this.a.Ia()};
	J.prototype.readSint32=J.prototype.zc;J.prototype.Ac=function(){n(0==this.b);return this.a.Ja()};J.prototype.readSint64=J.prototype.Ac;J.prototype.Bc=function(){n(0==this.b);return this.a.Ka()};J.prototype.readSint64String=J.prototype.Bc;J.prototype.Rb=function(){n(5==this.b);return this.a.m()};J.prototype.readFixed32=J.prototype.Rb;J.prototype.Sb=function(){n(1==this.b);return this.a.ga()};J.prototype.readFixed64=J.prototype.Sb;J.prototype.Tb=function(){n(1==this.b);return this.a.ha()};
	J.prototype.readFixed64String=J.prototype.Tb;J.prototype.vc=function(){n(5==this.b);return this.a.P()};J.prototype.readSfixed32=J.prototype.vc;J.prototype.wc=function(){n(5==this.b);return this.a.P().toString()};J.prototype.readSfixed32String=J.prototype.wc;J.prototype.xc=function(){n(1==this.b);return this.a.ba()};J.prototype.readSfixed64=J.prototype.xc;J.prototype.yc=function(){n(1==this.b);return this.a.ca()};J.prototype.readSfixed64String=J.prototype.yc;
	J.prototype.aa=function(){n(5==this.b);return this.a.aa()};J.prototype.readFloat=J.prototype.aa;J.prototype.Z=function(){n(1==this.b);return this.a.Z()};J.prototype.readDouble=J.prototype.Z;J.prototype.pa=function(){n(0==this.b);return!!this.a.o()};J.prototype.readBool=J.prototype.pa;J.prototype.ra=function(){n(0==this.b);return this.a.sa()};J.prototype.readEnum=J.prototype.ra;J.prototype.fa=function(){n(2==this.b);var a=this.a.o();return this.a.fa(a)};J.prototype.readString=J.prototype.fa;
	J.prototype.qa=function(){n(2==this.b);var a=this.a.o();return this.a.qa(a)};J.prototype.readBytes=J.prototype.qa;J.prototype.ia=function(){n(0==this.b);return this.a.ia()};J.prototype.readVarintHash64=J.prototype.ia;J.prototype.Cc=function(){n(0==this.b);return this.a.fb()};J.prototype.readSintHash64=J.prototype.Cc;J.prototype.w=function(a){n(0==this.b);return this.a.w(a)};J.prototype.readSplitVarint64=J.prototype.w;
	J.prototype.ea=function(a){n(0==this.b);return this.a.w(function(b,c){return Ma(b,c,a)})};J.prototype.readSplitZigzagVarint64=J.prototype.ea;J.prototype.$=function(){n(1==this.b);return this.a.$()};J.prototype.readFixedHash64=J.prototype.$;J.prototype.ta=function(a){n(1==this.b);return this.a.ta(a)};J.prototype.readSplitFixed64=J.prototype.ta;function L(a,b){n(2==a.b);var c=a.a.o();c=a.a.B()+c;for(var d=[];a.a.B()<c;)d.push(b.call(a.a));return d}J.prototype.gc=function(){return L(this,this.a.da)};
	J.prototype.readPackedInt32=J.prototype.gc;J.prototype.hc=function(){return L(this,this.a.Ea)};J.prototype.readPackedInt32String=J.prototype.hc;J.prototype.ic=function(){return L(this,this.a.sa)};J.prototype.readPackedInt64=J.prototype.ic;J.prototype.jc=function(){return L(this,this.a.Fa)};J.prototype.readPackedInt64String=J.prototype.jc;J.prototype.qc=function(){return L(this,this.a.o)};J.prototype.readPackedUint32=J.prototype.qc;J.prototype.rc=function(){return L(this,this.a.O)};
	J.prototype.readPackedUint32String=J.prototype.rc;J.prototype.sc=function(){return L(this,this.a.Ga)};J.prototype.readPackedUint64=J.prototype.sc;J.prototype.tc=function(){return L(this,this.a.Ha)};J.prototype.readPackedUint64String=J.prototype.tc;J.prototype.nc=function(){return L(this,this.a.Ia)};J.prototype.readPackedSint32=J.prototype.nc;J.prototype.oc=function(){return L(this,this.a.Ja)};J.prototype.readPackedSint64=J.prototype.oc;J.prototype.pc=function(){return L(this,this.a.Ka)};
	J.prototype.readPackedSint64String=J.prototype.pc;J.prototype.bc=function(){return L(this,this.a.m)};J.prototype.readPackedFixed32=J.prototype.bc;J.prototype.cc=function(){return L(this,this.a.ga)};J.prototype.readPackedFixed64=J.prototype.cc;J.prototype.dc=function(){return L(this,this.a.ha)};J.prototype.readPackedFixed64String=J.prototype.dc;J.prototype.kc=function(){return L(this,this.a.P)};J.prototype.readPackedSfixed32=J.prototype.kc;J.prototype.lc=function(){return L(this,this.a.ba)};
	J.prototype.readPackedSfixed64=J.prototype.lc;J.prototype.mc=function(){return L(this,this.a.ca)};J.prototype.readPackedSfixed64String=J.prototype.mc;J.prototype.fc=function(){return L(this,this.a.aa)};J.prototype.readPackedFloat=J.prototype.fc;J.prototype.$b=function(){return L(this,this.a.Z)};J.prototype.readPackedDouble=J.prototype.$b;J.prototype.Zb=function(){return L(this,this.a.pa)};J.prototype.readPackedBool=J.prototype.Zb;J.prototype.ac=function(){return L(this,this.a.ra)};
	J.prototype.readPackedEnum=J.prototype.ac;J.prototype.uc=function(){return L(this,this.a.ia)};J.prototype.readPackedVarintHash64=J.prototype.uc;J.prototype.ec=function(){return L(this,this.a.$)};J.prototype.readPackedFixedHash64=J.prototype.ec;function Ya(a,b,c,d,f){this.ma=a;this.Ba=b;this.la=c;this.Na=d;this.na=f}g("jspb.ExtensionFieldInfo",Ya,void 0);function Za(a,b,c,d,f,h){this.Za=a;this.za=b;this.Aa=c;this.Wa=d;this.Ab=f;this.Nb=h}g("jspb.ExtensionFieldBinaryInfo",Za,void 0);Ya.prototype.F=function(){return!!this.la};Ya.prototype.isMessageType=Ya.prototype.F;function N(){}g("jspb.Message",N,void 0);N.GENERATE_TO_OBJECT=!0;N.GENERATE_FROM_OBJECT=!0;var $a="function"==typeof Uint8Array;N.prototype.Ib=function(){return this.b};
	N.prototype.getJsPbMessageId=N.prototype.Ib;
	N.initialize=function(a,b,c,d,f,h){a.f=null;b||(b=c?[c]:[]);a.b=c?String(c):void 0;a.D=0===c?-1:0;a.u=b;a:{c=a.u.length;b=-1;if(c&&(b=c-1,c=a.u[b],!(null===c||"object"!=typeof c||Array.isArray(c)||$a&&c instanceof Uint8Array))){a.G=b-a.D;a.i=c;break a}-1<d?(a.G=Math.max(d,b+1-a.D),a.i=null):a.G=Number.MAX_VALUE}a.a={};if(f)for(d=0;d<f.length;d++)b=f[d],b<a.G?(b+=a.D,a.u[b]=a.u[b]||ab):(bb(a),a.i[b]=a.i[b]||ab);if(h&&h.length)for(d=0;d<h.length;d++)cb(a,h[d])};
	var ab=Object.freeze?Object.freeze([]):[];function bb(a){var b=a.G+a.D;a.u[b]||(a.i=a.u[b]={})}function db(a,b,c){for(var d=[],f=0;f<a.length;f++)d[f]=b.call(a[f],c,a[f]);return d}N.toObjectList=db;N.toObjectExtension=function(a,b,c,d,f){for(var h in c){var m=c[h],t=d.call(a,m);if(null!=t){for(var B in m.Ba)if(m.Ba.hasOwnProperty(B))break;b[B]=m.Na?m.na?db(t,m.Na,f):m.Na(f,t):t}}};
	N.serializeBinaryExtensions=function(a,b,c,d){for(var f in c){var h=c[f],m=h.Za;if(!h.Aa)throw Error("Message extension present that was generated without binary serialization support");var t=d.call(a,m);if(null!=t)if(m.F())if(h.Wa)h.Aa.call(b,m.ma,t,h.Wa);else throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");else h.Aa.call(b,m.ma,t)}};
	N.readBinaryExtension=function(a,b,c,d,f){var h=c[b.c];if(h){c=h.Za;if(!h.za)throw Error("Deserializing extension whose generated code does not support binary format");if(c.F()){var m=new c.la;h.za.call(b,m,h.Ab)}else m=h.za.call(b);c.na&&!h.Nb?(b=d.call(a,c))?b.push(m):f.call(a,c,[m]):f.call(a,c,m)}else b.C()};function O(a,b){if(b<a.G){b+=a.D;var c=a.u[b];return c===ab?a.u[b]=[]:c}if(a.i)return c=a.i[b],c===ab?a.i[b]=[]:c}N.getField=O;N.getRepeatedField=function(a,b){return O(a,b)};
	function eb(a,b){a=O(a,b);return null==a?a:+a}N.getOptionalFloatingPointField=eb;function fb(a,b){a=O(a,b);return null==a?a:!!a}N.getBooleanField=fb;N.getRepeatedFloatingPointField=function(a,b){var c=O(a,b);a.a||(a.a={});if(!a.a[b]){for(var d=0;d<c.length;d++)c[d]=+c[d];a.a[b]=!0}return c};N.getRepeatedBooleanField=function(a,b){var c=O(a,b);a.a||(a.a={});if(!a.a[b]){for(var d=0;d<c.length;d++)c[d]=!!c[d];a.a[b]=!0}return c};
	function gb(a){if(null==a||"string"===typeof a)return a;if($a&&a instanceof Uint8Array)return Ba(a);p("Cannot coerce to b64 string: "+k(a));return null}N.bytesAsB64=gb;function hb(a){if(null==a||a instanceof Uint8Array)return a;if("string"===typeof a)return Da(a);p("Cannot coerce to Uint8Array: "+k(a));return null}N.bytesAsU8=hb;N.bytesListAsB64=function(a){ib(a);return a.length&&"string"!==typeof a[0]?l(a,gb):a};N.bytesListAsU8=function(a){ib(a);return!a.length||a[0]instanceof Uint8Array?a:l(a,hb)};
	function ib(a){if(a&&1<a.length){var b=k(a[0]);qa(a,function(c){k(c)!=b&&p("Inconsistent type in JSPB repeated field array. Got "+k(c)+" expected "+b)})}}function jb(a,b,c){a=O(a,b);return null==a?c:a}N.getFieldWithDefault=jb;N.getBooleanFieldWithDefault=function(a,b,c){a=fb(a,b);return null==a?c:a};N.getFloatingPointFieldWithDefault=function(a,b,c){a=eb(a,b);return null==a?c:a};N.getFieldProto3=jb;
	N.getMapField=function(a,b,c,d){a.f||(a.f={});if(b in a.f)return a.f[b];var f=O(a,b);if(!f){if(c)return;f=[];P(a,b,f)}return a.f[b]=new r(f,d)};function P(a,b,c){q(a,N);b<a.G?a.u[b+a.D]=c:(bb(a),a.i[b]=c);return a}N.setField=P;N.setProto3IntField=function(a,b,c){return Q(a,b,c,0)};N.setProto3FloatField=function(a,b,c){return Q(a,b,c,0)};N.setProto3BooleanField=function(a,b,c){return Q(a,b,c,!1)};N.setProto3StringField=function(a,b,c){return Q(a,b,c,"")};
	N.setProto3BytesField=function(a,b,c){return Q(a,b,c,"")};N.setProto3EnumField=function(a,b,c){return Q(a,b,c,0)};N.setProto3StringIntField=function(a,b,c){return Q(a,b,c,"0")};function Q(a,b,c,d){q(a,N);c!==d?P(a,b,c):b<a.G?a.u[b+a.D]=null:(bb(a),delete a.i[b]);return a}N.addToRepeatedField=function(a,b,c,d){q(a,N);b=O(a,b);void 0!=d?b.splice(d,0,c):b.push(c);return a};function kb(a,b,c,d){q(a,N);(c=cb(a,c))&&c!==b&&void 0!==d&&(a.f&&c in a.f&&(a.f[c]=void 0),P(a,c,void 0));return P(a,b,d)}
	N.setOneofField=kb;function cb(a,b){for(var c,d,f=0;f<b.length;f++){var h=b[f],m=O(a,h);null!=m&&(c=h,d=m,P(a,h,void 0))}return c?(P(a,c,d),c):0}N.computeOneofCase=cb;N.getWrapperField=function(a,b,c,d){a.f||(a.f={});if(!a.f[c]){var f=O(a,c);if(d||f)a.f[c]=new b(f)}return a.f[c]};N.getRepeatedWrapperField=function(a,b,c){lb(a,b,c);b=a.f[c];b==ab&&(b=a.f[c]=[]);return b};function lb(a,b,c){a.f||(a.f={});if(!a.f[c]){for(var d=O(a,c),f=[],h=0;h<d.length;h++)f[h]=new b(d[h]);a.f[c]=f}}
	N.setWrapperField=function(a,b,c){q(a,N);a.f||(a.f={});var d=c?c.g():c;a.f[b]=c;return P(a,b,d)};N.setOneofWrapperField=function(a,b,c,d){q(a,N);a.f||(a.f={});var f=d?d.g():d;a.f[b]=d;return kb(a,b,c,f)};N.setRepeatedWrapperField=function(a,b,c){q(a,N);a.f||(a.f={});c=c||[];for(var d=[],f=0;f<c.length;f++)d[f]=c[f].g();a.f[b]=c;return P(a,b,d)};
	N.addToRepeatedWrapperField=function(a,b,c,d,f){lb(a,d,b);var h=a.f[b];h||(h=a.f[b]=[]);c=c?c:new d;a=O(a,b);void 0!=f?(h.splice(f,0,c),a.splice(f,0,c.g())):(h.push(c),a.push(c.g()));return c};N.toMap=function(a,b,c,d){for(var f={},h=0;h<a.length;h++)f[b.call(a[h])]=c?c.call(a[h],d,a[h]):a[h];return f};function mb(a){if(a.f)for(var b in a.f){var c=a.f[b];if(Array.isArray(c))for(var d=0;d<c.length;d++)c[d]&&c[d].g();else c&&c.g()}}N.prototype.g=function(){mb(this);return this.u};
	N.prototype.toArray=N.prototype.g;N.prototype.toString=function(){mb(this);return this.u.toString()};N.prototype.getExtension=function(a){if(this.i){this.f||(this.f={});var b=a.ma;if(a.na){if(a.F())return this.f[b]||(this.f[b]=l(this.i[b]||[],function(c){return new a.la(c)})),this.f[b]}else if(a.F())return!this.f[b]&&this.i[b]&&(this.f[b]=new a.la(this.i[b])),this.f[b];return this.i[b]}};N.prototype.getExtension=N.prototype.getExtension;
	N.prototype.Kc=function(a,b){this.f||(this.f={});bb(this);var c=a.ma;a.na?(b=b||[],a.F()?(this.f[c]=b,this.i[c]=l(b,function(d){return d.g()})):this.i[c]=b):a.F()?(this.f[c]=b,this.i[c]=b?b.g():b):this.i[c]=b;return this};N.prototype.setExtension=N.prototype.Kc;N.difference=function(a,b){if(!(a instanceof b.constructor))throw Error("Messages have different types.");var c=a.g();b=b.g();var d=[],f=0,h=c.length>b.length?c.length:b.length;a.b&&(d[0]=a.b,f=1);for(;f<h;f++)nb(c[f],b[f])||(d[f]=b[f]);return new a.constructor(d)};
	N.equals=function(a,b){return a==b||!(!a||!b)&&a instanceof b.constructor&&nb(a.g(),b.g())};function ob(a,b){a=a||{};b=b||{};var c={},d;for(d in a)c[d]=0;for(d in b)c[d]=0;for(d in c)if(!nb(a[d],b[d]))return!1;return!0}N.compareExtensions=ob;
	function nb(a,b){if(a==b)return!0;if(!la(a)||!la(b))return"number"===typeof a&&isNaN(a)||"number"===typeof b&&isNaN(b)?String(a)==String(b):!1;if(a.constructor!=b.constructor)return!1;if($a&&a.constructor===Uint8Array){if(a.length!=b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!=b[c])return!1;return!0}if(a.constructor===Array){var d=void 0,f=void 0,h=Math.max(a.length,b.length);for(c=0;c<h;c++){var m=a[c],t=b[c];m&&m.constructor==Object&&(n(void 0===d),n(c===a.length-1),d=m,m=void 0);t&&t.constructor==
	Object&&(n(void 0===f),n(c===b.length-1),f=t,t=void 0);if(!nb(m,t))return!1}return d||f?(d=d||{},f=f||{},ob(d,f)):!0}if(a.constructor===Object)return ob(a,b);throw Error("Invalid type in JSPB array");}N.compareFields=nb;N.prototype.Bb=function(){return pb(this)};N.prototype.cloneMessage=N.prototype.Bb;N.prototype.clone=function(){return pb(this)};N.prototype.clone=N.prototype.clone;N.clone=function(a){return pb(a)};function pb(a){return new a.constructor(qb(a.g()))}
	N.copyInto=function(a,b){q(a,N);q(b,N);n(a.constructor==b.constructor,"Copy source and target message should have the same type.");a=pb(a);for(var c=b.g(),d=a.g(),f=c.length=0;f<d.length;f++)c[f]=d[f];b.f=a.f;b.i=a.i};function qb(a){if(Array.isArray(a)){for(var b=Array(a.length),c=0;c<a.length;c++){var d=a[c];null!=d&&(b[c]="object"==typeof d?qb(n(d)):d)}return b}if($a&&a instanceof Uint8Array)return new Uint8Array(a);b={};for(c in a)d=a[c],null!=d&&(b[c]="object"==typeof d?qb(n(d)):d);return b}
	N.registerMessageType=function(a,b){b.we=a};var R={dump:function(a){q(a,N,"jspb.Message instance expected");n(a.getExtension,"Only unobfuscated and unoptimized compilation modes supported.");return R.X(a)}};g("jspb.debug.dump",R.dump,void 0);
	R.X=function(a){var b=k(a);if("number"==b||"string"==b||"boolean"==b||"null"==b||"undefined"==b||"undefined"!==typeof Uint8Array&&a instanceof Uint8Array)return a;if("array"==b)return ua(a),l(a,R.X);if(a instanceof r){var c={};a=a.entries();for(var d=a.next();!d.done;d=a.next())c[d.value[0]]=R.X(d.value[1]);return c}q(a,N,"Only messages expected: "+a);b=a.constructor;var f={$name:b.name||b.displayName};for(t in b.prototype){var h=/^get([A-Z]\w*)/.exec(t);if(h&&"getExtension"!=t&&"getJsPbMessageId"!=
	t){var m="has"+h[1];if(!a[m]||a[m]())m=a[t](),f[R.$a(h[1])]=R.X(m)}}if(a.extensionObject_)return f.$extensions="Recursive dumping of extensions not supported in compiled code. Switch to uncompiled or dump extension object directly",f;for(d in b.extensions)if(/^\d+$/.test(d)){m=b.extensions[d];var t=a.getExtension(m);h=void 0;m=m.Ba;var B=[],M=0;for(h in m)B[M++]=h;h=B[0];null!=t&&(c||(c=f.$extensions={}),c[R.$a(h)]=R.X(t))}return f};R.$a=function(a){return a.replace(/^[A-Z]/,function(b){return b.toLowerCase()})};function S(){this.a=[]}g("jspb.BinaryEncoder",S,void 0);S.prototype.length=function(){return this.a.length};S.prototype.length=S.prototype.length;S.prototype.end=function(){var a=this.a;this.a=[];return a};S.prototype.end=S.prototype.end;S.prototype.l=function(a,b){n(a==Math.floor(a));n(b==Math.floor(b));n(0<=a&&4294967296>a);for(n(0<=b&&4294967296>b);0<b||127<a;)this.a.push(a&127|128),a=(a>>>7|b<<25)>>>0,b>>>=7;this.a.push(a)};S.prototype.writeSplitVarint64=S.prototype.l;
	S.prototype.A=function(a,b){n(a==Math.floor(a));n(b==Math.floor(b));n(0<=a&&4294967296>a);n(0<=b&&4294967296>b);this.s(a);this.s(b)};S.prototype.writeSplitFixed64=S.prototype.A;S.prototype.j=function(a){n(a==Math.floor(a));for(n(0<=a&&4294967296>a);127<a;)this.a.push(a&127|128),a>>>=7;this.a.push(a)};S.prototype.writeUnsignedVarint32=S.prototype.j;S.prototype.M=function(a){n(a==Math.floor(a));n(-2147483648<=a&&2147483648>a);if(0<=a)this.j(a);else{for(var b=0;9>b;b++)this.a.push(a&127|128),a>>=7;this.a.push(1)}};
	S.prototype.writeSignedVarint32=S.prototype.M;S.prototype.va=function(a){n(a==Math.floor(a));n(0<=a&&1.8446744073709552E19>a);A(a);this.l(y,z)};S.prototype.writeUnsignedVarint64=S.prototype.va;S.prototype.ua=function(a){n(a==Math.floor(a));n(-9223372036854775808<=a&&0x7fffffffffffffff>a);A(a);this.l(y,z)};S.prototype.writeSignedVarint64=S.prototype.ua;S.prototype.wa=function(a){n(a==Math.floor(a));n(-2147483648<=a&&2147483648>a);this.j((a<<1^a>>31)>>>0)};S.prototype.writeZigzagVarint32=S.prototype.wa;
	S.prototype.xa=function(a){n(a==Math.floor(a));n(-9223372036854775808<=a&&0x7fffffffffffffff>a);Ga(a);this.l(y,z)};S.prototype.writeZigzagVarint64=S.prototype.xa;S.prototype.Ta=function(a){this.W(H(a))};S.prototype.writeZigzagVarint64String=S.prototype.Ta;S.prototype.W=function(a){var b=this;C(a);Ja(y,z,function(c,d){b.l(c>>>0,d>>>0)})};S.prototype.writeZigzagVarintHash64=S.prototype.W;S.prototype.be=function(a){n(a==Math.floor(a));n(0<=a&&256>a);this.a.push(a>>>0&255)};S.prototype.writeUint8=S.prototype.be;
	S.prototype.ae=function(a){n(a==Math.floor(a));n(0<=a&&65536>a);this.a.push(a>>>0&255);this.a.push(a>>>8&255)};S.prototype.writeUint16=S.prototype.ae;S.prototype.s=function(a){n(a==Math.floor(a));n(0<=a&&4294967296>a);this.a.push(a>>>0&255);this.a.push(a>>>8&255);this.a.push(a>>>16&255);this.a.push(a>>>24&255)};S.prototype.writeUint32=S.prototype.s;S.prototype.V=function(a){n(a==Math.floor(a));n(0<=a&&1.8446744073709552E19>a);Fa(a);this.s(y);this.s(z)};S.prototype.writeUint64=S.prototype.V;
	S.prototype.Qc=function(a){n(a==Math.floor(a));n(-128<=a&&128>a);this.a.push(a>>>0&255)};S.prototype.writeInt8=S.prototype.Qc;S.prototype.Pc=function(a){n(a==Math.floor(a));n(-32768<=a&&32768>a);this.a.push(a>>>0&255);this.a.push(a>>>8&255)};S.prototype.writeInt16=S.prototype.Pc;S.prototype.S=function(a){n(a==Math.floor(a));n(-2147483648<=a&&2147483648>a);this.a.push(a>>>0&255);this.a.push(a>>>8&255);this.a.push(a>>>16&255);this.a.push(a>>>24&255)};S.prototype.writeInt32=S.prototype.S;
	S.prototype.T=function(a){n(a==Math.floor(a));n(-9223372036854775808<=a&&0x7fffffffffffffff>a);A(a);this.A(y,z)};S.prototype.writeInt64=S.prototype.T;S.prototype.ka=function(a){n(a==Math.floor(a));n(-9223372036854775808<=+a&&0x7fffffffffffffff>+a);C(H(a));this.A(y,z)};S.prototype.writeInt64String=S.prototype.ka;S.prototype.L=function(a){n(Infinity===a||-Infinity===a||isNaN(a)||-3.4028234663852886E38<=a&&3.4028234663852886E38>=a);Ha(a);this.s(y)};S.prototype.writeFloat=S.prototype.L;
	S.prototype.J=function(a){n(Infinity===a||-Infinity===a||isNaN(a)||-1.7976931348623157E308<=a&&1.7976931348623157E308>=a);Ia(a);this.s(y);this.s(z)};S.prototype.writeDouble=S.prototype.J;S.prototype.I=function(a){n("boolean"===typeof a||"number"===typeof a);this.a.push(a?1:0)};S.prototype.writeBool=S.prototype.I;S.prototype.R=function(a){n(a==Math.floor(a));n(-2147483648<=a&&2147483648>a);this.M(a)};S.prototype.writeEnum=S.prototype.R;S.prototype.ja=function(a){this.a.push.apply(this.a,a)};
	S.prototype.writeBytes=S.prototype.ja;S.prototype.N=function(a){C(a);this.l(y,z)};S.prototype.writeVarintHash64=S.prototype.N;S.prototype.K=function(a){C(a);this.s(y);this.s(z)};S.prototype.writeFixedHash64=S.prototype.K;
	S.prototype.U=function(a){var b=this.a.length;ta(a);for(var c=0;c<a.length;c++){var d=a.charCodeAt(c);if(128>d)this.a.push(d);else if(2048>d)this.a.push(d>>6|192),this.a.push(d&63|128);else if(65536>d)if(55296<=d&&56319>=d&&c+1<a.length){var f=a.charCodeAt(c+1);56320<=f&&57343>=f&&(d=1024*(d-55296)+f-56320+65536,this.a.push(d>>18|240),this.a.push(d>>12&63|128),this.a.push(d>>6&63|128),this.a.push(d&63|128),c++)}else this.a.push(d>>12|224),this.a.push(d>>6&63|128),this.a.push(d&63|128)}return this.a.length-
	b};S.prototype.writeString=S.prototype.U;function T(a,b){this.lo=a;this.hi=b}g("jspb.arith.UInt64",T,void 0);T.prototype.cmp=function(a){return this.hi<a.hi||this.hi==a.hi&&this.lo<a.lo?-1:this.hi==a.hi&&this.lo==a.lo?0:1};T.prototype.cmp=T.prototype.cmp;T.prototype.La=function(){return new T((this.lo>>>1|(this.hi&1)<<31)>>>0,this.hi>>>1>>>0)};T.prototype.rightShift=T.prototype.La;T.prototype.Da=function(){return new T(this.lo<<1>>>0,(this.hi<<1|this.lo>>>31)>>>0)};T.prototype.leftShift=T.prototype.Da;
	T.prototype.cb=function(){return!!(this.hi&2147483648)};T.prototype.msb=T.prototype.cb;T.prototype.Ob=function(){return!!(this.lo&1)};T.prototype.lsb=T.prototype.Ob;T.prototype.Ua=function(){return 0==this.lo&&0==this.hi};T.prototype.zero=T.prototype.Ua;T.prototype.add=function(a){return new T((this.lo+a.lo&4294967295)>>>0>>>0,((this.hi+a.hi&4294967295)>>>0)+(4294967296<=this.lo+a.lo?1:0)>>>0)};T.prototype.add=T.prototype.add;
	T.prototype.sub=function(a){return new T((this.lo-a.lo&4294967295)>>>0>>>0,((this.hi-a.hi&4294967295)>>>0)-(0>this.lo-a.lo?1:0)>>>0)};T.prototype.sub=T.prototype.sub;function rb(a,b){var c=a&65535;a>>>=16;var d=b&65535,f=b>>>16;b=c*d+65536*(c*f&65535)+65536*(a*d&65535);for(c=a*f+(c*f>>>16)+(a*d>>>16);4294967296<=b;)b-=4294967296,c+=1;return new T(b>>>0,c>>>0)}T.mul32x32=rb;T.prototype.eb=function(a){var b=rb(this.lo,a);a=rb(this.hi,a);a.hi=a.lo;a.lo=0;return b.add(a)};T.prototype.mul=T.prototype.eb;
	T.prototype.Xa=function(a){if(0==a)return[];var b=new T(0,0),c=new T(this.lo,this.hi);a=new T(a,0);for(var d=new T(1,0);!a.cb();)a=a.Da(),d=d.Da();for(;!d.Ua();)0>=a.cmp(c)&&(b=b.add(d),c=c.sub(a)),a=a.La(),d=d.La();return[b,c]};T.prototype.div=T.prototype.Xa;T.prototype.toString=function(){for(var a="",b=this;!b.Ua();){b=b.Xa(10);var c=b[0];a=b[1].lo+a;b=c}""==a&&(a="0");return a};T.prototype.toString=T.prototype.toString;
	function U(a){for(var b=new T(0,0),c=new T(0,0),d=0;d<a.length;d++){if("0">a[d]||"9"<a[d])return null;c.lo=parseInt(a[d],10);b=b.eb(10).add(c)}return b}T.fromString=U;T.prototype.clone=function(){return new T(this.lo,this.hi)};T.prototype.clone=T.prototype.clone;function V(a,b){this.lo=a;this.hi=b}g("jspb.arith.Int64",V,void 0);V.prototype.add=function(a){return new V((this.lo+a.lo&4294967295)>>>0>>>0,((this.hi+a.hi&4294967295)>>>0)+(4294967296<=this.lo+a.lo?1:0)>>>0)};V.prototype.add=V.prototype.add;
	V.prototype.sub=function(a){return new V((this.lo-a.lo&4294967295)>>>0>>>0,((this.hi-a.hi&4294967295)>>>0)-(0>this.lo-a.lo?1:0)>>>0)};V.prototype.sub=V.prototype.sub;V.prototype.clone=function(){return new V(this.lo,this.hi)};V.prototype.clone=V.prototype.clone;V.prototype.toString=function(){var a=0!=(this.hi&2147483648),b=new T(this.lo,this.hi);a&&(b=(new T(0,0)).sub(b));return(a?"-":"")+b.toString()};V.prototype.toString=V.prototype.toString;
	function sb(a){var b=0<a.length&&"-"==a[0];b&&(a=a.substring(1));a=U(a);if(null===a)return null;b&&(a=(new T(0,0)).sub(a));return new V(a.lo,a.hi)}V.fromString=sb;function W(){this.c=[];this.b=0;this.a=new S;this.h=[]}g("jspb.BinaryWriter",W,void 0);function tb(a,b){var c=a.a.end();a.c.push(c);a.c.push(b);a.b+=c.length+b.length}function X(a,b){Y(a,b,2);b=a.a.end();a.c.push(b);a.b+=b.length;b.push(a.b);return b}function Z(a,b){var c=b.pop();c=a.b+a.a.length()-c;for(n(0<=c);127<c;)b.push(c&127|128),c>>>=7,a.b++;b.push(c);a.b++}W.prototype.pb=function(a,b,c){tb(this,a.subarray(b,c))};W.prototype.writeSerializedMessage=W.prototype.pb;
	W.prototype.Pb=function(a,b,c){null!=a&&null!=b&&null!=c&&this.pb(a,b,c)};W.prototype.maybeWriteSerializedMessage=W.prototype.Pb;W.prototype.reset=function(){this.c=[];this.a.end();this.b=0;this.h=[]};W.prototype.reset=W.prototype.reset;W.prototype.ab=function(){n(0==this.h.length);for(var a=new Uint8Array(this.b+this.a.length()),b=this.c,c=b.length,d=0,f=0;f<c;f++){var h=b[f];a.set(h,d);d+=h.length}b=this.a.end();a.set(b,d);d+=b.length;n(d==a.length);this.c=[a];return a};
	W.prototype.getResultBuffer=W.prototype.ab;W.prototype.Kb=function(a){return Ba(this.ab(),a)};W.prototype.getResultBase64String=W.prototype.Kb;W.prototype.Va=function(a){this.h.push(X(this,a))};W.prototype.beginSubMessage=W.prototype.Va;W.prototype.Ya=function(){n(0<=this.h.length);Z(this,this.h.pop())};W.prototype.endSubMessage=W.prototype.Ya;function Y(a,b,c){n(1<=b&&b==Math.floor(b));a.a.j(8*b+c)}
	W.prototype.Nc=function(a,b,c){switch(a){case 1:this.J(b,c);break;case 2:this.L(b,c);break;case 3:this.T(b,c);break;case 4:this.V(b,c);break;case 5:this.S(b,c);break;case 6:this.Qa(b,c);break;case 7:this.Pa(b,c);break;case 8:this.I(b,c);break;case 9:this.U(b,c);break;case 10:p("Group field type not supported in writeAny()");break;case 11:p("Message field type not supported in writeAny()");break;case 12:this.ja(b,c);break;case 13:this.s(b,c);break;case 14:this.R(b,c);break;case 15:this.Ra(b,c);break;
	case 16:this.Sa(b,c);break;case 17:this.rb(b,c);break;case 18:this.sb(b,c);break;case 30:this.K(b,c);break;case 31:this.N(b,c);break;default:p("Invalid field type in writeAny()")}};W.prototype.writeAny=W.prototype.Nc;function ub(a,b,c){null!=c&&(Y(a,b,0),a.a.j(c))}function vb(a,b,c){null!=c&&(Y(a,b,0),a.a.M(c))}W.prototype.S=function(a,b){null!=b&&(n(-2147483648<=b&&2147483648>b),vb(this,a,b))};W.prototype.writeInt32=W.prototype.S;
	W.prototype.ob=function(a,b){null!=b&&(b=parseInt(b,10),n(-2147483648<=b&&2147483648>b),vb(this,a,b))};W.prototype.writeInt32String=W.prototype.ob;W.prototype.T=function(a,b){null!=b&&(n(-9223372036854775808<=b&&0x7fffffffffffffff>b),null!=b&&(Y(this,a,0),this.a.ua(b)))};W.prototype.writeInt64=W.prototype.T;W.prototype.ka=function(a,b){null!=b&&(b=sb(b),Y(this,a,0),this.a.l(b.lo,b.hi))};W.prototype.writeInt64String=W.prototype.ka;
	W.prototype.s=function(a,b){null!=b&&(n(0<=b&&4294967296>b),ub(this,a,b))};W.prototype.writeUint32=W.prototype.s;W.prototype.ub=function(a,b){null!=b&&(b=parseInt(b,10),n(0<=b&&4294967296>b),ub(this,a,b))};W.prototype.writeUint32String=W.prototype.ub;W.prototype.V=function(a,b){null!=b&&(n(0<=b&&1.8446744073709552E19>b),null!=b&&(Y(this,a,0),this.a.va(b)))};W.prototype.writeUint64=W.prototype.V;W.prototype.vb=function(a,b){null!=b&&(b=U(b),Y(this,a,0),this.a.l(b.lo,b.hi))};
	W.prototype.writeUint64String=W.prototype.vb;W.prototype.rb=function(a,b){null!=b&&(n(-2147483648<=b&&2147483648>b),null!=b&&(Y(this,a,0),this.a.wa(b)))};W.prototype.writeSint32=W.prototype.rb;W.prototype.sb=function(a,b){null!=b&&(n(-9223372036854775808<=b&&0x7fffffffffffffff>b),null!=b&&(Y(this,a,0),this.a.xa(b)))};W.prototype.writeSint64=W.prototype.sb;W.prototype.$d=function(a,b){null!=b&&null!=b&&(Y(this,a,0),this.a.W(b))};W.prototype.writeSintHash64=W.prototype.$d;
	W.prototype.Zd=function(a,b){null!=b&&null!=b&&(Y(this,a,0),this.a.Ta(b))};W.prototype.writeSint64String=W.prototype.Zd;W.prototype.Pa=function(a,b){null!=b&&(n(0<=b&&4294967296>b),Y(this,a,5),this.a.s(b))};W.prototype.writeFixed32=W.prototype.Pa;W.prototype.Qa=function(a,b){null!=b&&(n(0<=b&&1.8446744073709552E19>b),Y(this,a,1),this.a.V(b))};W.prototype.writeFixed64=W.prototype.Qa;W.prototype.nb=function(a,b){null!=b&&(b=U(b),Y(this,a,1),this.a.A(b.lo,b.hi))};W.prototype.writeFixed64String=W.prototype.nb;
	W.prototype.Ra=function(a,b){null!=b&&(n(-2147483648<=b&&2147483648>b),Y(this,a,5),this.a.S(b))};W.prototype.writeSfixed32=W.prototype.Ra;W.prototype.Sa=function(a,b){null!=b&&(n(-9223372036854775808<=b&&0x7fffffffffffffff>b),Y(this,a,1),this.a.T(b))};W.prototype.writeSfixed64=W.prototype.Sa;W.prototype.qb=function(a,b){null!=b&&(b=sb(b),Y(this,a,1),this.a.A(b.lo,b.hi))};W.prototype.writeSfixed64String=W.prototype.qb;W.prototype.L=function(a,b){null!=b&&(Y(this,a,5),this.a.L(b))};
	W.prototype.writeFloat=W.prototype.L;W.prototype.J=function(a,b){null!=b&&(Y(this,a,1),this.a.J(b))};W.prototype.writeDouble=W.prototype.J;W.prototype.I=function(a,b){null!=b&&(n("boolean"===typeof b||"number"===typeof b),Y(this,a,0),this.a.I(b))};W.prototype.writeBool=W.prototype.I;W.prototype.R=function(a,b){null!=b&&(n(-2147483648<=b&&2147483648>b),Y(this,a,0),this.a.M(b))};W.prototype.writeEnum=W.prototype.R;W.prototype.U=function(a,b){null!=b&&(a=X(this,a),this.a.U(b),Z(this,a))};
	W.prototype.writeString=W.prototype.U;W.prototype.ja=function(a,b){null!=b&&(b=Ua(b),Y(this,a,2),this.a.j(b.length),tb(this,b))};W.prototype.writeBytes=W.prototype.ja;W.prototype.Rc=function(a,b,c){null!=b&&(a=X(this,a),c(b,this),Z(this,a))};W.prototype.writeMessage=W.prototype.Rc;W.prototype.Sc=function(a,b,c){null!=b&&(Y(this,1,3),Y(this,2,0),this.a.M(a),a=X(this,3),c(b,this),Z(this,a),Y(this,1,4))};W.prototype.writeMessageSet=W.prototype.Sc;
	W.prototype.Oc=function(a,b,c){null!=b&&(Y(this,a,3),c(b,this),Y(this,a,4))};W.prototype.writeGroup=W.prototype.Oc;W.prototype.K=function(a,b){null!=b&&(n(8==b.length),Y(this,a,1),this.a.K(b))};W.prototype.writeFixedHash64=W.prototype.K;W.prototype.N=function(a,b){null!=b&&(n(8==b.length),Y(this,a,0),this.a.N(b))};W.prototype.writeVarintHash64=W.prototype.N;W.prototype.A=function(a,b,c){Y(this,a,1);this.a.A(b,c)};W.prototype.writeSplitFixed64=W.prototype.A;
	W.prototype.l=function(a,b,c){Y(this,a,0);this.a.l(b,c)};W.prototype.writeSplitVarint64=W.prototype.l;W.prototype.tb=function(a,b,c){Y(this,a,0);var d=this.a;Ja(b,c,function(f,h){d.l(f>>>0,h>>>0)})};W.prototype.writeSplitZigzagVarint64=W.prototype.tb;W.prototype.Ed=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)vb(this,a,b[c])};W.prototype.writeRepeatedInt32=W.prototype.Ed;W.prototype.Fd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.ob(a,b[c])};
	W.prototype.writeRepeatedInt32String=W.prototype.Fd;W.prototype.Gd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.ua(d))}};W.prototype.writeRepeatedInt64=W.prototype.Gd;W.prototype.Qd=function(a,b,c,d){if(null!=b)for(var f=0;f<b.length;f++)this.A(a,c(b[f]),d(b[f]))};W.prototype.writeRepeatedSplitFixed64=W.prototype.Qd;W.prototype.Rd=function(a,b,c,d){if(null!=b)for(var f=0;f<b.length;f++)this.l(a,c(b[f]),d(b[f]))};
	W.prototype.writeRepeatedSplitVarint64=W.prototype.Rd;W.prototype.Sd=function(a,b,c,d){if(null!=b)for(var f=0;f<b.length;f++)this.tb(a,c(b[f]),d(b[f]))};W.prototype.writeRepeatedSplitZigzagVarint64=W.prototype.Sd;W.prototype.Hd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.ka(a,b[c])};W.prototype.writeRepeatedInt64String=W.prototype.Hd;W.prototype.Ud=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)ub(this,a,b[c])};W.prototype.writeRepeatedUint32=W.prototype.Ud;
	W.prototype.Vd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.ub(a,b[c])};W.prototype.writeRepeatedUint32String=W.prototype.Vd;W.prototype.Wd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.va(d))}};W.prototype.writeRepeatedUint64=W.prototype.Wd;W.prototype.Xd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.vb(a,b[c])};W.prototype.writeRepeatedUint64String=W.prototype.Xd;
	W.prototype.Md=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.wa(d))}};W.prototype.writeRepeatedSint32=W.prototype.Md;W.prototype.Nd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.xa(d))}};W.prototype.writeRepeatedSint64=W.prototype.Nd;W.prototype.Od=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.Ta(d))}};W.prototype.writeRepeatedSint64String=W.prototype.Od;
	W.prototype.Pd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++){var d=b[c];null!=d&&(Y(this,a,0),this.a.W(d))}};W.prototype.writeRepeatedSintHash64=W.prototype.Pd;W.prototype.yd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.Pa(a,b[c])};W.prototype.writeRepeatedFixed32=W.prototype.yd;W.prototype.zd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.Qa(a,b[c])};W.prototype.writeRepeatedFixed64=W.prototype.zd;
	W.prototype.Ad=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.nb(a,b[c])};W.prototype.writeRepeatedFixed64String=W.prototype.Ad;W.prototype.Jd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.Ra(a,b[c])};W.prototype.writeRepeatedSfixed32=W.prototype.Jd;W.prototype.Kd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.Sa(a,b[c])};W.prototype.writeRepeatedSfixed64=W.prototype.Kd;W.prototype.Ld=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.qb(a,b[c])};
	W.prototype.writeRepeatedSfixed64String=W.prototype.Ld;W.prototype.Cd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.L(a,b[c])};W.prototype.writeRepeatedFloat=W.prototype.Cd;W.prototype.wd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.J(a,b[c])};W.prototype.writeRepeatedDouble=W.prototype.wd;W.prototype.ud=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.I(a,b[c])};W.prototype.writeRepeatedBool=W.prototype.ud;
	W.prototype.xd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.R(a,b[c])};W.prototype.writeRepeatedEnum=W.prototype.xd;W.prototype.Td=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.U(a,b[c])};W.prototype.writeRepeatedString=W.prototype.Td;W.prototype.vd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.ja(a,b[c])};W.prototype.writeRepeatedBytes=W.prototype.vd;W.prototype.Id=function(a,b,c){if(null!=b)for(var d=0;d<b.length;d++){var f=X(this,a);c(b[d],this);Z(this,f)}};
	W.prototype.writeRepeatedMessage=W.prototype.Id;W.prototype.Dd=function(a,b,c){if(null!=b)for(var d=0;d<b.length;d++)Y(this,a,3),c(b[d],this),Y(this,a,4)};W.prototype.writeRepeatedGroup=W.prototype.Dd;W.prototype.Bd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.K(a,b[c])};W.prototype.writeRepeatedFixedHash64=W.prototype.Bd;W.prototype.Yd=function(a,b){if(null!=b)for(var c=0;c<b.length;c++)this.N(a,b[c])};W.prototype.writeRepeatedVarintHash64=W.prototype.Yd;
	W.prototype.ad=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.M(b[c]);Z(this,a)}};W.prototype.writePackedInt32=W.prototype.ad;W.prototype.bd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.M(parseInt(b[c],10));Z(this,a)}};W.prototype.writePackedInt32String=W.prototype.bd;W.prototype.cd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.ua(b[c]);Z(this,a)}};W.prototype.writePackedInt64=W.prototype.cd;
	W.prototype.md=function(a,b,c,d){if(null!=b){a=X(this,a);for(var f=0;f<b.length;f++)this.a.A(c(b[f]),d(b[f]));Z(this,a)}};W.prototype.writePackedSplitFixed64=W.prototype.md;W.prototype.nd=function(a,b,c,d){if(null!=b){a=X(this,a);for(var f=0;f<b.length;f++)this.a.l(c(b[f]),d(b[f]));Z(this,a)}};W.prototype.writePackedSplitVarint64=W.prototype.nd;W.prototype.od=function(a,b,c,d){if(null!=b){a=X(this,a);for(var f=this.a,h=0;h<b.length;h++)Ja(c(b[h]),d(b[h]),function(m,t){f.l(m>>>0,t>>>0)});Z(this,a)}};
	W.prototype.writePackedSplitZigzagVarint64=W.prototype.od;W.prototype.dd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++){var d=sb(b[c]);this.a.l(d.lo,d.hi)}Z(this,a)}};W.prototype.writePackedInt64String=W.prototype.dd;W.prototype.pd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.j(b[c]);Z(this,a)}};W.prototype.writePackedUint32=W.prototype.pd;
	W.prototype.qd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.j(parseInt(b[c],10));Z(this,a)}};W.prototype.writePackedUint32String=W.prototype.qd;W.prototype.rd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.va(b[c]);Z(this,a)}};W.prototype.writePackedUint64=W.prototype.rd;W.prototype.sd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++){var d=U(b[c]);this.a.l(d.lo,d.hi)}Z(this,a)}};
	W.prototype.writePackedUint64String=W.prototype.sd;W.prototype.hd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.wa(b[c]);Z(this,a)}};W.prototype.writePackedSint32=W.prototype.hd;W.prototype.jd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.xa(b[c]);Z(this,a)}};W.prototype.writePackedSint64=W.prototype.jd;W.prototype.kd=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.W(H(b[c]));Z(this,a)}};
	W.prototype.writePackedSint64String=W.prototype.kd;W.prototype.ld=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.W(b[c]);Z(this,a)}};W.prototype.writePackedSintHash64=W.prototype.ld;W.prototype.Wc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(4*b.length),a=0;a<b.length;a++)this.a.s(b[a])};W.prototype.writePackedFixed32=W.prototype.Wc;W.prototype.Xc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.V(b[a])};
	W.prototype.writePackedFixed64=W.prototype.Xc;W.prototype.Yc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++){var c=U(b[a]);this.a.A(c.lo,c.hi)}};W.prototype.writePackedFixed64String=W.prototype.Yc;W.prototype.ed=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(4*b.length),a=0;a<b.length;a++)this.a.S(b[a])};W.prototype.writePackedSfixed32=W.prototype.ed;
	W.prototype.fd=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.T(b[a])};W.prototype.writePackedSfixed64=W.prototype.fd;W.prototype.gd=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.ka(b[a])};W.prototype.writePackedSfixed64String=W.prototype.gd;W.prototype.$c=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(4*b.length),a=0;a<b.length;a++)this.a.L(b[a])};W.prototype.writePackedFloat=W.prototype.$c;
	W.prototype.Uc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.J(b[a])};W.prototype.writePackedDouble=W.prototype.Uc;W.prototype.Tc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(b.length),a=0;a<b.length;a++)this.a.I(b[a])};W.prototype.writePackedBool=W.prototype.Tc;W.prototype.Vc=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.R(b[c]);Z(this,a)}};W.prototype.writePackedEnum=W.prototype.Vc;
	W.prototype.Zc=function(a,b){if(null!=b&&b.length)for(Y(this,a,2),this.a.j(8*b.length),a=0;a<b.length;a++)this.a.K(b[a])};W.prototype.writePackedFixedHash64=W.prototype.Zc;W.prototype.td=function(a,b){if(null!=b&&b.length){a=X(this,a);for(var c=0;c<b.length;c++)this.a.N(b[c]);Z(this,a)}};W.prototype.writePackedVarintHash64=W.prototype.td;"object"===typeof exports&&(exports.debug=R,exports.Map=r,exports.Message=N,exports.BinaryReader=J,exports.BinaryWriter=W,exports.ExtensionFieldInfo=Ya,exports.ExtensionFieldBinaryInfo=Za,exports.exportSymbol=ma,exports.inherits=na,exports.object={extend:pa},exports.typeOf=k);
	
	}).call(this)}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{}],22:[function(require,module,exports){
	pb.Common_pb = require("./Common_pb.min.js");
	pb.Opcode20_pb = require("./Opcode20_pb.min.js");
	pb.Opcode31_pb = require("./Opcode31_pb.min.js");
	pb.Opcode35_pb = require("./Opcode35_pb.min.js");
	pb.Opcode42_pb = require("./Opcode42_pb.min.js");
	pb.Opcode43_pb = require("./Opcode43_pb.min.js");
	pb.Opcode44_pb = require("./Opcode44_pb.min.js");
	pb.Opcode45_pb = require("./Opcode45_pb.min.js");
	pb.Opcode47_pb = require("./Opcode47_pb.min.js");
	pb.Opcode49_pb = require("./Opcode49_pb.min.js");
	pb.Opcode50_pb = require("./Opcode50_pb.min.js");
	pb.Opcode51_pb = require("./Opcode51_pb.min.js");
	pb.Opcode52_pb = require("./Opcode52_pb.min.js");
	pb.Opcode53_pb = require("./Opcode53_pb.min.js");
	pb.Opcode55_pb = require("./Opcode55_pb.min.js");
	pb.Opcode57_pb = require("./Opcode57_pb.min.js");
	pb.Opcode58_pb = require("./Opcode58_pb.min.js");
	pb.Opcode59_pb = require("./Opcode59_pb.min.js");
	pb.Opcode66_pb = require("./Opcode66_pb.min.js");
	pb.VideoPlaybackRequest_pb = require("./VideoPlaybackRequest_pb.min.js");
	
	},{"./Common_pb.min.js":1,"./Opcode20_pb.min.js":2,"./Opcode31_pb.min.js":3,"./Opcode35_pb.min.js":4,"./Opcode42_pb.min.js":5,"./Opcode43_pb.min.js":6,"./Opcode44_pb.min.js":7,"./Opcode45_pb.min.js":8,"./Opcode47_pb.min.js":9,"./Opcode49_pb.min.js":10,"./Opcode50_pb.min.js":11,"./Opcode51_pb.min.js":12,"./Opcode52_pb.min.js":13,"./Opcode53_pb.min.js":14,"./Opcode55_pb.min.js":15,"./Opcode57_pb.min.js":16,"./Opcode58_pb.min.js":17,"./Opcode59_pb.min.js":18,"./Opcode66_pb.min.js":19,"./VideoPlaybackRequest_pb.min.js":20}]},{},[22]);

	//#endregion