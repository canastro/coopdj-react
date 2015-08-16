var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');

var AppActions = {
    addItem: function(item) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.ADD_ITEM,
            item: item
        });
    },
    voteUp: function(id) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.VOTE_UP,
            id: id
        });
    },
    voteDown: function(id) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.VOTE_DOWN,
            id: id
        });
    }
};

module.exports = AppActions;
