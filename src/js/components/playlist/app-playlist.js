/** @jsx React.DOM */
var React = require('react');

var PlaylistWatchMixin = require('../../mixins/playlist-watch-mixin');
var PlaylistItem = require('./app-playlist-item');
var AppStore = require('../../stores/app-store');
var AppActions = require('../../actions/app-actions');

function getPlaylistState() {
    return {
        items: AppStore.getPlaylist()
    };
}

var Playlist = React.createClass({
    // mixins: [PlaylistWatchMixin(getPlaylist)],
    getInitialState: function() {
        return {
            items: []
        };
    },

    componentDidMount: function() {

        AppActions.getPlaylist();
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(getPlaylistState());
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
