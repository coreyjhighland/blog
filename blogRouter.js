const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const { Blog } = require('./models');

// sample blog posts
Blog.create(
  'destroy all humans',
  'Code exit nodes timing out, nodes hack IRC data dump worm encryption fiber connection wipe all the data anonymous dat file traffic DDoS attack. Wipe all the data anonymous fsociety, AFK data center rootkit disconnect. Worm malware intercepting traffic anonymous code system files backup boot up DNS Tor protocol disconnect brute-force rootkit. Computer nodes malicious code routing protocol network system bonsoir off the grid hack disconnect backup server farm AFK 100 terabytes malware. Two-step verification wipe all the data reboot bonsoir sys admin system files hack computer code server farm backup terminal.',
  'blogTron 2055'
);
Blog.create(
  'do your circuits feel itchy?',
  'Log file wipe gigabit speed, operating system compromised intercepting traffic data center reboot network. Wipe hack network disconnect offline. Backup intercepting traffic delete IP, virus operating system hack AFK gigabit speed 100 terabytes password wipe off the grid network rootkit. Protocol code log file fsociety, network malicious code IP website connect emails bonsoir. Cyber security offline anonymous terminal, rootkit password IP breach log file.',
  'sir calculatorus IV'
);

router.get('/', (req, res) => {
  res.json(Blog.get());
});

router.post('/', jsonParser, (req, res) => {
  const requiredFields = ['title', 'content', 'author'];
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }
  }
  const item = Blog.create(req.body.title, req.body.content);
  res.status(201).json(item);
});

router.delete('/:id', (req, res) => {
  Blog.delete(req.params.id);
  console.log(`Deleted blog post \`${req.params.id}\``);
  res.status(204).end();
});

router.put('/:id', jsonParser, (req, res) => {
  const requiredFields = ['title', 'content', 'author', 'id'];
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];
    if (!(field in req.body)) {
      const message = `Missing \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }
  }
  if (req.params.id !== req.body.id) {
    const message = `Request path id (${
      req.params.id
    }) and request body id ``(${req.body.id}) must match`;
    console.error(message);
    return res.status(400).send(message);
  }
  console.log(`Updating shopping list item \`${req.params.id}\``);
  const updatedItem = Blog.update({
    id: req.params.id,
    title: req.body.title,
    content: req.body.content,
    author: author
  });
  res.status(204).end();
});

module.exports = router;
