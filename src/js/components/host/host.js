/** @jsx React.DOM */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Playlist = require('../playlist/playlist');
var YouTube = require('react-youtube');
var AppStore = require('../../stores/store');
var AppActions = require('../../actions/actions');
var $ = require('jquery');

function getPlayingState() {
    return {
        video: AppStore.getPlaying()
    };
}

//TODO: https://github.com/compedit/react-youtube
var Host = React.createClass({
    getInitialState: function() {
        return {
            video: null
        };
    },

    getUrl: function (video) {
        if (!video) {
            return;
        }

        return 'http://www.youtube.com/watch?v=' + video.video_id;
    },

    componentDidMount: function() {

        AppActions.next();
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(getPlayingState());
    },

    render: function() {
        var opts = {
            height: '390',
            width: '640',
            playerVars: {
                autoplay: 1
            }
        };

        var player;

        if (this.state.video) {
            player = (
                <YouTube
                    url={this.getUrl(this.state.video)}
                    opts={opts}
                    onPlay={this._onPlay}
                    onEnd={this._next}/>
            );
        }

        return (
            <div className="app-container">
                <h1>Host</h1>
                <div className="app-details">
                    {player}
                </div>
                <aside className="app-sidebar">
                    <button onClick={this._reset}>Reset</button>
                    <Playlist mode="host"/>
                </aside>
            </div>
        );
    },

    _next() {
        AppActions.next();
    },

    _reset() {
        AppActions.reset();
    },

    _onPlay(event) {
        AppActions.play(this.state.video);
    }

});

module.exports = Host;
