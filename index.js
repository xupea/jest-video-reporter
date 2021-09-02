const VideoRecorder = require('./videoRecorder')

class CustomVideoReporter {
    constructor(globalConfig, options) {
        this.recorder = new VideoRecorder(options.fileName, options.input);
    }

    onRunStart(results, options) {
        this.recorder.start();
    }

    onTestStart(test) {
    }

    onTestResult(test, testResults, aggregatedResult) {
    }

    onRunComplete(contexts, results) {
        this.recorder.stop();
    }
}

module.exports = CustomVideoReporter;