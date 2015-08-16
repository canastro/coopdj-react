/** @jsx React.DOM */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Playlist = require('../components/playlist/app-playlist');

var APP = React.createClass({
    render: function () {
        return (
            <div className="app-container">
                <Playlist/>
                <div className="app-details">
                    <RouteHandler/>
                </div>
            </div>
        )
    }
})

module.exports = APP;
