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
        description: String
        mapPoint: String!
        timestamp: String!
        isVictim: Boolean!
        isReportedToPolice: Boolean
        policeReport: PoliceReport
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
        incidentKind: String!
        description: String
        mapPoint: String!
        timestamp: String!
        isVictim: Boolean!
        isReportedToPolice: Boolean!
        policeReportId: ID
    }

    input PoliceReportInput {
        reportKey: String!
    }

    type RootQuery {
        userReports: [UserReport!]!
        userReportByReportKey(reportKey: String!): UserReport
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
