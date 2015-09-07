var React = require('react');
var AppActions = require('../../actions/actions');

var VoteUp = React.createClass({
    handler: function (){
        AppActions.voteUp(this.props.id)
    },
    render: function (){
        return (
            <div className="btn-vote btn-voteup" onClick={this.handler}>
                <i className="fa fa-plus-square"></i>
            </div>
        );
    }
});

module.exports = VoteUp;
