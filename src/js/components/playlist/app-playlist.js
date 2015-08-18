/** @jsx React.DOM */
var React = require('react');

var PlaylistWatchMixin = require('../../mixins/playlist-watch-mixin');
var PlaylistItem = require('./app-playlist-item');
var AppStore = require('../../stores/app-store');

function getPlaylist() {
    return {
        items: AppStore.getPlaylist()
    };
}

var Playlist = React.createClass({
    mixins: [PlaylistWatchMixin(getPlaylist)],
    render: function () {
        var mode = this.props.mode;
        var items = this.state.items.map(function (item) {
            return (
                <PlaylistItem id={item.id} url={item.url} votes={item.votes} mode={mode}/>
            )
        });

        return (
            <ul className='playlist'>
                {items}
            </ul>
        );
    }
})

module.exports = Playlist;
