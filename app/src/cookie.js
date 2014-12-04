var log = require('logger'),
    cookieLib;
//Either store some(!) values remote or either do this by a sessionId cookie + server session...

exports.set = function(key, value) {
    log('cookie.store: ' + key + ':' + value);
    //cookieLib.store(key, value);
};

exports.get = function(key) {
    var value = '';//cookieLib.get(key, value);(key, false);
    log('cookie.get: ' + key + ':' + value);
    return value;
};

exports.unset = function(key) {
    log('cookie.remove: ' + key);
    //cookieLib.unSet(key);
};