const { spawn } = require("child_process");
const path = require('path');

class VideoRecorder {
  constructor(fileName) {
    const filePath = path.resolve(process.cwd(), fileName);
    this.videoPath = filePath;
  }

  start() {
    this.ffmpeg = spawn("ffmpeg", [
      "-f",
      "avfoundation",
      "-i",
      "1:0",
      this.videoPath,
    ]);
  }

  stop() {
    if (this.ffmpeg) {
      this.ffmpeg.kill("SIGINT");
    }
  }
}

module.exports = VideoRecorder;
