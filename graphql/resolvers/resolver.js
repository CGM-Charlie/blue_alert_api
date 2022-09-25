const userReportResolver = require('./userReport.js');

const rootResolver = {
    ...userReportResolver
}

module.exports = rootResolver;
