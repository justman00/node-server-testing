const express = require('express');
const Hobbits = require('./hobbits-model');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    res.json(await Hobbits.find());
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newHobbit = await Hobbits.create(req.body);

    res.status(201).json(newHobbit);
  } catch (error) {
    next(err);
  }
});

module.exports = router;
