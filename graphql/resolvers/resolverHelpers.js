const transformUserReport = userReport => {
    return {
        ...userReport._doc,
        _id: userReport.id
    };
}

exports.transformUserReport = transformUserReport;

