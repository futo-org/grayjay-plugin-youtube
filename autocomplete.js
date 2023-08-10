//Reference Scriptfile
//Intended exclusively for auto-complete in your IDE, not for execution

let Type = {
    Source: {
        Dash: "DASH",
        HLS: "HLS",
        STATIC: "Static"
    },
    Feed: {
        Videos: "VIDEOS",
        Streams: "STREAMS",
        Mixed: "MIXED",
        Live: "LIVE"
    },
    Order: {
        Chronological: "CHRONOLOGICAL"
    }
};

let Language = {
    UNKNOWN: "Unknown",
    ARABIC: "Arabic",
    SPANISH: "Spanish",
    FRENCH: "French",
    HINDI: "Hindi",
    INDONESIAN: "Indonesian",
    KOREAN: "Korean",
    PORTBRAZIL: "Portuguese Brazilian",
    RUSSIAN: "Russian",
    THAI: "Thai",
    TURKISH: "Turkish",
    VIETNAMESE: "Vietnamese",
    ENGLISH: "English"
}

class ScriptException extends Error {
    constructor(type, msg) {
        if(arguments.length == 1) {
            super(arguments[0]);
            this.plugin_type = "ScriptException";
            this.message = arguments[0];
        }
        else {
            super(msg);
            this.plugin_type = type ?? ""; //string
            this.msg = msg ?? ""; //string
        }
    }
}
class TimeoutException extends ScriptException {
    constructor(msg) {
        super(msg);
        this.plugin_type = "ScriptTimeoutException";
    }
}

class Thumbnails {
    constructor(thumbnails) {
        this.sources = thumbnails ?? []; // Thumbnail[]
    }
}
class Thumbnail {
    constructor(url, quality) {
        this.url = url ?? ""; //string
        this.quality = quality ?? 0; //integer
    }
}

class PlatformID {
    constructor(platform, id) {
        this.platform = platform ?? ""; //string
        this.value = id; //string
    }
}
class PlatformAuthorLink {
    constructor(platform, name, url, thumbnail) {
        this.platform = platform ?? ""; //string
        this.name = name ?? ""; //string
        this.url = url ?? ""; //string
        this.thumbnail = thumbnail; //string
    }
}
class PlatformVideo {
    constructor(obj) {
        obj = obj ?? {};
        this.plugin_type = "PlatformVideo";
        this.id = obj.id ?? PlatformID();   //PlatformID
        this.name = obj.name ?? ""; //string
        this.thumbnails = obj.thumbnails ?? Thumbnails([]); //Thumbnail[]
        this.author = obj.author ?? PlatformAuthorLink(); //PlatformAuthorLink
        this.uploadDate = obj.uploadDate ?? 0; //OffsetDateTime (Long)
        this.url = obj.url ?? ""; //String

        this.duration = obj.duration ?? -1; //Long
        this.viewCount = obj.viewCount ?? -1; //Long

        this.isLive = obj.isLive ?? false; //Boolean
    }
}
class PlatformVideoDetails extends PlatformVideo {
    constructor(obj) {
        super(obj);
        obj = obj ?? {};
        this.plugin_type = "PlatformVideoDetails";

        this.description = obj.description ?? "";//String
        this.video = obj.video ?? {}; //VideoSourceDescriptor
        this.dash = obj.dash ?? null; //DashSource
        this.hls = obj.hls ?? null; //HLSSource
        this.live = obj.live ?? null; //VideoSource
    }
}

//Sources
class VideoSourceDescriptor {
    constructor(obj) {
        obj = obj ?? {};
        this.plugin_type = "MuxVideoSourceDescriptor";
        this.isUnMuxed = false;

        if(obj.constructor === Array)
            this.videoSources = obj;
        else
            this.videoSources = obj.videoSources ?? [];

    }
}
class UnMuxVideoSourceDescriptor {
    constructor(videoSourcesOrObj, audioSources) {
        videoSourcesOrObj = videoSourcesOrObj ?? {};
        this.plugin_type = "UnMuxVideoSourceDescriptor";
        this.isUnMuxed = true;

        if(videoSourcesOrObj.constructor === Array) {
            this.videoSources = videoSourcesOrObj;
            this.audioSources = audioSources;
        }
        else {
            this.videoSources = videoSourcesOrObj.videoSources ?? [];
            this.audioSources = videoSourcesOrObj.audioSources ?? [];
        }
    }
}

class VideoUrlSource {
    constructor(obj) {
        obj = obj ?? {};
        this.plugin_type = "VideoUrlSource";
        this.width = obj.width ?? 0;
        this.height = obj.height ?? 0;
        this.container = obj.container ?? "";
        this.codec = obj.codec ?? "";
        this.name = obj.name ?? "";
        this.bitrate = obj.bitrate ?? 0;
        this.duration = obj.duration ?? 0;
        this.url = obj.url;
    }
}
class VideoUrlRangeSource extends VideoUrlSource {
    constructor(obj) {
        super(obj);
        this.plugin_type = "VideoUrlRangeSource";

		this.itagId = obj.itagId ?? null;
		this.initStart = obj.initStart ?? null;
		this.initEnd = obj.initEnd ?? null;
		this.indexStart = obj.indexStart ?? null;
		this.indexEnd = obj.indexEnd ?? null;
    }
}
class AudioUrlSource {
    constructor(obj) {
        obj = obj ?? {};
        this.plugin_type = "AudioUrlSource";
        this.name = obj.name ?? "";
        this.bitrate = obj.bitrate ?? 0;
        this.container = obj.container ?? "";
        this.codec = obj.codec ?? "";
        this.duration = obj.duration ?? 0;
        this.url = obj.url;
        this.language = obj.language ?? Language.UNKNOWN;
    }
}
class AudioUrlRangeSource extends AudioUrlSource {
    constructor(obj) {
        super(obj);
        this.plugin_type = "AudioUrlRangeSource";

		this.itagId = obj.itagId ?? null;
		this.initStart = obj.initStart ?? null;
		this.initEnd = obj.initEnd ?? null;
		this.indexStart = obj.indexStart ?? null;
		this.indexEnd = obj.indexEnd ?? null;
		this.audioChannels = obj.audioChannels ?? 2;
    }
}
class HLSSource {
    constructor(obj) {
        obj = obj ?? {};
        this.plugin_type = "HLSSource";
        this.name = obj.name ?? "HLS";
        this.duration = obj.duration ?? 0;
        this.url = obj.url;
    }
}
class DashSource {
    constructor(obj) {
        obj = obj ?? {};
        this.plugin_type = "DashSource";
        this.name = obj.name ?? "Dash";
        this.duration = obj.duration ?? 0;
        this.url = obj.url;
    }
}

