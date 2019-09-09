var ffmpeg = require('ffmpeg');



try {
	var process = new ffmpeg('C:/Users/rishi/OneDrive/Desktop/Doremon/video.mp4');
	process.then(function (video) {
		// Callback mode
		video.fnExtractSoundToMP3('C:/Users/rishi/OneDrive/Desktop/Doremon/your_audio_file.mp3', function (error, file) {
            
			if (!error){
                console.log('Audio file: ' + file);
            }else{
                console.log('Audio file: ' + error);
            }
		});
	}, function (err) {
		console.log('Error: ' + err);
	});
} catch (e) {
	console.log(e.code);
	console.log(e.msg);
}