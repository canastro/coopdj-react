var React = require('react');
var AppActions = require('../../actions/actions');

var VoteDown = React.createClass({
    handler: function(){
        AppActions.voteDown(this.props.id)
    },
    render:function(){
        return <button onClick={this.handler}>-</button>
    }
});

module.exports = VoteDown;
