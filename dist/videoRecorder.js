"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var path_1 = __importDefault(require("path"));
var isMac = process.platform === "darwin";
var VideoRecorder = /** @class */ (function () {
    function VideoRecorder(fileName, input) {
        var filePath = path_1.default.resolve(process.cwd(), fileName);
        this.videoPath = filePath;
        this.input = input;
    }
    VideoRecorder.prototype.start = function () {
        var winArgs = [
            "-f",
            "gdigrab",
            "-framerate",
            "30",
            "-i",
            "desktop",
            "-y",
            this.videoPath,
        ];
        var macArgs = [
            "-f",
            "avfoundation",
            "-i",
            this.input,
            "-y",
            this.videoPath,
        ];
        this.ffmpeg = (0, child_process_1.spawn)("ffmpeg", isMac ? macArgs : winArgs);
    };
    VideoRecorder.prototype.stop = function () {
        if (this.ffmpeg) {
            try {
                this.ffmpeg.kill("SIGINT");
            }
            catch (e) {
                //ignore
            }
        }
    };
    return VideoRecorder;
}());
exports.default = VideoRecorder;
