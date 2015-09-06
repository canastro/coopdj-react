/** @jsx React.DOM */
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var AppActions = require('../../actions/actions');

var MusicForm = React.createClass({

    getInitialState: function () {
        return {
            url: null
        };
    },

    handleChange: function(event) {
        this.setState({
            url: event.target.value
        });
    },

    handleSubmit: function () {

        AppActions.addItem(this.state.url);
    },

    render: function() {

        var value = this.state.url;

        return (
            <article>
                <input className="input-music-url" type="text" value={value} onChange={this.handleChange}/>
                <button class="btn-submit-music" onClick={this.handleSubmit}>Add</button>
            </article>
        );
    }

});

module.exports = MusicForm;
