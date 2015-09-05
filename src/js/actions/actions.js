var AppConstants = require('../constants/constants');
var AppDispatcher = require('../dispatchers/dispatcher');

var AppActions = {
    addItem: function(item) {
        AppDispatcher.dispatch({
            actionType: AppConstants.ADD_ITEM,
            item: item
        });
    },
    voteUp: function(id) {
        AppDispatcher.dispatch({
            actionType: AppConstants.VOTE_UP,
            id: id
        });
    },
    voteDown: function(id) {
        AppDispatcher.dispatch({
            actionType: AppConstants.VOTE_DOWN,
            id: id
        });
    },

    getPlaylist: function () {
        AppDispatcher.dispatch({
            actionType: AppConstants.GET_PLAYLIST
        });
    },

    reset: function () {
        AppDispatcher.dispatch({
            actionType: AppConstants.RESET
        });
    },

    play: function (video) {
        AppDispatcher.dispatch({
            actionType: AppConstants.PLAY,
            video: video
        });
    },

    next: function () {
        AppDispatcher.dispatch({
            actionType: AppConstants.NEXT
        });
    }
};

module.exports = AppActions;
