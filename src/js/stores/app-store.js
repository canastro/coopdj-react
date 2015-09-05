var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var EnvConstants = require('../constants/env');
var assign = require('react/lib/Object.assign');
var $ = require('jquery');
var EventEmitter = require('events').EventEmitter;
var Promise = require('es6-promise').Promise;

var CHANGE_EVENT = 'change';
var playlist = [];
var playing;


function _addItem(item){
    _playlist.push(item);
}

function _voteUp(id){
    _playlist[id].votes++;
}

function _voteDown(id){
    _playlist[id].votes--;
}

function _getPlaylist() {
    return $.get(EnvConstants.PLAYLIST.ALL, function(result) {
        playlist = result;
    });
}

function _next() {
    return $.get(EnvConstants.PLAYLIST.NEXT, function(result) {
        playing = result;
    });
}

function _play(video) {
    return new Promise(function (resolve, reject) {
        var url;

        if (!video.has_played) {
            url = EnvConstants.MUSIC.PLAY;
            url = url.replace('{{ID}}', video._id);

            $.ajax({
                url: url,
                type: 'PUT',
                sucess: function (response) {
                    resolve(response);
                }
            });
        } else {
            resolve();
        }
    });
}

function _reset() {

    return $.ajax({
        url: EnvConstants.PLAYLIST.RESET,
        type: 'PUT'
    })
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
                _addItem(payload.action.item)
                    .then(function () {
                        AppStore.emitChange();
                    });
                break;

            case AppConstants.VOTE_UP:
                _voteUp(payload.action.id)
                    .then(function () {
                        AppStore.emitChange();
                    });
                break;

            case AppConstants.VOTE_DOWN:
                _voteDown(payload.action.id)
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
