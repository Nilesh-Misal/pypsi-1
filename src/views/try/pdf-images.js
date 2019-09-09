
new Converter({
    files:    files,
    output:   'output/',
    invert:   true,
    callback: function(data) {
        console.log(data.failed, data.success, data.files, data.time);
    }
}).run();