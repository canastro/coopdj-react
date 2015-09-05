/** @jsx React.DOM */
var React = require('react');
var AppStore = require('../stores/store');

var PlaylistWatchMixin = function (cb) {
    return {
        getInitialState: function () {
            return cb();
        },
        componentWillMount:function(){
            AppStore.addChangeListener(this._onChange);
        },
        componentWillUnmount:function(){
            AppStore.removeChangeListener(this._onChange);
        },
        _onChange: function(){
            this.setState(cb());
        }
    }
};

module.exports = PlaylistWatchMixin;
