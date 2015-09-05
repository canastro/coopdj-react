/** @jsx React.DOM */
var React = require('react');

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

var App = require('./components/app');
var Index = require('./components/index/index');
var Host = require('./components/host/host');
var Client = require('./components/client/client');


// Here we put our React instance to the global scope. Make sure you do not put it
// into production and make sure that you close and open your console if the
// DEV-TOOLS does not display
window.React = React;

var routes = (
    <Route handler={App}>
        <Route name="index" path="/" handler={Index}/>
        <Route name="client" path="client" handler={Client}/>
        <Route name="host" path="host" handler={Host}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});
