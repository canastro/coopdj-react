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

        isPlaying = music._id === this.props.item._id;

        this.setState({
            playing: isPlaying
        });
    },

    _thumbnailUrl: function(id) {

        var baseUrl = AppConstants.YOUTUBE_THUMBNAIL_URL;
        var url = baseUrl.replace('{{VIDEO_ID}}', id);

        return url;
    },

    render: function () {

        var playing;
        var title;

        if (this.state.playing) {
            playing = (
                <span>IS PLAYING</span>
            );
        }

        title = (
            <div className="playlist-item-element playlist-item-title">
                <span>{this.props.item.title}</span>
            </div>
        );

        if (this.props.mode === 'client') {
            return (

                <li className='playlist-item'>

                    <img className='playlist-item-element playlist-item-thumbnail' src={this._thumbnailUrl(this.props.item.video_id)}/>

                    {title}

                    <div className='playlist-item-element playlist-item-votes'>
                        <VoteUp id={this.props.item._id} />
                        <h3>{this.props.item.votes}</h3>
                        <VoteDown id={this.props.item._id} />
                    </div>
                </li>
            );
        }

        return (
            <li className='playlist-item'>

                {title}

                <img src={this._thumbnailUrl(this.props.item.video_id)}/>
                <span>{this.props.item.votes}</span>
                {playing}
            </li>
        );
    }
})

module.exports = PlaylistItem;
