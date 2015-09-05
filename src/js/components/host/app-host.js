/** @jsx React.DOM */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Playlist = require('../playlist/app-playlist');
var YouTube = require('react-youtube');
var AppStore = require('../../stores/app-store');
var $ = require('jquery');

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

        var self = this;

        AppStore.next().then(function (result) {
            if (self.isMounted()) {
                self.setState({
                    video: result
                })
            }
        });
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
                    onEnd={this._onEnd}/>
            );
        }

        return (
            <div className="app-host-container">
                <h1>Host</h1>
                <div className="app-details">
                    {player}
                </div>
                <aside className="app-sidebar">
                    <button onClick={this.reset}>Reset</button>
                    <Playlist mode="host"/>
                </aside>
            </div>
        );
    },

    next() {
        var self = this;
        AppStore.next().then(function (result) {
            if (self.isMounted()) {
                self.setState({
                    video: result
                })
            }
        });
    },

    reset() {
        AppStore.reset().then(this.next);
    },

    _onPlay(event) {
        // access to player in all event handlers via event.target
        // event.target.pauseVideo();
        AppStore.play(this.state.video);
    },
    _onEnd() {
        this.next();
    }

});

module.exports = Host;
