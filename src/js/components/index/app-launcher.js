var React = require('react');
var Link = require('react-router').Link;

var Launcher = React.createClass({
    render: function() {
        return (
            <Link to={this.props.destination}>
                <div onClick={this.handler} className="btn btn-lg btn-app-launcher">{this.props.name}</div>
            </Link>
        );
    }
});

module.exports = Launcher;
