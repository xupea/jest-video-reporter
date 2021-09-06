"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var videoRecorder_1 = __importDefault(require("./videoRecorder"));
var CustomVideoReporter = /** @class */ (function () {
    function CustomVideoReporter(globalConfig, options) {
        this.recorder = new videoRecorder_1.default(options.fileName, options.input);
    }
    CustomVideoReporter.prototype.onRunStart = function (results, options) {
        this.recorder.start();
    };
    CustomVideoReporter.prototype.onRunComplete = function (contexts, results) {
        this.recorder.stop();
    };
    CustomVideoReporter.prototype.getLastError = function () { };
    return CustomVideoReporter;
}());
module.exports = CustomVideoReporter;
