import express from 'express';
import React from 'react'
import ReactDOMServer from 'react-dom/server'
// import Svgcircle from '../src/Svgcircle';
//or
import Svgcircle from 'svg-circle';

const PORT = process.env.PORT || 5000;

const app = express()

app.get(`/circle`, (req, res) => {
    // console.log(req.query.bodyColor)
    res.setHeader('content-type', 'image/svg+xml')
    res.send(ReactDOMServer.renderToStaticMarkup(
        <Svgcircle bodyColor={req.query.bodyColor}/>
    ))
})

app.listen(PORT)