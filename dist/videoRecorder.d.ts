export default class VideoRecorder {
    videoPath: string;
    input: string;
    ffmpeg: any;
    constructor(fileName: string, input: string);
    start(): void;
    stop(): void;
}
