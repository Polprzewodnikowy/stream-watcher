const express = require('express');
const cors = require('cors');
const { DEFAULT_TOKEN, DEFAULT_USER_ID, DEFAULT_FIRST_VALUE } = require('./constants');
const { processArrayParameter } = require('./utils');
const users = require('./data/users');
const follows = require('./data/follows');
const streams = require('./data/streams');
const games = require('./data/games');
const videos = require('./data/videos');

const app = express();

app.use(cors());

app.use('/static', express.static('static'));

app.get('/oauth2/authorize', (req, res) => {
  const { redirect_uri: redirectUri } = req.query;

  res.redirect(`${redirectUri}#access_token=${DEFAULT_TOKEN}`);
});

app.get('/helix/users', (req, res) => {
  const { id } = req.query;
  const ids = processArrayParameter(id, DEFAULT_USER_ID);

  const data = users.filter((user) => ids.includes(user.id));

  res.send({ data });
});

app.get('/helix/users/follows', (req, res) => {
  const {
    after,
    first,
    from_id: fromId,
    to_id: toId,
  } = req.query;

  const chunkOffset = Number(after) || 0;
  const length = Number(first) || DEFAULT_FIRST_VALUE;
  const offset = chunkOffset * length;
  const filteredData = follows.filter((item) => item.from_id === fromId || item.to_id === toId);

  const data = filteredData.slice(offset, offset + length);
  const total = filteredData.length;
  const pagination = { cursor: data.length > 0 ? chunkOffset + 1 : undefined };

  res.send({ data, total, pagination });
});

app.get('/helix/streams', (req, res) => {
  const {
    after,
    first,
    user_id: userId,
  } = req.query;
  const userIds = processArrayParameter(userId);

  const chunkOffset = Number(after) || 0;
  const length = Number(first) || DEFAULT_FIRST_VALUE;
  const offset = chunkOffset * length;
  const filteredStreams = streams.filter((stream) => userIds.includes(stream.user_id) || !userId);

  const data = filteredStreams.slice(offset, offset + length);
  const pagination = { cursor: data.length > 0 ? chunkOffset + 1 : undefined };

  res.send({ data, pagination });
});

app.get('/helix/games', (req, res) => {
  const { id } = req.query;
  const ids = processArrayParameter(id);

  const data = games.filter((game) => ids.includes(game.id));

  res.send({ data });
});

app.get('/helix/videos', (req, res) => {
  const {
    after,
    first,
    user_id: userId,
  } = req.query;

  const chunkOffset = Number(after) || 0;
  const length = Number(first) || DEFAULT_FIRST_VALUE;
  const offset = chunkOffset * length;
  const filteredVideos = videos.filter((video) => userId === video.user_id);

  const data = filteredVideos.slice(offset, offset + length);
  const pagination = { cursor: data.length > 0 ? chunkOffset + 1 : undefined };

  res.send({ data, pagination });
});

app.listen(4000);
