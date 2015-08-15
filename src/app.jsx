var React = require('react');

var playlist = [{
    url: '1',
    votes: 0
}, {
    url: '2',
    votes: 3
}, {
    url: '3',
    votes: -1
},];


var Card = React.createClass({
    render() {
        return (
            <div>
                <h1>{this.props.url}</h1>
                <h3>{this.props.votes}</h3>
                <button onClick={this.props.onClick}>Play</button>
            </div>
        );
    }
});

var Playlist = React.createClass({

    play: function (item) {
        alert(item.url);
    },

    render() {
        var that = this;

        return (
            <div>
                {this.props.playlist.map(function (item) {
                    return (
                        <Card onClick={that.play.bind(null, item)} url={item.url} votes={item.votes}></Card>
                    )
                })}
            </div>
        );
    }
})

React.render(<Playlist playlist={playlist}/>, document.getElementById('playlist'));
