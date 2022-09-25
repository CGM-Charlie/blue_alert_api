const PoliceReport = require("../../models/policeReport");

const policeReport = async policeReportId => {
    try {
        const policeReport = await PoliceReport.findById(policeReportId);
        return transformPoliceReport(policeReport);

    } catch (err) {
        throw err;
    }
}

const transformUserReport = userReport => {
    return {
        ...userReport._doc,
        _id: userReport.id,
        policeReport: policeReport.bind(this, userReport._doc.policeReport)
    };
}

const transformPoliceReport = policeReport => {
    return {
        ...policeReport._doc,
        _id: policeReport.id
    };
}

exports.policeReport = policeReport;
exports.transformUserReport = transformUserReport;
exports.transformPoliceReport = transformPoliceReport;
