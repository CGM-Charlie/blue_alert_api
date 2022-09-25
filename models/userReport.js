const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO: UPDATE MAP POINT MODEL

const userReportSchema = new Schema(
    {
        reportKey: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        incidentKind: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        latitude: {
            type: String,
            required: true
        },
        longitude: {
            type: String,
            required: true
        },
        timestamp: {
            type: String,
            required: true
        },
        isVictim: {
            type: Boolean,
            required: true
        },
        isReportedToPolice: {
            type: Boolean,
            required: true
        },
        policeReport: {
            type: String,
            required: false
        }
    }
);

module.exports = mongoose.model('UserReport', userReportSchema);
