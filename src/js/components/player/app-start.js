/** @jsx React.DOM */
var React = require('react');

var Start = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    handler: function(){
        alert(this.context.router.getCurrentParams().id);
    },

    render: function() {
        return (
            <button onClick={this.handler}>Start</button>
        );
    }

});

module.exports = Start;
