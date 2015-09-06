/** @jsx React.DOM */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var YouTube = require('react-youtube');
var AppStore = require('../../stores/store');
var AppActions = require('../../actions/actions');

function getPlayingState() {
    return {
        video: AppStore.getPlaying()
    };
}

var Player = React.createClass({
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

        if (!this.state.video) {
            return (
                <article>
                    No video
                </article>
            );
        }

        return (
            <article>
                <h1>{this.state.video.title}</h1>
                <YouTube
                    url={this.getUrl(this.state.video)}
                    opts={opts}
                    onPlay={this._onPlay}
                    onEnd={this._next}/>
                <span>Votes:</span>
                <span>{this.state.video.votes}</span>
                <span>{this.state.video.channel_titles}</span>
                <span>{this.state.video.description}</span>
            </article>
        );
    },

    _next() {
        AppActions.next();
    },

    _onPlay(event) {
        AppActions.play(this.state.video);
    }

});

module.exports = Player;
