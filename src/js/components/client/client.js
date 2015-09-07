/** @jsx React.DOM */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Playlist = require('../playlist/playlist');
var MusicForm = require('./music-form');

var Client = React.createClass({

    render: function() {
        return (
            <section className="app-body">
                <section className="playlist-client-container">
                    <MusicForm/>
                    <Playlist mode="client"/>
                </section>
            </section>
        );
    }

});

module.exports = Client;
