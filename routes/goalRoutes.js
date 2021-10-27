/* eslint-disable no-unused-vars */
const { Router } = require('express');
const { getChartInfo } = require('../controllers/chartController');
const {
  getSingleGoal,
  getAllGoals,
  createGoal,
  assignGoal,
  updateSingleGoalById,
  getArchivedGoals,
  deleteGoalById,
  likeGoal,
  getGoalLikes,
  checkUserLike,
  removeAssigned,
  disLikeGoal,
  getGoalDisLikes,
  checkUserDisLikes,
  sortGoalByType,
  getGoalReaction,
  setGoalReaction,
} = require('../controllers/goalController');
const { statusTimerReport } = require('../controllers/statusTimerReport');
const {
  updateSingleGoalTargetById,
  createGoalTarget,
  getGoalTargets,
  averageGoalProgress,
  deleteTargets,
  // getSingleGoalProgress,
  getGoalProgress,
  updateTarget,
} = require('../controllers/targetController');
const auth = require('../middlewares/auth');
const restrictToOwner = require('../middlewares/restrict');
const statusCheck = require('../middlewares/statusTimerCheck');

const router = Router();

// auth specific routes
router.post('/', auth, restrictToOwner, createGoal);
router.put('/update/:id', auth, restrictToOwner, updateSingleGoalById);
router.delete('/delete', auth, restrictToOwner, deleteGoalById);
router.post('/assign', auth, restrictToOwner, assignGoal);
router.delete('/assigned', auth, restrictToOwner, removeAssigned);

router.get('/', statusCheck, getAllGoals);
router.get('/chart', statusCheck, getChartInfo);
router.get('/statusreport', statusCheck, statusTimerReport);

router.get('/like', likeGoal);
router.get('/goallikes', getGoalLikes);
router.get('/userlike', checkUserLike);
router.get('/single', getSingleGoal);
router.get('/dislike', disLikeGoal);
router.get('/goaldislikes', getGoalDisLikes);
router.get('/userdislike', checkUserDisLikes);
router.get('/catalog', sortGoalByType);
router.post('/target', createGoalTarget);
router.get('/target', getGoalTargets);
router.delete('/target/delete', deleteTargets);
router.get('/average-goal-progress', averageGoalProgress);
// router.get('/individual-goal-progress', individualGoalProgress);
// router.get('/goalprogress', getGoalProgress);
router.get('/goalReaction', getGoalReaction).put('/goalReaction', setGoalReaction);
router.get('/single-goal-progress', getGoalProgress);
// router.put('/target/update/:id', updateSingleGoalTargetById);
router.get('/goal-progress', getGoalProgress);

router.put('/target/edit', updateTarget);

module.exports = router;
