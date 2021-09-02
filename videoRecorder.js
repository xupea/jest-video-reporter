const { spawn } = require("child_process");
const path = require('path');

class VideoRecorder {
  constructor(fileName, input) {
    const filePath = path.resolve(process.cwd(), fileName);
    this.videoPath = filePath;
    this.input = input;
  }

  start() {
    this.ffmpeg = spawn("ffmpeg", [
      "-f",
      "avfoundation",
      "-i",
      this.input,
      this.videoPath,
    ]);
  }

  stop() {
    if (this.ffmpeg) {
      try {
        this.ffmpeg.kill("SIGINT");
      } catch(e) {
        //ignore
      }
    }
  }
}

module.exports = VideoRecorder;
