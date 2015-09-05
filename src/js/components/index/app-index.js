/** @jsx React.DOM */
var React = require('react');
var Launcher = require('./app-launcher');

//TODO: https://github.com/compedit/react-youtube
var Index = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    render: function() {
        return (
            <div className="index-container">
                <Launcher name="Client" destination="client"/>
                <Launcher name="Host" destination="host"/>
            </div>
        );
    }

});

module.exports = Index;
