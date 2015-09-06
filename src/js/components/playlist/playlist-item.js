/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router').Link;

var AppConstants = require('../../constants/constants');
var AppActions = require('../../actions/actions');
var VoteUp = require('./voteup')
var VoteDown = require('./votedown')
var AppStore = require('../../stores/store');

var PlaylistItem = React.createClass({

    getInitialState: function() {
        return {
            isPlaying: false
        };
    },

    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        var music = AppStore.getPlaying();
        var isPlaying;

        if (!music) {
            return;
        }

        isPlaying = music._id === this.props.id;

        this.setState({
            playing: isPlaying
        });
    },

    _thumbnailUrl: function(url) {

        var baseUrl = AppConstants.YOUTUBE_THUMBNAIL_URL;
        var url = baseUrl.replace('{{VIDEO_ID}}', this.props.video_id);

        return url;
    },

    render: function () {

        var controls;
        var playing;
        if (this.props.mode === 'client') {
            controls = (
                <div className='playlist-item-controls'>
                    <VoteUp id={this.props.id} />
                    <VoteDown id={this.props.id} />
                </div>
            );
        }

        if (this.state.playing) {
            playing = (
                <span>IS PLAYING</span>
            );
        }

        return (
            <li className='playlist-item'>
                <img src={this._thumbnailUrl(this.props.video_id)}/>
                <span>{this.props.votes}</span>
                {playing}
                {controls}
            </li>
        );
    }
})

module.exports = PlaylistItem;
