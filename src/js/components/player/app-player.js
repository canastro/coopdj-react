/** @jsx React.DOM */
var React = require('react');
var Start = require('./app-start');

//TODO: https://github.com/compedit/react-youtube
var Player = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    render: function() {
        return (
            <div class="player-container">
                <div>{this.context.router.getCurrentParams().id}</div>
                <Start/>
                <div id="player"></div>
            </div>
        );
    }

});

module.exports = Player;
