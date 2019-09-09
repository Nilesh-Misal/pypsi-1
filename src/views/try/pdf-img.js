
var pdftoimage = require('pdftoimage');
var file = 'C:/Users/admin/Desktop/demo.docx';
 
// Returns a Promise
pdftoimage(file, {
  format: 'png',  // png, jpeg, tiff or svg, defaults to png
  prefix: 'img',  // prefix for each image except svg, defaults to input filename
  outdir: 'images'   // path to output directory, defaults to current directory
})
.then(function(){
  console.log('Conversion done');
})
.catch(function(err){
  console.log(err);
});