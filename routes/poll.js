const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Vote = require('../models/Vote');

const Pusher = require('pusher');

var pusher = new Pusher({
  appId: '474013',
  key: '6717fa8321b77bc7da0c',
  secret: 'c5e7628b5b4c022af46b',
  cluster: 'us2',
  encrypted: true
});

router.get('/', (req, res) => {
  res.send('POLL');
  // Vote.find().then(votes => res.json({ success: true, votes: votes }));
});

router.post('/', (req, res) => {
  pusher.trigger('os-poll', 'os-vote', {
    points: 1,
    os: req.body.os
  // const newVote = {
  //   os: req.body.os,
  //   points: 1
});

  // new Vote(newVote).save().then(vote => {
  //   pusher.trigger('os-poll', 'os-vote', {
  //     points: parseInt(vote.points),
  //     os: vote.os
  //   });

    return res.json({ success: true, message: 'Thank you for voting' });
  });


module.exports = router;
