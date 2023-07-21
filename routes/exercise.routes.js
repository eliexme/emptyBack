const router = require("express").Router();
const Exercise = require("../models/Exercise.model");

router.get("/", async(req, res, next) => {
    const allExercises = await Exercise.find()
    res.status(200).json(allExercises);
});

router.post("/add", async(req, res, next) => {
    const data = req.body
    const newExercise = await Exercise.create(data)
    res.status(201).json({message: 'exercise successfully created'})
  });

module.exports = router;
