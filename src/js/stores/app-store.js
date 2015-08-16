var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _playlist = [{
    'id': 0,
    'url': 'JhzcNidhGzA',
    'votes': 0
}, {
    'id': 1,
    'url': 'JhzcNidhGzA',
    'votes': 0
}, {
    'id': 2,
    'url': 'JhzcNidhGzA',
    'votes': 0
}, {
    'id': 3,
    'url': 'JhzcNidhGzA',
    'votes': 0
}, {
    'id': 4,
    'url': 'JhzcNidhGzA',
    'votes': 0
}];

function _addItem(item){

    _playlist.push(item);
}

function _voteUp(id){

    _playlist[id].votes++;
}

function _voteDown(id){

    _playlist[id].votes--;
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

    getPlaylist: function(){

        return _playlist;
    },

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
        }

        AppStore.emitChange();

        return true;
    })

})

module.exports = AppStore;
