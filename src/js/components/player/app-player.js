/** @jsx React.DOM */
var React = require('react');

var Player = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    render: function() {
        return (
            <div>{this.context.router.getCurrentParams().id}</div>
        );
    }

});

module.exports = Player;
