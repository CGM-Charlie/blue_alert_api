const { buildSchema } = require('graphql');

// CHEAT SHEET
// ! -> NOT NULL -> REQUIRED

// TODO: CHECK THE MODEL FOR THE GMAP COORDINATE
// TODO: CHECK THE MODEL FOR THE POLICE REPORT

module.exports = buildSchema(`
    type UserReport {
        _id: ID!
        reportKey: String!
        name: String!
        genre: String!
        phone: String!
        incidentKind: String!
        mapPoint: String!
        timestamp: String!
        isVictim: Boolean!
        isReportedToPolice: Boolean
        policeReport: String
    }

    type PoliceReport {
        _id: ID!
        reportKey: String
        createdAt: String
    }

    input UserReportInput {
        name: String!
        genre: String!
        phone: String!
        indicentKind: String!
        mapPoint: String!
        timestamp: String!
        isVictim: Boolean!
    }

    input PoliceReportInput {
        reportKey: String!
    }

    type RootQuery {
        userReports: [UserReport!]!
        policeReports: [PoliceReport!]!
    }

    type RootMutation {
        createUserReport(userReportInput: UserReportInput): UserReport
        createPoliceReport(policeReportInput: PoliceReportInput): PoliceReport
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }

`);
