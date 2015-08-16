/** @jsx React.DOM */
var React = require('react');
var Playlist = require('../components/playlist/app-playlist');

var APP = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Playlist</h1>
                <Playlist/>
            </div>
        )
    }
})

module.exports = APP;
