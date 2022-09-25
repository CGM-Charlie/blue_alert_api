const moment = require('moment');
const UserReport = require('../../models/userReport');
const PoliceReport = require('../../models/policeReport');
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
    
    createUserReport: async args => {
        console.log(args)

        const userReport = new UserReport({
            reportKey: args.userReportInput.name[0] + args.userReportInput.genre[0] + getRndInteger(100, 999).toString(), // TODO: CREAR LLAVE DE REPORTE
            name: args.userReportInput.name,
            genre: args.userReportInput.genre,
            phone: args.userReportInput.phone,
            incidentKind: args.userReportInput.incidentKind,
            description: args.userReportInput.description,
            mapPoint: "CREAR EL MODELO DEL MAPPOINT",
            timestamp: moment().format('DD/MM/YYYY'),
            isVictim: args.userReportInput.isVictim,
            isReportedToPolice: args.userReportInput.isReportedToPolice,
            policeReportId: args.userReportInput.policeReportId
        });
        let createdUserReport;

        try {
            const result = await userReport.save();
            createdUserReport = transformUserReport(result);

            return createdUserReport;


        } catch (err) {
            throw err;
        }
    }
};
