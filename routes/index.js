var express = require('express');
var router = express.Router();
const Attendance = require('../models/index');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const attendances = await Attendance.find();
  res.status(200).json({ attendances });
});

router.post('/attandance', async (req, res) => {
    const data = req.body;
    console.log('data', data)
    const newAttendance = await Attendance.create(data);
    if(!newAttendance){
      res.status(400).json({ message: 'Error creating attendance' })
    }else{
      res.status(200).json({ message: 'Attendance created successfully', newAttendance })
    }

});

module.exports = router;
