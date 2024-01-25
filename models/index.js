const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
   firstName: {
       type: String,
       required: true
   },
    lastName: {
         type: String,
         required: true
    },
    email: {
         type: String,
         required: true
    },
    phone: {
         type: String,
         required: true
    },
    collegeName: {
            type: String,
            required: true
    },
    gender: {
         type: String,
         required: true
    },

},
{
    timestamps: true
});

module.exports = mongoose.model('Attendance', attendanceSchema);