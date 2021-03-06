const router = require("express").Router();
const {Workout} = require("../models");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
router.put("/api/workouts/:id",(req,res)=>{
  Workout.updateOne({_id : req.params.id},{
    $push:{
      exercises: req.body
    }
  }).then(dbWorkout => {
    res.json(dbWorkout)
  })

})
 

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


module.exports = router;