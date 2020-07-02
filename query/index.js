const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get('/posts', (req, res) => {
  res.send(posts);
});

const handleEvent = ({ data, type }) => {
  if (type === 'PostCreated') {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { id, content, status, postId } = data;
    posts[postId].comments.push({ id, content, status });
  }

  if (type === 'CommentUpdated') {
    const { id, content, status, postId } = data;
    const post = posts[postId];
    const comment = post.comments.find((c) => c.id === id);
    comment.content = content;
    comment.status = status;
  }
};

app.post('/events', (req, res) => {
  handleEvent(req.body);

  console.log(posts);

  res.send({});
});

app.listen(4002, async () => {
  console.log('Listening on 4002');
  const response = await axios.get('http://event-bus-srv:4005/events');

  for (const event of response.data) {
    console.log('processing event ', event.type);
    handleEvent(event);
  }
});
