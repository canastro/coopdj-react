/** @jsx React.DOM */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Playlist = require('../playlist/app-playlist');

//TODO: https://github.com/compedit/react-youtube
var Client = React.createClass({

    render: function() {
        return (
            <div className="app-client-container">
                <h1>Client</h1>
                <div className="app-details">
                    <RouteHandler/>
                </div>
                <aside className="app-sidebar">
                    <Playlist/>
                </aside>
            </div>
        );
    }

});

module.exports = Client;
