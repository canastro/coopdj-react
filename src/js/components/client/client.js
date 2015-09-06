/** @jsx React.DOM */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Playlist = require('../playlist/playlist');
var MusicForm = require('./music-form');

//TODO: https://github.com/compedit/react-youtube
var Client = React.createClass({

    render: function() {
        return (
            <section className="app-body">
                <section>
                    <MusicForm/>
                </section>
                <aside className="app-sidebar">
                    <Playlist mode="client"/>
                </aside>
            </section>
        );
    }

});

module.exports = Client;
