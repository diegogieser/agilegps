/* Copyright (c) 2016 Grant Miner */
'use strict';
let m = require('mithril');

export function controller(args, extras) {
    // this.user = m.prop();
    // this.orgid = m.route.param('orgid');
    // let id = m.route.param('id');
    // if (!id) id = '';
    //
    // m.request({
    //     url: '/api/organizations/' + this.orgid + '/users/' + id,
    //     config: identity.withAuth
    // })
    // .then(this.user)
};

export function view(ctrl) {
    return m('div.business-table', [
        m('.btn', 'User'),
        m('pre', JSON.stringify(ctrl.user(), undefined, 4))
    ])
};
