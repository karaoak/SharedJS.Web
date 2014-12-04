var proxy = require("proxy");

var _ = proxy._,
    log = proxy.log,
    state = require("core/state");
    //Wrap an audio library here to handle the actual audio playback...
    //This class is just a wrapper to conform with the interface required for the shared audioplayer class...

exports.init = function(remote_url) {
    log('sound.init: to implement');
};

exports.play = function() {
    log('sound.play: to implement');
};

exports.pause = function() {
    log('sound.pause: to implement');
};

exports.stop = function() {
    log('sound.stop: to implement');
};