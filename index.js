// Entry point of the application

nw.Window.open('./src/views/video-project3.0.html', {}, function(win) {
	console.log('Started')
	win.maximize();
	win.showDevTools();
});


