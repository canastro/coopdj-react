/** @jsx React.DOM */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Playlist = require('../playlist/playlist');
var Player = require('./player');
var AppActions = require('../../actions/actions');

var Host = React.createClass({
    render: function() {

        return (
            <section className="app-body">
                <section>
                    <Player/>
                </section>
                <aside className="app-sidebar">
                    <button onClick={this._reset}>Reset</button>
                    <Playlist mode="host"/>
                </aside>
            </section>
        );
    },
    _reset() {
        AppActions.reset();
    }

});

module.exports = Host;
