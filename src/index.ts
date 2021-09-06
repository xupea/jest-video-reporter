import {
  AggregatedResult,
  Context,
  Reporter,
  ReporterOnStartOptions,
} from "@jest/reporters";

import VideoRecorder from "./videoRecorder";

class CustomVideoReporter implements Reporter {
  recorder: VideoRecorder;

  constructor(globalConfig: any, options: any) {
    this.recorder = new VideoRecorder(options.fileName, options.input);
  }

  onRunStart(results: AggregatedResult, options: ReporterOnStartOptions) {
    this.recorder.start();
  }

  onRunComplete(contexts: Set<Context>, results: AggregatedResult) {
    this.recorder.stop();
  }

  getLastError() {}
}

module.exports = CustomVideoReporter;
