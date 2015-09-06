/** @jsx React.DOM */
var React = require('react');

var Header = React.createClass({

    render: function() {
        return (
            <header className="header-container">
                <div className="header">
                    <h2>Cooperative DJ</h2>
                </div>
            </header>
        );
    }

});

module.exports = Header;
