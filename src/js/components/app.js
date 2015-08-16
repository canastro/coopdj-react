/** @jsx React.DOM */
var React = require('react');
// Here we put our React instance to the global scope. Make sure you do not put it
// into production and make sure that you close and open your console if the
// DEV-TOOLS does not display
window.React = React;


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
