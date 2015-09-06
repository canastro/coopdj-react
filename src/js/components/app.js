/** @jsx React.DOM */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('../components/common/header');

var APP = React.createClass({
    render: function () {
        return (
            <div className="app-container">
                <Header/>
                <RouteHandler/>
            </div>
        )
    }
});

module.exports = APP;
