var React = require('react');
var AppActions = require('../../actions/app-actions');

var VoteUp = React.createClass({
    handler: function(){
        AppActions.voteUp(this.props.id)
    },
    render:function(){
        return <button onClick={this.handler}>+</button>
    }
});

module.exports = VoteUp;
