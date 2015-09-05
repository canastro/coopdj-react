var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var assign = require('react/lib/Object.assign');
var $ = require('jquery');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

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
    return $.get('http://0.0.0.0:5000/playlist?action=all', function(result) {
        return result;
    });
}

function _next() {
    return $.get('http://0.0.0.0:5000/playlist?action=next', function(result) {
        return result;
    });
}

function _play(video) {
    var url;

    if (!video.has_played) {
        url = 'http://0.0.0.0:5000/musics/{{ID}}?action=play';
        url = url.replace('{{ID}}', video._id);

        return $.ajax({
            url: url,
            type: 'PUT',
            success: function(result) {
                return result;
            }
        });
    }
}

function _reset() {
    var url = 'http://0.0.0.0:5000/playlist?action=reset';

    return $.ajax({
        url: url,
        type: 'PUT',
        success: function(result) {
            return result;
        }
    });
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

    getPlaylist: _getPlaylist,
    play: _play,
    next: _next,
    reset: _reset,

    dispatcherIndex: AppDispatcher.register(function(payload){

        var action = payload.action; // this is our action from handleViewAction

        switch(action.actionType){
            case AppConstants.ADD_ITEM:
                _addItem(payload.action.item);
                break;

            case AppConstants.VOTE_UP:
                _voteUp(payload.action.id);
                break;

            case AppConstants.VOTE_DOWN:
                _voteDown(payload.action.id);
                break;

            case AppConstants.GET_PLAYLIST:
                _getPlaylist();
                break;

            case AppConstants.RESET:
                _reset();
                break;

            case AppConstants.PLAY:
                _getPlaylist(payload.action.video);
                break;

            case AppConstants.NEXT:
                _getPlaylist();
                break;
        }

        AppStore.emitChange();

        return true;
    })

})

module.exports = AppStore;
