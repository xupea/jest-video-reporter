const CustomVideoReporter = require(".");

const reporter = new CustomVideoReporter();

reporter.onRunStart();

setTimeout(() => reporter.onRunComplete(), 5000)