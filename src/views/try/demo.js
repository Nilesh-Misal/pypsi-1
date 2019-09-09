var gtts = require('node-gtts')('en');
var path = require('path');
var filepath = 'C:/Users/admin/Documents/pypsi-stuff/Doremon/saurabh.mp3';
 
gtts.save(filepath, ' Shizuka is lovely little girl who likes to play piano, reads books and cooks too. Nobita has a soft corner for Shizuka Jean has a little sister Jaco who wants to become a cartoonist. Doraemon has sister robot Doramee who is shown in few episodes Sir - teacher at the school ', function() {
  console.log('save done');
})