var ffmpeg = require('ffmpeg');

try {
	var process = new ffmpeg('C:/Users/rishi/Downloads/video (10).webm');
	process.then(function (video) {
		// Callback mode
		video.fnExtractSoundToMP3('C:/Users/rishi/OneDrive/Documents/pypsi/newoypsi/generator-ak/audio.mp3', function (error, file) {
			if (!error)
				console.log('Audio file: ' + file);
		});
	}, function (err) {
		console.log('Error: ' + err);
	});
} catch (e) {
	console.log(e.code);
	console.log(e.msg);
}



var command = new Ffmpeg({
    source: $rootScope.project.path + 'C:/Users/rishi/Downloads/video (10).webm'
});
command.setFfmpegPath(ffmpegPath);
console.log($rootScope.project.settings.music.path !== '');
if ($rootScope.project.settings.music.path !== '') {
    command.addInput($rootScope.project.path + 'C:/Users/rishi/OneDrive/Documents/pypsi/newoypsi/generator-ak/audio.mp3');
    command.addOptions(['-c:v copy', '-c:a copy']);
    if ($rootScope.project.settings.music.duration > sceneService.getTotalDuration()) {
        command.addOptions(['-shortest']);
    }
    command.on('error', function (err) {
        console.log(err);
    }).on('end', function () {
        console.log("win");
        //filestorageService.rmFolder($rootScope.project.path + '/frames');
    }).save($rootScope.project.path + 'C:/Users/rishi/Downloads/video (10).webm');
} else {
    filestorageService.rmFolder($rootScope.project.path + '/frames');
}