//Channel
class PlatformChannel {
    constructor(obj) {
        obj = obj ?? {};
        this.plugin_type = "PlatformChannel";
        this.id = obj.id ?? ""; //string
        this.name = obj.name ?? ""; //string
        this.thumbnail = obj.thumbnail; //string
        this.banner = obj.banner; //string
        this.subscribers = obj.subscribers ?? 0; //integer
        this.description = obj.description; //string
        this.url = obj.url ?? ""; //string
        this.links = obj.links ?? {  } //Map<string,string>
    }
}

//Ratings
class RatingLikes {
    constructor(likes) {
        this.type = 1;
        this.likes = likes;
    }
}
class RatingLikesDislikes {
    constructor(likes,dislikes) {
        this.type = 2;
        this.likes = likes;
        this.dislikes = dislikes;
    }
}
class RatingScaler {
    constructor(value) {
        this.type = 3;
        this.value = value;
    }
}

class Comment {
    constructor(obj) {
        this.plugin_type = "Comment";
        this.contextUrl = obj.contextUrl ?? "";
        this.author = obj.author ?? new PlatformAuthorLink(null, "", "", null);
        this.message = obj.message ?? "";
        this.rating = obj.rating ?? new RatingLikes(0);
        this.date = obj.date ?? 0;
        this.replyCount = obj.replyCount ?? 0;
    }
}

//Pagers
class VideoPager {
    constructor(results, hasMore, context) {
        this.plugin_type = "VideoPager";
        this.results = results ?? [];
        this.hasMore = hasMore ?? false;
        this.context = context ?? {};
    }

    hasMorePagers() { return this.hasMore; }
    nextPage() { return new Pager([], false, this.context) }
}
class CommentPager {
    constructor(results, hasMore, context) {
        this.plugin_type = "CommentPager";
        this.results = results ?? [];
        this.hasMore = hasMore ?? false;
        this.context = context ?? {};
    }

    hasMorePagers() { return this.hasMore; }
    nextPage() { return new Pager([], false, this.context) }
}

function throwException(type, message) {
    throw new Error("V8EXCEPTION:" + type + "-" + message);
}

//To override by plugin
const source = {
    getHome() { return new Pager([], false, {}); },

    enable(config){  },

    searchSuggestions(query){ return []; },
    search(query){ return new Pager([], false, {}); }, //TODO

    isChannelUrl(url){ return false; },
    getChannel(url){ return null; },
    getChannelVideos(url) { return new Pager([], false, {}); },

    isVideoDetailsUrl(url){ return false; },
    getVideoDetails(url){  }, //TODO

    getComments(url){ return new Pager([], false, {}); }, //TODO
    getSubComments(comment){ return new Pager([], false, {}); }, //TODO

    getSubscriptionsUser(){ return []; },
    getPlaylistsUser(){ return []; }
};


function log(str) {
    if(str) {
        if(typeof str == "string")
            bridge.log(str);
        else
            bridge.log(JSON.stringify(str, null, 4));
    }
}


//Package Bridge (variable: bridge)
let bridge = {
   /**
   * @return {Boolean}
   **/
   isLoggedIn: function() {},

   /**
   * @param {String} str
   * @return {Unit}
   **/
   log: function(str) {},

   /**
   * @param {String} str
   * @return {Unit}
   **/
   throwTest: function(str) {},

   /**
   * @param {String} str
   * @return {Unit}
   **/
   toast: function(str) {},

}

//Package Http (variable: http)
let http = {
   /**
   * @param {String} url
   * @param {Map} headers
   * @return {BridgeHttpResponse}
   **/
   GET: function(url, headers) {},

   /**
   * @param {String} url
   * @param {String} contentType
   * @param {String} body
   * @param {Map} headers
   * @return {BridgeHttpResponse}
   **/
   POST: function(url, contentType, body, headers) {},

   /**
   * @param {String} method
   * @param {String} url
   * @param {Map} headers
   * @return {BridgeHttpResponse}
   **/
   request: function(method, url, headers) {},

   /**
   * @param {String} method
   * @param {String} url
   * @param {String} body
   * @param {Map} headers
   * @return {BridgeHttpResponse}
   **/
   requestWithBody: function(method, url, body, headers) {},

}

//Package DOMParser (variable: domParser)
let domParser = {
   /**
   * @param {String} html
   * @return {DOMNode}
   **/
   parseFromString: function(html) {},

}
