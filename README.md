A jest video recorder based on ffmpeg.

## Installation
```shell
yarn add jest-video-reporter --dev
```

## Usage

Configure Jest to process the test results by adding the following entry to the Jest config (jest.config.json):

```JSON
"reporters": [
	"default",
	["jest-video-reporter", {
		"fileName": "result.mkv"
	}]
]
```

As you run Jest from within the terminal, a video file called _result.mkv_ will be created within your root folder containing information about your tests.