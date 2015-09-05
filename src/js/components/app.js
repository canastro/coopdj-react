/** @jsx React.DOM */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Index = require('../components/index/index');
// var Playlist = require('../components/playlist/app-playlist');

var APP = React.createClass({
    render: function () {
        return (
            <RouteHandler/>
        )
    }
});

module.exports = APP;
