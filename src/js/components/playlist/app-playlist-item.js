/** @jsx React.DOM */
var React = require('react');
var AppActions = require('../../actions/app-actions');
var VoteUp = require('./app-voteup')
var VoteDown = require('./app-votedown')
var AppStore = require('../../stores/app-store');

var PlaylistItem = React.createClass({
    handler: function () {
        AppActions.play(this.props.id);
    },
    render: function () {
        return (
            <li onClick={this.handler} class='playlist-item'>
                <img src={'http://img.youtube.com/vi/' + this.props.url + '/1.jpg'}/>
                <span>{this.props.votes}</span>
                <VoteUp id={this.props.id} />
                <VoteDown id={this.props.id} />
            </li>
        );
    }
})

module.exports = PlaylistItem;
