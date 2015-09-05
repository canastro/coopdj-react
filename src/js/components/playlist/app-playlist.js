/** @jsx React.DOM */
var React = require('react');

var PlaylistWatchMixin = require('../../mixins/playlist-watch-mixin');
var PlaylistItem = require('./app-playlist-item');
var AppStore = require('../../stores/app-store');

function getPlaylist() {
    return {
        items: []
    };
}

var Playlist = React.createClass({
    mixins: [PlaylistWatchMixin(getPlaylist)],

    componentDidMount: function() {

        var self = this;

        AppStore.getPlaylist().then(function (result) {
            if (self.isMounted()) {
                self.setState({
                    items: result
                })
            }
        });
    },

    render: function () {
        var mode = this.props.mode;
        var items = this.state.items.map(function (item) {
            return (
                <PlaylistItem id={item._id} video_id={item.video_id} votes={item.votes} mode={mode}/>
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
