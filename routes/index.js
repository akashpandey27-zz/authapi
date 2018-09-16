const express = require('express');
const auth = require('../modules/auth');

const router = express.Router();


router.post('/auth/create', async (req, res, next) => {
  try {
    const result = await auth.create(req.body);
    res.send(result);
  } catch (e) {
    next(e);
  }
});

router.post('/auth/login', async (req, res, next) => {
  try {
    const result = await auth.login(req.body);
    res.send(result);
  } catch (e) {
    res.statusCode = 400;
    res.send({
      error: e,
    });
  }
});
router.post('/auth/reset', async (req, res, next) => {
  try {
    const result = await auth.reset(req.query.key, req.body.password);
    res.send(result);
  } catch (e) {
    res.statusCode = 400;
    res.send({
      error: e,
    });
  }
});
module.exports = router;
