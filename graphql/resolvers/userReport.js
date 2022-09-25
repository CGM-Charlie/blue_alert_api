const moment = require('moment');
const UserReport = require('../../models/userReport');
const { transformUserReport } = require('./resolverHelpers');

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

module.exports = {
    userReports: async () => {
        try {
            const userReports = await UserReport.find();
            return userReports.map(userReport => {
                return transformUserReport(userReport);
            });

        } catch (err) {
            throw err;
        }
    },

    userReportByReportKey: async args => {
        try {
            const userReport = await UserReport.findOne({reportKey: args.reportKey});
            return transformUserReport(userReport);

        } catch (err) {
            throw err;
        }
    },
    
    createUserReport: async args => {
        const userReport = new UserReport({
            reportKey: args.userReportInput.name[0] + args.userReportInput.genre[0] + getRndInteger(100, 999).toString(), // TODO: CREAR LLAVE DE REPORTE
            name: args.userReportInput.name,
            genre: args.userReportInput.genre,
            phone: args.userReportInput.phone,
            incidentKind: args.userReportInput.incidentKind,
            description: args.userReportInput.description,
            latitude: args.userReportInput.latitude,
            longitude: args.userReportInput.longitude,
            timestamp: moment().toISOString(),
            isVictim: args.userReportInput.isVictim,
            isReportedToPolice: args.userReportInput.isReportedToPolice,
            policeReport: args.userReportInput.policeReport
        });
        let createdUserReport;

        try {
            const result = await userReport.save();
            createdUserReport = transformUserReport(result);
            return createdUserReport;

        } catch (err) {
            throw err;
        }
    },

    linkPoliceReportToUserReport: async args => {
        const filter = { reportKey: args.reportKey }
        const update = { isReportedToPolice: true, policeReport: args.policeReportId }

        await UserReport.findOneAndUpdate(filter, update);

        const result = await UserReport.findOne(filter);
        return transformUserReport(result);

    }
};
