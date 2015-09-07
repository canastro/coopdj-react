var AppDispatcher = require('../dispatchers/dispatcher');
var AppConstants = require('../constants/constants');
var EnvConstants = require('../constants/env');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;
var Promise = require('es6-promise').Promise;
var fetch = require('whatwg-fetch');

var CHANGE_EVENT = 'change';
var playlist = [];
var playing;


function _addItem(item){
    var options = {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            url: item,
            type: 'YOUTUBE'
        })
    };

    return fetch(EnvConstants.PLAYLIST.POST, options)
        .then(function (reponse) {
            debugger;
        })
        .catch(function (error) {
            debugger;
        });
}

function _voteUp(id){
    var url;
    var options;

    url = EnvConstants.MUSIC.VOTE_UP;
    url = url.replace('{{ID}}', id);

    options = {
        method: 'PUT'
    };

    return fetch(url, options)
        .then(_getPlaylist);
}

function _voteDown(id){
    var url;
    var options;

    url = EnvConstants.MUSIC.VOTE_DOWN;
    url = url.replace('{{ID}}', id);

    options = {
        method: 'PUT'
    };

    return fetch(url, options)
        .then(_getPlaylist);
}

function _getPlaylist() {

    return fetch(EnvConstants.PLAYLIST.ALL)
        .then(function (response) {
            return response.json();
        }).then(function (response) {
            playlist = response;
        });
}

function _next() {
    return fetch(EnvConstants.PLAYLIST.NEXT)
        .then(function (response) {
            return response.json();
        }).then(function (response) {
            playing = response;
        });
}

function _play(video) {
    return new Promise(function (resolve, reject) {
        var url;
        var options;

        if (!video.has_played) {
            url = EnvConstants.MUSIC.PLAY;
            url = url.replace('{{ID}}', video._id);

            options = {
                method: 'PUT'
            };

            return fetch(url, options)
                .then(function () {
                    resolve();
                });
        } else {
            resolve();
        }
    });
}

function _reset() {

    var options = {
        method: 'PUT'
    };

    return fetch(EnvConstants.PLAYLIST.RESET, options)
        .then(_getPlaylist)
        .then(_next);
}

var AppStore = assign(EventEmitter.prototype, {

    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback){

        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback){

        this.removeListener(CHANGE_EVENT, callback);
    },

    getPlaylist: function() {
        return playlist;
    },

    getPlaying: function() {
        return playing;
    },

    dispatcherIndex: AppDispatcher.register(function(payload){


        switch(payload.actionType){
            case AppConstants.ADD_ITEM:
                _addItem(payload.item)
                    .then(function () {
                        AppStore.emitChange();
                    });
                break;

            case AppConstants.VOTE_UP:
                _voteUp(payload.id)
                    .then(function () {
                        AppStore.emitChange();
                    });
                break;

            case AppConstants.VOTE_DOWN:
                _voteDown(payload.id)
                    .then(function () {
                        AppStore.emitChange();
                    });
                break;

            case AppConstants.GET_PLAYLIST:
                _getPlaylist()
                    .then(function () {
                        AppStore.emitChange();
                    });
                break;

            case AppConstants.RESET:
                _reset()
                    .then(function () {
                        AppStore.emitChange();
                    });
                break;

            case AppConstants.PLAY:
                _play(payload.video)
                    .then(function () {
                        AppStore.emitChange();
                    });
                break;

            case AppConstants.NEXT:
                _next()
                    .then(function () {
                        AppStore.emitChange();
                    });
                break;
        }

        return true;
    })

})

module.exports = AppStore;
