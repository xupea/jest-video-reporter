import { spawn } from "child_process";
import path from "path";

const isMac = process.platform === "darwin";

export default class VideoRecorder {
  videoPath: string;
  input: string;
  ffmpeg: any;

  constructor(fileName: string, input: string) {
    const filePath = path.resolve(process.cwd(), fileName);
    this.videoPath = filePath;
    this.input = input;
  }

  start() {
    const winArgs = [
      "-f",
      "gdigrab",
      "-framerate",
      "30",
      "-i",
      "desktop",
      "-y",
      this.videoPath,
    ];
    const macArgs = [
      "-f",
      "avfoundation",
      "-i",
      this.input,
      "-y",
      this.videoPath,
    ];

    this.ffmpeg = spawn("ffmpeg", isMac ? macArgs : winArgs);
  }

  stop() {
    if (this.ffmpeg) {
      try {
        this.ffmpeg.kill("SIGINT");
      } catch (e) {
        //ignore
      }
    }
  }
}
