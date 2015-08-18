/** @jsx React.DOM */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Index = require('../components/index/app-index');
// var Playlist = require('../components/playlist/app-playlist');

var APP = React.createClass({
    render: function () {
        return (
            <section className="app-container">
                <RouteHandler/>
            </section>
        )
    }
});

module.exports = APP;
