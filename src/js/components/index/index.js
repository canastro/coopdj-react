/** @jsx React.DOM */
var React = require('react');
var Launcher = require('./launcher');

//TODO: https://github.com/compedit/react-youtube
var Index = React.createClass({

    contextTypes: {
        router: React.PropTypes.func
    },

    render: function() {
        return (
            <div className="app-container">
                <Launcher name="Client" destination="client"/>
                <Launcher name="Host" destination="host"/>
            </div>
        );
    }

});

module.exports = Index;
