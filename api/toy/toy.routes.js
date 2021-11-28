const express = require('express');
const {
  requireAuth,
  requireAdmin,
} = require('../../middlewares/requireAuth.middleware');
const { log } = require('../../middlewares/logger.middleware');
const {
  getToys,
  getToyById,
  addToy,
  updateToy,
  removeToy,
  addReview,
} = require('./toy.controller');
const router = express.Router();

router.get('/', log, getToys);
router.get('/:id', getToyById);
router.post('/', requireAuth, requireAdmin, addToy);
router.put('/', requireAuth, updateToy);
router.delete('/:id', requireAuth, requireAdmin, removeToy);

module.exports = router;
