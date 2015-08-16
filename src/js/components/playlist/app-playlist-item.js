/** @jsx React.DOM */
var React = require('react');
var Link = require('react-router').Link;

var AppConstants = require('../../constants/app-constants');
var AppActions = require('../../actions/app-actions');

var VoteUp = require('./app-voteup')
var VoteDown = require('./app-votedown')
var AppStore = require('../../stores/app-store');

var PlaylistItem = React.createClass({

    handler: function () {
        AppActions.play(this.props.id);
    },

    thumbnailUrl: function(url) {

        var baseUrl = AppConstants.YOUTUBE_THUMBNAIL_URL;
        var url = baseUrl.replace('{{VIDEO_ID}}', this.props.url);

        return url;
    },

    render: function () {
        return (
            <li className='playlist-item'>
                <Link to="player" params={{ id: this.props.id }}>
                    <img src={this.thumbnailUrl(this.props.url)}/>
                </Link>
                <span>{this.props.votes}</span>
                <VoteUp id={this.props.id} />
                <VoteDown id={this.props.id} />
            </li>
        );
    }
})

module.exports = PlaylistItem;
