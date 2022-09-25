const { buildSchema } = require('graphql');

// CHEAT SHEET
// ! -> NOT NULL -> REQUIRED

// TODO: CHECK THE MODEL FOR THE GMAP COORDINATE

module.exports = buildSchema(`
    type UserReport {
        _id: ID!
        reportKey: String!
        name: String!
        genre: String!
        phone: String!
        incidentKind: String!
        description: String
        timestamp: String!
        latitude: String!
        longitude: String!
        isVictim: Boolean!
        isReportedToPolice: Boolean
        policeReport: String
    }

    input UserReportInput {
        name: String!
        genre: String!
        phone: String!
        incidentKind: String!
        description: String
        latitude: String!
        longitude: String!
        isVictim: Boolean!
        isReportedToPolice: Boolean!
        policeReport: String
    }

    type RootQuery {
        userReports: [UserReport!]!
        userReportByReportKey(reportKey: String!): UserReport
    }

    type RootMutation {
        createUserReport(userReportInput: UserReportInput): UserReport
        linkPoliceReportToUserReport(reportKey: String!, policeReportId: String!): UserReport
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }

`);
