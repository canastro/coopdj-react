/** @jsx React.DOM */
var React = require('react');
var PlaylistItem = require('./app-playlist-item')
var AppStore = require('../../stores/app-store');

function getPlaylist() {
    return {
        items: AppStore.getPlaylist()
    };
}

var Playlist = React.createClass({
    getInitialState: function () {
        return getPlaylist();
    },
    componentWillMount:function(){
        AppStore.addChangeListener(this._onChange);
    },
    _onChange: function(){
        this.setState(getPlaylist());
    },
    render: function () {
        var items = this.state.items.map(function (item) {
            return (
                <PlaylistItem id={item.id} url={item.url} votes={item.votes}/>
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
