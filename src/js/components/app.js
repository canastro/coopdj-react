/** @jsx React.DOM */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Playlist = require('../components/playlist/app-playlist');

var APP = React.createClass({
    render: function () {
        return (
            <section className="app-container">
                <div className="app-details">
                    <RouteHandler/>
                </div>
                <aside className="app-sidebar">
                    <Playlist/>
                </aside>
            </section>
        )
    }
})

module.exports = APP;
