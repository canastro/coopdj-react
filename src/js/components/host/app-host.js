/** @jsx React.DOM */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Playlist = require('../playlist/app-playlist');

//TODO: https://github.com/compedit/react-youtube
var Host = React.createClass({

    render: function() {
        return (
            <div className="app-host-container">
                <h1>Host</h1>
                <div className="app-details">
                    <RouteHandler/>
                </div>
                <aside className="app-sidebar">
                    <Playlist mode="host"/>
                </aside>
            </div>
        );
    }

});

module.exports = Host;
