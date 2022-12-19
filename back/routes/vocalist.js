const express = require('express');
const { getUserInfo } = require('../auth');

const router = express.Router();

router.use((req, res, next) => {
  next();
});

router.get('/', (req, res) => {
  const { name, voca } = getUserInfo(req, res);
  res.send({ name, voca });
});

router.post('/', () => {});

// DELETE /:id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const data = getUserInfo(req, res);

  data.voca = data.voca.filter(item => item.vocaId !== id);
  res.send(data);
});

module.exports = router;
