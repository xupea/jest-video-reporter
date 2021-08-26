const VideoRecorder = require('./videoRecorder')

class CustomVideoReporter {
    constructor(globalConfig, options) {
        // start?
        console.log('constructor');
        this.recorder = new VideoRecorder(options.fileName);
    }

    onRunStart(results, options) {
        console.log('onRunStart');
        this.recorder.start();
    }

    onTestStart(test) {
        console.log('onTestStart');
    }

    onTestResult(test, testResults, aggregatedResult) {
        console.log('onTestResult');
    }

    onRunComplete(contexts, results) {
        // 
        console.log('onRunComplete');
        this.recorder.stop();
    }
}

module.exports = CustomVideoReporter;