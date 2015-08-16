/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../../actions/app-actions');
var Link = require('react-router').Link;

var VoteUp = require('./app-voteup')
var VoteDown = require('./app-votedown')
var AppStore = require('../../stores/app-store');

var PlaylistItem = React.createClass({
    handler: function () {
        AppActions.play(this.props.id);
    },
    thumbnailUrl: function(url) {
        return 'http://img.youtube.com/vi/' + this.props.url + '/1.jpg';
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
