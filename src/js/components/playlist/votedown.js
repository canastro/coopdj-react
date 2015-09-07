var React = require('react');
var AppActions = require('../../actions/actions');

var VoteDown = React.createClass({
    handler: function(){
        AppActions.voteDown(this.props.id)
    },
    render:function(){
        return (
            <div className="btn-vote btn-votedown" onClick={this.handler}>
                <i className="fa fa-minus-square"></i>
            </div>
        );
    }
});

module.exports = VoteDown;
