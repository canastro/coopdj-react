/** @jsx React.DOM */
var React = require('react');
var VoteUp = require('./app-voteup')
var VoteDown = require('./app-votedown')
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
                <li class='playlist-item'>
                    <span>{item.url}</span>
                    <span>{item.votes}</span>
                    <VoteUp id={item.id} />
                    <VoteDown id={item.id} />
                </li>
            )
        });

        return (
            <ul class='playlist'>
                {items}
            </ul>
        );
    }
})

module.exports = Playlist;
