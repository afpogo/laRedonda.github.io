'use strict';
const router = require('express').Router();

router.get('/meta_wa_callbackurl',(req, res) => {
    try {
        console.log('GET: Someone is pinging me!');
        let mode = req.query['hub.mode'];
        let token = req.query['hub.verify_token'];
        let challenge = req.query['hub.challenge'];
        if(mode && token && mode === 'subscribe' && process.env.Meta_WA_Verify === token) {
            return res.status(200).send(challenge);
        } else {
            return res.status(143).send('');
        }
    } catch (error) {
        console.error(error);
        return res.sendStatus(500);
    }
});