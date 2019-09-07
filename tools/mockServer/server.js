const express = require('express');
const cors = require('cors');
const constants = require('./constants');
const utils = require('./utils');
const users = require('./data/users');
const follows = require('./data/follows');
const streams = require('./data/streams');
const games = require('./data/games');

const app = express();

app.use(cors());

app.use('/static', express.static('static'));

app.get('/oauth2/authorize', (req, res) => {
  const { redirect_uri: redirectUri } = req.query;
  res.redirect(`${redirectUri}#access_token=faketoken`);
});

app.get('/helix/users', (req, res) => {
  const ids = utils.processQueryParam(req.query.id, constants.DEFAULT_USER_ID);
  res.status(200).send({
    data: users.filter((user) => ids.includes(user.id)),
  });
});

app.get('/helix/users/follows', (req, res) => {
  const {
    after,
    first,
    from_id: fromId,
    to_id: toId,
  } = req.query;
  const chunkOffset = Number(after) || 0;
  const length = Number(first) || constants.DEFAULT_FIRST_VALUE;
  const offset = chunkOffset * length;
  const hasMoreData = offset + length < follows.length;
  const result = follows.filter((item) => item.from_id === fromId || item.to_id === toId);

  res.send({
    data: result.slice(offset, offset + length),
    total: result.length,
    pagination: { cursor: hasMoreData ? { cursor: chunkOffset + 1 } : undefined },
  });
});

app.get('/helix/streams', (req, res) => {
  const userIds = utils.processQueryParam(req.query.user_id);
  res.send({
    data: streams.filter((stream) => userIds.includes(stream.user_id)),
    pagination: 1,
  });
});

app.get('/helix/games', (req, res) => {
  const gameIds = utils.processQueryParam(req.query.id);
  res.send({ data: games.filter((game) => gameIds.includes(game.id)) });
});

app.listen(4000);
