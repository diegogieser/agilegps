/* Copyright (c) 2016 Grant Miner */
'use strict';
// window.alert('hi');
// require('es6-object-assign').polyfill();
// require('setimmediate');
// require('bootstrap/less/bootstrap.less');
require('pikaday2/css/pikaday.css');
require('./style.css');
// require('isomorphic-fetch');
require('./markers/OrgMarkers');
require('./appSocketState');

// require('nprogress/nprogress.css');

// window.Promise = require('bluebird');
// window.Promise.config({
//     cancellation: true, // animation relies on promise cancellation.
//     longStackTraces: true,
//     warnings: false
// });


const m = require('mithril');

m.deferred.onerror = function(e) {
    Promise.reject(e);
}
m.mount(document.getElementById('root'), require('./root'));

const appState = require('./appState');



// if ('scrollRestoration' in history) {
// 	// Back off, browser, I got this...
// 	// history.scrollRestoration = 'manual';
// }
