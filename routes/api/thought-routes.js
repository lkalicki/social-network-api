const router = require('express').Router();

const {
  getAllThoughts, 
  getThoughtsById, 
  createThoughts, 
  updateThoughts,
  deleteThoughts,
  addReaction,
  deleteReaction

} = require('../../controllers/thoughts-controller');

//<GET> /api/thoughts/
router.route('/')
  .get(getAllThoughts)

//<POST> /api/thoughts/:userID
router.route('/:userId')
  .post(createThoughts);  

// <GET, PUT, DELETE> /api/thoughts/:thoughtid
router.route('/:id')
  .get(getThoughtsById)
  .put(updateThoughts)
  .delete(deleteThoughts);

// <POST> /api/thoughts/:thoughtID/reactions
router.route('/:thoughtId/reactions')
  .post(addReaction);

// <DELETE> /api/thoughts/:thoughtID/reactionID
router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;
