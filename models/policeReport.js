const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const policeReportSchema = new Schema(
    {
        reportKey: {
            type: String,
            isRequired: true
        },
        createdAt: {
            type: String,
            isRequired: true
        }
    }
);

module.exports = mongoose.model('PoliceReport', policeReportSchema);
