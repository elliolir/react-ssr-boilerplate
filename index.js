import restify from "restify";
import fetch from "isomorphic-fetch";
import React from "react";
import ReactDOMServer from "react-dom/server";


process.title = "ssr-server";
global.fetch = fetch;

let server = restify.createServer();

server.listen(1345, function() {
    console.log('%s listening at %s', server.name, server.url);
});

server.get('/', (req, res) => {
    res.sendRaw(ReactDOMServer.renderToString(<h1>Hello, two plus two is {2 + 2}</h1>));
});